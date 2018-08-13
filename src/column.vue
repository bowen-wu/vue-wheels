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
			default: 24,
		},
		offset: {
			type: [Number, String],
			required: false,
		},
		// xs: {
		// 	type: Object,
		// 	required: false,
		// 	validator,
		// },
		sm: {
			type: Object,
			required: false,
			validator,
		},
		md: {
			type: Object,
			required: false,
			validator,
		},
		lg: {
			type: Object,
			required: false,
			validator,
		},
		xl: {
			type: Object,
			required: false,
			validator,
		}
	},
	data() {
		return {
			gutter: 0,
		}
	},
	computed: {
		dymanicClass() {
			let {span, offset,createResponseClass, sm, md, lg, xl} = this;
			return [
				span && `col-${span}`,
				offset && `col-offset-${offset}`,
				// ...createResponseClass(xs, 'xs'),
				...createResponseClass(sm, 'sm'),
				// ...createResponseClass({span, offset}),
				...createResponseClass(md, 'md'),
				...createResponseClass(lg, 'lg'),
				...createResponseClass(xl, 'xl'),
			]
		},
		dynamicStyle() {
			return {
				paddingLeft: this.gutter / 2 + 'px',
				paddingRight: this.gutter / 2 + 'px',
			}
		}
	},
	methods: {
		createResponseClass(obj, str = '') {
			let arr = [];
			if(obj && obj.span){
				str ? arr.push(`col-${str}-${obj.span}`) : arr.push(`col-${obj.span}`);
			}
			if(obj && obj.offset){
				str ? arr.push(`col-${str}-offset-${obj.offset}`) : arr.push(`col-offset-${obj.offset}`);
			}
			return arr;
		},
	},
}
</script>

<style lang="scss" scoped>
.g-col{
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
	// @media (max-width: 576px){
	// 	$class-prefix: col-xs-;
	// 	@for $n from 1 through 24 {
	// 		&.#{$class-prefix}#{$n} {
	// 			width: ($n / 24) * 100%;
	// 		}
	// 	}
	// 	$class-prefix: col-xs-offset-;
	// 	@for $n from 1 through 24 {
	// 		&.#{$class-prefix}#{$n} {
	// 			margin-left: ($n / 24) * 100%;
	// 		}
	// 	}
	// }
	@media (min-width: 577px) {
		$class-prefix: col-sm-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
		$class-prefix: col-sm-offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}
	// @media (min-width: 769px) {
	// 	$class-prefix: col-;
	// 	@for $n from 1 through 24 {
	// 		&.#{$class-prefix}#{$n} {
	// 			width: ($n / 24) * 100%;
	// 		}
	// 	}
	// 	$class-prefix: col-offset-;
	// 	@for $n from 1 through 24 {
	// 		&.#{$class-prefix}#{$n} {
	// 			margin-left: ($n / 24) * 100%;
	// 		}
	// 	}
	// }

	@media (min-width: 769px) {
		$class-prefix: col-md-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
		$class-prefix: col-md-offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}
	@media (min-width: 993px) {
		$class-prefix: col-lg-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
		$class-prefix: col-lg-offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}
	@media (min-width: 1201px) {
		$class-prefix: col-xl-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
		$class-prefix: col-xl-offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}
	}



}
</style>
