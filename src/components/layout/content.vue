<template>
    <div class="g-content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-content',
}
</script>

<style lang="scss" scoped>
.g-content{
    flex-grow: 1;
}
</style>