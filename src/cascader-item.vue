<template>
    <div class="g-cascader-item" :style="{height: height}">
        <div class="g-cascader-item-parents">
            <div class="g-cascader-item-parent" v-for="parent in source" @click="onSelectParent(parent)" :class="{'g-cascader-item-parent-active': selected[level] && (parent.name === selected[level].name)}">
                <div class="g-cascader-item-parent-text">
                    {{parent.name}}
                </div>
                <g-icon name="right" class="g-cascader-item-parent-icon" v-if="parent.children"></g-icon>
            </div>
        </div>
        <div class="g-cascader-item-children" v-if="children">
            <bowen-cascader-item :source="children" :selected="selected" @update:selected="updateSelected" :level="level + 1"></bowen-cascader-item>
        </div>
    </div>
</template>

<script>
import Icon from './icon';
export default {
    name: 'bowen-cascader-item',
    components: {
        'g-icon': Icon,
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
        level: {
            type: Number,
            required: false,
            default: 0,
        },
        height: {
            type: String,
        },
    },
    data() {
        return {
        }
    },
    computed: {
        children() {
            if(this.selected && this.selected[this.level] && this.selected[this.level].children){
                return this.selected[this.level].children;
            }else {
                return null
            }
        },
        dynamicClass() {

            return 
        },
    },
    created() {},
    mounted() {},
    methods: {
        onSelectParent(parent) {
            // 需要 深拷贝
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            selectedCopy[this.level] = parent;
            selectedCopy.splice(this.level + 1);
            this.$emit('update:selected', selectedCopy);
        },
        updateSelected(selected) {
            this.$emit('update:selected', selected);
        },
    },
}
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';
.g-cascader-item{
    @include flex();
    height: 100%;
    > .g-cascader-item-parents{
        height: 100%;
        padding: 4px 0;
        overflow: auto;
        > .g-cascader-item-parent{
            @include flex(flex-start, center);
            padding: $padding-bigger;
            min-width: 6em;
            cursor: pointer;
            &:hover{
                background-color: $bg-color-light;
            }
            &.g-cascader-item-parent-active{
                color: $color-active;
                > .g-cascader-item-parent-icon{
                    fill: $color-active;
                }
            }
            > .g-cascader-item-parent-icon{
                margin-left: 1em;
                transform: scale(0.8);
            }
        }
    }
    > .g-cascader-item-children{
        border-left: 1px solid $border-color-light;
        height: 100%;
    }
}
</style>


