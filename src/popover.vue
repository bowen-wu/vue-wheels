<template>
    <div class="g-popover" @click="onClick">
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
        onClickDocumentEventHandle(event) {
            // TODO: 仅仅内容区分还是说整个 popover 区分，芳芳是整个 popover，但是内容区分的时候，点击 button 直接取消监听，也不会有 bug
            // if(!this.$refs.contentWrapper.contains(event.target)){
            //     this.close();
            // }
            if(!this.$refs.popover.contains(event.target)){
                this.close();
            }
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
    border: 1px solid red;
    // display: inline-flex;
    vertical-align: top;
    position: absolute;
    transform: translateY(-100%);
    padding: 0.5em 1em;
}
</style>


