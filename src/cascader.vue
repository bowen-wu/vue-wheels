<template>
    <div class="g-cascader">
        <div class="g-cascader-trigger">

        </div>
        <template v-for="item in source" v-if="item.children">
            <cascader-item :sourceItem="item" ></cascader-item>
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
        return {}
    },
    created() {},
    mounted() {},
    methods: {},
}
</script>

<style lang="scss" scoped>

.g-cascader{
    .g-cascader-trigger{
        border: 1px solid #666;
    }
}
</style>


