<template>
    <div class="demo-block">
        <div class="demo">
            <slot></slot>
        </div>

        <div class="line" v-if="codeVisible"></div>


        <div class="code-switch-wrapper">
            <transition name="demo-fade">
                <div class="code" v-if="codeVisible">
                    <slot name="code"></slot>
                </div>
            </transition>

            <div class="switch" @click="toggle" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
                <g-icon :name="iconName" class="icon" :class="iconDynamicClass"></g-icon>
                <transition name="demo-slide">
                    <div class="text" v-if="textVisible">{{text}}</div>
                </transition> 
            </div>
        </div>

    </div>
    </div>
</template>

<script>
import Icon from '../../../src/components/icon/icon';
import Collapse from '../../../src/components/collapse/collapse';
import CollapseItem from '../../../src/components/collapse/collapse-item';
export default {
    name: 'demo-block',
    components: {
        'g-icon': Icon,
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem,
    },
    props: {},
    data() {
        return {
            codeVisible: false,
            text: '显示代码',
            textVisible: false,
        };
    },
    computed: {
        iconDynamicClass() {
            return this.textVisible ? {'active': true} : '';
        },
        iconName() {
            let name = 'down-solid';
            if(this.codeVisible) {
                name = 'up-solid';
            }
            return name;
        },
    },
    methods: {
        toggle() {
            if(this.codeVisible){
                this.text = '显示代码';
            }else{
                this.text = '隐藏代码';
            }
            this.codeVisible = !this.codeVisible;
        },
        onMouseEnter() {
            this.textVisible = true;
        },
        onMouseLeave() {
            this.textVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../../src/assist/style/_var.scss';
.demo-block {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    > .demo{
        padding: 24px;
    }
    > .line{
        border-top: 1px solid #ebebeb;
    }
    > .code-switch-wrapper{
        position: relative;
        overflow: hidden;
        > .code{
            padding: 24px;
        }
        > .switch{
            @include flex(center, center);
            min-height: 18px;
            padding: 12px 0;
            border-top: 1px solid #ebebeb;
            position: relative;
            > .icon{
                fill: #ddd;
                position: absolute;
                transition: all 0.5s linear;
                &.active{
                    fill: #409eff;
                    transform: translateX(-40px);
                }
            }
            > .text{
                padding-left: 8px;
                @include fontLineColor(14px, 18px, #409eff);
            }
        }
    }

}

.demo-fade-enter-active,
.demo-fade-leave-active {
    transition: all 0.5s linear;
}

.demo-fade-enter,
.demo-fade-leave-to{
    transform: translateY(-100%);
}

.demo-slide-enter-active,
.demo-slide-leave-active {
    transition: all 0.5s linear;
}

.demo-slide-enter,
.demo-slide-leave-to{
    transform: translateX(40px);
    opacity: 0;
}

</style>


