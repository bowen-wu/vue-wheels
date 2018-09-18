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
            console.log(event.target);
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible){
                    this.close();
                }else{
                    this.open();
                }
            }else{
                console.log(1)
            }
        },
        close() {
            this.visible = false;
            document.removeEventListener('click', this.documentOnClickEventHandle);
        },
        open() {
            this.visible = true;
            this.$nextTick(() => {
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
                this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
                document.body.appendChild(this.$refs.contentWrapper);
                document.addEventListener('click', this.documentOnClickEventHandle);
            });
        },
        documentOnClickEventHandle(event) {
            console.log('documentOnClickEventHandle', event.target)
            if(!this.$refs.contentWrapper.contains(event.target)){
                this.visible = false;
                document.removeEventListener('click', this.documentOnClickEventHandle);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.g-popover{
    position: relative;
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


