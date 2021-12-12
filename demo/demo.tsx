import { createApp, defineComponent } from 'vue';
import styled, { ThemeProvider } from 'vue3-styled-components';

import CallIcon from 'virtual:icons/ic/round-call';
import JohnCenaVideo from './assets/john_cena_call.mp4';
import Ringtone from './assets/ringtone.mp4';
import TheRockImage from './assets/rock.gif';
import { VideoCallsView } from '../src/components/VideoCallsView';
import { createVideoCallPlugin } from '../src/plugin';
import { useVideoCall } from '../src/lib';

const Container = styled.div`
   display: block;
   width: 100%;
   height: 100%;
   padding: 50px;
`;

const CallButton = styled.button`
   padding: 10px 15px;
   background-color: #1cca3c;
   color: white;
   font-family: Arial, Helvetica, sans-serif;
   border: none;
   font-size: 20px;
   border-radius: 15px;
   box-shadow: 0px 0px 5px 1px rgb(14, 14, 14, 0.2);
   display: inline-flex;
   align-items: center;
   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }
`;

const App = defineComponent({
   setup() {
      const videoCall = useVideoCall();
      const call = () => {
         videoCall.call({
            image: TheRockImage,
            video: JohnCenaVideo,
            ringtone: Ringtone,
            title: 'The Rock is Calling'
         });
      };
      return {
         call
      };
   },
   render() {
      return (
         <ThemeProvider theme={{}}>
            <Container>
               <CallButton onClick={this.call}>
                  <CallIcon style={{ marginRight: '10px' }} /> Call
               </CallButton>
               <VideoCallsView />
            </Container>
         </ThemeProvider>
      );
   }
});

const app = createApp(App);
const videoCall = createVideoCallPlugin();

app.use(videoCall);
app.mount('#app');
