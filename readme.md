## A `Call` Library for Vue3

[![Who Is Calling](https://img.shields.io/npm/v/who-is-calling)](https://npmjs.com/package/who-is-calling)

What is the purpose of this library? Nothing.

## Installation

You need to install `vue@3` and `vue3-styled-components` because this package uses `vue3-styled-components` sorry.

```
npm install vue3-video-call vue3-styled-components
```

```
pnpm add vue3-video-call vue3-styled-components
```

```
yarn add vue3-video-call vue3-styled-components
```

### Usage

Import and use the plugin.

```tsx
import { createApp } from 'vue;
import { createVideoCallPlugin } from 'who-is-calling';
import App from './App';

const app = createApp(App);
const videoCall = createVideoCallPlugin();

app.use(videoCall);
app.mount('#app');
```

Add `WhoIsCallingView` component to `App.vue`;

`App.vue`

```html
<template>
   <VideoCallsView />
</template>

<script setup>
   import { VideoCallsView } from 'vue3-video-call';
</script>
```

## Creating calls.

`SomeVueFile.vue`

```html
<template>
   <button @click="startCall">Call</button>
</template>

<script setup>
   import { useVideoCall } from 'vue3-video-call';

   const { call } = useVideoCall();

   function startCall() {
      call({
         image: 'image_url',
         video: 'video_url',
         ringtone: 'ringtone_url',
         title: 'title',
         onAccept: () => {} || undefined,
         onDeny: () => {} || undefined
      });
   }
</script>
```