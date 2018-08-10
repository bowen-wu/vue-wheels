<template>
    <div class="g-row" :style="{marginLeft: - gutter / 2 + 'px', marginRight: - gutter / 2 + 'px'}">
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
    created() {},
    mounted() {
        console.log('this.$children', this.$children);
        this.$children.map((vm) => {
            console.log(this.gutter);
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


