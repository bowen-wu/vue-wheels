<template>
    <div class="toast-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-button @click="onClick1">自动关闭</g-button>
                <g-button @click="onClick2">自动设置关闭时间</g-button>
            </div>
            <template slot="code">
                Toast 组件提供通知功能，它会注册一个 <code>$toast</code> 方法，接收一个必传参数，接受一个可选参数 <code>Object</code> ，默认情况下，经过一段时间后 Toast 组件会自动关闭，但是通过设置  <code>autoClose</code> ，可以控制关闭的时间间隔，特别的是，如果设置为  <code>false</code>，则不会自动关闭。注意： <code>autoClose</code> 接收  <code>Number | Boolean</code>，当为  <code>Number</code> 时，单位为 s，默认为  <code>2</code>。   
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'position'">
            <div class="row">
                <g-button @click="onClick3">顶部弹出</g-button>
                <g-button @click="onClick4">中部弹出</g-button>
                <g-button @click="onClick5">底部弹出</g-button>
            </div>
            <template slot="code">
                使用 <code>position</code> 属性定义 Toast 的弹出位置，支持三个选项： <code>top</code>、<code>middle</code>、<code>bottom</code>，默认为 <code>top</code>。
                <pre><code>{{positionCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'closeButton'">
            <div class="row">
                <g-button @click="onClick6">点我</g-button>
            </div>
            <template slot="code">
                当使用了关闭按钮时，最好将 <code>autoClose</code> 设置为 <code>false</code>，这样 <code>Toast</code> 将不会自动关闭。
                <pre><code>{{closeButtonCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'html'">
            <div class="row">
                <g-button @click="onClick7">点我</g-button>
            </div>
            <template slot="code">
                将 <code>enableHTML</code> 属性设置为 <code>true</code>，第一个参数就会被当做 HTML 片段处理。
                <pre><code>{{htmlCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import Vue from 'vue';
import DemoContentBlock from './demo-block';
import Toast from '../../../src/components/toast/toast';
import Button from '../../../src/components/button/button';
import ToastPlugin from '../../../src/plugin/toast.js';
Vue.use(ToastPlugin);

export default {
    components: {
        'g-toast': Toast,
        'g-button': Button,
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
                <g-button @click="onClick1">自动关闭</g-button>
                <g-button @click="onClick2">自动设置关闭时间</g-button>

                <script>
                    export default{
                        data() {
                            return {}
                        },
                        methods: {
                            onClick1() {
                                this.$toast('我是弹出内容');
                            },
                            onClick2() {
                                this.$toast('我是弹出内容', {
                                    autoClose: 5,
                                });
                            },
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            positionCode: `
                <g-button @click="onClick2">顶部弹出</g-button>
                <g-button @click="onClick3">中部弹出</g-button>
                <g-button @click="onClick4">底部弹出</g-button>

                <script>
                    export default{
                        data() {
                            return {}
                        },
                        methods: {
                            onClick3() {
                                this.$toast('我是弹出内容', {
                                    position: 'top'
                                });
                            },
                            onClick4() {
                                this.$toast('我是弹出内容', {
                                    position: 'middle'
                                });
                            },
                            onClick5() {
                                this.$toast('我是弹出内容', {
                                    position: 'bottom'
                                });
                            },
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            closeButtonCode: `
                <g-button @click="onClick6">点我</g-button>

                <script>
                    export default{
                        data() {
                            return {}
                        },
                        methods: {
                            onClick6() {
                                this.$toast('我是弹出内容', {
                                    autoClose: false,
                                    closeButton: {
                                        text: '关闭',
                                        callback: () => {
                                            console.log('关闭了 Toast');
                                        }
                                    }
                                });
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            htmlCode: `
                <g-button @click="onClick7">点我</g-button>

                <script>
                    export default{
                        data() {
                            return {}
                        },
                        methods: {
                            onClick7() {
                                this.$toast('<span style="color: red;">我是弹出内容(红色)</span>', {
                                    enableHTML: true,
                                });
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
    methods: {
        onClick1() {
            this.$toast('我是弹出内容');
        },
        onClick2() {
            this.$toast('我是弹出内容', {
                autoClose: 5,
            });
        },
        onClick3() {
            this.$toast('我是弹出内容', {
                position: 'top'
            });
        },
        onClick4() {
            this.$toast('我是弹出内容', {
                position: 'middle'
            });
        },
        onClick5() {
            this.$toast('我是弹出内容', {
                position: 'bottom'
            });
        },
        onClick6() {
            this.$toast('我是弹出内容', {
                autoClose: false,
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        console.log('关闭了 Toast');
                    }
                }
            });
        },
        onClick7() {
            this.$toast('<span style="color: red;">我是弹出内容(红色)</span>', {
                enableHTML: true,
            });
        }
    }
};
</script>

<style lang="scss">
@import '../../../src/assist/style/docs-demo-style.scss';

body div.g-toast-wrapper.position-top{
    z-index: 21;
}
</style>



