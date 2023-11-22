/*<$
For the framework Stratimux and the Web Socket Client Concept, generate a principle that will establish a connection with a client.
That will notify new client's of its own semaphore, then pass new action added to the state action que.
As well as receive actions from the client, the parse and dispatch them into the server's action stream.
$>*/
/*<#*/
import { Subscriber } from 'rxjs';
import { ServerState } from '../server/server.concept';
import {
  Action,
  Concepts,
  PrincipleFunction,
  UnifiedSubject,
  axiumRegisterStagePlanner,
  getUnifiedName,
  selectUnifiedState,
} from 'stratimux';
import _ws from 'express-ws';
import { webSocketClientSetServerSemaphore } from '../webSocketClient/qualities/setServerSemaphore.quality';
import { WebSocketServerState } from './webSocketServer.concept';

export const webSocketServerPrinciple: PrincipleFunction =
  (observer: Subscriber<Action>, cpts: Concepts, concepts$: UnifiedSubject, semaphore: number) => {
    const initialServerState = selectUnifiedState(cpts, semaphore) as ServerState;
    const server = initialServerState.server;
    const socket = _ws(server);
    socket.app.ws('/axium', (ws, req) => {
      ws.send(JSON.stringify(webSocketClientSetServerSemaphore({semaphore})));
      const plan = concepts$.stage('Web Socket Server Message Que Planner', [
        (concepts, dispatch) => {
          const name = getUnifiedName(concepts, semaphore);
          if (name) {
            dispatch(axiumRegisterStagePlanner({conceptName: name, stagePlanner: plan}), {
              iterateStage: true
            });
          } else {
            plan.conclude();
          }
        },
        (concepts, __) => {
          const state = selectUnifiedState<WebSocketServerState>(concepts, semaphore);
          if (state) {
            if (state.actionQue.length > 0) {
              const que = [...state.actionQue];
              state.actionQue = [];
              que.forEach(action => {
                console.log('SENDING', action);
                action.conceptSemaphore = (state as WebSocketServerState).clientSemaphore;
                ws.send(JSON.stringify(action));
              });
              concepts$.next(concepts);
            }
          } else {
            plan.conclude();
          }
        }
      ]);
      ws.on('message', (message) => {
        const act = JSON.parse(`${message}`);
        // console.log('MESSAGE', act);
        if (Object.keys(act).includes('type')) {
          observer.next(act);
        }
      });
    });
  };