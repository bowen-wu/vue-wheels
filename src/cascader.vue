<template>
    <div class="g-cascader">
        <div class="g-cascader-trigger" @click="trigger">
            {{exhibitionText || '&nbsp'}}
            <div class="g-cascader-trigger-arrow" :class="dynamicClass">
                <icon name="down" class="g-cascader-trigger-arrow-icon"></icon>
            </div>
        </div>
        <div class="g-cascader-item-wrapper">
            <div class="g-cascader-item-inner">
                <template v-if="cascaderItemVisible">
                    <cascader-item :source="source" :height="cascaderHeight" :selected="selected" @update:selected="updateSelected" @close-cascader="closeCascader"></cascader-item>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item';
import Icon from './icon';
export default {
    name: 'bowen-cascader',
    components: {
        CascaderItem,
        Icon,
    },
    props: {
        source: {
            type: Array,
            required: true,
        },
        selected: {
            type: Array,
            default() {
                return [];
            },
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
        };
    },
    computed: {
        exhibitionText() {
            return this.selected.map(obj => obj.name).join(' / ');
        },
        dynamicClass() {
            return {'g-cascader-trigger-arrow-cross': this.cascaderItemVisible}
        },
    },
    methods: {
        trigger() {
            if (this.cascaderItemVisible) {
                this.closeCascader();
            } else {
                this.openCascader();
            }
        },
        openCascader() {
            this.cascaderItemVisible = true;
        },
        closeCascader() {
            this.cascaderItemVisible = false;
        },
        updateSelected(newSelected) {
            this.$emit('update:selected', newSelected);
        },
    },
};
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';

.g-cascader {
    position: relative;
    > .g-cascader-trigger {
        @include inline-flex(flex-start, center);
        border: 1px solid $border-color;
        min-height: $min-height;
        min-width: $min-width;
        padding: 0 $padding-biggest 0 $padding-bigger;
        border-radius: $border-radius;
        position: relative;
        .g-cascader-trigger-arrow{
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(50%, -50%);
            margin-right: $padding-biggest / 2;
            &.g-cascader-trigger-arrow-cross{
                > .g-cascader-trigger-arrow-icon{
                    transform: rotate(180deg);
                }
            }
            > .g-cascader-trigger-arrow-icon{
                transition: all 0.2s linear;
                cursor: pointer;
            }
        }
    }
    > .g-cascader-item-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: $bg-color-white;
        > .g-cascader-item-inner {
            @include boxShadow();
            border: 1px solid $border-color;
            border-radius: $border-radius;
            margin-top: $margin-top;
        }
    }
}
</style>


