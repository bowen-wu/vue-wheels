<template>
    <button class="g-button" @click="$emit('click')">
        <g-icon class="loading icon" v-if="loading" name="loading" :icon-position="iconPosition"></g-icon>
        <g-icon class="icon" v-if="icon && !loading" :name="icon" :icon-position="iconPosition"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon';
export default {
    // props: ['icon', 'iconPosition'],
    props: {
        icon: {
            type: String,
            required: false,
            default: '',
            validator(value){
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
                return (value === 'left') || (value === 'right');
            },
        },
    },
    components: {
        'g-icon': Icon,
    },
}
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button{
        font-size: var(--font-size);
        line-height: var(--line-height);
        color: var(--color);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        display: inline-flex;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        &:hover{
        border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        > .icon{
            order: 0;
            margin-right: .3em;
            &.icon-right{
                order: 1;
                margin-right: 0;
                margin-left: .3em;
            }
        }
        > .loading{
            animation: spin 1.5s linear infinite ;
        }
    }
</style>
