/*<$
For the graph programming framework Stratimux and a Concept logixUX, generate a User Interface Component quality for the first slice of the DPO DataSet Component.
$>*/
/*<#*/
import {
  createMethod,
  nullReducer,
  strategySuccess
} from 'stratimux';

import { createQualitySetComponent, selectComponentPayload, userInterface_appendCompositionToPage } from '../../../../../model/userInterface';

export const [
  logixUXIndexDPOBegin,
  logixUXIndexDPOBeginType,
  logixUXIndexDPOBeginQuality
] = createQualitySetComponent({
  type: 'create userInterface for IndexDPOBegin',
  reducer: nullReducer,
  componentCreator: (act) => createMethod(action => {
    const payload = selectComponentPayload(action);
    const id = '#beginDPOID' + payload.pageTitle;
    if (action.strategy) {
      return strategySuccess(action.strategy, userInterface_appendCompositionToPage( action.strategy, {
        id,
        boundSelectors: [],
        universal: false,
        action: act(payload),
        html: /*html*/`
<div id='${id}' class="carbon-fiber">
  <section class="flex flex-col items-center min-h-screen text-white bg-center bg-blend-overlay md:bg-fixed bg-neutral-900/60">
    <div class ="flex-1 mb-12 max-w-5xl m-10 pt-10 pb-10 bg-gray-800/90 rounded">
      <h1 class="text-3xl text-center p-4">DPO Training Set</h1>
`
      }));
    }
    return action;
  })
});
/*#>*/