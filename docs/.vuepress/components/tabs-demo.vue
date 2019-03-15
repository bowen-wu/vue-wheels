<template>
    <div class="tabs-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-tabs selected="tab1" @tabs-click="updateSelected1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            </div>
            
            <template slot="code">
                Tabs 组件提供了选项卡功能，可以通过 <code>selected</code> 属性来指定当前选中的标签页。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'direction'">
            <div class="row">
                <g-tabs selected="tab2" direction="vertical">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            </div>
            
            <template slot="code">
                <code>direction</code> 属性有两个值，<code>horizontal</code> 和 <code>vertical</code>，默认为 <code>horizontal</code>。 
                <pre><code>{{directionCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'icon'">
            <div class="row">
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">
                            <g-icon name="setting" />
                            用户管理
                        </g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            </div>
            
            <template slot="code">
                有图标的标签。
                <pre><code>{{iconCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'disabled'">
            <div class="row">
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item disabled name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            </div>
            
            <template slot="code">
                禁用某一项。
                <pre><code>{{disabledCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'actions'">
            <div class="row">
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                        <template slot="actions">
                            <g-button class="action">action</g-button>
                        </template>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            </div>
            
            <template slot="code">
                通过具名插槽可以设置附加操作。注意： 目前只有当 <code>direction</code> 为 <code>horizontal</code> 时，才支持附加操作。
                <pre><code>{{actionsCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Button from '../../../src/components/button/button';
import Icon from '../../../src/components/icon/icon';
import TabsBody from '../../../src/components/tabs/tabs-body';
import TabsHead from '../../../src/components/tabs/tabs-head';
import TabsItem from '../../../src/components/tabs/tabs-item';
import TabsPane from '../../../src/components/tabs/tabs-pane';
import Tabs from '../../../src/components/tabs/tabs';

export default {
    components: {
        'g-button': Button,
        'g-icon': Icon,
        'g-tabs-body': TabsBody,
        'g-tabs-head': TabsHead,
        'g-tabs-item': TabsItem,
        'g-tabs-pane': TabsPane,
        'g-tabs': Tabs,
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
            basicCode: `
                <g-tabs selected="tab1" @tabs-click="updateSelected1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>

                <script>
                    export default{
                        data() {
                            return {}
                        },
                        methods: {
                            updateSelected1(name) {
                                console.log(name);
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            directionCode: `
                 <g-tabs selected="tab2" direction="vertical">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            `.replace(/^ {16}/gm, '').trim(),
            iconCode: `
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">
                            <g-icon name="setting" />
                            用户管理
                        </g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            `.replace(/^ {16}/gm, '').trim(),
            disabledCode: `
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item disabled name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
            `.replace(/^ {16}/gm, '').trim(),
            actionsCode: `
                <g-tabs selected="tab1">
                    <g-tabs-head>
                        <g-tabs-item name="tab1">用户管理</g-tabs-item>
                        <g-tabs-item name="tab2">配置管理</g-tabs-item>
                        <g-tabs-item name="tab3">角色管理</g-tabs-item>
                        <template slot="actions">
                            <g-button class="action">action</g-button>
                        </template>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="tab2">配置管理</g-tabs-pane>
                        <g-tabs-pane name="tab1">用户管理</g-tabs-pane>
                        <g-tabs-pane name="tab3">角色管理</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>

                <style>
                    .action{
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
    methods: {
        updateSelected1(name) {
            console.log(name);
        },
    }
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';

.tabs-demo{
    .action{
        min-height: 36px;
    }
}
</style>



