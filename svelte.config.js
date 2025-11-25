/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	},
	preprocess: vitePreprocess()
};

export default config;