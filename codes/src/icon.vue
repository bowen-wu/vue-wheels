<template>
    <svg class="g-icon" :class="{[`icon-${iconPosition}`]: true}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props: ['name', 'iconPosition'],
    // porps: {
    //     name: {
    //         type: String,
    //         required: false,
    //         default: '',
    //         validator(value){
    //             return true;
    //         },
    //     },
    //     iconPosition: {
    //         type: String,
    //         required: false,
    //         default: 'left',
    //         validator(value) {
    //             return (value === 'left') || (value === 'right');
    //         },
    //     },
    // },
}
</script>

<style lang="scss">
.g-icon {
    width: 1em;
    height: 1em;
}
</style>
