<template>
    <div class="g-tabs-head" :class="dynamicClass">
        <div class="g-tabs-slot">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <div class="g-tabs-actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-head',
    props: {},
    inject: ['EventHub'],
    data() {
        return {
            direction: ''
        };
    },
    computed: {
        dynamicClass() {
            return {
                [`g-tabs-direction-${this.direction}`]: true
            };
        }
    },
    mounted() {
        this.EventHub && this.EventHub.$on('update:selected', (selectedName, vm) => {
            let {width, left} = vm.$el.getBoundingClientRect();
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.transform = `translateX(${left}px)`;
        })
    },
};
</script>

<style lang="scss" scoped>
@import '../assist/style/_var.scss';

$border-color: #eee;
$line-bg-color: #409eff;
.g-tabs-head {
    @include flex(flex-start, center);
    padding: 0 1em;
    position: relative;
    &.g-tabs-direction-horizontal {
        border-bottom: 2px solid $border-color;
        margin-bottom: 4px;
    }
    &.g-tabs-direction-vertical {
        flex-direction: column;
        align-items: flex-end;
        border-right: 2px solid $border-color;
    }
    & > .g-tabs-slot{
        @include flex();
    }
    & > .g-tabs-actions{
        margin-left: auto;
    }
    & > .line{
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 2px;
        background-color: $line-bg-color;
        transition: all 0.2s linear;
    }
}
</style>


