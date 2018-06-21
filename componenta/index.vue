<template lang="pug">
    .test a
        componentb
        componentc
</template>

<script>
import componentb from '../componentb'
import componentc from '../componentc'
import componentd from '../componentd'
import componente from '../componente'
import componentf from '../componentf'
import componentg from '../componentg'
import componenth from '../componenth'
import componenti from '../componenti'
import componentj from '../componentj'
import componentk from '../componentk'
import componentl from '../componentl'
import componentm from '../componentm'

export default {
    name: 'app',
    components: {
        componentb,
        componentc,
        componentd,
        componente,
        componentf,
        componentg,
        componenth,
        componenti,
        componentj,
        componentk,
        componentl,
        componentm
    }
}
</script>

<style lang="scss" scoped>
    @import 'importer.scss';
    .test {
        background: $ha;
    }
</style>
