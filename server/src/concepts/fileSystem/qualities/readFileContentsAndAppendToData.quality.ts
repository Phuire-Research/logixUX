import {
  ActionType,
  createAsyncMethod,
  createQuality,
  defaultReducer,
  prepareActionCreator,
  selectPayload,
  strategyData_appendFailure,
  strategyData_select,
  strategyData_unifyData,
  strategyFailed,
  strategySuccess,
} from 'stratimux';
import fs from 'fs/promises';
import path from 'path';
import { FileDirent } from '../fileSystem.model';
import { ReadDirectoryField } from './readDir.quality';

export const fileSystemReadFileContentsAndAppendToDataType: ActionType =
  'File System read from File and Append to Data Field';
export const fileSystemReadFileContentsAndAppendToData =
  prepareActionCreator(fileSystemReadFileContentsAndAppendToDataType);
export type ReadFileContentsAndAppendToDataField = {
  dirent: FileDirent,
  content: string,
}

const fileSystemReadFileContentsAndAppendToDataMethodCreator = () =>
  createAsyncMethod((controller, action) => {
    if (action.strategy) {
      const strategy = action.strategy;
      const data = strategyData_select<ReadDirectoryField>(strategy);
      if (data) {
        console.log('CHECK DATA', data);
        const {filesAndDirectories} = data;
        const dirent: FileDirent = filesAndDirectories[0];
        fs.readFile(path.join(dirent.path + '/' + dirent.name)).then(contents => {
          console.log('CHECK CONTENTS', contents);
          try {
            const newData = {
              dirent,
              content: contents.toString()
            };
            controller.fire(strategySuccess(strategy, strategyData_unifyData(strategy, newData)));
          } catch (error) {
            controller.fire(strategyFailed(strategy, strategyData_appendFailure(
              strategy,
              `${error}`
            )));
          }
        });
      } else {
        controller.fire(strategyFailed(strategy, strategyData_appendFailure(
          strategy,
          'No dirent provided in payload'
        )));
      }
    } else {
      controller.fire(action);
    }
  });

export const fileSystemReadFileContentsAndAppendToDataQuality = createQuality(
  fileSystemReadFileContentsAndAppendToDataType,
  defaultReducer,
  fileSystemReadFileContentsAndAppendToDataMethodCreator,
);
