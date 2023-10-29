<template>
	<div class="categories-list recomendations">
		<div class="categories-list__inner">
			<p class="categories-list__title">Критерии безопасности товаров</p>
			<p class="recomendations__category">{{ activeCategory }}</p>
			<div class="recomendations__text-wrapper">
				<p>Рекомендации по методам проверки</p>
				<p v-if="recomendation">{{ recomendation }}</p>
			</div>
		</div>
		<div class="categories-list__buttons">
			<div @click="setStep(false)" class="categories-list__button">
				<ButtonUI grey>Назад</ButtonUI>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	methods: {
		...mapActions({
			setStep: 'items/setNewStep',
		}),
	},

	computed: {
		...mapGetters({
			categories: 'items/getAllCategories',
			activeCategory: 'items/getActiveCategory',
			recomendation: 'items/getRecomendation'
		})
	}
}
</script>

<style lang="sass">
@import '~/assets/scss/colors'
@import '~/assets/scss/media'
.recomendations
	.categories-list__button
		justify-content: flex-start !important

	&__category
		margin-top: 40px
		display: flex
		align-items: center
		grid-gap: 12px
		font-size: clamp(12px, 2vw, 28px)

		&::after
			content: 'категория'
			display: block
			padding: 2px 12px
			background: $green-hover
			border-radius: 1000px

	&__text-wrapper
		margin-top: 12px
		background: #2C2C2E
		border-radius: 16px
		padding: 24px

		@media (max-width: $tab-sm)
			padding: 16px

		& p
			&:first-child
				font-size: clamp(10px, 2vw, 20px)

			&:last-child
				margin-top: 12px
				font-size: clamp(12px, 2vw, 16px)
				line-height: 1.1
				
</style>