/** @type {import('@sveltejs/kit').Config} */

import staticAdapter from '@sveltejs/adapter-static'

const config = {
	kit: {
		adapter: staticAdapter()
	}
};

export default config;