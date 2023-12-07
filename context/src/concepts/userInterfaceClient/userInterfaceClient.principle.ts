/*<$
For the graph programming framework Stratimux and the User Interface Client Concept,
generate a principle that will detect changes on the client state based on the currently loaded page bound selectors, and dispatch the associated action if changed.
This will set up and bind the selectors to state to determine which atomic operation that should be dispatched to update the UI.
$>*/
/*<#*/
import {
  Action,
  Concepts,
  KeyedSelector,
  PrincipleFunction,
  UnifiedSubject,
  axiumKick,
  axiumRegisterStagePlanner,
  axiumSelectOpen,
  getAxiumState,
  getUnifiedName,
  selectSlice,
  selectUnifiedState,
} from 'stratimux';
import { UserInterfaceClientState } from './userInterfaceClient.concept';
import { BoundSelectors } from '../../model/userInterface';
import { Subscriber } from 'rxjs';
import {
  UserInterfaceClientAssembleAtomicUpdateCompositionStrategyPayload,
  userInterfaceClientAssembleAtomicUpdateCompositionStrategy,
} from './qualities/clientAssembleAtomicUpdateCompositionStrategy.quality';

export const userInterfaceClientOnChangePrinciple: PrincipleFunction = (
  ___: Subscriber<Action>,
  cpts: Concepts,
  concepts$: UnifiedSubject,
  semaphore: number
) => {
  const atomicCachedState: Record<string, unknown> = {};
  let delayChanges = false;
  // const sub = concepts$.subscribe(val => {
  //   // console.log('SUB HIT');
  //   const axiumState = getAxiumState(val);
  //   if (axiumState.badPlans.length > 0) {
  //     console.log(axiumState.badPlans);
  //   }
  // });
  const plan = concepts$.stage(
    'User Interface Server on Change',
    [
      (concepts, dispatch) => {
        const name = getUnifiedName(concepts, semaphore);
        if (name) {
          dispatch(axiumRegisterStagePlanner({ conceptName: name, stagePlanner: plan }), {
            on: {
              expected: true,
              selector: axiumSelectOpen,
            },
            iterateStage: true,
          });
        } else {
          plan.conclude();
        }
      },
      (concepts, dispatch) => {
        const uiState = selectUnifiedState<UserInterfaceClientState>(concepts, semaphore);
        console.log('HITTING');
        if (uiState && uiState.pagesCached) {
          const selectors: BoundSelectors[] = [];
          uiState.pages.forEach((page, i) => {
            if (page.title === uiState.currentPage) {
              page.cachedSelectors.forEach((bound) => {
                bound.action.conceptSemaphore = semaphore;
                selectors.push(bound);
              });
              page.cachedComponentSelectors.forEach((bound) => {
                bound.action.conceptSemaphore = semaphore;
                selectors.push(bound);
              });
            }
          });
          console.log('CHECK BOUND SELECTORS', selectors);
          const payload: UserInterfaceClientAssembleAtomicUpdateCompositionStrategyPayload = {
            action$: getAxiumState(concepts).action$,
            boundActionQue: [],
          };
          // Update so that the state that is being cached is set by the selectors. Finish this up tomorrow and move on
          const changes: string[] = [];
          const changedSelectors: KeyedSelector[] = [];
          selectors.forEach((bound) => {
            for (const select of bound.selectors) {
              const value = selectSlice(concepts, select);
              // console.log('HITTING', select, value, atomicCachedState);
              let changed = false;
              if (typeof value !== 'object') {
                changed = (atomicCachedState as Record<string, unknown>)[select.stateKeys] !== value;
              } else {
                const object = (atomicCachedState as Record<string, unknown>)[select.stateKeys];
                if (object === undefined) {
                  changed = true;
                } else {
                  changed = !Object.is(object, value);
                }
              }
              if (changed) {
                if (!changes.includes(select.stateKeys)) {
                  changes.push(select.stateKeys);
                  changedSelectors.push(select);
                }
                let exists = false;
                for (const b of payload.boundActionQue) {
                  if (b.id === bound.id) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  payload.boundActionQue.push(bound);
                }
              }
            }
          });
          for (let i = 0; i < changes.length; i++) {
            atomicCachedState[changes[i]] = selectSlice(concepts, changedSelectors[i]);
          }
          if (payload.boundActionQue.length > 0) {
            console.log('Check Length', payload.boundActionQue.length);
            setTimeout(() => {
              delayChanges = false;
            }, 100);
            delayChanges = true;
            dispatch(userInterfaceClientAssembleAtomicUpdateCompositionStrategy(payload), {
              iterateStage: true,
              throttle: 1,
            });
          }
        } else if (uiState === undefined) {
          console.log("SHOULDN'T CONCLUDE");
          plan.conclude();
        }
      },
      (_, dispatch) => {
        console.log('HITTING DELAY CHANGE');
        if (!delayChanges) {
          dispatch(axiumKick(), {
            setStage: 1,
            throttle: 1,
          });
        }
      },
    ],
    100
  );
};
/*#>*/
