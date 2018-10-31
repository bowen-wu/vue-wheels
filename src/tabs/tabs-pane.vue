<template>
    <div class="g-tabs-pane" :class="dynamicClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-pane',
    inject: ['EventHub'],
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            selected: '',
        }
    },
    computed: {
        dynamicClass() {
            if(this.name === this.selected){
                return {
                    active: true
                }
            }
        }
    },
    created() {
        this.EventHub && this.EventHub.$on('update:selected', (selectedName) => {
            this.selected = selectedName;
        })
    },
}
</script>

<style lang="scss" scoped>
@import '../assist/style/_var.scss';

.g-tabs-pane{
    display: none;
    &.active{
        display: block;
    }
}
</style>


