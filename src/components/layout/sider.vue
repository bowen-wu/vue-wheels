<template>
    <div class="g-sider" :style="dynamicStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-sider',
    props: {
        width: {
            type: [String, Number],
            required: false,
            default: 300,
        }
    },
    computed: {
        dynamicStyle() {
            return {
                width: this.width + 'px',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>