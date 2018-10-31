<template>
    <div class="g-cascader">
        <div class="g-cascader-trigger" @click="trigger">

        </div>
        <template v-if="cascaderItemVisible">
            <cascader-item :source="source" ></cascader-item>
        </template>
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
    },
    data() {
        return {
            cascaderItemVisible: false,
        }
    },
    created() {},
    mounted() {},
    methods: {
        trigger() {
            this.cascaderItemVisible = !this.cascaderItemVisible;
        },
    },
}
</script>

<style lang="scss" scoped>
@import './assist/style/_var.scss';

.g-cascader{
    .g-cascader-trigger{
        border: 1px solid $border-color;
        min-height: $min-height;
        padding: $padding;
        border-radius: $border-radius;
    }
}
</style>


