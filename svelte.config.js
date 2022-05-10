import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
					out: 'docs',
					assets: 'docs',
					pages: 'docs',
					fallback: null,
					precompress: false
		}),
		
		prerender: {
			default: true
		},

		trailingSlash: 'never'
	}
};

export default config;