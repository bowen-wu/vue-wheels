<template>
    <div class="g-cascader" ref="cascader" v-click-outside="closeCascader">
        <div class="g-cascader-trigger" @click="trigger">
            {{exhibitionText || '&nbsp'}}
            <div class="g-cascader-trigger-arrow" :class="dynamicClass">
                <icon name="down" class="g-cascader-trigger-arrow-icon"></icon>
            </div>
        </div>
        <div class="g-cascader-item-wrapper">
            <div class="g-cascader-item-inner">
                <template v-if="cascaderItemVisible">
                    <cascader-item :source="source" :height="cascaderHeight" :selected="selected" :loadData="loadData" @update:selected="updateSelected" @close-cascader="closeCascader"></cascader-item>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item';
import Icon from './icon';
import ClickOutside, {removeEventListener} from './assist/util/click-outside.js';
export default {
    name: 'bowen-cascader',
    components: {
        CascaderItem,
        Icon,
    },
    directives: {ClickOutside},
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
        loadData: {
            type: Function,
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
            return {
                'g-cascader-trigger-arrow-cross': this.cascaderItemVisible,
            };
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

            let selectedItem = newSelected[newSelected.length - 1];

            if (
                selectedItem.isLeaf ||
                (!this.loadData && !selectedItem.children)
            ) {
                this.closeCascader();
            } else {
                this.loadData &&
                    this.loadData(selectedItem, children => {
                        let sourceCopy = JSON.parse(
                            JSON.stringify(this.source),
                        );
                        let item = this.complex(sourceCopy, selectedItem.id);
                        if (item) {
                            item.children = children;
                        }
                        this.$emit('update:source', sourceCopy);
                    });
            }
        },
        simple(hasNoChildren, id) {
            let fondItem = null;
            hasNoChildren.some(item => {
                if (item.id === id) {
                    fondItem = item;
                    return true;
                }
            });
            return fondItem;
        },
        complex(source, id) {
            let fondItem = null,
                hasNoChildren = [],
                hasChildren = [];
            source.forEach(item => {
                if (item.children) {
                    hasChildren.push(item);
                } else {
                    hasNoChildren.push(item);
                }
            });
            fondItem =
                this.simple(hasNoChildren, id) || this.simple(hasChildren, id);
            if (!fondItem) {
                hasChildren.forEach(item => {
                    fondItem = this.complex(item.children, id);
                });
            }
            return fondItem;
        },
    },
};
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';

.g-cascader {
    position: relative;
    @include inline-flex();
    > .g-cascader-trigger {
        @include inline-flex(flex-start, center);
        border: 1px solid $border-color;
        min-height: $min-height;
        min-width: $min-width;
        padding: 0 $padding-biggest 0 $padding-bigger;
        border-radius: $border-radius;
        position: relative;
        background-color: $bg-color-white;
        .g-cascader-trigger-arrow {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(50%, -50%);
            margin-right: $padding-biggest / 2;
            &.g-cascader-trigger-arrow-cross {
                > .g-cascader-trigger-arrow-icon {
                    transform: rotate(180deg);
                }
            }
            > .g-cascader-trigger-arrow-icon {
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
        z-index: 1;
        > .g-cascader-item-inner {
            @include boxShadow();
            border: 1px solid $border-color;
            border-radius: $border-radius;
            margin-top: $margin-top;
        }
    }
}
</style>


