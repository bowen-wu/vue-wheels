<template>
    <div class="g-popover" ref="popover">
        <div class="g-popover-content-wrapper" :class="dynamicClass" ref="contentWrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div class="g-popover-button-wrapper" ref="triggerWrapper">
            <slot ref="button"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bowen-popover',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(val) {
                return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0;
            },
        },
        trigger: {
            type: String,
            default: 'click',
            validator(val) {
                return ['click', 'hover'].indexOf(val) >= 0;
            },
        },
    },
    data() {
        return {
            visible: false,
        };
    },
    computed: {
        dynamicClass() {
            return {
                [`position-${this.position}`]: true,
            };
        },
    },
    mounted() {
        if(this.trigger === 'click'){
            this.$refs.popover.addEventListener('click', this.onClick);
        }else{
            this.$refs.popover.addEventListener('mouseenter', this.open);
            this.$refs.popover.addEventListener('mouseleave', this.close);
        }
    },
    destroyed() {
        if(this.trigger === 'click'){
            this.$refs.popover.removeEventListener('click', this.onClick);
        }else{
            this.$refs.popover.removeEventListener('mouseenter', this.open);
            this.$refs.popover.removeEventListener('mouseleave', this.close);
        }
    },
    methods: {
        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible) {
                    this.close();
                } else {
                    this.open();
                }
            }
        },
        close() {
            this.visible = false;
            document.removeEventListener('click', this.onClickDocumentEventHandle);
        },
        open() {
            this.visible = true;
            this.$nextTick(() => {
                this.positionContent();
                document.addEventListener('click', this.onClickDocumentEventHandle);
            });
        },
        onClickDocumentEventHandle({ target }) {
            let { contentWrapper, popover } = this.$refs;
            if (popover && (popover === target || popover.contains(target))) {
                return;
            }
            if (
                contentWrapper &&
                (contentWrapper === target || contentWrapper.contains(target))
            ) {
                return;
            }
            this.close();
        },
        positionContent() {
            let { triggerWrapper, contentWrapper } = this.$refs;
            document.body.appendChild(contentWrapper);
            let {
                width,
                height,
                left,
                top,
            } = triggerWrapper.getBoundingClientRect();
            let {
                width: contentWidth,
                height: contentHeight,
            } = contentWrapper.getBoundingClientRect();
            let positions = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX,
                },
                bottom: {
                    top: top + window.scrollY + height,
                    left: left + window.scrollX,
                },
                left: {
                    top: top + window.scrollY - Math.abs((height - contentHeight) / 2),
                    left: left + window.scrollX,
                },
                right: {
                    top: top + window.scrollY - Math.abs((height - contentHeight) / 2),
                    left: left + window.scrollX + width,
                },
            };
            contentWrapper.style.top = `${positions[this.position].top}px`;
            contentWrapper.style.left = `${positions[this.position].left}px`;
        },
    },
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.g-popover {
    position: relative;
    display: inline-flex;
    vertical-align: top;
    & > .g-popover-button-wrapper {
        display: inline-block;
        vertical-align: top;
    }
}
.g-popover-content-wrapper {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    position: absolute;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    background-color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    &::before,
    &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        position: absolute;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,
        &::after {
            left: 12px;
            border-bottom: 0;
        }
        &::before {
            border-top-color: #333;
            top: 100%;
        }
        &::after {
            border-top-color: #fff;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before,
        &::after {
            left: 12px;
            border-top: 0;
        }
        &::before {
            border-bottom-color: #333;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: #fff;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,
        &::after {
            top: 50%;
            transform: translateY(-50%);
            border-right: 0;
        }
        &::before {
            border-left-color: #333;
            left: 100%;
        }
        &::after {
            border-left-color: #fff;
            left: calc(100% - 1px);
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before,
        &::after {
            top: 50%;
            transform: translateY(-50%);
            border-left: 0;
        }
        &::before {
            border-right-color: #333;
            right: 100%;
        }
        &::after {
            border-right-color: #fff;
            right: calc(100% - 1px);
        }
    }
}
</style>


