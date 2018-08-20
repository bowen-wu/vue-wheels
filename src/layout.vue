<template>
    <div class="g-layout" :class="dynamicLayoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-layout',
    data() {
        return {
            dynamicLayoutClass: {
                'layout-has-sider': false
            },
        }
    },
    mounted() {
        this.$children.map((component, index, thisArr) => {
            if(component.$options.name === 'bowen-sider'){
                this.dynamicLayoutClass['layout-has-sider'] = true;
            }
        });
    }
}
</script>

<style scoped lang="scss">
.g-layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.layout-has-sider{
        flex-direction: row;
    }
}
</style>


