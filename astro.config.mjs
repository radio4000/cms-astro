import {defineConfig} from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/guides/server-side-rendering/
	output: 'server',
	// https://docs.astro.build/en/guides/integrations-guide/cloudflare/
	adapter: cloudflare()
})
