/*<$
For the graph programming framework Stratimux and a Concept logixUX, generate a quality that will trigger the strategy that will install the target git repository via a supplied url to a directory of the given name.
$>*/
/*<#*/
import {
  ActionType,
  Concepts,
  MethodCreator,
  UnifiedSubject,
  createMethod,
  createQuality,
  nullReducer,
  prepareActionWithPayloadCreator,
  selectPayload,
  strategyBegin,
} from 'stratimux';
import { logixUXInstallGitRepositoryStrategy } from '../strategies/installGitProject.strategy';
import { Subject } from 'rxjs';

export type LogixUXTriggerInstallGitRepositoryPayload = {
  url: string,
  name: string
}
export const logixUXTriggerInstallGitRepositoryType: ActionType = 'Create logixUX trigger install git repository';
export const logixUXTriggerInstallGitRepository =
  prepareActionWithPayloadCreator(logixUXTriggerInstallGitRepositoryType);

const createLogixUXTriggerInstallGitRepositoryMethodCreator: MethodCreator = (concepts$?: Subject<Concepts>, semaphore?: number) =>
  createMethod(
    (action) => {
      const { url, name } = selectPayload<LogixUXTriggerInstallGitRepositoryPayload>(action);
      const strategy = logixUXInstallGitRepositoryStrategy(url, name);
      return strategyBegin(strategy);
    }
  );

export const logixUXTriggerInstallGitRepositoryQuality = createQuality(
  logixUXTriggerInstallGitRepositoryType,
  nullReducer,
  createLogixUXTriggerInstallGitRepositoryMethodCreator,
);
/*#>*/