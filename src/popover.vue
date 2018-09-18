<template>
    <div class="g-popover" @click="onClick" ref="popover">
        <div class="g-popover-content-wrapper" ref="contentWrapper" v-if="visible">
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
    props: {},
    data() {
        return {
            visible: false,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        onClick(event) {
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible){
                    this.close();
                }else{
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
        onClickDocumentEventHandle({target}) {
            let {contentWrapper, popover} = this.$refs;
            if(popover && (popover === target || popover.contains(target))){
                return;
            }
            if(contentWrapper && (contentWrapper === target || contentWrapper.contains(target))){
                return;
            }
            this.close();

        },
        positionContent() {
            let {triggerWrapper, contentWrapper} = this.$refs;
            let {width, height, left, top} = triggerWrapper.getBoundingClientRect();
            contentWrapper.style.left = `${left + window.scrollX}px`;
            contentWrapper.style.top = `${top + window.scrollY}px`;
            document.body.appendChild(contentWrapper);
        },
    },
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.g-popover{
    position: relative;
    display: inline-flex;
    vertical-align: top;
    & > .g-popover-button-wrapper{
        display: inline-block;
        vertical-align: top;
    }
}
.g-popover-content-wrapper{
    border: 1px solid $border-color;
    border-radius: $border-radius;
    position: absolute;
    transform: translateY(-100%);
    padding: 0.5em 1em;
}
</style>


