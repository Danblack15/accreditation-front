<template>
	<div class="index-page">
		<div class="container">
			<div class="index-page__title">
				<h3>система по определению </h3>
				<h1>критериев безопасности товаров</h1>
				<h3>для участников рынка</h3>
			</div>
			<SearchInput />
			<p class="index-page__hint">Мы помогаем <span>участникам рынка</span> справиться с подготовкой товара к <span>сертификации</span></p>
		</div>
		<button @click="fetchData()">Click</button>
		<div class="index-page__circles">
			<div class="index-page__circle index-page__circle--big"></div>
			<div class="index-page__circle index-page__circle--mid"></div>
			<div class="index-page__circle index-page__circle--small"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: 'IndexPage',

	methods: {
		...mapActions({
			addNewItem: "items/addNewItem",
			fetchData: "items/fetchData"
		})
	},

	computed: {
		...mapGetters({
			items: "items/getAllitems",
			isLoading: "items/getLoading",
			allData: "items/getAllData"
		})
	},
}
</script>

<style lang="sass" scoped>
@import '~/assets/scss/colors'
@import '~/assets/scss/media'

.index-page
	padding-top: 88px

	@media (max-width: $mob)
		padding-top: 56px

	&__title
		text-transform: uppercase
		display: flex
		flex-direction: column
		grid-gap: 16px

		@media (max-width: $tab)
			flex-direction: column
			align-items: center

		@media (max-width: $mob)
			grid-gap: 8px

		& h1
			text-align: center

		& h3
			color: $grey

			@media (max-width: $tab)
				text-align: center !important
			
			&:last-child
				text-align: right
				
	&__hint
		font-size: clamp(16px, 2vw, 32px)
		max-width: 705px
		color: $grey
		line-height: 1.2
		margin-top: 36px

		@media (max-width: $tab)
			text-align: center
			margin: 0 auto
			margin-top: 36px

		@media (max-width: $mob)
			margin-top: 24px
			max-width: 257px

		& span
			font-weight: 600
			color: inherit

	&__circles
		position: relative
		height: 500px
		margin: 100px 0

		@media (max-width: $tab)
			display: none

	&__circle
		position: absolute
		background: $dark-green
		border-radius: 50%
		opacity: .6
		aspect-ratio: 1

		&--big
			width: 480px
			left: -10px

			animation-name: big
			animation-duration: 11s
			animation-iteration-count: infinite
			animation-timing-function: ease-in

			@keyframes big
				50%
					transform: translate(80%, 40%)
				100%
					transform: translate(0, 0)
			
		&--mid
			width: 233px
			left: 50%

			animation-name: mid
			animation-duration: 7s
			animation-iteration-count: infinite
			animation-timing-function: ease-out

			@keyframes mid
				50%
					transform: translate(-70%, 30%)
				100%
					transform: translate(0, 0)
			
		&--small
			width: 106px
			right: 20%

			animation-name: small
			animation-duration: 5s
			animation-iteration-count: infinite
			animation-timing-function: ease

			@keyframes small
				50%
					transform: translate(50%, 50%)
				100%
				transform: translate(0, 0)

</style>