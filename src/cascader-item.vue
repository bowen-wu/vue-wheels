<template>
    <div class="g-cascader-item">
        {{sourceItem.name}}
        <template v-if="sourceItem.children" v-for="item in sourceItem.children">
            <bowen-cascader-item :sourceItem="item"></bowen-cascader-item>
        </template>
    </div>
</template>

<script>
export default {
    name: 'bowen-cascader-item',
    props: {
        sourceItem: {
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
.g-cascader-item{
    border: 1px solid red;
    margin: 10px;
}
</style>


