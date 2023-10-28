export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'accreditation',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		css: [
			`~assets/scss/mixins.sass`
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~assets/scss/colors.scss',
		`~assets/scss/reset.sass`,
		`~assets/scss/fonts/gilroy.sass`,
		`~assets/scss/body.sass`,
		`~assets/scss/config.sass`,
		`~assets/scss/heading.sass`,
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/svg'
	],

	styleResources: {
		scss: ['./assets/scss/*.sass']
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			sass: {
				implementation: require('sass'),
			},
			scss: {
				implementation: require('sass'),
			},
		},
	}
}
