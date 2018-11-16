<template>
    <div class="g-footer" :style="dynamicStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-footer',
    props: {
        height: {
            type: [String, Number],
            required: false,
            default: 60,
        },
    },
    computed: {
        dynamicStyle() {
            return {
                height: this.height + 'px',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>