/*<$
For the graph programming framework Stratimux and the logixUX Project, generate a model for to contain the function used to create the context index.ts file.
$>*/
/*<#*/
import { userInterfaceClientName } from '../concepts/userInterfaceClient/userInterfaceClient.concept';
import { PrimedConceptAndProperties } from './userInterface';

export function createContextIndexContent(primedConcepts: PrimedConceptAndProperties[], directoryMap: string[]): string {
  const axiumImports = ['createAxium'];
  let conceptImports = createConceptImportTemplates(primedConcepts);
  primedConcepts.forEach((concept) => {
    let found = false;
    for (const directory of directoryMap) {
      if (directory === concept.name) {
        found = true;
        break;
      }
    }
    if (!found) {
      axiumImports.push(`create${concept.nameCapitalized}Concept`);
    }
    if (concept.name === userInterfaceClientName && concept.properties?.length === 2) {
      const brand = concept.properties[1];
      const nameCapitalized = brand[0].toUpperCase() + brand.substring(1);
      conceptImports +=
        createConceptImportTemplates([
          {
            name: brand,
            nameCapitalized,
          },
        ]) + '\n';
      concept.properties[1] = `create${nameCapitalized}Concept`;
    }
  });
  const creators = createConceptCreatorTemplates(primedConcepts);
  const content =
    /*typescript*/
    `/*$ Start template imports $*/
import { ${axiumImports.join(', ')} } from 'stratimux';
${conceptImports}
/*$ End template imports $*/

(() => {
  /*$ Start context template code $*/
  let init = false;
  let state: Record<string, unknown> | undefined;
  fetch(window.location.protocol + '//' + window.location.host + '/stateSync').then(response => {
    response.json().then(value => {
      state = value;
      if (init && state) {
        createAxium('contextAxium', [
          ${creators}
        ], true, true);
      }
    });
  });
  document.onreadystatechange = () => {
    if (!init) {
      init = true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.onunload = function(){}; 
  console.log('AXIUM INIT');
  /*$ End context template code $*/
})();
`;
  return content;
}

function createConceptImportTemplates(concepts: PrimedConceptAndProperties[]): string {
  return concepts.map((concept) => createConceptImport(concept)).join('\n');
}

function createConceptImport(concept: PrimedConceptAndProperties): string {
  return `import { create${concept.nameCapitalized}Concept } from './concepts/${concept.name}/${concept.name}.concept';`;
}

function createConceptCreatorTemplates(concepts: PrimedConceptAndProperties[]): string {
  return concepts
    .map((concept) => {
      return createConceptCreator(concept);
    })
    .join(',\n\t\t');
}

function createConceptCreator(concept: PrimedConceptAndProperties): string {
  if (concept.properties) {
    const props = concept.properties.join(', ');
    return `create${concept.nameCapitalized}Concept(${props})`;
  } else {
    return `create${concept.nameCapitalized}Concept()`;
  }
}
/*#>*/
