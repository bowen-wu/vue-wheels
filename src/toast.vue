<template>
    <div class="g-toast" ref="toast" :class="dynamicClass">
        <div class="message">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="this.$slots.default[0]"></div>
        </div>

        <div class="line" ref="line"></div>
        <div class="close-button">
            <div class="text" @click="onClickCloseButton">{{this.closeButton.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-toast',
    props: {
        autoClose: {
            type: Boolean,
            required: false,
            default: true
        },
        autoCloseDelay: {
            type: [String, Number],
            required: false,
            default: 3
        },
        closeButton: {
            type: Object,
            required: false,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHTML: {
            type: Boolean,
            required: false,
            default: false
        },
        position: {
            type: String,
            required: false,
            default: top,
            validator(value) {
                return ['top', 'middle', 'bottom'].indexOf(value) !== -1
            }
        }
    },
    mounted() {
        this.setLineHeight()
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    computed: {
        dynamicClass() {
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    methods: {
        close() {
            this.$el.remove()
            this.$destroy()
        },
        setLineHeight() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${
                    this.$refs.toast.getBoundingClientRect().height
                }px`
            })
        },
        onClickCloseButton() {
            this.close()
            if (typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './assist/style/scssMixin.scss';

$font-size: 14px;
$line-height: 16px;
$color: #fff;
$bg-color: rgba(0, 0, 0, 0.74);
$min-height: 40px;

.g-toast {
    @include fontLineColor();
    @include flex(center, center);
    background: $bg-color;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    position: fixed;
    min-height: $min-height;
    padding: 0 16px;
    &.position-top {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    &.position-middle {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &.position-bottom {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .message {
        padding: 12px 0;
    }
    .line {
        border-left: 1px solid #666;
        margin-right: 16px;
        margin-left: 16px;
    }
    .close-button {
    }
}
</style>


