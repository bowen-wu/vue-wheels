<template>
    <div class="demo">

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
        <g-cascader :source.sync="source" :selected.sync="selected" cascaderHeight="200px" :load-data="loadData"></g-cascader>
        <div>22222</div>
        {{source}}

        <g-collapse :selected.sync="selected" single v-if="false">
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
import Button from './button';
import Cascader from './cascader';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Icon from './icon';
import Popover from './popover';
import Tabs from './tabs/tabs.vue';
import TabsBody from './tabs/tabs-body';
import TabsHead from './tabs/tabs-head';
import TabsItem from './tabs/tabs-item';
import TabsPane from './tabs/tabs-pane';
import DB from './assist/util/china.js';
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
        'g-button': Button,
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
    },
    data() {
        return {
            selected: [],
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
            obj: {},
        };
    },
    created() {
        AJAX({}).then(source => {
            this.source = source;
            console.log('this.source', this.source);
        });
        // this.obj.message = 'message';
        // let message = 'message';

        // Object.assign(this.obj, {message});
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
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.demo {
    margin: 200px;
}
.popover {
    margin-right: 20px;
}
</style>

