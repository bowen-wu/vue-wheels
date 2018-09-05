<template>
    <div class="demo">
        <g-tabs :selected.sync="selected" class="tabs" direction="horizontal">
            <g-tabs-head>
                <g-tabs-item name="women">
                    <g-icon name="setting" class="icon"></g-icon>美女</g-tabs-item>
                <g-tabs-item name="finance" disabled>财经</g-tabs-item>
                <g-tabs-item name="sport">体育</g-tabs-item>
                <template slot="actions">
                    <g-button>click</g-button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>
<script>
import Button from './button';
import Icon from './icon';
import Tabs from './tabs/tabs.vue';
import TabsHead from './tabs/tabs-head';
import TabsBody from './tabs/tabs-body';
import TabsItem from './tabs/tabs-item';
import TabsPane from './tabs/tabs-pane';
export default {
    name: 'bowen-demo',
    components: {
        'g-button': Button,
        'g-icon': Icon,
        'g-tabs': Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-body': TabsBody,
        'g-tabs-item': TabsItem,
        'g-tabs-pane': TabsPane
    },
    data() {
        return {
            selected: 'sport'
        };
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --font-size: 14px;
    --line-height: 32px;
    --color: #333;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --border-color: #999;
    --border-color-hover: #666;
}

body {
    font-size: var(--font-size);
}
</style>

