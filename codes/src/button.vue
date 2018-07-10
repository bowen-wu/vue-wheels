<template>
    <button class="g-button">按钮</button>
</template>

<script>
export default {
    
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
        &:hover{
        border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }
</style>
