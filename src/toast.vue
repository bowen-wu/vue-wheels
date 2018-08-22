<template>
    <div class="g-toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-toast',
    props: {
        
    },
}
</script>

<style lang="scss" scoped>
@import './assist/style/scssMixin.scss';

$font-size: 14px;
$line-height: 16px;
$color: #fff;

.g-toast{
    @include fontLineColor();
    @include flex(center, center);
    background: rgba(0,0,0,0.74);
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    padding: 8px 16px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>


