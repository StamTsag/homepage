import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

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

		trailingSlash: 'never',

		vite: {
			resolve: {
				alias: {
					src: resolve('./src'),
					styles: resolve('./src/styles'),
					interfaces: resolve('./src/interfaces'),
					lib: resolve('./src/lib')
				}
			}
		}
	},
	preprocess: preprocess({
		postcss: true,
		typescript: {
			tsconfigFile: true
		}
	})
};

export default config;