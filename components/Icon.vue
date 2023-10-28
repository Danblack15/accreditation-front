<template>
  <div v-html="src" class="icon"></div>
</template>

<script>
export default {
	name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        src() {
            const src = require(`assets/img/svg/${this.name}.svg?raw`)
            return src
        }
    }
}
</script>

<style lang="sass" scoped>
</style>