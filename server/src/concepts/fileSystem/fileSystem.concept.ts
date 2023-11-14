import { createConcept, Concept } from 'stratimux';
import { fileSystemGetDirectoriesQuality } from './qualities/getDirectories.quality';
import { fileSystemRemoveTargetDirectoryQuality } from './qualities/removeTargetDirectory.quality';
import { fileSystemCreateTargetDirectoryQuality } from './qualities/createTargetDirectory.quality';
import { fileSystemCopyMoveTargetDirectoryQuality } from './qualities/copyMoveDirectory.quality';
import { findRoot } from '../../model/findRoot';
import { fileSystemRecursivelyCopyMoveTargetDirectoriesQuality } from './qualities/recursivelyCopyMoveDirectories.quality';
import { fileSystemServerSetConceptDirectoriesFromDataQuality } from './qualities/setConceptDirectoriesFromData.quality';
import { fileSystemCreateFileWithContentsIndexQuality } from './qualities/createFileWithContents.quality';

export type FileSystemState = {
  conceptDirectoryMap: string[],
  root: string,
}

export const fileSystemName = 'fileSystem';

const createFileSystemState = (): FileSystemState => {
  return {
    conceptDirectoryMap: [],
    root: findRoot()
  };
};

export const createFileSystemConcept = (): Concept =>  {
  return createConcept(
    fileSystemName,
    createFileSystemState(),
    [
      fileSystemGetDirectoriesQuality,
      fileSystemRemoveTargetDirectoryQuality,
      fileSystemCreateTargetDirectoryQuality,
      fileSystemCopyMoveTargetDirectoryQuality,
      fileSystemRecursivelyCopyMoveTargetDirectoriesQuality,
      fileSystemServerSetConceptDirectoriesFromDataQuality,
      fileSystemCreateFileWithContentsIndexQuality
    ],
    [],
    []
  );
};
