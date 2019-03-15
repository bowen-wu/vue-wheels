<template>
    <div class="g-tabs-item" :class="dynamicClass" @click="changeItem" :data-name="name">
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
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    data() {
        return {
            selected: '',
        }
    },
    computed: {
        dynamicClass() {
            let obj = {
                disabled: this.disabled
            }
            if(this.name === this.selected){
                Object.assign(obj, {
                    active: true,
                });
            }
            return obj;
        },
    },
    created() {
        this.EventHub && this.EventHub.$on('update:selected', (selectedName, vm) => {
            this.selected = selectedName;
        })
    },
    methods: {
        changeItem() {
            if(this.disabled){
                return;
            }
            this.EventHub.$emit('update:selected', this.name, this);
            this.EventHub.$emit('tabs-click', this.name, this)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../assist/style/_var.scss';

.g-tabs-item{
    @include fontLineColor(14px, 24px);
    @include flex(center, center);
    padding: 8px 0.8em;
    cursor: pointer;
    &:hover{
        color: $hover-color;
    }
    &.active{
        color: $color;
        font-weight: 600;
    }
    &.disabled{
        cursor: not-allowed;
        color: $disabled-color;
    }
}
</style>


