<template>
    <div class="g-tabs-head">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-head',
    props: {},
    inject: ['EventHub'],
}
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';

.g-tabs-head{
    @include flex();
}
</style>


