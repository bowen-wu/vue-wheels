<template>
    <div class="g-cascader-item">
        <div class="g-cascader-item-parents">
            <div class="g-cascader-item-parent" v-for="parent in source" @click="onSelectParent(parent)">
                {{parent.name}}
            </div>
        </div>
        <div class="g-cascader-item-children" v-if="children">
            <bowen-cascader-item :source="children"></bowen-cascader-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-cascader-item',
    props: {
        source: {
            type: Array,
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
.g-cascader-item{
    border: 1px solid red;
    margin: 10px;
}
</style>


