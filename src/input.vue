<template>
    <div class="g-input-wrapper" :class="{[`tips-${tipsPosition}`]: true}">
        <label class="g-label" :class="{'pre-icon': preIcon, 'next-icon': nextIcon, 'pre-text': preText, 'next-text': nextText, 'tips': tipsType, [`tips-${tipsType}`]: true, 'clearable': clearable}">
            <!-- label -->
            <span v-if="label" class="g-label-content">{{label}}</span>

            <!-- pre text -->
            <div v-if="preText" class="g-pre-text">
                {{preText}}               
            </div>

            <!-- pre Icon -->
            <div v-if="preIcon" class="g-pre-icon">
                <g-icon :name="preIcon" class="g-icon"></g-icon>                
            </div>

            <!-- input -->
            <input class="g-input" :type="type" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :autofocus="autofocus" :maxlength="maxlength" :style="style" 
            @change="$emit('change', $event.target.value)" 
            @input="inputEvent" 
            @focus="$emit('focus', $event.target.value)" 
            @blur="$emit('blur', $event.target.value)">

            <!-- clearable -->
            <div v-if="clearable" class="g-clear-icon" :class="{ 'active': clearableActive }">
                <g-icon name="clear" class="g-icon"></g-icon>
            </div>

            <!-- next Icon -->
            <div v-if="nextIcon" class="g-next-icon">
                <g-icon :name="nextIcon" class="g-icon"></g-icon>
            </div>

            <!-- next text -->
            <div v-if="nextText" class="g-next-text">
                {{nextText}}               
            </div>

            <!-- tips -->
            <div v-if="tipsType" class="g-tips">
                <g-icon :name="tipsType" class="g-tips-icon"></g-icon>
                <span v-if="tipsMessage" class="g-tips-message">{{tipsMessage}}</span>
            </div>
        </label>
    </div>
</template>

<script>
import Icon from './icon';

