<template>
    <button class="g-button">
        <svg v-if="icon" class="icon" :class="{[`icon-${iconPosition}`]: true}">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    props: ['icon', 'iconPosition'],

}
</script>

<style lang="scss">
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
    }
</style>
