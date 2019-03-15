<template>
    <div class="g-tabs" :class="dynamicClass">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'bowen-tabs',
    props: {
        selected: {
            type: String,
            required: true,
        },
        direction: {
            type: String,
            required: false,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0;
            }
        }
    },
    data() {
        return {
            EventHub: new Vue(),
        }
    },
    computed: {
        dynamicClass() {
            return {
                [`direction-${this.direction}`]: true,
            }
        },
    },
    created() {
        this.EventHub && this.EventHub.$on('tabs-click', (selectedName, vm) => {
            this.$emit('tabs-click', selectedName);
        })
    },
    mounted() {
        if(this.$children.length === 0){
            console && console.warn && console.warn('tabs的子组件应该是 tabs-head 和 tabs-body, 但你没有写子组件');
        }
        this.$children.map(parentComponent => {
            if(parentComponent.$options.name === 'bowen-tabs-head'){
                parentComponent.direction = this.direction;
            }
            parentComponent.$children.map(grandsonComponent => {
                if(grandsonComponent.$options.name === 'bowen-tabs-item' && grandsonComponent.name === this.selected){
                    this.EventHub && this.EventHub.$emit('update:selected', this.selected, grandsonComponent);
                }
            });
        });
    },
    provide() {
        return {
            EventHub: this.EventHub
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../assist/style/_var.scss';


.g-tabs{
    &.direction-vertical{
        @include flex();
    }
}
</style>




