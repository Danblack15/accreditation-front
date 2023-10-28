<template>
	<div class="team">
		<h1>Команда разработчиков</h1>
		<section class="team__wrapper">
			<div 
				class="team__item" 
				v-for="person in team" :key="person.title"
			>
				<div class="team__item-img">
					<img :src="require(`~/assets/img/team/${person.image}.png`)" />
				</div>
				<div>
					<p>{{ person.title }}</p>
					<span>{{ person.desc }}</span>
				</div>
			</div>
		</section>
		<div class="team__circles">
			<div class="team__circle team__circle--big"></div>
			<div class="team__circle team__circle--mid"></div>
			<div class="team__circle team__circle--small"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			team: [
				{
					title: 'Федоров Даниил',
					desc: 'Full Stack разработчик',
					image: 't1'
				},
				{
					title: 'Юров Максим',
					desc: 'UX | UI Designer',
					image: 't2'
				},
				{
					title: 'Агишин Кирилл',
					desc: 'Full Stack разработчик',
					image: 't3'
				},
				{
					title: 'Епишин Кирилл',
					desc: 'Dev Ops',
					image: 't4'
				},
			]
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~assets/scss/colors.scss'
@import '~assets/scss/media.sass'
.team
	margin-top: 100px

	@media (max-width: $mob)
		margin-top: 55px

	& h1
		text-transform: uppercase
		text-align: center

		@media (max-width: $mob)
			text-align: left

	&__wrapper
		display: flex
		justify-content: space-evenly
		flex-wrap: wrap
		grid-gap: 20px
		margin-top: 56px
		// margin-bottom: 100px

		@media (max-width: $mob)
			flex-direction: column
			align-items: center
			grid-gap: 24px
			margin-top: 24px

	&__item
		text-align: center

		@media (max-width: $mob)
			max-width: 342px
			width: 100%
			display: flex
			grid-gap: 16px
			align-items: center

		& p
			font-size: clamp(22px, 2vw, 40px)
			font-weight: 600
			margin: 32px 0 16px

			@media (max-width: $mob)
				margin-bottom: 8px
				text-align: left

		& span
			font-size: clamp(18px, 2vw, 24px)
			color: $grey

			@media (max-width: $mob)
				text-align: left
				display: block

	&__item-img
		& img
			aspect-ratio: 1

			@media (max-width: $mob)
				width: 128px

	&__circles
		position: relative
		height: 60vh

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
			right: 5%

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
			top: -400px
			left: -10%

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