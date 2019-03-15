<template>
    <div class="popover-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-popover trigger="hover">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>hover</g-button>
                </g-popover>

                <g-popover position="bottom">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>click</g-button>
                </g-popover>
            </div>
            
            <template slot="code">
                <code>trigger</code> 属性用于设置何时触发 Popover，支持两种触发方式：<code>hover</code> 和 <code>click</code>。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'position'">
            <div class="row">
                <g-popover position="top">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>上方</g-button>
                </g-popover>

                <g-popover position="right">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>右方</g-button>
                </g-popover>

                <g-popover position="bottom">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>下方</g-button>
                </g-popover>

                <g-popover position="left">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>左方</g-button>
                </g-popover>
            </div>
            
            <template slot="code">
                使用 <code>position</code> 属性设置 Popover 的位置，默认为 <code>top</code>。
                <pre><code>{{positionCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'action'">
            <div class="row">
                <g-popover>
                    <template slot="content" slot-scope="{close}">
                        <div class="popover-demo-item">
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                            <hr />
                            确定删除吗？
                            <g-button class="popover-demo-item-action" @click="close">确定</g-button>
                        </div>
                    </template>
                    <g-button>click</g-button>
                </g-popover>
            </div>
            
            <template slot="code">
                // TODO: 作用域插槽
                <pre><code>{{actionCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Button from '../../../src/components/button/button';
import Popover from '../../../src/components/popover/popover';

export default {
    components: {
        'g-button': Button,
        'g-popover': Popover,
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
                <g-popover trigger="hover">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>hover</g-button>
                </g-popover>

                <g-popover position="bottom">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>click</g-button>
                </g-popover>
            `.replace(/^ {16}/gm, '').trim(),
            positionCode: `
                <g-popover position="top">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>上方</g-button>
                </g-popover>

                <g-popover position="right">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>右方</g-button>
                </g-popover>

                <g-popover position="bottom">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>下方</g-button>
                </g-popover>

                <g-popover position="left">
                    <template slot="content">
                        <div>
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                        </div>
                    </template>
                    <g-button>左方</g-button>
                </g-popover>
            `.replace(/^ {16}/gm, '').trim(),
            actionCode: `
                <g-popover>
                    <template slot="content" slot-scope="{close}">
                        <div class="popover-demo-item">
                            <div class="popover-demo-item-title">标题</div>
                            这是一段内容,这是一段内容,这是一段内容,这是一段内容。
                            <hr />
                            确定删除吗？
                            <g-button class="popover-demo-item-action" @click="close">确定</g-button>
                        </div>
                    </template>
                    <g-button>click</g-button>
                </g-popover>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="scss">
@import '../../../src/assist/style/docs-demo-style.scss';
@import '../../../src/assist/style/_var.scss';

.popover-demo-item{
    @include flex();
    flex-direction: column;
    .popover-demo-item-action {
        margin-left: auto;
        margin-top: 8px;
    }
}
.popover-demo-item-title {
    font-weight: 600;
    color: #303133;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
}
.g-popover-content-wrapper {
    z-index: 2;
}

</style>



