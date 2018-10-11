<template>
    <button class="g-button" @click="$emit('click')">
        <g-icon class="loading icon" v-if="loading" name="loading" :icon-position="iconPosition"></g-icon>
        <g-icon class="icon" v-if="icon && !loading" :name="icon" :icon-position="iconPosition"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon';
export default {
    name: 'bowen-button',
    // props: ['icon', 'iconPosition'],
    props: {
        icon: {
            type: String,
            required: false,
            default: '',
            validator(value) {
                return true;
            },
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
        iconPosition: {
            type: String,
            required: false,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right';
            },
        },
    },
    components: {
        'g-icon': Icon,
    },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$line-height: 32px;
$min-height: 34px;
$color: #333;
$button-bg: #fff;
$button-active-bg: #eee;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.g-button {
    font-size: $font-size;
    line-height: $line-height;
    color: $color;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background-color: $button-bg;
    display: inline-flex;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-height: $min-height;
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }
    &:focus {
        outline: none;
    }
    > .icon {
        order: 0;
        margin-right: 0.3em;
        &.icon-right {
            order: 1;
            margin-right: 0;
            margin-left: 0.3em;
        }
    }
    > .loading {
        animation: spin 1.5s linear infinite;
    }
}
</style>
