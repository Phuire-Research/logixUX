/* eslint-disable max-len */
import {
  ActionType,
  Concepts,
  Counter,
  KeyedSelector,
  MethodCreator,
  UnifiedSubject,
  axiumLog,
  counterName,
  createMethod,
  createQuality,
  defaultReducer,
  getUnifiedName,
  prepareActionCreator,
  selectState,
  strategySuccess,
} from 'stratimux';

import { createBinding, createBoundSelectors, userInterface_appendCompositionToPage } from '../../../../../model/userInterface';
import { elementEventBinding } from '../../../../../model/html';
import { createMethodWithConcepts } from '../../../../../model/methods';
import { getAxiumState, getUnifiedList } from '../../../../../model/concepts';
import { logixUXTriggerCountingStrategy } from '../../triggerCounterStrategy.quality';
import { userInterfaceClientName } from '../../../../userInterfaceClient/userInterfaceClient.concept';

export const logixUXIndexDialogContentType: ActionType = 'create userInterface for IndexDialogContent';
export const logixUXIndexDialogContent = prepareActionCreator(logixUXIndexDialogContentType);

const axiumSelectDialog: KeyedSelector = {
  conceptName: 'axium',
  stateKeys: 'dialog',
};

const createIndexDialogContentMethodCreator: MethodCreator = (concepts$?: UnifiedSubject, _semaphore?: number) =>
  createMethodWithConcepts(
    (action, concepts, semaphore) => {
      const id = '#dialogID';
      const buttonId = '#buttonID';
      if (action.strategy) {
        const unifiedName = getUnifiedName(concepts, semaphore);
        if (unifiedName) {
          const isClient = unifiedName === userInterfaceClientName;
          console.log('CHECK', isClient, unifiedName);
          const dialog = getAxiumState(concepts).dialog.trim();
          const counter = selectState<Counter>(concepts, counterName);
          const count = counter ? counter.count : 0;
          let finalDialog = '';
          if (isClient) {
            dialog.split('\n').forEach((paragraph, i) => {
              finalDialog += /*html*/ `
            <p class="pb-2 indent-4">
              ${i + ': ' + paragraph}
            </p>
          `;
            });
          }
          const boundSelectors = isClient ? [createBoundSelectors(id, logixUXIndexDialogContent(), [axiumSelectDialog])] : [];
          return strategySuccess(
            action.strategy,
            userInterface_appendCompositionToPage(action.strategy, {
              id,
              bindings: createBinding([
                { elementId: buttonId, action: logixUXTriggerCountingStrategy(), eventBinding: elementEventBinding.onclick },
              ]),
              boundSelectors,
              action: logixUXIndexDialogContent(),
              html: /*html*/ `
        <div id='${id}'>
          <button id=${buttonId} class="m-10 center-m bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            TRIGGER COUNTING ${count}
          </button>
          <br>
          ${finalDialog}
        </div>
  `,
            })
          );
        }
      }
      return action;
    },
    concepts$ as UnifiedSubject,
    _semaphore as number
  );

export const logixUXIndexDialogContentQuality = createQuality(
  logixUXIndexDialogContentType,
  defaultReducer,
  createIndexDialogContentMethodCreator
);

function renderDialog(dialog: string) {
  //
}
