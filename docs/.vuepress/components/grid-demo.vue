<template>
    <div class="grid-demo">

        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-row>
                    <g-col><div class="grid-demo-content bg-purple-dark"></div></g-col>
                </g-row>
            </div>
            <div class="row">
                <g-row>
                    <g-col span="12"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="12"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>
            </div>
            <div class="row">
                <g-row>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>
            <div class="row">
                <g-row>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>
            </div>
            <div class="row">
                <g-row>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>
            </div>

            <template slot="code">
                通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'gutter'">
            <div class="row">
                <g-row gutter="24">
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <template slot="code">
                Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
                <pre><code>{{gutterCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'mixin'">
            <div class="row">
                <g-row gutter="24">
                    <g-col span="16"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <div class="row">
                <g-row gutter="24">
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <div class="row">
                <g-row gutter="24">
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span=16><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <template slot="code">
                <pre><code>{{mixinCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'offset'">
            <div class="row">
                <g-row>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <div class="row">
                <g-row>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <div class="row">
                <g-row>
                    <g-col span="12" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <template slot="code">
                通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
                <pre><code>{{offsetCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'responsive'">
            <div class="row">
                <g-row gutter="24">
                    <g-col span="12" :lg="{span: 4}" :sm="{span: 8}" :md="{span: 10}" :xl="{span: 12, offset: 4}"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="12" :lg="{span: 12, offset: 8}" :sm="{span: 10, offset: 6}" :md="{span: 10, offset: 4}" :xl="{span: 8}"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
            </div>

            <template slot="code">
                <pre><code>{{responsiveCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import GRow from '../../../src/components/grid/row';
import GCol from '../../../src/components/grid/column';

export default {
    components: {
        'demo-content-block': DemoContentBlock,
        'g-row': GRow,
        'g-col': GCol,
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
                <g-row>
                    <g-col><div class="grid-demo-content bg-purple-dark"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="12"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="12"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple-light"></div></g-col>
                </g-row>
                
                <style>
                    .bg-purple-dark {
                        background: #99a9bf;
                    }
                    .bg-purple {
                        background: #d3dce6;
                    }
                    .bg-purple-light {
                        background: #e5e9f2;
                    }
                    .grid-demo-content {
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
            gutterCode: `
                <g-row gutter="24">
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
                
                <style>
                    .bg-purple {
                        background: #d3dce6;
                    }
                    .grid-demo-content {
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
            mixinCode: `
                <g-row gutter="24">
                    <g-col span="16"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <g-row gutter="24">
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="8"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <g-row gutter="24">
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span=16><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="4"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <style>
                    .bg-purple {
                        background: #d3dce6;
                    }
                    .grid-demo-content {
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
            offsetCode: `
                <g-row>
                    <g-col span="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="6" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <g-row>
                    <g-col span="12" offset="6"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>

                <style>
                    .bg-purple {
                        background: #d3dce6;
                    }
                    .grid-demo-content {
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
            responsiveCode: `
                <g-row gutter="24">
                    <g-col span="12" :lg="{span: 4}" :sm="{span: 8}" :md="{span: 10}" :xl="{span: 12, offset: 4}"><div class="grid-demo-content bg-purple"></div></g-col>
                    <g-col span="12" :lg="{span: 12, offset: 8}" :sm="{span: 10, offset: 6}" :md="{span: 10, offset: 4}" :xl="{span: 8}"><div class="grid-demo-content bg-purple"></div></g-col>
                </g-row>
                
                <style>
                    .bg-purple {
                        background: #d3dce6;
                    }
                    .grid-demo-content {
                        min-height: 36px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';
.grid-demo{
    &-content{
        min-height: 36px;
    }
}
</style>



