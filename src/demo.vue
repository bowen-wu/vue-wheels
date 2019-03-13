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
        <div>{{selected[0] && selected[0].name || '空'}}</div>
        <div>{{selected[1] && selected[1].name || '空'}}</div>
        <div>{{selected[2] && selected[2].name || '空'}}</div>
        <g-cascader :source.sync="source1" :selected.sync="selected1" cascaderHeight="200px" :load-data="loadData"></g-cascader>
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
import {removeListener} from './assist/util/click-outside.js'
const AJAX = ({ id = '0' }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let response = DB.filter(item => item.parentId === id);
            response.forEach(obj => {
                if (DB.filter(item => item.parentId === obj.id).length > 0) {
                    obj.isLeaf = false;
                } else {
                    obj.isLeaf = true;
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
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '西湖'},
                                {name: '滨江'},
                                {name: '上城'},
                            ]
                        },
                        {
                            name: '绍兴',
                            children: [
                                {name: '上虞'},
                                {name: '柯桥'},
                                {name: '越城'}
                            ]
                        }
                    ]
                },
                {
                    name: '山东',
                    children: [
                        {
                            name: '青岛',
                            children: [
                                {name: '市南'},
                                {name: '市北'},
                                {name: '崂山'}
                            ]
                        },
                        {
                            name: '济南',
                            children: [
                                {name: '市中'},
                                {name: '天桥'},
                                {name: '历城'}
                            ]
                        }
                    ]
                },
                {
                    name: '辽宁',
                    children: [{
                        name: '鞍山',
                        children: [{
                            name: '铁东'
                        },{
                            name: '铁西'
                        }, {
                            name: '立山'
                        }]
                    }, {
                        name: '沈阳',
                        children: [{
                            name: '和平'
                        }, {
                            name: '沈河'
                        }, {
                            name: '皇姑'
                        }]
                    }]
                }
            ],
            source1: [],
            obj: {},
        };
    },
    created() {
        AJAX({}).then(source => {
            this.source1 = source;
            console.log('this.source', this.source);
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
.input{
    @include flex();
}
</style>

