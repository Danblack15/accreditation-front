<template>
	<a :href="link" v-if="link" class="btn">
		<slot></slot>
	</a>

	<button v-else class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		link: {
			type: String
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/assets/scss/colors'
@import '~/assets/scss/media'
.btn
	padding: 27px 0
	background: $green
	width: 100%
	max-width: 398px
	cursor: pointer
	font-size: clamp(16px, 2vw, 24px)
	border-radius: 16px
	font-family: 'Gilroy', sans-serif
	font-weight: 600
	transition: .3s background, .3s transform

	@media (max-width: $mob)
		padding: 12px 0
		border-radius: 7px

	&:hover
		background: $green-hover
		transform: scale(0.95)

</style>