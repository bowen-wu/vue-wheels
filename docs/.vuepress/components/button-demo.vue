<template>
    <div class="button-demo">
        <demo-content-block v-if="type === 'basic'">
            <g-row class="row">
                <g-button class="button">默认按钮</g-button>
                <g-button type="primary" class="button">主要按钮</g-button>
                <g-button type="success" class="button">成功按钮</g-button>
                <g-button type="warning" class="button">警告按钮</g-button>
                <g-button type="danger" class="button">危险按钮</g-button>
                <g-button type="info" class="button">信息按钮</g-button>
            </g-row>

            <g-row class="row">
                <g-button plain class="button">默认按钮</g-button>
                <g-button plain type="primary" class="button">主要按钮</g-button>
                <g-button plain type="success" class="button">成功按钮</g-button>
                <g-button plain type="warning" class="button">警告按钮</g-button>
                <g-button plain type="danger" class="button">危险按钮</g-button>
                <g-button plain type="info" class="button">信息按钮</g-button>
            </g-row>

            <g-row class="row">
                <g-button round class="button">默认按钮</g-button>
                <g-button round type="primary" class="button">主要按钮</g-button>
                <g-button round type="success" class="button">成功按钮</g-button>
                <g-button round type="warning" class="button">警告按钮</g-button>
                <g-button round type="danger" class="button">危险按钮</g-button>
                <g-button round type="info" class="button">信息按钮</g-button>
            </g-row>


            <template slot="code">
                使用type、plain 和 round 属性来定义 Button 的样式。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>


        <demo-content-block v-if="type === 'disabled'">
            <g-row class="row">
                <g-button disabled class="button">默认按钮</g-button>
                <g-button disabled type="primary" class="button">主要按钮</g-button>
                <g-button disabled type="success" class="button">成功按钮</g-button>
                <g-button disabled type="warning" class="button">警告按钮</g-button>
                <g-button disabled type="danger" class="button">危险按钮</g-button>
                <g-button disabled type="info" class="button">信息按钮</g-button>
            </g-row>

            <g-row class="row">
                <g-button disabled plain class="button">默认按钮</g-button>
                <g-button disabled plain type="primary" class="button">主要按钮</g-button>
                <g-button disabled plain type="success" class="button">成功按钮</g-button>
                <g-button disabled plain type="warning" class="button">警告按钮</g-button>
                <g-button disabled plain type="danger" class="button">危险按钮</g-button>
                <g-button disabled plain type="info" class="button">信息按钮</g-button>
            </g-row>

            <template slot="code">
                使用 disabled 属性来定义按钮是否可用，它接受一个Boolean值。
                <pre><code>{{disabledCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'icon'">
            <g-button icon="tips"></g-button>
            <g-button icon="clear"></g-button>
            <g-button icon="success"></g-button>
            <g-button icon="setting">设置</g-button>
            <g-button icon="download" iconPosition="right">下载</g-button>

            <template slot="code">
                设置icon属性即可，也可以设置在文字右边的 icon ，只要设置 iconPosition='right' 即可。
                <pre><code>{{iconCode}}</code></pre>
            </template>
        </demo-content-block>


        <demo-content-block v-if="type === 'loading'">
            <g-button loading>加载中</g-button>

            <template slot="code">
                要设置为 loading 状态，只要设置loading属性为true即可。
                <pre><code>{{loadingCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'group'">
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>

            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>

            <template slot="code">
                使用 &lt;g-button-group&gt; 标签来嵌套你的按钮。
                <pre><code>{{groupCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Button from '../../../src/components/button/button';
import ButtonGroup from '../../../src/components/button/button-group';
import Row from '../../../src/components/grid/row';
export default {
    components: {
        'g-button': Button,
        'g-button-group': ButtonGroup,
        'g-row': Row,
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
                <g-button>默认按钮</g-button>
                <g-button type="primary">主要按钮</g-button>
                <g-button type="success">成功按钮</g-button>
                <g-button type="warning">警告按钮</g-button>
                <g-button type="danger">危险按钮</g-button>
                <g-button type="info">信息按钮</g-button>

                <g-button plain>默认按钮</g-button>
                <g-button type="primary" plain>主要按钮</g-button>
                <g-button type="success" plain>成功按钮</g-button>
                <g-button type="warning" plain>警告按钮</g-button>
                <g-button type="danger" plain>危险按钮</g-button>
                <g-button type="info" plain>信息按钮</g-button>

                <g-button round>默认按钮</g-button>
                <g-button type="primary" round>主要按钮</g-button>
                <g-button type="success" round>成功按钮</g-button>
                <g-button type="warning" round>警告按钮</g-button>
                <g-button type="danger" round>危险按钮</g-button>
                <g-button type="info" round>信息按钮</g-button>
            `.replace(/^ {16}/gm, '').trim(),
            disabledCode: `
                <g-button disabled>默认按钮</g-button>
                <g-button disabled type="primary">主要按钮</g-button>
                <g-button disabled type="success">成功按钮</g-button>
                <g-button disabled type="warning">警告按钮</g-button>
                <g-button disabled type="danger">危险按钮</g-button>
                <g-button disabled type="info">信息按钮</g-button>

                <g-button disabled plain>默认按钮</g-button>
                <g-button disabled type="primary" plain>主要按钮</g-button>
                <g-button disabled type="success" plain>成功按钮</g-button>
                <g-button disabled type="warning" plain>警告按钮</g-button>
                <g-button disabled type="danger" plain>危险按钮</g-button>
                <g-button disabled type="info" plain>信息按钮</g-button>
            `.replace(/^ {16}/gm, '').trim(),
            iconCode: `
                <g-button icon="tips"></g-button>
                <g-button icon="clear"></g-button>
                <g-button icon="success"></g-button>
                <g-button icon="setting">设置</g-button>
                <g-button icon="download" iconPosition="right">下载</g-button>
            `.replace(/^\n+|\t+| +/g, '').trim(),
            loadingCode: `<g-button loading>加载中</g-button>`.replace(/^ {16}/gm, '').trim(),
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
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';
.button{
    margin-left: 0.5em;
    &:first-of-type{
        margin-left: 0;
    }
}
</style>



