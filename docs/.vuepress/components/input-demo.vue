<template>
    <div class="input-demo">
        <demo-content-block v-if="type === 'basic'">
            <g-input class="input limitWidth" placeholder="请输入内容" />
            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'disabledAndReadonly'">
            <g-row class="row">
                <g-input class="input" disabled placeholder="禁用状态" />
            </g-row>
            <g-row class="row">
                <g-input class="input" readonly placeholder="可读状态" />
            </g-row>

            <template slot="code">
                通过 disabled 属性指定是否禁用 input 组件， 通过 readonly 属性指定 input 组件是否可读。
                <pre><code>{{disabledAndReadonlyCode}}</code></pre>
            </template>
        </demo-content-block>


        <demo-content-block v-if="type === 'clearable'">
            <g-input v-model="input" class="input limitWidth" clearable placeholder="请输入内容" />

            <template slot="code">
                使用 clearable 属性即可得到一个可清空的输入框
                <pre><code>{{clearableCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'icon'">
            <g-row class="row">
                <g-input class="input" pre-icon="setting" placeholder="请输入内容" />
                <g-input class="input" clearable next-icon="tips" placeholder="请输入内容" />
            </g-row>

            <template slot="code">
                可以通过 pre-icon 和 next-icon 属性在 input 组件首部和尾部增加显示图标。
                <pre><code>{{iconCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'mixed'">
            <g-row class="row">
                <g-input class="input" placeholder="网址" pre-text="http://" next-text=".com" />
            </g-row>
            <g-row class="row">
                <g-input class="input" placeholder="内容" next-text="搜索" />
            </g-row>

            <template slot="code">
                <pre><code>{{mixedCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Input from '../../../src/components/input/input';
import Icon from '../../../src/components/icon/icon';
import Row from '../../../src/components/grid/row';
export default {
    components: {
        'g-input': Input,
        'g-row': Row,
        'g-icon': Icon,
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
            input: '',
            basicCode: `
                <g-input v-model="input" disabled placeholder="请输入内容" />

                <script>
                    export default{
                        data() {
                            return {
                                input: '',
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            disabledAndReadonlyCode: `
                <g-input v-model="input1" placeholder="禁用状态" />
                <g-input v-model="input2" readonly placeholder="可读状态" />

                <script>
                    export default{
                        data() {
                            return {
                                input1: '',
                                input2: '可读状态',
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            clearableCode: `
                <g-input v-model="input3" clearable placeholder="请输入内容" />  
                
                <script>
                    export default{
                        data() {
                            return {
                                input3: '',
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            iconCode: `
                <g-input v-model="input4" pre-icon="setting" placeholder="请输入内容" />
                <g-input v-model="input5" next-icon="tips" placeholder="请输入内容" />

                <script>
                    export default{
                        data() {
                            return {
                                input4: '',
                                input5: '',
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            mixedCode: `
                <g-input v-model="input6" class="input" placeholder="网址" pre-text="http://" next-text=".com" />
                <g-input v-model="input7" class="input" placeholder="内容" next-text="搜索" />

                <script>
                    export default{
                        data() {
                            return {
                                input6: '',
                                input7: '',
                            }
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';

.input{
    margin-left: 0.5em;
    &:first-of-type{
        margin-left: 0;
    }
    &.limitWidth{
        width: 180px;
    }
}
</style>



