/*<$*/
// PROMPT: For the framework Stratimux generate a Document Object Model Concept
/*$>*/
/*<#*/
import { createConcept, Concept } from 'stratimux';
import { documentObjectModelPrinciple } from './documentObjectModel.principle';
import { UserInterfacePageBindings } from '../../model/userInterface';
import { documentObjectModelBindQuality } from './qualities/bind.quality';
import { documentObjectModelBindPayloadQuality } from './qualities/bindPayload.quality';
import { documentObjectModelClearBindingQueQuality } from './qualities/clearBindingQue.quality';

export const documentObjectModelName = 'documentObjectModel';

export type DocumentObjectModelState = {
  bindingQue: UserInterfacePageBindings;
};

const createDocumentObjectModelState = (bindingQue?: UserInterfacePageBindings): DocumentObjectModelState => {
  return {
    bindingQue: bindingQue ? bindingQue : {},
  };
};

export const createDocumentObjectModelConcept = (bindingQue?: UserInterfacePageBindings): Concept => {
  return createConcept(
    documentObjectModelName,
    createDocumentObjectModelState(bindingQue),
    [documentObjectModelBindQuality, documentObjectModelBindPayloadQuality, documentObjectModelClearBindingQueQuality],
    [documentObjectModelPrinciple]
  );
};
/*#>*/
