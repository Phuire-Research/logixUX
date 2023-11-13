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
                '#strategyID': [
                  {
                    action: {
                      type: 'Create logixUX triggerCountingStrategy',
                      semaphore: [0, 0, -1, 0],
                      payload: { number: 0 },
                      expiration: 1699918446254,
                    },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyPlusID': [
                  {
                    action: {
                      type: 'Create logixUX triggerCountingStrategy',
                      semaphore: [0, 0, -1, 0],
                      payload: { number: 1 },
                      expiration: 1699918446254,
                    },
                    eventBinding: 'onclick',
                  },
                ],
                '#strategyMinusID': [
                  {
                    action: {
                      type: 'Create logixUX triggerCountingStrategy',
                      semaphore: [0, 0, -1, 0],
                      payload: { number: -1 },
                      expiration: 1699918446254,
                    },
                    eventBinding: 'onclick',
                  },
                ],
                '#addID': [
                  {
                    action: { type: 'Counter Add', semaphore: [0, 0, -1, 0], expiration: 1699918446254 },
                    eventBinding: 'onclick',
                  },
                ],
                '#subtractID': [
                  {
                    action: { type: 'Counter Subtract', semaphore: [0, 0, -1, 0], expiration: 1699918446254 },
                    eventBinding: 'onclick',
                  },
                ],
                '#promptID0': [
                  {
                    action: { type: 'Create logixUX UpdateFromPayload', semaphore: [0, 0, -1, 0], expiration: 1699918446083 },
                    eventBinding: 'onchange',
                  },
                ],
                '#chosenID0': [
                  {
                    action: { type: 'Create logixUX UpdateFromPayload', semaphore: [0, 0, -1, 0], expiration: 1699918446083 },
                    eventBinding: 'onchange',
                  },
                ],
                '#rejectedID0': [
                  {
                    action: { type: 'Create logixUX UpdateFromPayload', semaphore: [0, 0, -1, 0], expiration: 1699918446083 },
                    eventBinding: 'onchange',
                  },
                ],
              },
              error: {},
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
