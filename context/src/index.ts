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
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700233310140 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyID': [
                  {
                    action: { type: 'Create logixUX triggerRandomCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700233310233 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyPlusID': [
                  {
                    action: { type: 'Create logixUX triggerPlusCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700233310233 },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyMinusID': [
                  {
                    action: { type: 'Create logixUX triggerMinusCountingStrategy', semaphore: [0, 0, -1, 0], expiration: 1700233310233 },
                    eventBinding: 'onclick',
                  },
                ],
                '#addID': [
                  {
                    action: { type: 'Counter Add', semaphore: [0, 0, -1, 0], expiration: 1700233310233 },
                    eventBinding: 'onclick',
                  },
                ],
                '#subtractID': [
                  {
                    action: { type: 'Counter Subtract', semaphore: [0, 0, -1, 0], expiration: 1700233310233 },
                    eventBinding: 'onclick',
                  },
                ],
                '#promptID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromPromptPayload', semaphore: [0, 0, -1, 0], expiration: 1700233310328 },
                    eventBinding: 'onchange',
                  },
                ],
                '#chosenID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromChosenPayload', semaphore: [0, 0, -1, 0], expiration: 1700233310328 },
                    eventBinding: 'onchange',
                  },
                ],
                '#rejectedID-000': [
                  {
                    action: { type: 'Create logixUX UpdateFromRejectedPayload', semaphore: [0, 0, -1, 0], expiration: 1700233310328 },
                    eventBinding: 'onchange',
                  },
                ],
                '#addEntryindex': [
                  {
                    action: { type: 'Create logixUX NewDPOEntry', semaphore: [0, 0, -1, 0], expiration: 1700233310328 },
                    eventBinding: 'onclick',
                  },
                ],
                '#saveDPOindex': [
                  {
                    action: {
                      type: 'Web Socket Client append to action que',
                      semaphore: [0, 0, -1, 0],
                      payload: {
                        actionQue: [{ type: 'logixUXServer triggerSaveDPOStrategy', semaphore: [0, 0, -1, 0], expiration: 1700233310328 }],
                      },
                      expiration: 1700233310328,
                    },
                    eventBinding: 'onclick',
                  },
                ],
              },
              dataManager: {
                '#expandSideBarID': [
                  {
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700233310249 },
                    eventBinding: 'onclick',
                  },
                ],
                '#dataSetNameID-000': [
                  {
                    action: {
                      type: 'Create logixUX UpdateDataSetName',
                      semaphore: [0, 0, -1, 0],
                      payload: { index: 0 },
                      expiration: 1700233310343,
                    },
                    eventBinding: 'onchange',
                  },
                ],
                '#addEntrydataManager': [
                  {
                    action: { type: 'Create logixUX NewDataSet', semaphore: [0, 0, -1, 0], expiration: 1700233310343 },
                    eventBinding: 'onclick',
                  },
                ],
              },
              error: {
                '#expandSideBarID': [
                  {
                    action: { type: 'Create logixUX ToggleSidebar', semaphore: [0, 0, -1, 0], expiration: 1700233310496 },
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
