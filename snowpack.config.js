/** @format */

// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		src: '/',
	},
	plugins: [
		/* ... */
		'@snowpack/plugin-postcss',
		'@snowpack/plugin-optimize',
	],
	packageOptions: {
		/* ... */
	},
	devOptions: {
		open: 'none',
	},
	buildOptions: {
		out: 'dist',
	},
};
