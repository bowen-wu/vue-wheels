<template>
    <div class="demo-block">
        <div class="demo">
            <slot></slot>
        </div>
        <div class="code" v-if="showCode">
            <slot name="code"></slot>
        </div>
        <div class="switch" @click="toggle">
            <div class="icon">
                <div class="triangle" :class="dynamicClass"></div>
            </div>
            <div class="text">{{text}}</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'demo-block',
    props: {},
    data() {
        return {
            showCode: false,
            text: '显示代码',
        };
    },
    computed: {
        dynamicClass() {
            if(this.showCode){
                return {'up': true};
            }
        },
    },
    methods: {
        toggle() {
            if(this.showCode){
                this.text = '显示代码';
            }else{
                this.text = '隐藏代码';
            }
            this.showCode = !this.showCode;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/scssMixin.scss';
.demo-block {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
    z-index: 1;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    > .demo{
        padding: 24px;
    }
    > .code{
        border-top: 1px solid #ebebeb;
        padding: 24px;
    }
    > .switch{
        @include flex(center, center);
        padding: 12px 0;
        transition: 0.2s;
        border-top: 1px solid #ebebeb;
        > .icon{
            width: 16px;
            height: 16px;
            padding: 1px 0;
            > .triangle{
                border: 8px solid transparent;
                border-top-color: #ddd;
                border-bottom-color: transparent;
                transform: translateY(4px);
                &.up{
                    border-top-color: transparent;
                    border-bottom-color: #ddd;
                    transform: translateY(-4px);
                }
            }
        }
        > .text{
            display: none;
            padding-left: 8px;
            @include fontLineColor(14px, 18px, #409eff);
        }
        &:hover{
            > .icon > .triangle{
                border-top-color: #409eff;
                border-bottom-color: transparent;
                &.up{
                    border-top-color: transparent;
                    border-bottom-color: #409eff;
                }
            }
            > .text{
                display: block;
            }
        }
    }
}
</style>


