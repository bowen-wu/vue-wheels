<template>
    <div class="g-row" :style="dynamicStyle" :class="dynamicClass">
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
        },
        justify: {
            type: String,
            required: false,
            default: 'start',
            validator(value) {
                return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value);
            }
        },
        align: {
            type: String,
            required: false,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].includes(value);
            }
        },
    },
    computed: {
        dynamicStyle() {
            return {
                marginLeft: - this.gutter / 2 + 'px',
                marginRight: - this.gutter / 2 + 'px',
            }
        },
        dynamicClass() {
            return [`justify-${this.justify}`, `align-${this.align}`]
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
    flex-wrap: wrap;
    &.justify-start{
        justify-content: flex-start;
    }
    &.justify-end{
        justify-content: flex-end;
    }
    &.justify-center{
        justify-content: center;
    }
    &.justify-space-around{
        justify-content: space-around;
    }
    &.justify-space-between{
        justify-content: space-between;
    }
    &.align-top{
        align-items: flex-start;
    }
    &.align-bottom{
        align-items: flex-end;
    }
    &.align-middle{
        align-items: center;
    }
}
</style>


