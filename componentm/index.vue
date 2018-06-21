<template lang="pug">
    .test
</template>

<script>
import componentf from '../componentf'

export default {
    name: 'h',
    components: {
        componentf
    }
}
</script>

<style lang="scss" scoped>
    @import 'importer.scss';
    .test {
        background: $ha;
    }
</style>
