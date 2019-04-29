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
                        value: '330000',
                        children: [
                            {
                                label: '杭州',
                                value: '330100',
                                children: [
                                    {
                                        label: '西湖',
                                        value: '330106'
                                    },
                                    {
                                        label: '滨江',
                                        value: '330108'
                                    },
                                ],
                            },
                            {
                                label: '绍兴',
                                value: '330600',
                                children: [
                                    {
                                        label: '上虞',
                                        value: '330604'
                                    },
                                    {
                                        label: '柯桥',
                                        value: '330603'
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: '山东',
                        value: '370000',
                        children: [
                            {
                                label: '青岛',
                                value: '370200',
                                children: [
                                    {
                                        label: '市南',
                                        value: '370202'
                                    },
                                    {
                                        label: '崂山',
                                        value: '370212'
                                    },
                                ],
                            },
                            {
                                label: '济南',
                                value: '370100',
                                children: [
                                    {
                                        label: '市中',
                                        value: '370103'
                                    },
                                    {
                                        label: '天桥',
                                        value: '370105'
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: '辽宁',
                        value: '210000',
                        children: [
                            {
                                label: '鞍山',
                                value: '210300',
                                children: [
                                    {
                                        label: '铁东',
                                        value: '220303'
                                    }, {
                                        label: '铁西',
                                        value: '220302'
                                    }
                                ],
                            }, {
                                label: '沈阳',
                                value: '210100',
                                children: [
                                    {
                                        label: '沈河',
                                        value: '210103'
                                    }, {
                                        label: '皇姑',
                                        value: '210105'
                                    }
                                ],
                            }],
                    },
                ],
                selected: [],
                selected1: [
                    {
                        label: '浙江',
                        value: '330000'
                    },
                    {
                        label: '杭州',
                        value: '330100'
                    }, {
                        label: '西湖',
                        value: '330106'
                    }
                ],
                source2: [
                    {
                        label: '浙江',
                        value: '330000',
                        isLeaf: false,
                    }, {
                        label: '山东',
                        value: '370000',
                        isLeaf: false,
                    }
                ],
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
                                            value: '330000',
                                            children: [
                                                {
                                                    label: '杭州',
                                                    value: '330100',
                                                    children: [
                                                        {
                                                            label: '西湖',
                                                            value: '330106'
                                                        },
                                                        {
                                                            label: '滨江',
                                                            value: '330108'
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: '绍兴',
                                                    value: '330600',
                                                    children: [
                                                        {
                                                            label: '上虞',
                                                            value: '330604'
                                                        },
                                                        {
                                                            label: '柯桥',
                                                            value: '330603'
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '山东',
                                            value: '370000',
                                            children: [
                                                {
                                                    label: '青岛',
                                                    value: '370200',
                                                    children: [
                                                        {
                                                            label: '市南',
                                                            value: '370202'
                                                        },
                                                        {
                                                            label: '崂山',
                                                            value: '370212'
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: '济南',
                                                    value: '370100',
                                                    children: [
                                                        {
                                                            label: '市中',
                                                            value: '370103'
                                                        },
                                                        {
                                                            label: '天桥',
                                                            value: '370105'
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '辽宁',
                                            value: '210000',
                                            children: [
                                                {
                                                    label: '鞍山',
                                                    value: '210300',
                                                    children: [
                                                        {
                                                            label: '铁东',
                                                            value: '220303'
                                                        }, {
                                                            label: '铁西',
                                                            value: '220302'
                                                        }
                                                    ],
                                                }, {
                                                    label: '沈阳',
                                                    value: '210100',
                                                    children: [
                                                        {
                                                            label: '沈河',
                                                            value: '210103'
                                                        }, {
                                                            label: '皇姑',
                                                            value: '210105'
                                                        }
                                                    ],
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
                                            value: '330000',
                                            children: [
                                                {
                                                    label: '杭州',
                                                    value: '330100',
                                                    children: [
                                                        {
                                                            label: '西湖',
                                                            value: '330106'
                                                        },
                                                        {
                                                            label: '滨江',
                                                            value: '330108'
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: '绍兴',
                                                    value: '330600',
                                                    children: [
                                                        {
                                                            label: '上虞',
                                                            value: '330604'
                                                        },
                                                        {
                                                            label: '柯桥',
                                                            value: '330603'
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '山东',
                                            value: '370000',
                                            children: [
                                                {
                                                    label: '青岛',
                                                    value: '370200',
                                                    children: [
                                                        {
                                                            label: '市南',
                                                            value: '370202'
                                                        },
                                                        {
                                                            label: '崂山',
                                                            value: '370212'
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: '济南',
                                                    value: '370100',
                                                    children: [
                                                        {
                                                            label: '市中',
                                                            value: '370103'
                                                        },
                                                        {
                                                            label: '天桥',
                                                            value: '370105'
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            label: '辽宁',
                                            value: '210000',
                                            children: [
                                                {
                                                    label: '鞍山',
                                                    value: '210300',
                                                    children: [
                                                        {
                                                            label: '铁东',
                                                            value: '220303'
                                                        }, {
                                                            label: '铁西',
                                                            value: '220302'
                                                        }
                                                    ],
                                                }, {
                                                    label: '沈阳',
                                                    value: '210100',
                                                    children: [
                                                        {
                                                            label: '沈河',
                                                            value: '210103'
                                                        }, {
                                                            label: '皇姑',
                                                            value: '210105'
                                                        }
                                                    ],
                                                }],
                                        },
                                    ],
                                    selected1: [
                                        {
                                            label: '浙江',
                                            value: '330000'
                                        },
                                        {
                                            label: '杭州',
                                            value: '330100'
                                        }, {
                                            label: '西湖',
                                            value: '330106'
                                        }
                                    ],
                                }
                            }
                        }
                    ${'<'}/script>
                `.replace(/^ {16}/gm, '').trim(),
                dynamicCode: `
                    <g-cascader :source.sync="source1" :selected.sync="selected2" />

                    <script>
                        export default{
                            data() {
                                return {
                                    source2: [
                                        {
                                            label: '浙江',
                                            value: '330000',
                                            isLeaf: false,
                                        }, {
                                            label: '山东',
                                            value: '370000',
                                            isLeaf: false,
                                        }
                                    ],
                                    selected2: [],
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
                                value: '330100',
                                isLeaf: false
                            }, {
                                label: '绍兴',
                                value: '330600',
                                isLeaf: false,
                            }];
                            break;
                        case '杭州':
                            res = [
                                {
                                    label: '西湖',
                                    value: '330106',
                                    isLeaf: true
                                },
                                {
                                    label: '滨江',
                                    value: '330108',
                                    isLeaf: true
                                },
                            ];
                            break;
                        case '绍兴':
                            res = [
                                {
                                    label: '上虞',
                                    value: '330604',
                                    isLeaf: true
                                },
                                {
                                    label: '柯桥',
                                    value: '330603',
                                    isLeaf: true
                                },
                            ];
                            break;
                        case '山东':
                            res = [
                                {
                                    label: '青岛',
                                    value: '370200',
                                    isLeaf: false,
                                }, {
                                    label: '济南',
                                    value: '370100',
                                    isLeaf: false,
                                }
                            ];
                            break;
                        case '青岛':
                            res = [
                                {
                                    label: '市南',
                                    value: '370202',
                                    isLeaf: true
                                },
                                {
                                    label: '崂山',
                                    value: '370212',
                                    isLeaf: true
                                }];
                            break;
                        case '济南':
                            res = [
                                {
                                    label: '市中',
                                    value: '370103',
                                    isLeaf: true
                                },
                                {
                                    label: '天桥',
                                    value: '370105',
                                    isLeaf: true
                                },
                            ];
                            break;
                    }
                    ;
                    callback && callback(res);
                }, 1000);
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



