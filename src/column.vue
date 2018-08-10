<template>
    <div class="g-col" :class="[span && `col-${span}`, offset && `col-offset-${offset}`]" :style="{paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}">
		<div class="g-col-inner">
        	<slot></slot>
		</div>
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
	},
	data() {
		return {
			gutter: 0,
		}
	}
}
</script>

<style lang="scss" scoped>
.g-col{
	width: 100%;
	.g-col-inner{
		padding: 8px;
		border: 1px solid #666;
		background-color: #3af;
	}

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
