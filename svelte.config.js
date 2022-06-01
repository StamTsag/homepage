import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            out: 'build',
            assets: 'build',
            pages: 'build',
            fallback: null,
            precompress: false,
        }),

        prerender: {
            default: true,
        },

        trailingSlash: 'never',

        vite: {
            resolve: {
                alias: {
                    src: resolve('./src'),
                    interfaces: resolve('./src/interfaces'),
                    lib: resolve('./src/lib'),
                },
            },
        },
    },
    preprocess: preprocess({
        postcss: true,
        typescript: {
            tsconfigFile: true,
        },
    }),
};

export default config;
