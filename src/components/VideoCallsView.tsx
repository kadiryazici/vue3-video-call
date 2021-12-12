import { Teleport, Transition, TransitionGroup, defineComponent } from 'vue';
import styled, { ThemeProvider } from 'vue3-styled-components';

import CallIcon from 'virtual:icons/ic/round-call';
import CancelIcon from 'virtual:icons/ic/round-clear';
import { useVideoCall } from '../lib';

const cBase = 'vue3-video-call';
const cView = `${cBase}-view`;
const cCallContainer = `${cBase}-call-container`;

const callProps = { active: Boolean };

const View = styled('div', callProps)`
   display: block;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 1500;
   pointer-events: ${({ active }) => (active ? 'all' : 'none')};
`;

const CallContainer = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   flex-flow: column nowrap;
   margin-left: auto;
   align-items: flex-end;
   justify-content: flex-end;
   padding: 25px 25px 25px 0;
`;

const Call = styled('div', callProps)`
   flex-shrink: 0;
   flex-grow: 0;
   margin-top: 20px;
   box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.239);
   width: ${(props) => (props.active ? '800px' : '450px')};
   height: ${(props) => (props.active ? '500px' : '300px')};
   background-color: #1b1b1b;
   overflow: hidden;
   border-radius: ${(props) => (props.active ? '45px' : '15px')};
   pointer-events: all;
   transition: all 0.5s;
   position: relative;
`;

const CallImage = styled.img`
   width: 100%;
   object-fit: contain;
   height: 100%;
   position: absolute;
   left: 0;
   right: 0;
`;

const CallText = styled('div', callProps)`
   position: absolute;
   top: 10px;
   left: 0;
   right: 0;
   margin: 0 auto;
   display: inline-block;
   width: 100%;
   font-size: ${(props) => (props.active ? '20px' : '16px')};
   transition: all 0.5s;
   max-width: calc(90% - 20px);
   border-radius: 10px;
   padding: 10px;
   backdrop-filter: blur(10px) saturate(1.8);
   background-color: #1d1d1d6f;
   color: #fafafa;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: bold;
   text-align: center;
`;

const CallOverlay = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-flow: row wrap;
`;

const CallBottom = styled.div`
   width: auto;
   display: inline-block;
   align-self: flex-end;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;
   margin-bottom: 20px;
   margin-left: 20px;
   background-color: rgba(37, 37, 37, 0.28);
   backdrop-filter: blur(15px) saturate(1.8);
   border-radius: 100px;
`;

const CallButtonProps = { isAccept: Boolean };
const CallButton = styled('button', CallButtonProps)`
   background-color: transparent;
   border: none;
   outline: none;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50px;
   height: 50px;
   border-radius: 50px;
   font-size: 30px;
   cursor: pointer;
   color: ${(props) => (props.isAccept ? '#35c232' : '#ce3925')};
   margin-right: ${(props) => (props.isAccept ? '5px' : 0)};
   transition: background-color 0.5s;

   &:hover {
      background-color: rgba(139, 139, 139, 0.293);
   }
`;

const CallVideo = styled.video`
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
`;

const animationFrames = [
   {
      transform: 'translateX(100%)',
      opacity: 0
   },
   {
      transform: 'translateX(0%)',
      opacity: 1
   }
];
const animationOptions: KeyframeAnimationOptions = {
   duration: 350,
   easing: 'ease'
};
type AnimationHandler = (el: Element, done: () => void) => void;

const createAnimationHandler =
   (keyframes: Keyframe[], animOptions: KeyframeAnimationOptions): AnimationHandler =>
   (el, done) => {
      if ('animate' in el) {
         const anim = el.animate(keyframes, animOptions);
         anim.onfinish = done;
      } else {
         done();
      }
   };

const handleAnimationEnter = createAnimationHandler(animationFrames, animationOptions);
const handleAnimationLeave = createAnimationHandler([...animationFrames].reverse(), animationOptions);

const pictureAnimationFrames: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];
const handlePictureEnter = createAnimationHandler(pictureAnimationFrames, animationOptions);
const handlePictureLeave = createAnimationHandler([...pictureAnimationFrames].reverse(), animationOptions);

export const VideoCallsView = defineComponent({
   name: 'VideoCallsView',
   inheritAttrs: false,
   setup: () => {
      const context = useVideoCall();

      return {
         handleAnimationEnter,
         handleAnimationLeave,
         handlePictureEnter,
         handlePictureLeave,
         ...context
      };
   },
   emits: {
      update: () => true
   },
   render() {
      const Calls = () => {
         return (
            <TransitionGroup css={false} onEnter={this.handleAnimationEnter} onLeave={this.handleAnimationLeave}>
               {this.activeCalls.map((call) => (
                  <Call key={call.id} active={call.isStarted}>
                     <Transition css={false} onEnter={this.handlePictureEnter} onLeave={this.handlePictureLeave}>
                        {call.isStarted ? ( //
                           <CallVideo autoplay src={call.video} />
                        ) : (
                           <CallImage src={call.image} />
                        )}
                     </Transition>

                     {!call.isStarted && <audio autoplay loop src={call.ringtone} />}

                     <CallOverlay>
                        {!call.isStarted && <CallText active={call.isStarted}>{call.title}</CallText>}
                        <CallBottom>
                           {!call.isStarted && (
                              <CallButton
                                 onClick={() => {
                                    call.isStarted = true;
                                    call.onAccept?.();
                                 }}
                                 isAccept={true}
                              >
                                 <CallIcon />
                              </CallButton>
                           )}

                           <CallButton
                              onClick={() => {
                                 this.endCall(call.id);
                                 call.onDeny?.();
                              }}
                              isAccept={false}
                           >
                              <CancelIcon />
                           </CallButton>
                        </CallBottom>
                     </CallOverlay>
                  </Call>
               ))}
            </TransitionGroup>
         );
      };

      return (
         <Teleport to="body">
            <ThemeProvider theme={{}}>
               <View active={this.activeCalls.length > 0} class={cView}>
                  <CallContainer class={cCallContainer}>{Calls()}</CallContainer>
               </View>
            </ThemeProvider>
         </Teleport>
      );
   }
});
