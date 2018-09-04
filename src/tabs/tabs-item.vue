<template>
    <div class="g-tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-item',
    props: {},
}
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';

.g-tabs-item{
    @include fontLineColor();
    padding: 6px 12px;
}
</style>


