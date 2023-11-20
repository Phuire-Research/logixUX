import path from 'path';
import { createActionNode, createStrategy } from 'stratimux';
import { logixUXServerSendUpdateProjectToInstalled } from './client/logixUXServerSendUpdateProjectToInstalled.helper';
import { fileSystemRemoveTargetDirectory } from '../../fileSystem/qualities/removeTargetDirectory.quality';
import { logixUXServerGitCloneRepoToDirectory } from '../qualities/gitCloneRepoToDirectory.quality';

export const logixUXServerCloneGitRepositoryToDirectoryTopic = 'logixUXServer clone git repository to directory';
export const logixUXServerCloneGitRepositoryToDirectoryStrategy = (root: string, url: string, name:string) => {
  const dataPath = path.join(root + '/data/repositories/' + name);
  // Step 3 Update status to installed by name as payload
  const stepUpdateProjectToInstalled = createActionNode(logixUXServerSendUpdateProjectToInstalled(name), {
    successNode: null,
    failureNode: null
  });
  // Step 2 Git clone into that directory by name
  const stepCloneRepo = createActionNode(logixUXServerGitCloneRepoToDirectory({
    url,
    path: dataPath
  }), {
    successNode: stepUpdateProjectToInstalled,
    // TODO: If failed we can use open to load a window with the git install webpage
    failureNode: null,
    agreement: 120000
  });
  // Step 1 Remove directory if exists based on name
  const stepRemoveDirectory = createActionNode(fileSystemRemoveTargetDirectory({path: dataPath}), {
    // successNode: stepCreateDirectory,
    successNode: stepCloneRepo,
    failureNode: null,
    agreement: 20000
  });
  return createStrategy({
    topic: logixUXServerCloneGitRepositoryToDirectoryTopic,
    initialNode: stepRemoveDirectory,
  });
};