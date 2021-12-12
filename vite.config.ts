import * as path from 'node:path';

import DTS from 'vite-plugin-dts';
import Icons from 'unplugin-icons/vite';
import Vue from '@vitejs/plugin-vue';
import VueJSX from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

const root = process.cwd();
const mode = process.env.MODE as 'build' | 'demo';

const buildConfig = defineConfig({
   root,
   plugins: [
      //
      Vue(),
      Icons({
         compiler: 'vue3'
      }),
      DTS({
         outputDir: 'dist'
      })
   ],
   build: {
      lib: {
         entry: path.resolve(root, 'src', 'lib.ts'),
         name: 'vue3-video-call',
         formats: ['es', 'umd']
      },
      rollupOptions: {
         external: ['vue', 'vue3-styled-components']
      }
   }
});

const demoConfig = defineConfig({
   root: path.join(root, 'demo'),
   base: 'vue3-video-call/',
   plugins: [
      VueJSX(), //
      Vue(),
      Icons({
         compiler: 'vue3'
      })
   ],
   build: {
      emptyOutDir: true,
      outDir: path.join(root, 'dist-demo')
   }
});

export default mode === 'demo' ? demoConfig : buildConfig;
