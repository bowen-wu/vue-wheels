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
    created() {
        console.log(this.selected, this, '2');
        
    },
    mounted() {
        this.$children.map(parentComponent => {
            parentComponent.selected = this.selected;
            parentComponent.$children.map(grandsonComponent => {
                grandsonComponent.selected = this.selected;
            });
        });
    },
    provide() {
        return {
            EventHub: new Vue()
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';


.g-tabs{
}
</style>




