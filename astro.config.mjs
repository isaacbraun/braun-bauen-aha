import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    integrations: [alpine()],
    output: 'hybrid',
    adapter: netlify(),
});
