/*<$
For the graph programming framework Stratimux and a Concept logixUX, generate a quality that updates a DataSet's prompt by index and set by event target value.
$>*/
/*<#*/
import { Action, createQualitySetWithPayload, defaultMethodCreator, selectPayload } from 'stratimux';
import { LogixUXState } from '../logixUX.concept';
import { userInterface_selectInputTarget } from '../../../model/userInterface';

export type LogixUXUpdateDataSetPromptPayload = {
  index: number;
  dataSetIndex: number;
};

export const [logixUXUpdateDataSetPrompt, logixUXUpdateDataSetPromptType, logixUXUpdateDataSetPromptQuality] =
  createQualitySetWithPayload<LogixUXUpdateDataSetPromptPayload>({
    type: 'Create logixUX UpdateDataSetPrompt',
    reducer: (state: LogixUXState, action: Action): LogixUXState => {
      const payload = selectPayload<LogixUXUpdateDataSetPromptPayload>(action);
      const target = userInterface_selectInputTarget(action);
      const trainingData = [...state.trainingData];
      const named = trainingData[payload.index];
      if (named && target) {
        named.dataSet[payload.dataSetIndex].prompt = target.value;
      }
      return {
        ...state,
        trainingData,
      };
    },
    methodCreator: defaultMethodCreator,
  });
/*#>*/
