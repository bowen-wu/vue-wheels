<template>
    <div class="g-tabs">
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
        }
    },
    data() {
        return {
            EventHub: new Vue(),
        }
    },
    created() {
    },
    mounted() {
        this.$children.map(parentComponent => {
            parentComponent.$children.map(grandsonComponent => {
                if(grandsonComponent.$options.name === 'bowen-tabs-item' && grandsonComponent.name === this.selected){
                    this.EventHub.$emit('update:selected', this.selected);
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
@import '../assist/style/scssMixin.scss';


.g-tabs{
}
</style>




