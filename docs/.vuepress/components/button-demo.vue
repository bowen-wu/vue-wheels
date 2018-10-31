<template>
    <div class="button-demo">
        <demo-content-block v-if="type === 'basic'">
            <g-button>默认组件</g-button>
            <template slot="code">
                使用type、plain、round和circle属性来定义 Button 的样式。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>


        <div v-if="type === 'disabled'"></div>

        <div v-if="type === 'icon'">
            // TODO: bug <br />
            <g-button icon="setting"></g-button>
            <g-button icon="setting">设置</g-button>
            <pre><code>{{iconCode}}</code></pre>
        </div>


        <div v-if="type === 'loading'">
            <g-button :loading="true">loading</g-button>
            <pre><code>{{loadingCode}}</code></pre>
        </div>

        <div v-if="type === 'group'">
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>

            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
            <pre><code>{{groupCode}}</code></pre>
        </div>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';
export default {
    components: {
        'g-button': Button,
        'g-button-group': ButtonGroup,
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
            content: `
            <g-button>默认组件</g-button>
            <g-button icon="setting">设置</g-button>
            <g-button :loading="true">loading</g-button>
            `.replace(/^\n+|\t+| +/g, '').trim(),
            basicCode: `<g-button>默认组件</g-button>`.replace(/^\n+|\t+| +/g, '').trim(),
            iconCode: `
                <g-button icon="setting"></g-button>
                <g-button icon="setting">设置</g-button>
            `.replace(/^\n+|\t+| +/g, '').trim(),
            loadingCode: `<g-button :loading="true">loading</g-button>`.replace(/^\n+|\t+| +/g, '').trim(),
            groupCode: `
                <g-button-group>
                    <g-button icon="left">上一页</g-button>
                    <g-button icon="right" icon-position="right">下一页</g-button>
                </g-button-group>

                <g-button-group>
                    <g-button icon="left">上一页</g-button>
                    <g-button>更多</g-button>
                    <g-button icon="right" icon-position="right">下一页</g-button>
                </g-button-group>
            `.replace(/^\n+|\t+| +/g, '').trim(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';
</style>



