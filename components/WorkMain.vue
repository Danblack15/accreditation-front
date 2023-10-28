<template>
  <section class="work-main">
	<div class="work-main__tabs-buttons">
		<div 
			v-for="(text, index) in list"
			:key="String(text + index)"
			@click="changeTab(index + 1)"
		>
			<TabButton 
				:text="text"
				:number="`${index + 1}.`"
				:active="getActiveIndex == (index + 1)"
			/>
			<div 
				:class="['work-main__tab-mobile', {'work-main__tab-mobile--active': getActiveIndex == (index + 1)}]"
				:key="String(listText[index] + index)"
			>
				<div class="work-main__tab-mobile-inner">
					<p>{{ listText[index] }}</p>
				</div>
			</div>
		</div>
	</div>
	<div class="work-main__tabs-contents">
		<div 
			:class="['work-main__tab', {'work-main__tab--active': getActiveIndex == (index + 1)}]" 
			v-for="(text, index) in listText" 
			:key="String(text + index)"
		>
			<p>{{ text }}</p>
		</div>
	</div>
  </section>
</template>

<script>
export default {
	name: 'WorkMain',

	data() {
		return {
			list: [
				'Создание запроса',
				'Выбор категории',
				'Сопоставление ГОСТов',
				'Ознакомление и выгрузка'
			],
			listText: [
				'После того, как вы напишете название товара, наш мудрый и быстрый искусственный интеллект отправится в путешествие по огромной базе данных и подберёт категории, к которым потенциально может принадлежать ваш товар',
				'После того, как вы напишете название товара, наш мудрый',
				'После того, как вы напишете название товара, наш мудрый и быстрый искусственный интеллект отправится в путешествие по огромной базе данных и подберёт категории, к которым потенциально может принадлежать ваш товар После того, как вы напишете название товара, наш мудрый и быстрый искусственный интеллект отправится в путешествие по огромной базе данных и подберёт категории, к которым потенциально может принадлежать ваш товар',
				'После того, как вы напишете название товара, наш мудрый и быстрый искусственный интеллект'
			],
			active: 1
		}
	},

	methods: {
		changeTab(index) {
			this.active = index;
		}
	},

	computed: {
		getActiveIndex() {
			return this.active;
		}
	}

}
</script>

<style lang="sass" scoped>
@import '~assets/scss/colors.scss'
@import '~assets/scss/media.sass'
.work-main
	margin-top: 44px
	display: flex
	grid-gap: 40px

	@media (max-width: $tab)
		grid-gap: 20px

	&__tabs-buttons
		display: flex
		flex-direction: column
		grid-gap: 20px
		width: 100%
		min-width: 350px
		max-width: 544px

		@media (max-width: $tab)
			max-width: 100%

	&__tabs-contents
		flex-grow: 1
		width: 100%

		@media (max-width: $tab)
			display: none

	&__tab
		background: $darkBlue
		border-radius: 16px
		padding: 36px 40px
		height: 100%
		display: none
		transform: translateX(50%)
		opacity: 0

		@media (max-width: $tab)
			display: none !important

		&--active
			display: block
			animation-name: active-card
			animation-duration: .5s
			animation-fill-mode: forwards

			@keyframes active-card
				0%
					opacity: 0
					transform: translateX(50%)
				100%
					opacity: 1
					transform: translateX(0)

		& p
			font-size: clamp(12px, 2vw, 20px)
			line-height: 1.2

	&__tab-mobile
		display: grid
		grid-template-rows: 0fr
		transition: .3s grid-template-rows, .3s margin-top
		overflow: hidden

		@media (min-width: $tab + 1)
			display: none !important

		&--active
			grid-template-rows: 1fr
			margin-top: 12px

			.work-main__tab-mobile-inner
				padding: 36px 40px

				@media (max-width: $mob)
					padding: 17px 18px

		& p
			font-size: 12px
			line-height: 1.2
			

	&__tab-mobile-inner
		background: $darkBlue
		border-radius: 16px
		min-height: 0
		padding: 0 40px
		transition: .3s padding

		@media (max-width: $mob)
			padding: 0 18px
</style>