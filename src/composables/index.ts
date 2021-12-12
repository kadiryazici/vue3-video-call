import { InjectionKey } from 'vue';

export interface IVideoCall {
   /**
    * Image url of the person who is calling
    */
   image: string;
   /**
    * Video url of the person who is calling
    */
   video: string;
   /**
    * Title of the call
    */
   title: string;
   /**
    * Audio url when ringing
    */
   ringtone: string;
   /**
    * The function that runs when the user accepts the call
    */
   onAccept?: () => void;
   /**
    * The function that runs when the user denies the call
    */
   onDeny?: () => void;
}

export interface VideoCall extends IVideoCall {
   /**
    * Id of call
    */
   id: number;
   /**
    * True when call is accepted, false when calling
    */
   isStarted: boolean;
}

export interface VideoCallStore {
   call: (context: IVideoCall) => VideoCall;
   endCalls: () => void;
   endCall: (id: number) => void;
   activeCalls: VideoCall[];
}

export const VideoCallInjectionKey: InjectionKey<VideoCallStore> = Symbol();
