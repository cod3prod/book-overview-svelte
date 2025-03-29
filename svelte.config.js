import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './src/assets',
			$styles: './src/styles',
			$routes: './src/routes',
			$lib: './src/lib',
			$components: './src/components'
		}
	}
};

export default config;
