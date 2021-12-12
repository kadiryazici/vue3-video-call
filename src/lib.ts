import { VideoCallInjectionKey } from './composables';
import { inject } from 'vue';

export { VideoCallsView } from './components/VideoCallsView';
export { createVideoCallPlugin } from './plugin/index';
export const useVideoCall = () => inject(VideoCallInjectionKey)!;
