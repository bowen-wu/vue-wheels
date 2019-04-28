<template>
    <div class="demo">

        <g-button @click="onClickToast">click toast</g-button>
        <g-input class="input" :clearable="true" value="文本"></g-input>


        <g-row gutter="24">
            <g-col span="8">8</g-col>
            <g-col span="8">8</g-col>
            <g-col span="8">8</g-col>
        </g-row>


        <g-popover>
            <template slot="content" slot-scope="{close}">
                <div>内容</div>
            </template>
            <g-button>click</g-button>
        </g-popover>

        <div>11111</div>
        <div>{{selected[0] && selected[0].label || '空'}}</div>
        <div>{{selected[1] && selected[1].label || '空'}}</div>
        <div>{{selected[2] && selected[2].label || '空'}}</div>
        <g-cascader :source.sync="source1" :selected.sync="selected1" cascaderHeight="200px"
                    :load-data="loadData"></g-cascader>
        <div>22222</div>
        <g-cascader :source.sync="source" :selected.sync="selected"></g-cascader>

        <g-collapse :selected.sync="selected" single>
            <g-collapse-item title="title1" name="first">content1</g-collapse-item>
            <g-collapse-item title="title2" name="second">content2</g-collapse-item>
            <g-collapse-item title="title3" name="third">content3</g-collapse-item>
        </g-collapse>
        <div @click="yyy" style="overflow: hidden; border: 1px solid green" v-if="false">
            <g-popover class="popover">
                <template slot="content" slot-scope="{close}">
                    <div>内容内容<a href="http://www.baidu.com">百度</a>内容内容内容内容
                        <g-button @click="close">关闭</g-button>
                    </div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="bottom">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="left">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="right">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>
            <div style="height: 20px;"></div>
            <g-popover class="popover" trigger="hover">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="bottom" trigger="hover">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="left" trigger="hover">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

            <g-popover class="popover" position="right" trigger="hover">
                <template slot="content">
                    <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                </template>
                <g-button>click</g-button>
            </g-popover>

        </div>
    </div>
</template>
<script>
import Input from './components/input/input';
import Button from './components/button/button';
import GRow from './components/grid/row';
import GCol from './components/grid/column';
import Cascader from './components/cascader/cascader';
import Collapse from './components/collapse/collapse';
import CollapseItem from './components/collapse/collapse-item';
import Icon from './components/icon/icon';
import Popover from './components/popover/popover';
import Tabs from './components/tabs/tabs.vue';
import TabsBody from './components/tabs/tabs-body';
import TabsHead from './components/tabs/tabs-head';
import TabsItem from './components/tabs/tabs-item';
import TabsPane from './components/tabs/tabs-pane';
import Toast from './components/toast/toast';
import DB from './assist/util/china.js';
import { removeListener } from './assist/util/click-outside.js';

const AJAX = ({ value = '0' }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = DB.filter(item => item.parentId === value).map(({ id: value, name: label }) => {
                if (DB.filter(item => item.parentId === value).length > 0) {
                    return { isLeaf: false, value, label };
                } else {
                    return { isLeaf: true, value, label };
                }
            });
            resolve(response);
        }, 200);
    });
};

export default {
    name: 'bowen-demo',
    components: {
        'g-input': Input,
        'g-button': Button,
        'g-row': GRow,
        'g-col': GCol,
        'g-icon': Icon,
        'g-tabs': Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-body': TabsBody,
        'g-tabs-item': TabsItem,
        'g-tabs-pane': TabsPane,
        'g-popover': Popover,
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem,
        'g-cascader': Cascader,
        'g-toast': Toast,
    },
    data() {
        return {
            selected: [],
            selected1: [],
            source: [
                {
                    label: '浙江',
                    value: '110000',
                    children: [
                        {
                            label: '杭州',
                            value: '110100',
                            children: [
                                {
                                    label: '西湖',
                                    value: '110101',
                                },
                                {
                                    label: '滨江',
                                    value: '110102',
                                },
                                {
                                    label: '上城',
                                    value: '110103',
                                },
                            ],
                        },
                        {
                            label: '绍兴',
                            value: '110200',
                            children: [
                                {
                                    label: '上虞',
                                    value: '110201',
                                },
                                {
                                    label: '柯桥',
                                    value: '110202',
                                },
                                {
                                    label: '越城',
                                    value: '110203',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '山东',
                    value: '120000',
                    children: [
                        {
                            label: '青岛',
                            value: '120100',
                            children: [
                                {
                                    label: '市南',
                                    value: '120101',
                                },
                                {
                                    label: '市北',
                                    value: '120102',
                                },
                                {
                                    label: '崂山',
                                    value: '120103',
                                },
                            ],
                        },
                        {
                            label: '济南',
                            value: '120200',
                            children: [
                                {
                                    label: '市中',
                                    value: '120201',
                                },
                                {
                                    label: '天桥',
                                    value: '120202',
                                },
                                {
                                    label: '历城',
                                    value: '120203',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '辽宁',
                    value: '130000',
                    children: [
                        {
                            label: '鞍山',
                            value: '130100',
                            children: [
                                {
                                    label: '铁东',
                                    value: '130101',
                                },
                                {
                                    label: '铁西',
                                    value: '130102',
                                },
                                {
                                    label: '立山',
                                    value: '130103',
                                },
                            ],
                        },
                        {
                            label: '沈阳',
                            value: '130200',
                            children: [
                                {
                                    label: '和平',
                                    value: '130201',

                                },
                                {
                                    label: '沈河',
                                    value: '130200',
                                },
                                {
                                    label: '皇姑',
                                    value: '130200',
                                },
                            ],
                        },
                    ],
                },
            ],
            source1: [],
            obj: {},
        };
    },
    created() {
        AJAX({}).then(source => {
            this.source1 = source;
            console.log('this.source1', this.source1);
        });
        // removeListener();
    },
    mounted() {
        this.$nextTick(() => {
            let message = 'message';

            Object.assign(this.obj, { message });
        });
    },
    methods: {
        loadData(item, callback) {
            AJAX(item).then(res => {
                callback && callback(res);
            });
        },
        updateMessage() {
            console.log(1);
            // this.obj.message = 'new message';
            let message = 'new message';
            this.obj = Object.assign({}, this.obj, { message });
        },
        onClickToast() {
            this.$toast('text');
        },
    },
};
</script>

<style lang="scss" scoped>
    @import './assist/style/_var.scss';

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .demo {
        margin: 200px;
        height: 100vh;
    }

    .popover {
        margin-right: 20px;
    }

    .input {
        @include flex();
    }
</style>

