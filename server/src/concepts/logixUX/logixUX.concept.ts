/*<$
For the graph programming framework Stratimux generate a Brand Concept called LogixUX that will act as a Sidekick Application for the Stratimux Framework.
$>*/
/*<#*/
import { createConcept, Concept, unifyConcepts, createCounterConcept, PrincipleFunction, Quality } from 'stratimux';
import { BrandState } from '../../model/userInterface';
import { logixUXErrorQuality } from './qualities/components/error/error.quality';
import { logixUXHeadQuality } from './qualities/components/head.quality';
import { logixUXStyleQuality } from './qualities/components/style.quality';
import { logixUXFooterQuality } from './qualities/components/footer.quality';
import { logixUXIndexHeroQuality } from './qualities/components/hero/indexHero.quality';
import { logixUXIndexDialogBeginQuality } from './qualities/components/dialog/indexDialogBegin.quality';
import { logixUXIndexDialogContentQuality } from './qualities/components/dialog/indexDialogContent.quality';
import { logixUXIndexDialogEndQuality } from './qualities/components/dialog/indexDialogEnd.quality';
import { logixUXAppendAxiumDialogQuality } from './qualities/appendAxiumDialog.quality';
import { logixUXDialogPrinciple } from './logixUX.principle';
import { logixUXTrainingDataPagePrinciple } from './logixUX.trainingDataPage.principle';
import { logixUXIndexPageStrategy } from './strategies/pages/indexPage.strategy';
import { logixUXErrorPageStrategy } from './strategies/pages/errorPage.strategy';
import { logixUXIndexDPOBeginQuality } from './qualities/components/DPO/DPOBegin.quality';
import { logixUXIndexDPOContentQuality } from './qualities/components/DPO/DPOContent.quality';
import { logixUXIndexDPOEndQuality } from './qualities/components/DPO/DPOEnd.quality';
import { logixUXUpdateFromPromptPayloadQuality } from './qualities/updateFromPromptPayload.quality';
import { logixUXUpdateFromChosenPayloadQuality } from './qualities/updateFromChosenPayload.quality';
import { logixUXUpdateFromRejectedPayloadQuality } from './qualities/updateFromRejectedPayload.quality';
import {
  Active_DPO,
  GeneralProjectStatuses,
  ProjectStatus,
  TrainingData,
  generateDPOTrainingData,
  generateDefaultTrainingData,
  logixUXVerboseAddingStrategySelect,
  logixUXVerboseAdditionAndSubtractionStrategySelect,
  logixUXVerboseSubtractionStrategySelect
} from './logixUX.model';
import { logixUXNewDataSetEntryQuality } from './qualities/newDataSetEntry.quality';
import { logixUXTriggerMinusCountingStrategyQuality } from './qualities/triggerMinusCounterStrategy.quality';
import { logixUXTriggerPlusCountingStrategyQuality } from './qualities/triggerPlusCounterStrategy.quality';
import { logixUXTriggerRandomCountingStrategyQuality } from './qualities/triggerRandomCounterStrategy.quality';
import { logixUXDataManagerPageStrategy } from './strategies/pages/dataManagerPage.strategy';
import { logixUXDataManagerBeginQuality } from './qualities/components/dataManager/dataManagerBegin.quality';
import { logixUXDataManagerContentQuality } from './qualities/components/dataManager/dataManagerContent.quality';
import { logixUXDataManagerEndQuality } from './qualities/components/dataManager/dataManagerEnd.quality';
import { logixUXSideBarBeginQuality } from './qualities/components/sideBar/sideBarBegin.quality';
import { logixUXSideBarContentQuality } from './qualities/components/sideBar/sideBarContent.quality';
import { logixUXSideBarEndQuality } from './qualities/components/sideBar/sideBarEnd.quality';
import { logixUXToggleSidebarQuality } from './qualities/toggleSidebar.quality';
import { logixUXNewDPOEntryQuality } from './qualities/newDPOEntry.quality';
import { logixUXNewDataSetQuality } from './qualities/newDataSet.quality';
import { logixUXUpdateDataSetNameQuality } from './qualities/updateDataSetName.quality';
import { logixUXDataSetBeginQuality } from './qualities/components/dataSet/dataSetBegin.quality';
import { logixUXDataSetEndQuality } from './qualities/components/dataSet/dataSetEnd.quality';
import { logixUXDataSetContentQuality } from './qualities/components/dataSet/dataSetContent.quality';
import { logixUXUpdateDataSetContentsQuality } from './qualities/updateDataSetContents.quality';
import { logixUXUpdateDataSetPromptQuality } from './qualities/updateDataSetPrompt.quality';
import { logixUXUpdateProjectStatusQuality } from './qualities/updateProjectToStatus.quality';
import { logixUXTriggerInstallGitRepositoryQuality } from './qualities/triggerInstallGitRepository.quality';
import { logixUXUpdateParsedProjectDataSetQuality } from './qualities/updateParsedProjectDataSet.quality';
import { logixUXUpdateDataSetSelectionQuality } from './qualities/updateDataSetSelection.quality';
import { logixUXSendTriggerParseRepositoryStrategyQuality } from './qualities/sendTriggerParseRepositoryStrategy.quality';
import { logixUXSendTriggerSaveDataSetSelectionStrategyQuality } from './qualities/sendTriggerSaveDataSetSelectionStrategy.quality';
import { logixUXUpdateProjectStatusToSavedQuality } from './qualities/updateProjectToSaved.quality';
import { logixUXRemoveDataSetSelectionQuality } from './qualities/removeDataSetSelection.quality';
import { logixUXSendTriggerDeleteDataSetsStrategyQuality } from './qualities/sendTriggerDeleteDataSetsStrategy.quality';
import { logixUXSetPossibleProjectQuality } from './qualities/setPossibleProject.quality';
import { logixUXFilterTriggerInstallGitRepositoryQuality } from './qualities/filterTriggerInstallGitRepository.quality';
import { logixUXSetDataSetQuality } from './qualities/setDataSet.quality';
import { logixUXSetSelectedTransformationQuality } from './qualities/setSelectedTransformation.quality';
import { logixUXSendTriggerSelectedTransformationStrategyQuality } from './qualities/sendTriggerSelectedTransformationStrategy.quality';
import { logixUXClearDataSetSelectionQuality } from './qualities/clearDataSetSelection.quality';

