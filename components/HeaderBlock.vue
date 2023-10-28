<template>
	<header class="header">
		<div class="container header__inner">
			<Icon name="logoSvg" class="header__logo"/>
			<nuxt-link to="/" :class="['header__green-link link-opacity', {'link-mobile': $nuxt.$route.path == '/howItWork'}]">Создать запрос</nuxt-link>
			<nuxt-link to="howItWork" :class="['link-opacity', {'link-mobile': $nuxt.$route.path == '/'}]">Как это работает</nuxt-link>
		</div>
	</header>
</template>

<script>
import Icon from './Icon';

export default {
	name: 'HeaderBlock',

	data() {
		return {
			
		};
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

		@media (max-width: $tab)
			display: none

		&.link-mobile
			display: block !important

	&__green-link
		color: $green

</style>