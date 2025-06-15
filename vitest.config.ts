import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		projects: ['./gateway', './services/*'],
		coverage: {
			provider: 'istanbul',
		},
	},
});
