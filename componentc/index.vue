<template lang="pug">
    .test c
</template>


<script>
import componente from '../componente'
import componentf from '../componentf'
import componentg from '../componentg'

export default {
    name: 'c',
    components: {
        componente,
        componentf,
        componentg
    }
}
</script>

<style lang="scss" scoped>
    @import 'importer.scss';
    .test {
        background: $ha;
    }
</style>
