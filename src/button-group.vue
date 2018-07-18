<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-button-group',
    data() {
        return {

        }
    },
    mounted() {
        for (let node of this.$el.children){
            let name = node.nodeName.toLowerCase();
            if(name !== 'button'){
                console.warn(`g-button-group 组件的子元素应该全是 g-button， 但是你写了${name}`);
            }
        }
    }
}
</script>

<style lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: top;
        > .g-button{
            border-radius: 0;
            &:not(:first-of-type){
                margin-left: -1px; // 关键
            }
            &:first-of-type{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-of-type{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
