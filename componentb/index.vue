<template lang="pug">
    .test b
</template>


<script>
import componentc from '../componentc'
import componentd from '../componentd'

export default {
    name: 'beee',
    components: {
        componentc,
        componentd,
    }
}
</script>

<style lang="scss" scoped>
    @import 'importer.scss';
    .test {
        background: $ha;
    }
</style>
