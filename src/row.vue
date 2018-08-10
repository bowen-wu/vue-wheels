<template>
    <div class="g-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-row',
}
</script>

<style lang="scss" scoped>
.g-row{
    display: flex;
    // justify-content: space-around;
    // align-items: center;
}
</style>


