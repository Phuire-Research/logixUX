/*$ Start template imports $*/
import { createAxium } from 'stratimux';
import { createHelloWorldConcept } from './concepts/helloWorld/helloWorld.concept';
import { createDocumentObjectModelConcept } from './concepts/documentObjectModel/documentObjectModel.concept';
import { createUserInterfaceClientConcept } from './concepts/userInterfaceClient/userInterfaceClient.concept';
import { createLogixUXConcept } from './concepts/logixUX/logixUX.concept';

/*$ End template imports $*/

(() => {
  /*$ Start context template code $*/
  let init = false;
  let state: Record<string, unknown> | undefined;
  fetch(window.location.protocol + '//' + window.location.host + '/stateSync').then((response) => {
    response.json().then((value) => {
      state = value;
      if (init && state) {
        createAxium(
          'contextAxium',
          [
            createHelloWorldConcept(),
            createDocumentObjectModelConcept({
              index: {
                '#expandSideBarID': [
                  {
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700581219557 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyID': [
                  {
                    action: { type: 'Create logixUX triggerRandomCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700581219634 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyPlusID': [
                  {
                    action: { type: 'Create logixUX triggerPlusCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700581219634 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyMinusID': [
                  {
                    action: { type: 'Create logixUX triggerMinusCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700581219634 },
                    eventBinding: 'onclick',
                  },
                ],
                '#addID': [
                  {
                    action: { type: 'Counter Add', semaphore: [0, 0, -1, 0], expiration: 1700581219634 },
                    eventBinding: 'onclick',
                  },
                ],
                '#subtractID': [
                  {
                    action: { type: 'Counter Subtract', semaphore: [0, 0, -1, 0], expiration: 1700581219634 },
                    eventBinding: 'onclick',
                  },
                ],
                '#promptID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromPromptPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#chosenID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromChosenPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#rejectedID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromRejectedPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#promptID-001': [
                  {
                    action: { type: 'Create logixUX UpdateFromPromptPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#chosenID-001': [
                  {
                    action: { type: 'Create logixUX UpdateFromChosenPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#rejectedID-001': [
                  {
                    action: { type: 'Create logixUX UpdateFromRejectedPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#promptID-002': [
                  {
                    action: { type: 'Create logixUX UpdateFromPromptPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#chosenID-002': [
                  {
                    action: { type: 'Create logixUX UpdateFromChosenPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#rejectedID-002': [
                  {
                    action: { type: 'Create logixUX UpdateFromRejectedPayload', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onchange',
                  },
                ],
                '#addEntryindex': [
                  {
                    action: { type: 'Create logixUX NewDPOEntry', semaphore: [0, 0, -1, 0], expiration: 1700581219728 },
                    eventBinding: 'onclick',
                  },
                ],
                '#saveDPOindex': [
                  {
                    action: {
                      type: 'Web Socket Client append to action que',
                      semaphore: [0, 0, -1, 0],
                      payload: {
                        actionQue: [{ type: 'logixUXServer triggerSaveDPOStrategy', semaphore: [0, 0, -1, 0], expiration: 1700581219728 }],
                      },
                      expiration: 1700581219728,
                    },
                    eventBinding: 'onclick',
                  },
                ],
              },
              dataManager: {
                '#expandSideBarID': [
                  {
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700581219649 },
                    eventBinding: 'onclick',
                  },
                ],
                '#addEntrydataManager': [
                  {
                    action: { type: 'Create logixUX NewDataSet', semaphore: [0, 0, -1, 0], expiration: 1700581219929 },
                    eventBinding: 'onclick',
                  },
                ],
                '#parse_stratimux': [
                  {
                    action: {
                      type: 'Web Socket Client append to action que',
                      semaphore: [0, 0, -1, 0],
                      payload: {
                        actionQue: [
                          {
                            type: 'logixUXServer triggerParseRepositoryStrategy',
                            semaphore: [0, 0, -1, 0],
                            payload: { name: 'stratimux' },
                            expiration: 1700581219929,
                          },
                        ],
                      },
                      expiration: 1700581219929,
                    },
                    eventBinding: 'onclick',
                  },
                ],
                '#parse_logixUX': [
                  {
                    action: {
                      type: 'Web Socket Client append to action que',
                      semaphore: [0, 0, -1, 0],
                      payload: {
                        actionQue: [
                          {
                            type: 'logixUXServer triggerParseRepositoryStrategy',
                            semaphore: [0, 0, -1, 0],
                            payload: { name: 'logixUX' },
                            expiration: 1700581219929,
                          },
                        ],
                      },
                      expiration: 1700581219929,
                    },
                    eventBinding: 'onclick',
                  },
                ],
              },
              error: {
                '#expandSideBarID': [
                  {
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700581219975 },
                    eventBinding: 'onclick',
                  },
                ],
              },
            }),
            createUserInterfaceClientConcept(state, createLogixUXConcept),
          ],
          true,
          true
        );
      }
    });
  });
  document.onreadystatechange = () => {
    if (!init) {
      init = true;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  console.warn = () => {};
  console.log('AXIUM INIT');
  /*$ End context template code $*/
})();
