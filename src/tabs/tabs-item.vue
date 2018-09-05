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
        this.EventHub.$on('update:selected', (selectedName) => {
            this.selected = selectedName;
        })
    },
    methods: {
        changeItem() {
            if(this.disabled){
                return;
            }
            this.EventHub.$emit('update:selected', this.name);
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assist/style/scssMixin.scss';

$color: #409eff;
$hover-color: #409eff;
$line-color: #409eff;
$disabled-color: #eee;

.g-tabs-item{
    @include fontLineColor(14px, 24px);
    @include flex(center, center);
    padding: 8px 12px;
    cursor: pointer;
    &:hover{
        color: $hover-color;
    }
    &.active{
        color: $color;
    }
    &.disabled{
        cursor: not-allowed;
        color: $disabled-color;
    }
}
</style>


