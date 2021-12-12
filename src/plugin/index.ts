import { Plugin, reactive } from 'vue';
import { VideoCall, VideoCallInjectionKey, VideoCallStore } from '../composables';

export const createVideoCallPlugin = (): Plugin => ({
   install(app) {
      let id = 0;

      const activeCalls: VideoCallStore['activeCalls'] = reactive([]);
      const call: VideoCallStore['call'] = (context) => {
         const call: VideoCall = { id: ++id, ...context, isStarted: false };
         activeCalls.push(call);
         return call;
      };
      const endCalls: VideoCallStore['endCalls'] = () => (activeCalls.length = 0);
      const endCall: VideoCallStore['endCall'] = (id) => {
         const index = activeCalls.findIndex((call) => call.id === id);
         if (index >= 0) {
            activeCalls.splice(index, 1);
         }
      };

      app.provide(VideoCallInjectionKey, { activeCalls, call, endCall, endCalls });
   }
});
