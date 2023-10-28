<template>
	<div class="body-inner">
		<HeaderBlock />
		<main>
			<nuxt />
		</main>
		<!-- <FooterBloack /> -->
	</div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.body-inner
	display: flex
	flex-direction: column
	align-items: center
</style>