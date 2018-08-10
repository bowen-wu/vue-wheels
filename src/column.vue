<template>
    <div class="g-col" :class="[span && `col-${span}`, offset && `col-offset-${offset}`]">
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
		},
		offset: {
			type: [Number, String],
			required: false,
		},
    }
}
</script>

<style lang="scss" scoped>
.g-col{
    padding: 8px;
    border: 1px solid #666;
    width: 100%;
    background-color: #3af;

    $class-prefix: col-;
	@for $n from 1 through 24 {
		&.#{$class-prefix}#{$n} {
			width: ($n / 24) * 100%;
		}
	}
	$class-prefix: col-offset-;
	@for $n from 1 through 24 {
		&.#{$class-prefix}#{$n} {
			margin-left: ($n / 24) * 100%;
		}
	}
}
</style>
