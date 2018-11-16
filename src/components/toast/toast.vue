<template>
    <div class="g-toast-wrapper" :class="dynamicClass">
        <div class="g-toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="this.$slots.default[0]"></div>
            </div>
            <div class="line" v-if="closeButton.text" ref="line"></div>
            <div class="close-button" v-if="closeButton.text" @click="onClickCloseButton">
                <div class="text">{{this.closeButton.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-toast',
    props: {
        autoClose: {
            type: [Boolean, Number],
            required: false,
            default: 2,
            validator(value) {
                return value === false || typeof value === 'number';
            }
        },
        closeButton: {
            type: Object,
            required: false,
            default() {
                return {
                    text: '',
                    callback: undefined
                };
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
            default: 'top',
            validator(value) {
                return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
            }
        }
    },
    mounted() {
        this.setLineHeight();
        this.executeAutoClose();
    },
    computed: {
        dynamicClass() {
            return {
                [`position-${this.position}`]: true
            };
        }
    },
    methods: {
        executeAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoClose * 1000);
            }
        },
        close() {
            this.$el.remove();
            this.$emit('close');
            this.$destroy();
        },
        setLineHeight() {
            this.$nextTick(() => {
                if (this.closeButton.text) {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
                }
            });
        },
        onClickCloseButton() {
            this.close();
            if (typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assist/style/_var.scss';

.g-toast-wrapper {
    position: fixed;
    &.position-top {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        .g-toast {
            animation: slide-down $animate-duration linear;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
    &.position-middle {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .g-toast {
            animation: fadeIn $animate-duration linear;
        }
    }
    &.position-bottom {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        .g-toast {
            animation: slide-up $animate-duration linear;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    .g-toast {
        @include fontLineColor($font-size, $line-height, $color);
        @include flex(center, center);
        background: $bg-color;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        min-height: $min-height;
        padding: 0 16px;
        .message {
            padding: 12px 0;
        }
        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        .close-button {
            flex-shrink: 0;
            cursor: pointer;
            padding: 8px 0 8px 16px;
        }
    }
}
</style>


