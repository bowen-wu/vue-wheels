<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'bowen-collapse',
    props: {
        single: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Array,
            required: false,
        }
    },
    data() {
        return {
            eventBus: new Vue(),
        };
    },
    provide() {
        return {
            eventBus: this.eventBus,
        }
    },
    created() {
        this.eventBus.$on('update:removeSelected', (name) => {
            this.onFunction('remove', name);
        });
        this.eventBus.$on('update:addSelected', (name) => {
            this.onFunction('add', name);   
        })
    },
    mounted() {
        this.eventBus.$emit('update:selected', this.selected);
    },
    methods: {
        onFunction(type, name) {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            if(type === 'add'){
                if(this.single){
                    selectedCopy = [name]; 
                }else{
                    selectedCopy.push(name)
                }
            }else{
                selectedCopy.splice(selectedCopy.indexOf(name), 1);
            }
            this.eventBus.$emit('update:selected', selectedCopy);
            this.$emit('update:selected', selectedCopy);  
        }
    },
};
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';
.g-collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>

