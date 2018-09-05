<template>
    <div class="g-tabs-head" :class="dynamicClass">
        <div class="g-tabs-slot">
            <slot></slot>
        </div>
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
    }
};
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';

$border-color: #eee;
.g-tabs-head {
    @include flex();
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
}
</style>


