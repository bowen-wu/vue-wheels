<template>
    <div class="g-row" :style="dynamicStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-row',
    props: {
        gutter: {
            type: [Number, String],
            required: false,
        }
    },
    computed: {
        dynamicStyle() {
            return {
                marginLeft: - this.gutter / 2 + 'px',
                marginRight: - this.gutter / 2 + 'px',
            }
        },
    },
    created() {},
    mounted() {
        this.$children.map((vm) => {
            vm.gutter = this.gutter;
        })
    },
}
</script>

<style lang="scss" scoped>
.g-row{
    display: flex;
    // justify-content: space-around;
    // align-items: center;
}
</style>


