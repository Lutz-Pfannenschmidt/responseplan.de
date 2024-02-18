import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
    integrations: [alpinejs(), tailwind()],
    markdown: {
        remarkPlugins: [remarkToc],
        rehypePlugins: [],
    },
});