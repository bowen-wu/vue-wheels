<template>
    <div class="g-collapse-item">
        <div class="g-collapse-item-title" @click="toggle" :class="dynamicClass">
            {{title}}
        </div>
        <div class="g-collapse-item-content" v-if="show">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-collapse-item',
    props: {
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        dynamicClass() {
            if (this.show) {
                return { active: true };
            }
        },
    },
    data() {
        return {
            show: false,
        };
    },
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', nameArray => {
            if (nameArray.indexOf(this.name) >= 0) {
                this.show = true;
            }else{
                this.show = false;
            }
        });
    },
    methods: {
        toggle() {
            if (this.show) {
                this.eventBus.$emit('update:removeSelected', this.name);
            } else {
                this.eventBus.$emit('update:addSelected', this.name);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import './assist/style/scssMixin.scss';
$border-color: #ccc;
$border-radius: 4px;
$padding-vertical: 7px;
$padding-horizontal: 8px;

.g-collapse-item {
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    > .g-collapse-item-title {
        @include fontLineColor(12px, 16px, #333);
        border: 1px solid $border-color;
        padding: $padding-vertical $padding-horizontal;
        cursor: pointer;
        position: relative;
        &.active {
            z-index: 1;
        }
    }
    &:first-of-type > .g-collapse-item-title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
    }
    &:last-of-type > .g-collapse-item-title {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        margin-bottom: -1px;
        &.active {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    > .g-collapse-item-content {
        padding: 8px;
    }
}
</style>