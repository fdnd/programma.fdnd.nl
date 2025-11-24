import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ status, path, referrer, error }) => {
        console.warn(`Prerender error on ${path}:`, error);
        // return true to ignore the error and continue prerendering
        return true;
      }
    }
  }
};

export default config;