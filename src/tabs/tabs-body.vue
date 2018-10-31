<template>
    <div class="g-tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-body',
    props: {},
    inject: ['EventHub'],
}
</script>

<style lang="scss" scoped>
@import '../assist/style/_var.scss';

.g-tabs-body{
    padding: 0.6em 1em;    
}
</style>


