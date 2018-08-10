<template>
    <div class="g-col" :class="dymanicClass" :style="dynamicStyle">
		<div class="g-col-inner">
        	<slot></slot>
		</div>
    </div>
</template>

<script>
let validator = (obj) => {
	let userKey;
	let valid =  Object.keys(obj).every((key) => {
		let isInclude = ['span', 'offset'].includes(key);
		if(!isInclude){
			userKey = key;
		}
		return isInclude;
	});
	if(valid){
		return true;
	}else{
		console.error(`xs 中属性不符合要求，只能有 span 或者 offset 属性，而你有${userKey}属性`);
	}
}
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
		xs: {
			type: Object,
			required: false,
			validator,
		},
	},
	data() {
		return {
			gutter: 0,
		}
	},
	computed: {
		dymanicClass() {
			return [
				this.span && `col-${this.span}`,
				this.offset && `col-offset-${this.offset}`,
				...this.createResponseClass(this.xs, 'xs'),
			]
		},
		dynamicStyle() {
			return {
				paddingLeft: this.gutter / 2 + 'px',
				paddingRight: this.gutter / 2 + 'px',
			}
		}
	},
	created() {
		this.createResponseClass(this.xs, 'xs');
	},
	methods: {
		createResponseClass(obj, str = '') {
			let arr = [];
			if(obj && obj.span){
				arr.push(`col-${str}-${obj.span}`);
			}
			if(obj && obj.offset){
				arr.push(`col-${str}-offset-${obj.offset}`);
			}
			return arr;
		},
	},
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
	@media (max-width: 576px){
		$class-prefix: col-xs-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
		$class-prefix: col-xs-offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}

}
</style>
