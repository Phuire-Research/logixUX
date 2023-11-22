/*<$
For the framework Stratimux generate a Brand Server Concept called LogixUX Server that will be responsible for all server side qualities and principle.
$>*/
/*<#*/
import { createConcept, Concept, unifyConcepts, PrincipleFunction, Quality } from 'stratimux';
import { LogixUXState } from '../logixUX/logixUX.concept';
import { logixUXServerTriggerSaveTrainingDataStrategyQuality } from './qualities/triggerSaveTrainingDataStrategy.quality';
import { logixUXServerPrinciple } from './logixUXServer.principle';
import { logixUXServerReadFromDataTrainingDataFromDirectoriesQuality } from './qualities/readFromDataTrainingDataFromDirectory.quality';
import { logixUXServerSetDPOFromDataQuality } from './qualities/setDPOFromData.quality';
import { logixUXServerTriggerSaveDPOStrategyQuality } from './qualities/triggerSaveDPOStrategy.quality';
import { logixUXServerIsDataDirectorySetUpQuality } from './qualities/isDataDirectorySetUp.quality';
import { logixUXServerTriggerCloneGitRepositoryStrategyQuality } from './qualities/triggerCloneGitRepositoryStrategy.quality';
import { logixUXServerGitCloneRepoToDirectoryQuality } from './qualities/gitCloneRepoToDirectory.quality';
import { logixUXServerSetRepositoriesFromDataQuality } from './qualities/setRepositoriesFromData.quality';
import { logixUXServerTriggerParseRepositoryStrategyQuality } from './qualities/triggerParseRepositoryIntoDataSet.quality';
import { logixUXServerParseFileFromDataQuality } from './qualities/parseFileFromData.quality';

export const logixUXServerName = 'logixUXServer';
export type LogixUXServerState = {
  //
} & LogixUXState;

export const createLogixUXServerConcept = (): Concept =>  {
  const principles: PrincipleFunction[] = [
    logixUXServerPrinciple
  ];
  const qualities: Quality[] = [
    logixUXServerTriggerSaveTrainingDataStrategyQuality,
    logixUXServerTriggerSaveDPOStrategyQuality,
    logixUXServerReadFromDataTrainingDataFromDirectoriesQuality,
    logixUXServerSetDPOFromDataQuality,
    logixUXServerIsDataDirectorySetUpQuality,
    logixUXServerGitCloneRepoToDirectoryQuality,
    logixUXServerTriggerCloneGitRepositoryStrategyQuality,
    logixUXServerTriggerParseRepositoryStrategyQuality,
    logixUXServerSetRepositoriesFromDataQuality,
    logixUXServerParseFileFromDataQuality
  ];
  return unifyConcepts(
    [
    ],
    createConcept(
      logixUXServerName,
      {},
      qualities,
      principles,
      []
    ));
};
/*#>*/