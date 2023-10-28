<template>
  <button :class="['tab-button', {'tab-button--active': active}]">
	<span>{{ number }}</span>
	<p>{{ text }}</p>
  </button>
</template>

<script>
export default {
	props: {
		number: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		active: {
			type: Boolean
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~assets/scss/colors.scss'
@import '~assets/scss/media.sass'
.tab-button
	width: 100%
	padding: 30px 36px
	background: $darkBlue
	border-radius: 16px
	display: flex
	grid-gap: 16px
	align-items: center
	cursor: pointer
	transition: .3s transform, .3s background

	@media (max-width: $mob)
		padding: 13px 17px

	&:hover
		transform: scale(.98)

	&:focus
		transform: scale(.95) !important

	&--active
		background: $green
		pointer-events: none

	& p
		font-size: clamp(16px, 1.5vw, 26px)

	& span
		font-size: clamp(18px, 2vw, 30px)
		font-weight: 700

</style>