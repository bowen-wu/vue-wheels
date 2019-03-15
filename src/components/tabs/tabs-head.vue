<template>
    <div class="g-tabs-head" :class="dynamicClass">
        <div class="g-tabs-slot">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <div class="g-tabs-actions">
            <div class="g-tabs-actions-inner">
                <slot name="actions"></slot>
            </div>
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
            let {left: parentLeft, top: parentTop} = vm.$parent.$el.getBoundingClientRect();
            let {width, left, height, top} = vm.$el.getBoundingClientRect();
            if(this.direction === 'vertical') {
                this.$refs.line.style.height = `${height}px`;
                this.$refs.line.style.transform = `translateY(${top - parentTop}px)`;
            } else {
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.transform = `translateX(${left - parentLeft}px)`;
            }
        })
    },
};
</script>

<style lang="scss" scoped>
@import '../../assist/style/_var.scss';

.g-tabs-head {
    @include flex(flex-start, center);
    padding: 0 1em;
    position: relative;
    &.g-tabs-direction-horizontal {
        border-bottom: 2px solid $border-color;
        margin-bottom: 4px;
    }
    & > .g-tabs-slot{
        @include flex();
    }
    &.g-tabs-direction-vertical > .g-tabs-slot{
        flex-direction: column;
        align-items: flex-end;
        border-right: 2px solid $border-color;
    }
    & > .g-tabs-actions{
        margin-left: auto;
        & > .g-tabs-actions-inner {
            padding: 8px 0;
        }
    }
    & > .line{
        position: absolute;
        background-color: $line-bg-color;
        transition: all 0.2s linear;
    }
    &.g-tabs-direction-horizontal > .line{
        bottom: -2px;
        left: 0;
        height: 2px;
    }
    &.g-tabs-direction-vertical > .line{
        top: 0;
        right: 1em;
        width: 2px;
    }
}
</style>


