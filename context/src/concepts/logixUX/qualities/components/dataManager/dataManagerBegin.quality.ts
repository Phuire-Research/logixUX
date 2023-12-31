/*<$
For the graph programming framework Stratimux and a Concept logixUX, generate a User Interface Component quality that will create the Data Manager's initial slice and append to the page composition data field.
$>*/
/*<#*/
import { ActionType, MethodCreator, createMethod, createQuality, defaultReducer, strategySuccess } from 'stratimux';

import {
  prepareActionComponentCreator,
  selectComponentPayload,
  userInterface_appendCompositionToPage,
} from '../../../../../model/userInterface';

export const logixUXDataManagerBeginType: ActionType = 'create userInterface for DataManagerBegin';
export const logixUXDataManagerBegin = prepareActionComponentCreator(logixUXDataManagerBeginType);

const createDataManagerBeginMethodCreator: MethodCreator = () =>
  createMethod((action) => {
    const payload = selectComponentPayload(action);
    const id = '#beginDataManagerID' + payload.pageTitle;
    if (action.strategy) {
      return strategySuccess(
        action.strategy,
        userInterface_appendCompositionToPage(action.strategy, {
          id,
          universal: false,
          boundSelectors: [],
          action: logixUXDataManagerBegin(payload),
          html: /*html*/ `
<div id='${id}' class="carbon-fiber">
  <section class="flex flex-col items-center min-h-screen text-white bg-center bg-blend-overlay md:bg-fixed bg-neutral-900/60">
    <div class ="flex-1 mb-12 w-[50rem] max-w-5xl m-10 pt-10 pb-10 bg-gray-800/90 rounded">
      <h1 class="text-3xl text-center p-4 mb-2">Data Manager</h1>
`,
        })
      );
    }
    return action;
  });

export const logixUXDataManagerBeginQuality = createQuality(
  logixUXDataManagerBeginType,
  defaultReducer,
  createDataManagerBeginMethodCreator
);
/*#>*/
