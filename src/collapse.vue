<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-collapse',
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
@import './assist/style/scssMixin.scss';
$border-color: #ccc;
$border-radius: 4px;

.g-collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>

