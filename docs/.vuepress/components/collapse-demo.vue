<template>
    <div class="collapse-demo">
        <demo-content-block v-if="type === 'basic'">
            <div class="row">
                <g-collapse :selected.sync="selected1" @update:selected="onChange1">
                    <g-collapse-item title="一致性 Consistency" name="consistency">
                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </g-collapse-item>
                    <g-collapse-item title="反馈 Feedback" name="feedback">
                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </g-collapse-item>
                    <g-collapse-item title="效率 Efficiency" name="efficiency">
                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>
                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </g-collapse-item>
                    <g-collapse-item title="可控 Controllability" name="controllability">
                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </g-collapse-item>
                </g-collapse>
            </div>
            
            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </demo-content-block>

        <demo-content-block v-if="type === 'accordion'">
            <div class="row">
                <g-collapse :selected.sync="selected2" @update:selected="onChange2" single>
                    <g-collapse-item title="一致性 Consistency" name="consistency">
                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </g-collapse-item>
                    <g-collapse-item title="反馈 Feedback" name="feedback">
                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </g-collapse-item>
                    <g-collapse-item title="效率 Efficiency" name="efficiency">
                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>
                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </g-collapse-item>
                    <g-collapse-item title="可控 Controllability" name="controllability">
                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </g-collapse-item>
                </g-collapse>
            </div>
            
            <template slot="code">
                通过 <code>single</code> 属性来设置是否以手风琴模式显示。
                <pre><code>{{accordionCode}}</code></pre>
            </template>
        </demo-content-block>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import Button from '../../../src/components/button/button';
import Collapse from '../../../src/components/collapse/collapse';
import CollapseItem from '../../../src/components/collapse/collapse-item';

export default {
    components: {
        'g-button': Button,
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem,
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
            selected1: [],
            selected2: [],
            basicCode: `
                <g-collapse :selected.sync="selected1" @update:selected="onChange1">
                    <g-collapse-item title="一致性 Consistency" name="consistency">
                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </g-collapse-item>
                    <g-collapse-item title="反馈 Feedback" name="feedback">
                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </g-collapse-item>
                    <g-collapse-item title="效率 Efficiency" name="efficiency">
                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>
                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </g-collapse-item>
                    <g-collapse-item title="可控 Controllability" name="controllability">
                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </g-collapse-item>
                </g-collapse>

                <script>
                    export default{
                        data() {
                            return {
                                selected1: [],
                            }
                        },
                        methods: {
                            onChange1() {
                                console.log(this.selected1);
                            },
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
            accordionCode: `
                <g-collapse :selected.sync="selected2" @update:selected="onChange2" single>
                    <g-collapse-item title="一致性 Consistency" name="consistency">
                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </g-collapse-item>
                    <g-collapse-item title="反馈 Feedback" name="feedback">
                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </g-collapse-item>
                    <g-collapse-item title="效率 Efficiency" name="efficiency">
                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>
                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </g-collapse-item>
                    <g-collapse-item title="可控 Controllability" name="controllability">
                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </g-collapse-item>
                </g-collapse>

                <script>
                    export default{
                        data() {
                            return {
                                selected2: [],
                            }
                        },
                        methods: {
                            onChange2() {
                                console.log(this.selected2);
                            },
                        }
                    }
                ${'<'}/script>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
    methods: {
        onChange1() {
            console.log(this.selected1);
        },
        onChange2() {
            console.log(this.selected2);
        },
    }
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/docs-demo-style.scss';
@import '../../../src/assist/style/_var.scss';

.collapse-demo{
    .collapse-demo-text{
        @include fontLineColor(14px, 18px, #666);
    }
}
</style>



