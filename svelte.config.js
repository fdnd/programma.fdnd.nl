/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-auto'

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

// /** @type {import('@sveltejs/kit').Config} */

// import staticAdapter from '@sveltejs/adapter-static'

// const config = {
// 	kit: {
// 		adapter: staticAdapter({strict: false})
// 	}
// };

// export default config;