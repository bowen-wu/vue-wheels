<template>
    <div class="g-cascader-item" :style="{height: height}">
        <div class="g-cascader-item-parents">
            <div class="g-cascader-item-parent" v-for="parent in source" @click="onSelectParent(parent)">
                <div class="g-cascader-item-parent-text">
                    {{parent.name}}
                </div>
                <g-icon name="right" class="g-cascader-item-parent-icon" v-if="parent.children"></g-icon>
            </div>
        </div>
        <div class="g-cascader-item-children" v-if="children">
            <bowen-cascader-item :source="children"></bowen-cascader-item>
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
        },
        height: {
            type: String,
        },
    },
    data() {
        return {
            selectParent: null
        }
    },
    computed: {
        children() {
            if(this.selectParent && this.selectParent.children){
                return this.selectParent.children;
            }else {
                return null
            }
        },
    },
    created() {},
    mounted() {},
    methods: {
        onSelectParent(parent) {
            this.selectParent = parent;
        }
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
        overflow: auto;
        > .g-cascader-item-parent{
            @include flex(flex-start, center);
            padding: $padding-bigger;
            min-width: 6em;
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


