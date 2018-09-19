<template>
    <div class="demo">
        <div @click="yyy" style="overflow: hidden; border: 1px solid green">
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
import Icon from './icon';
import Tabs from './tabs/tabs.vue';
import TabsHead from './tabs/tabs-head';
import TabsBody from './tabs/tabs-body';
import TabsItem from './tabs/tabs-item';
import TabsPane from './tabs/tabs-pane';
import Popover from './popover';

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
    },
    data() {
        return {};
    },
    created() {},
    methods: {
        yyy() {
            // console.log('use yyy');
        },
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
.demo {
    margin: 200px;
}
.popover{
    margin-right: 20px;
}
</style>

