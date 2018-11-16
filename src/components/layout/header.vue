<template>
    <div class="g-header" :style="dynamicStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-header',
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


