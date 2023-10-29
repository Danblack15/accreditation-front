<template>
	<div class="categories-list">
		<div class="categories-list__inner">
			<p class="categories-list__title">По вашему запросу найдено <span>{{ categories.length }}</span> категорий</p>
			<div class="categories-list__wrapper" v-if="categories">
				<div
					v-for="category in categories" 
					:key="category"
					class="categories-list__item-wrapper"
				>
					<input type="radio" name="category" :id="category" @change="setActiveCategory">
					<label 
						class="categories-list__item"
						:for="category"
					>
						{{ category }}
					</label>
				</div>
			</div>
		</div>
		<div class="categories-list__buttons">
			<div @click="setStep(false)" class="categories-list__button">
				<ButtonUI grey>Назад</ButtonUI>
			</div>
			<div @click="finalStep" class="categories-list__button">
				<ButtonUI>Продолжить</ButtonUI>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			selectedCategory: null,
		}
	},

	methods: {
		...mapActions({
			setStep: 'items/setNewStep',
			getRecomendation: 'items/getRecomendation'
		}),

		setActiveCategory(e) {
			this.selectedCategory = e.target.id
		},

		finalStep() {
			if (!this.selectedCategory) return;

			this.setStep(true);
			this.getRecomendation(this.selectedCategory);
		}
	},

	computed: {
		...mapGetters({
			categories: 'items/getAllCategories',
		})
	}
}
</script>

<style lang="sass">
@import '~/assets/scss/colors'
@import '~/assets/scss/media'

.categories-list
	display: flex
	flex-direction: column
	grid-gap: 40px
	margin-top: 40px

	@media (max-width: $tab-sm)
		grid-gap: 20px

	&__inner
		background: $darkBlue
		border-radius: 16px
		padding: 47px

		@media (max-width: $tab-sm)
			padding: 32px 16px

	&__title
		font-size: clamp(20px, 5vw, 40px)	
		font-weight: 500

		& span
			font-weight: 700

	&__wrapper
		margin-top: 40px
		display: flex
		grid-gap: 24px
		flex-wrap: wrap

		@media (max-width: $tab-sm)
			grid-gap: 16px
			margin-top: 24px

		& input
			display: none

			&:checked
				& ~
					.categories-list__item
						background: $green-hover
						color: $white		

	&__item
		display: block
		background: #2C2C2E
		border-radius: 16px
		padding: 14px 44px
		color: $grey
		font-size: clamp(12px, 2vw, 20px)
		max-width: 672px
		cursor: pointer
		transition: .3s background, .3s color

		@media (max-width: $tab-sm)
			padding: 14px 24px

		&:hover
			background: $dopBlack
			color: $white

	&__buttons
		display: flex
		justify-content: space-between

	&__button
		width: 100%

		& .btn
			@media (max-width: $tab)
				max-width: 294px

			@media (max-width: $tab-sm)
				max-width: 161px


		&:last-child
			display: flex
			justify-content: flex-end
</style>