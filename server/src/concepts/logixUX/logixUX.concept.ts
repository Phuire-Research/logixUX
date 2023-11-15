import { createConcept, Concept, unifyConcepts, createCounterConcept, PrincipleFunction, Quality } from 'stratimux';
import { logixUXErrorQuality } from './qualities/error/error.quality';
import { logixUXHeadQuality } from './qualities/components/head.quality';
import { logixUXStyleQuality } from './qualities/components/style.quality';
import { logixUXFooterQuality } from './qualities/components/footer.quality';
import { logixUXIndexHeroQuality } from './qualities/index/indexHero.quality';
import { logixUXIndexDialogBeginQuality } from './qualities/index/dialog/indexDialogBegin.quality';
import { logixUXIndexDialogContentQuality } from './qualities/index/dialog/indexDialogContent.quality';
import { logixUXIndexDialogEndQuality } from './qualities/index/dialog/indexDialogEnd.quality';
import { logixUXAppendAxiumDialogQuality } from './qualities/appendAxiumDialog.quality';
import { logixUXDialogPrinciple } from './logixUX.principle';
import { BrandState } from '../../model/userInterface';
import { logixUXIndexPageStrategy } from './strategies/pages/indexPage.strategy';
import { logixUXErrorPageStrategy } from './strategies/pages/errorPage.strategy';
import { logixUXIndexTrainingDataBeginQuality } from './qualities/index/trainingData/indexTrainingDataBegin.quality';
import { logixUXIndexTrainingDataContentQuality } from './qualities/index/trainingData/indexTrainingDataContent.quality';
import { logixUXIndexTrainingDataEndQuality } from './qualities/index/trainingData/indexTrainingDataEnd.quality';
import { logixUXUpdateFromPromptPayloadQuality } from './qualities/updateFromPromptPayload.quality';
import { logixUXUpdateFromChosenPayloadQuality } from './qualities/updateFromChosenPayload.quality';
import { logixUXUpdateFromRejectedPayloadQuality } from './qualities/updateFromRejectedPayload.quality';
import { Active_DPO, generateDefaultTrainingData } from './logixUX.model';
import { logixUXNewDataSetEntryQuality } from './qualities/newDataSetEntry.quality';
import { logixUXTriggerMinusCountingStrategyQuality } from './qualities/triggerMinusCounterStrategy.quality';
import { logixUXTriggerPlusCountingStrategyQuality } from './qualities/triggerPlusCounterStrategy.quality';
import { logixUXTriggerRandomCountingStrategyQuality } from './qualities/triggerRandomCounterStrategy.quality';

export const logixUXName = 'logixUX';
export type LogixUXState = {
  mock: number;
  dialog: string;
  trainingData: Active_DPO[]
} & BrandState;

const createLogixUXState = (): LogixUXState => {
  return {
    mock: 0,
    dialog: '',
    trainingData: [generateDefaultTrainingData()],
    pageStrategies: [logixUXIndexPageStrategy, logixUXErrorPageStrategy]
  };
};

export const createLogixUXConcept = (): Concept =>  {
  const principles: PrincipleFunction[] = [
    logixUXDialogPrinciple
  ];
  const qualities: Quality[] = [
    logixUXHeadQuality,
    logixUXStyleQuality,
    logixUXFooterQuality,
    logixUXIndexHeroQuality,
    logixUXIndexDialogBeginQuality,
    logixUXIndexDialogContentQuality,
    logixUXIndexDialogEndQuality,
    logixUXErrorQuality,
    logixUXAppendAxiumDialogQuality,
    logixUXIndexTrainingDataBeginQuality,
    logixUXIndexTrainingDataContentQuality,
    logixUXIndexTrainingDataEndQuality,
    logixUXUpdateFromPromptPayloadQuality,
    logixUXUpdateFromChosenPayloadQuality,
    logixUXUpdateFromRejectedPayloadQuality,
    logixUXNewDataSetEntryQuality,
    logixUXTriggerMinusCountingStrategyQuality,
    logixUXTriggerPlusCountingStrategyQuality,
    logixUXTriggerRandomCountingStrategyQuality
  ];
  // This is temporary, the complete flow would allow for all server logic to remain on the server.
  return unifyConcepts(
    [
      createCounterConcept()
    ],
    createConcept(
      logixUXName,
      createLogixUXState(),
      qualities,
      principles,
      []
    ));
};
