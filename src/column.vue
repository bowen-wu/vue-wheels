<template>
    <div class="g-col" :class="[span && `col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bowen-column',
    props: {
        span: {
            type: [Number, String],
            required: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.g-col{
    padding: 8px;
    border: 1px solid #666;
    width: 100%;
    background-color: #3af;

    $class-pre: col-;
	@for $i from 1 through 24 {
		&.#{$class-pre}#{$i} {
			width: ($i / 24) * 100%;
		}
	}
}
</style>
