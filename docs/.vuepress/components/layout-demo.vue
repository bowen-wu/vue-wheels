<template>
    <div class="layout-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-content>Content</g-content>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-content>Content</g-content>
                    <g-footer>Footer</g-footer>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-content>Content</g-content>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-layout class="layout-demo-layout">
                        <g-sider>Sider</g-sider>
                        <g-content>Content</g-content>
                    </g-layout>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-layout class="layout-demo-layout">
                        <g-sider>Sider</g-sider>
                        <g-layout class="layout-demo-layout">
                            <g-content>Content</g-content>
                            <g-footer>Footer</g-footer>
                        </g-layout>
                    </g-layout>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-layout class="layout-demo-layout">
                        <g-header>Header</g-header>
                        <g-content>Content</g-content>
                    </g-layout>
                </g-layout>
            </div>

            <div class="row">
                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-layout class="layout-demo-layout">
                        <g-header>Header</g-header>
                        <g-content>Content</g-content>
                        <g-footer>Footer</g-footer>
                    </g-layout>
                </g-layout>
            </div>
            
            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Layout from '../../../src/components/layout/layout';
import Content from '../../../src/components/layout/content';
import Footer from '../../../src/components/layout/footer';
import Header from '../../../src/components/layout/header';
import Sider from '../../../src/components/layout/sider';
export default {
    components: {
        'g-layout': Layout,
        'g-content': Content,
        'g-footer': Footer,
        'g-header': Header,
        'g-sider': Sider,
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
                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-content>Content</g-content>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-content>Content</g-content>
                    <g-footer>Footer</g-footer>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-content>Content</g-content>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-layout class="layout-demo-layout">
                        <g-sider>Sider</g-sider>
                        <g-content>Content</g-content>
                    </g-layout>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-header>Header</g-header>
                    <g-layout class="layout-demo-layout">
                        <g-sider>Sider</g-sider>
                        <g-layout class="layout-demo-layout">
                            <g-content>Content</g-content>
                            <g-footer>Footer</g-footer>
                        </g-layout>
                    </g-layout>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-layout class="layout-demo-layout">
                        <g-header>Header</g-header>
                        <g-content>Content</g-content>
                    </g-layout>
                </g-layout>

                <g-layout class="layout-demo-layout">
                    <g-sider>Sider</g-sider>
                    <g-layout class="layout-demo-layout">
                        <g-header>Header</g-header>
                        <g-content>Content</g-content>
                        <g-footer>Footer</g-footer>
                    </g-layout>
                </g-layout>

                <style>
                    .g-header, .g-footer {
                        background-color: #B3C0D1;
                        color: #333;
                        text-align: center;
                        line-height: 60px;
                    }
                    
                    .g-sider {
                        background-color: #D3DCE6;
                        color: #333;
                        text-align: center;
                        line-height: 200px;
                    }
                    
                    .g-content {
                        background-color: #E9EEF3;
                        color: #333;
                        text-align: center;
                        line-height: 160px;
                    }
                </style>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';
.layout-demo{
    &-layout{
        min-height: 320px;
    }
    .g-header, .g-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .g-sider {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .g-content {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
}
</style>



