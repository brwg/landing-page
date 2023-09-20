// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    fs: {
      // Permitir acesso à pasta 'public'
      strict: false,
    },
  },
};
