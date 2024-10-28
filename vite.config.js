import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        teams: resolve(__dirname, 'src/teams/index.html'),
        team: resolve(__dirname, 'src/team/index.html'),
        teamplayers: resolve(
          __dirname,
          'src/teamplayers/index.html'
        ),
        news: resolve(__dirname,'src/news/index.html')
      }
    },
  },
});
