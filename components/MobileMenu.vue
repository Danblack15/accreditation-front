<template>
  <div :class="['mobile-menu', {'mobile-menu--open': isOpen}]" @click="$nuxt.$emit('setMenuFn')">
	<div class="mobile-menu__inner" @click.stop>
		<div class="mobile-menu__close" @click="$nuxt.$emit('setMenuFn')">
			<Icon name="cross" />
		</div>
		<div class="mobile-menu__link" @click="$nuxt.$emit('setMenuFn')">
			<nuxt-link to="/">Сделать запрос</nuxt-link>
		</div>
		<div class="mobile-menu__link" @click="$nuxt.$emit('setMenuFn')">
			<nuxt-link to="howItWork">Как это работает?</nuxt-link>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	name: 'MobileMenu',

	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/assets/scss/colors'
@import '~/assets/scss/media'
.mobile-menu
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100vh
	background: rgba(30, 30, 30, 0)
	z-index: 5
	pointer-events: none
	transition: .3s background
	
	@media (min-width: $mob + 1)
		display: none

	&--open
		background: rgba(30, 30, 30, 0.45)
		pointer-events: all

		.mobile-menu__inner
			transform: translateY(0)

	&__inner
		background: $black
		padding: 64px 0
		display: flex
		flex-direction: column
		align-items: center
		grid-gap: 36px
		font-size: 24px
		transform: translateY(-101%)
		transition: .3s transform

	&__close
		position: absolute
		top: 30px
		right: 30px

</style>