<template>
    <div class="g-cascader">
        <div class="g-cascader-trigger" @click="trigger">
            {{exhibitionText}}
        </div>
        <div class="g-cascader-item-wrapper">
            <div class="g-cascader-item-inner">
                <template v-if="cascaderItemVisible">
                    <cascader-item :source="source" :height="cascaderHeight" :selected="selected" @update:selected="updateSelected"></cascader-item>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item';
export default {
    name: 'bowen-cascader',
    components: {
        CascaderItem,
    },
    props: {
        source: {
            type: Array,
            required: true,
        },
        selected: {
            type: Array,
            required: true,
        },
        cascaderHeight: {
            type: String,
            default() {
                return '200px';
            },
        },
    },
    data() {
        return {
            cascaderItemVisible: false,
        }
    },
    computed: {
        exhibitionText() {
            return this.selected.map(obj => obj.name).join(' / ');
        },
    },
    methods: {
        trigger() {
            this.cascaderItemVisible = !this.cascaderItemVisible;
        },
        updateSelected(newSelected) {
            this.$emit('update:selected', newSelected);
        },
    },
}
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';

.g-cascader{
    position: relative;
    > .g-cascader-trigger{
        border: 1px solid $border-color;
        min-height: $min-height;
        min-width: $min-width;
        padding: $padding;
        border-radius: $border-radius;
    }
    > .g-cascader-item-wrapper{
        position: absolute;
        top: 100%;
        left: 0;
        background-color: $bg-color-white;
        > .g-cascader-item-inner{
            @include boxShadow();
            border: 1px solid $border-color;
            border-radius: $border-radius;
            margin-top: $margin-top;
        }
    }
}
</style>