export default {
    name: 'bowen-input',
    components: {
        'g-icon': Icon,
    },
    props: {
        type: {
           type: String,
           required: false,
           default: 'text', 
        },
        value: {
            type: String,
            required: false,
            default: '',
        },
        width: {
            type: Number,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
            default: '',
        },
        maxlength: {
            type: Number,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        readonly: {
            type: Boolean,
            require: false,
            default: false,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        preIcon: {
            type: String,
            required: false,
            default: '',
        },
        nextIcon: {
            type: String,
            required: false,
            default: '',
        },
        preText: {
            type: String,
            required: false,
            default: '', 
        },
        nextText: {
            type: String,
            required: false,
            default: '',
        },
        clearable: {
            type: Boolean,
            required: false,
            default: false,
        },
        
        // TODO: autofocus not work
        autofocus: {
            type: Boolean,
            required: false,
            default: true,
        },

        // Tips
        tipsType: {
            type: String,
            required: false,
            default: '',
        },

        // TODO: tipsMessage 需要 tipsType 存在才生效
        tipsMessage: {
            type: String,
            required: false,
            default: '',
        },
        tipsPosition: {
            type: String,
            required: false,
            default: 'right',
            validator(value) {
                return value === 'right' || value === 'down';
            },
        },
    },
    data() {
        return {
            widthData: 'x',
        }
    },
    computed: {
        style() {
            if(this.width){
                return {
                    width: this.width + 'px',
                }
            }else{
                return ;
            }
        },
        clearableActive() {
            console.log('this.value', this.value);
            return this.value;
        },
    },
    created() {
        // console.log(this.style)
    },
    methods: {
        inputEvent($event) {
            this.$emit('input', $event.target.value);
        }
    },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$font-size-tips: 12px;
$line-height: 16px;
$line-height-tips: 14px;
$color: #606266;
$color-placeholder: #ccc;
$color-tips: #57a3f3;
$color-tips-error: #F1453D;
$color-tips-success: #67c23a;
$color-disabled: #c0c4cc;
$border-radius: 4px;
$border-color: #dcdfe6;
$pre-next-icon-fill: #a1acb3;
$bg-color-disabled: #f5f7fa;
$border-color-disabled: #e4e7ed;
$border-color-hover: #c0c4cc;
$border-color-focus: #999;
$border-color-error: #F1453D;
$border-color-success: #67c23a;
$box-shadow-color: rgba(153, 153, 153, 0.2);
$box-shadow-color-error: rgba(241, 69, 61, 0.2);
$box-shadow-color-success: rgba(103, 194, 58, 0.2);

@mixin fontLineColor($color: $color){
    font-size: $font-size;
    line-height: $line-height;
    color: $color;
}
@mixin tips($tips-color: $color-tips) {
    font-size: $font-size-tips;
    line-height: $line-height-tips;
    color: $tips-color;
    white-space: nowrap;
}
@mixin flex($align-items: flex-start, $justify-content: flex-start){
    display: flex;
    justify-content: $justify-content;
    align-items: $align-items;
}

.g-input-wrapper{
    // @include flex(center);
    & > .g-label{
        width: 100%;
        @include flex(center);
        position: relative;

        & > .g-label-content{
            @include fontLineColor();
            white-space: nowrap;
        }

        // pre icon + next icon
        & > .g-pre-icon, & > .g-next-icon, & > .g-clear-icon{
            display: flex;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            padding: 0.5em;
            & > .g-icon{
                fill: $pre-next-icon-fill;
            }
        }

        &.pre-icon{
            & > .g-pre-icon{
                left: 2px;
            }
            & > .g-input{
                padding-left: calc(2em);
            }
        }

        &.next-icon, &.clearable{
            & > .g-next-icon, & > .g-clear-icon{
                right: 2px;
            }
            & > .g-clear-icon{
                &.active{
                    display: block;
                }
                display: none;
                z-index: 1;
            }
            & > .g-input{
                padding-right: calc(2em);
            }
        }

        // pre text + next text
        & > .g-pre-text, & > .g-next-text{
            @include fontLineColor();
            padding: 8px 16px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            display: flex;
            white-space: nowrap;
        }

        &.pre-text{
            & > .g-pre-text{
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            & > .g-input{
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -1px;
                &:focus{
                    position: relative;
                    z-index: 1;
                }
            }
        }

        &.next-text{
            & > .g-next-text{
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -1px;
            }
            & > .g-input{
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                &:focus{
                    position: relative;
                    z-index: 1;
                }
            }
        }

        // input 
        & > .g-input{
            @include fontLineColor();
            padding: 8px;
            border-radius: $border-radius;
            border: 1px solid $border-color;
            width: 100%;
            min-width: 120px;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                outline: none;
                border-color: $border-color-focus;
                box-shadow: 0 0 1px 1px $box-shadow-color;
            }
            &[disabled], &[readonly]{
                cursor: not-allowed;
                border-color: $border-color-disabled;
                background-color: $bg-color-disabled;
                color: $color-disabled;
            }
            &::placeholder {
                @include fontLineColor($color-placeholder);
            }
        }

        // tips
        &.tips{
            & > .g-input{
                margin-right: 0.5em;
                width: 60%;
            }
            & > .g-tips{
                @include flex(center);
                :not(:last-child){
                    margin-right: 0.5em;
                }
            }
            &.tips-tips > .g-tips{
                & > .g-tips-icon{
                    fill: $color-tips;
                }
                & > .g-tips-message{
                    @include tips($color-tips);
                }
            }
            &.tips-error {
                & > .g-input{
                    border-color: $border-color-error;
                    &:focus{
                        box-shadow: 0 0 1px 1px $box-shadow-color-error;
                    }
                }
                & > .g-tips{
                    & > .g-tips-icon{
                        fill: $color-tips-error;
                    }
                    & > .g-tips-message{
                        @include tips($color-tips-error);
                    }
                }
            }
            &.tips-success {
                & > .g-input{
                    border-color: $border-color-success;
                    &:focus{
                        box-shadow: 0 0 1px 1px $box-shadow-color-success;
                    }
                }
                & > .g-tips{
                    & > .g-tips-icon{
                        fill: $color-tips-success;
                    }
                    & > .g-tips-message{
                        @include tips($color-tips-success);
                    }
                }
            }
        }
        
    }
    &.tips-down{
        & > .g-label{
            display: block;
            :not(:last-child){
                margin-right: 0;
            }
            & > .g-input{
                width: 100%;
            }
            & > .g-tips{
                @include flex(center);
                margin-top: 0.5em;
                padding-left: 4px;
                :not(:last-child){
                    margin-right: 0.5em;
                }
            }
        }
    }
}
</style>
