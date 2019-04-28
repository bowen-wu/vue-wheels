<template>
    <div class="collapse-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-cascader :source.sync="source" :selected.sync="selected"/>
            </div>

            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'default'">
            <div class="row">
                <g-cascader :source.sync="source" :selected.sync="selected1"/>
            </div>

            <template slot="code">
                <pre><code>{{defaultCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'dynamic'">
            <div class="row">
                <g-cascader :source.sync="source2" :selected.sync="selected2" :load-data="loadData"/>
            </div>

            <template slot="code">
                <pre><code>{{dynamicCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
    import DemoContentBlock from './demo-block';
    import Cascader from '../../../src/components/cascader/cascader';

    export default {
        components: {
            'g-cascader': Cascader,
            'demo-content-block': DemoContentBlock,
        },
        props: {
            type: {
                type: String,
                default: 'basic'
            }
        },
        data() {
            return {
                source: [
                    {
                        label: '浙江',
                        children: [
                            {
                                label: '杭州',
                                children: [
                                    { label: '西湖' },
                                    { label: '滨江' },
                                    { label: '上城' },
                                ],
                            },
                            {
                                label: '绍兴',
                                children: [
                                    { label: '上虞' },
                                    { label: '柯桥' },
                                    { label: '越城' },
                                ],
                            },
                        ],
                    },
                    {
                        label: '山东',
                        children: [
                            {
                                label: '青岛',
                                children: [
                                    { label: '市南' },
                                    { label: '市北' },
                                    { label: '崂山' },
                                ],
                            },
                            {
                                label: '济南',
                                children: [
                                    { label: '市中' },
                                    { label: '天桥' },
                                    { label: '历城' },
                                ],
                            },
                        ],
                    },
                    {
                        label: '辽宁',
                        children: [{
                            label: '鞍山',
                            children: [{ label: '铁东' }, { label: '铁西' }, { label: '立山' }],
                        }, {
                            label: '沈阳',
                            children: [{ label: '和平' }, { label: '沈河' }, { label: '皇姑' }],
                        }],
                    },
                ],
                selected: [],
                selected1: [{ label: '浙江' }, { label: '杭州' }, { label: '西湖' }],
                source2: [{
                    label: '浙江',
                    isLeaf: false,
                }, {
                    label: '山东',
                    isLeaf: false,
                }],
                selected2: [],
                basicCode: `
                    <g-cascader :source.sync="source" :selected.sync="selected" />

                    <script>
                        export default{
                            data() {
                                return {
                                    source: [
                                        {
                                            label: '浙江',
                                            children: [
                                                {
                                                    label: '杭州',
                                                    children: [
                                                        { label: '西湖' },
                                                        { label: '滨江' },
                                                        { label: '上城' },
                                                    ],
                                                },
                                                {
                                                    label: '绍兴',
                                                    children: [
                                                        { label: '上虞' },
                                                        { label: '柯桥' },
                                                        { label: '越城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '山东',
                                            children: [
                                                {
                                                    label: '青岛',
                                                    children: [
                                                        { label: '市南' },
                                                        { label: '市北' },
                                                        { label: '崂山' },
                                                    ],
                                                },
                                                {
                                                    label: '济南',
                                                    children: [
                                                        { label: '市中' },
                                                        { label: '天桥' },
                                                        { label: '历城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '辽宁',
                                            children: [{
                                                label: '鞍山',
                                                children: [{ label: '铁东' }, { label: '铁西' }, { label: '立山' }],
                                            }, {
                                                label: '沈阳',
                                                children: [{ label: '和平' }, { label: '沈河' }, { label: '皇姑' }],
                                            }],
                                        },
                                    ],
                                    selected: [],
                                }
                            }
                        }
                    ${'<'}/script>
                `.replace(/^ {16}/gm, '').trim(),
                defaultCode: `
                    <g-cascader :source.sync="source1" :selected.sync="selected1" />

                    <script>
                        export default{
                            data() {
                                return {
                                    source1: [
                                        {
                                            label: '浙江',
                                            children: [
                                                {
                                                    label: '杭州',
                                                    children: [
                                                        { label: '西湖' },
                                                        { label: '滨江' },
                                                        { label: '上城' },
                                                    ],
                                                },
                                                {
                                                    label: '绍兴',
                                                    children: [
                                                        { label: '上虞' },
                                                        { label: '柯桥' },
                                                        { label: '越城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '山东',
                                            children: [
                                                {
                                                    label: '青岛',
                                                    children: [
                                                        { label: '市南' },
                                                        { label: '市北' },
                                                        { label: '崂山' },
                                                    ],
                                                },
                                                {
                                                    label: '济南',
                                                    children: [
                                                        { label: '市中' },
                                                        { label: '天桥' },
                                                        { label: '历城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '辽宁',
                                            children: [{
                                                label: '鞍山',
                                                children: [{ label: '铁东' }, { label: '铁西' }, { label: '立山' }],
                                            }, {
                                                label: '沈阳',
                                                children: [{ label: '和平' }, { label: '沈河' }, { label: '皇姑' }],
                                            }],
                                        },
                                    ],
                                    selected1: [{label: '浙江'}, {label: '杭州'}, {label: '西湖'}],
                                }
                            }
                        }
                    ${'<'}/script>
                `.replace(/^ {16}/gm, '').trim(),
                dynamicCode: `
                    <g-cascader :source.sync="source1" :selected.sync="selected1" />

                    <script>
                        export default{
                            data() {
                                return {
                                    source1: [
                                        {
                                            label: '浙江',
                                            children: [
                                                {
                                                    label: '杭州',
                                                    children: [
                                                        { label: '西湖' },
                                                        { label: '滨江' },
                                                        { label: '上城' },
                                                    ],
                                                },
                                                {
                                                    label: '绍兴',
                                                    children: [
                                                        { label: '上虞' },
                                                        { label: '柯桥' },
                                                        { label: '越城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '山东',
                                            children: [
                                                {
                                                    label: '青岛',
                                                    children: [
                                                        { label: '市南' },
                                                        { label: '市北' },
                                                        { label: '崂山' },
                                                    ],
                                                },
                                                {
                                                    label: '济南',
                                                    children: [
                                                        { label: '市中' },
                                                        { label: '天桥' },
                                                        { label: '历城' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '辽宁',
                                            children: [{
                                                label: '鞍山',
                                                children: [{ label: '铁东' }, { label: '铁西' }, { label: '立山' }],
                                            }, {
                                                label: '沈阳',
                                                children: [{ label: '和平' }, { label: '沈河' }, { label: '皇姑' }],
                                            }],
                                        },
                                    ],
                                    selected1: [{label: '浙江'}, {label: '杭州'}, {label: '西湖'}],
                                }
                            }
                        }
                    ${'<'}/script>
                `.replace(/^ {16}/gm, '').trim(),
            };
        },
        methods: {
            loadData(item, callback) {
                setTimeout(() => {
                    let res = null;
                    switch (item.label) {
                        case '浙江':
                            res = [{
                                label: '杭州',
                                isLeaf: false
                            }, {
                                label: '绍兴',
                                isLeaf: false,
                            }];
                            break;
                        case '杭州':
                            res = [{
                                label: '西湖',
                                isLeaf: true
                            },
                                {
                                    label: '滨江',
                                    isLeaf: true
                                },
                                {
                                    label: '上城',
                                    isLeaf: true
                                }];
                            break;
                        case '绍兴':
                            res = [{
                                label: '上虞',
                                isLeaf: true
                            },
                                {
                                    label: '柯桥',
                                    isLeaf: true
                                },
                                {
                                    label: '越城',
                                    isLeaf: true
                                }];
                            break;
                        case '山东':
                            res = [{
                                label: '青岛',
                                isLeaf: false,
                            }, {
                                label: '济南',
                                isLeaf: false,
                            }];
                            break;
                        case '青岛':
                            res = [{
                                label: '市南',
                                isLeaf: true
                            },
                                {
                                    label: '市北',
                                    isLeaf: true
                                },
                                {
                                    label: '崂山',
                                    isLeaf: true
                                }];
                            break;
                        case '济南':
                            res = [{
                                label: '市中',
                                isLeaf: true
                            },
                                {
                                    label: '天桥',
                                    isLeaf: true
                                },
                                {
                                    label: '历城',
                                    isLeaf: true
                                }];
                            break;
                    };
                    callback && callback(res);
                }, 3000);
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../src/assist/style/docs-demo-style.scss';
    @import '../../../src/assist/style/_var.scss';

    .cascader-demo {
    }
</style>



