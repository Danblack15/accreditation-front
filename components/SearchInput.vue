<template>
  <div class="input-wrapper">
	<form action="search" class="form">
		<div class="form__input-wrapper">
			<input 
				type="text" 
				id="search" 
				name="search" 
				class="form__input" 
				@focus="setLabelTop(true)" 
				@focusout="setLabelTop(false)"
				@change="changeInput"
			/>
			<label 
				for="search" 
				:class="['form__label', {'form__label--top': labelTop || labelTopSize}]"
			>как называется ваш товар</label>
		</div>
		<ButtonUI class="form__btn">Начать</ButtonUI>
	</form>
  </div>
</template>

<script>
export default {
	name: 'SearchInput',

	data() {
		return {
			labelTop: false,
			labelTopSize: false
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
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/assets/scss/colors'
@import '~/assets/scss/media'
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