export const logixUXName = 'logixUX';
export type LogixUXState = {
  mock: number;
  dialog: string;
  transformationStrategies: string[]
  selectedTransformation: string,
  possibleProject: string;
  possibleProjectValid: boolean;
  stratimuxStatus: ProjectStatus;
  logixUXStatus: ProjectStatus;
  projectsStatuses: GeneralProjectStatuses;
  dataSetSelection: boolean[],
  sideBarExpanded: boolean;
  trainingData: TrainingData;
  trainingDataCounter: number;
  activeDPO: Active_DPO[];
} & BrandState;

const createLogixUXState = (): LogixUXState => {
  return {
    mock: 0,
    dialog: '',
    transformationStrategies: [
      logixUXVerboseAddingStrategySelect,
      logixUXVerboseSubtractionStrategySelect,
      logixUXVerboseAdditionAndSubtractionStrategySelect
    ],
    selectedTransformation: 'Some Strategy',
    possibleProject: '',
    possibleProjectValid: false,
    stratimuxStatus: ProjectStatus.notInstalled,
    logixUXStatus: ProjectStatus.notInstalled,
    projectsStatuses: [],
    dataSetSelection: [],
    sideBarExpanded: true,
    trainingData: generateDefaultTrainingData(),
    trainingDataCounter: -1,
    activeDPO: [generateDPOTrainingData()],
    pageStrategies: [logixUXIndexPageStrategy, logixUXDataManagerPageStrategy, logixUXErrorPageStrategy]
  };
};

export const createLogixUXConcept = (): Concept =>  {
  const principles: PrincipleFunction[] = [
    logixUXDialogPrinciple,
    logixUXTrainingDataPagePrinciple
  ];
  const qualities: Quality[] = [
    logixUXHeadQuality,
    logixUXStyleQuality,
    logixUXFooterQuality,
    logixUXSideBarBeginQuality,
    logixUXSideBarContentQuality,
    logixUXSideBarEndQuality,
    logixUXIndexHeroQuality,
    logixUXIndexDialogBeginQuality,
    logixUXIndexDialogContentQuality,
    logixUXIndexDialogEndQuality,
    logixUXErrorQuality,
    logixUXAppendAxiumDialogQuality,
    logixUXIndexDPOBeginQuality,
    logixUXIndexDPOContentQuality,
    logixUXIndexDPOEndQuality,
    logixUXClearDataSetSelectionQuality,
    logixUXDataManagerBeginQuality,
    logixUXDataManagerContentQuality,
    logixUXDataManagerEndQuality,
    logixUXDataSetBeginQuality,
    logixUXDataSetContentQuality,
    logixUXDataSetEndQuality,
    logixUXSendTriggerParseRepositoryStrategyQuality,
    logixUXSendTriggerSaveDataSetSelectionStrategyQuality,
    logixUXSendTriggerDeleteDataSetsStrategyQuality,
    logixUXSendTriggerSelectedTransformationStrategyQuality,
    logixUXUpdateFromPromptPayloadQuality,
    logixUXUpdateFromChosenPayloadQuality,
    logixUXUpdateFromRejectedPayloadQuality,
    logixUXUpdateDataSetNameQuality,
    logixUXUpdateDataSetContentsQuality,
    logixUXUpdateDataSetPromptQuality,
    logixUXUpdateProjectStatusQuality,
    logixUXUpdateDataSetSelectionQuality,
    logixUXUpdateParsedProjectDataSetQuality,
    logixUXUpdateProjectStatusToSavedQuality,
    logixUXNewDataSetEntryQuality,
    logixUXNewDataSetQuality,
    logixUXNewDPOEntryQuality,
    logixUXRemoveDataSetSelectionQuality,
    logixUXTriggerMinusCountingStrategyQuality,
    logixUXTriggerPlusCountingStrategyQuality,
    logixUXTriggerRandomCountingStrategyQuality,
    logixUXTriggerInstallGitRepositoryQuality,
    logixUXToggleSidebarQuality,
    logixUXSetPossibleProjectQuality,
    logixUXFilterTriggerInstallGitRepositoryQuality,
    logixUXSetDataSetQuality,
    logixUXSetSelectedTransformationQuality,
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
/*#>*/