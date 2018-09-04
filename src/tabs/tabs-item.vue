<template>
    <div class="g-tabs-item" :class="dynamicClass" @click="changeItem">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-tabs-item',
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
        },
    },
    created() {
        this.EventHub.$on('update:selected', (selectedName) => {
            this.selected = selectedName;
        })
    },
    methods: {
        changeItem() {
            this.EventHub.$emit('update:selected', this.name);
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';

.g-tabs-item{
    @include fontLineColor();
    padding: 6px 12px;
    &.active{
        background-color: #ddd;
    }
}
</style>


