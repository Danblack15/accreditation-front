<template>
  <div class="input-wrapper">
	<form 
		:class="['form input-wrapper__item', {'input-wrapper__item--anim': step == 1}]" 
		@submit.prevent="inputText.trim().length > 0 ? getCategories(inputText) : null"
		v-if="step == 1"
	>
		<div class="form__input-wrapper">
			<input 
				type="text" 
				id="search" 
				name="search" 
				class="form__input" 
				@focus="setLabelTop(true)" 
				@focusout="setLabelTop(false)"
				@change="changeInput"
				v-model="inputText"
			/>
			<label 
				for="search" 
				:class="['form__label', {'form__label--top': labelTop || labelTopSize}]"
			>как называется ваш товар</label>
		</div>
		<ButtonUI class="form__btn">Начать</ButtonUI>
	</form>
	<CategoriesList v-if="step == 2" :class="['input-wrapper__item', {'input-wrapper__item--anim': step == 2}]" />
	<Recomendation v-if="step == 3" :class="['input-wrapper__item', {'input-wrapper__item--anim': step == 3}]" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: 'SearchInput',

	data() {
		return {
			labelTop: false,
			labelTopSize: false,
			inputText: ''
		}
	},

	methods: {
		setLabelTop(isTop) {
			this.labelTop = isTop;
		},

		changeInput(e) {
			if (e.target.value.length > 0)
				this.labelTopSize = true;
			else
				this.labelTopSize = false;
		},

		...mapActions({
			getCategories: 'items/getCategories',
		})
	},

	computed: {
		...mapGetters({
			step: 'items/getStep'
		})
	}
}
</script>

<style lang="sass" scoped>
@import '~/assets/scss/colors'
@import '~/assets/scss/media'

.input-wrapper
	&__item
		transform: translateX(100%)
		opacity: 0

		&--anim
			animation-name: anim
			animation-duration: .5s
			animation-fill-mode: forwards
			animation-timing-function: ease

			@keyframes anim 
				0%
					transform: translateX(50%)
					opacity: 0
				100%
					transform: translateX(0%)
					opacity: 1
.form
	position: relative
	display: flex
	grid-gap: 40px
	margin-top: 88px

	@media (max-width: $desktop-sm)
		grid-gap: 20px

	@media (max-width: $mob)
		margin-top: 32px
		grid-gap: 11px

	@media (max-width: $tab)
		flex-direction: column
		align-items: center

	&__input-wrapper
		position: relative
		width: 100%

	&__input
		padding: 27px 38px
		border-radius: 16px
		background: $darkBlue
		font-size: clamp(16px, 2vw, 24px)
		width: 100%

		@media (max-width: $mob)
			padding: 16px
			border-radius: 7px

	&__label
		position: absolute
		display: block
		top: 50%
		left: 38px
		transform: translateY(-50%)
		color: $grey
		font-size: clamp(16px, 2vw, 24px)
		transition: .3s all
		background: $darkBlue
		border-radius: 16px
		pointer-events: none

		&--top
			top: 0
			font-size: 16px

	&__btn
		@media (max-width: $mob)
			width: 200px
</style>