<template>
	<header class="header">
		<div class="container header__inner">
			<MobileMenu :isOpen="getIsOpen" />
			<Icon name="logoSvg" class="header__logo" />
			<nuxt-link to="/" class="header__green-link">Создать запрос</nuxt-link>
			<nuxt-link to="howItWork">Как это работает</nuxt-link>
			<div class="header__menu" @click="setMenu(true)">
				<Icon name="menu" />
			</div>
		</div>
	</header>
</template>

<script>
import Icon from './Icon';

export default {
	name: 'HeaderBlock',

	data() {
		return {
			isOpen: false
		};
	},

	created() {
		this.$nuxt.$on('setMenuFn', () => this.setMenu(false))
	},

	methods: {
		setMenu(value) {
			this.isOpen = value;
		},

		fn() {
			console.log('emit');
		}
	},

	computed: {
		getIsOpen() {
			return this.isOpen;
		}
	},

	components: { Icon },
}
</script>

<style lang="sass" scoped>
@import '~assets/scss/colors'
@import '~/assets/scss/media'

.header
	width: 100%
	padding: 15px 0
	max-width: 1920px

	@media (max-width: $mob)
		background: $dopBlack
		padding: 30px 0

	&__inner
		display: flex
		justify-content: space-between
		align-items: center

	& a
		font-size: clamp(16px, 2vw, 20px)
		font-weight: 500
		transition: .3s color

		@media (max-width: $mob)
			display: none

		&:nth-child(2)			
			&:hover
				color: $white
		&:last-child
			&:hover
				color: $green
			

		// &.link-mobile
		// 	display: block !important

	&__green-link
		color: $green

	&__menu
		@media (min-width: $mob + 1)
			display: none

</style>