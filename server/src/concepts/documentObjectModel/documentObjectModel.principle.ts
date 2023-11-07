import {
  Action,
  AxiumState,
  Concepts,
  PrincipleFunction,
  UnifiedSubject,
  axiumRegisterStagePlanner,
  axiumSelectOpen,
  primeAction,
  selectUnifiedState,
  strategyBegin
} from 'stratimux';
import { Subscriber } from 'rxjs';
import { DocumentObjectModelState, determineBinding, documentObjectModelName } from './documentObjectModel.concept';
import { documentObjectModelBindingStrategy } from './strategies/composeBindings.strategy';

export const documentObjectModelPrinciple: PrincipleFunction = (
  _: Subscriber<Action>,
  _concepts: Concepts,
  concepts$: UnifiedSubject,
  semaphore: number
) => {
  const plan = concepts$.stage('ownership Principle Plan', [
    (concepts, dispatch) => {
      dispatch(primeAction(concepts, axiumRegisterStagePlanner({conceptName: documentObjectModelName, stagePlanner: plan})), {
        iterateStage: true,
        on: {
          selector: axiumSelectOpen,
          expected: true
        },
      });
    },
    (concepts, dispatch) => {
      // console.log('Hello Document Object Model', selectUnifiedState<DocumentObjectModelState>(concepts, semaphore)?.bindingQue);
      const documentObjectModelState = selectUnifiedState<DocumentObjectModelState>(concepts, semaphore);
      const binding = documentObjectModelState?.bindingQue;
      if (binding) {
        dispatch(strategyBegin(documentObjectModelBindingStrategy(concepts, 'index', binding)), {
          iterateStage: true
        });
      }
    },
    (__, ___) => {
      plan.conclude();
      // console.log('Plan can conclude.');
    }
  ]);
};
