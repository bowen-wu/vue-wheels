<template>
    <div class="g-input-wrapper" :class="{error, tips, success, [`tips-${tipsPosition}`]: true}">
        <label class="g-label">
            <!-- label -->
            <span v-if="label">{{label}}</span>

            <!-- pre Icon -->
            <g-icon v-if="preIcon" :name="preIcon" class="g-pre-icon"></g-icon>

            <!-- input -->
            <input class="g-input" :type="type" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :autofocus="autofocus" :maxlength="maxlength" :style="style">

            <!-- next Icon -->
            <g-icon v-if="nextIcon" :name="nextIcon" class="g-next-icon"></g-icon>

            <!-- tips -->
            <div v-if="tipsType" class="g-tips">
                <g-icon :name="tipsType" class="g-tips-icon"></g-icon>
                <span v-if="tipsMessage" class="g-tips-message">{{tipsMessage}}</span>
            </div>

            <!-- error tips -->
            <div v-if="error" class="g-icon-message">
                <g-icon name="error" class="g-tips g-error"></g-icon>
                <span class="g-message">{{error}}</span>
            </div>

            <!-- tips -->
            <div v-if="tips" class="g-icon-message">
                <g-icon name="tips" class="g-tips"></g-icon>
                <span class="g-message">{{tips}}</span>
            </div>

            <!-- success tips -->
            <g-icon v-if="success" name="success" class="g-success"></g-icon>
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
        // TODO: autofocus not work
        autofocus: {
            type: Boolean,
            required: false,
            default: true,
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

        // Tips
        tipsType: {
            type: String,
            required: false,
            default: '',
        },
        tipsMessage: {
            type: String,
            required: false,
            default: '',
        },
        error: {
            type: String,
            required: false,
            default: '',
        },
        tips: {
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
        success: {
            type: Boolean,
            required: false,
            default: false,
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
    },
    created() {
        // console.log(this.style)
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
    @include flex(center);
    & > .g-label{
        width: 100%;
        & > .g-input{
            @include fontLineColor();
            padding: 8px;
            border-radius: $border-radius;
            border: 1px solid $border-color;
            width: 100%;

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
    }
    .g-icon-message{
        @include flex(center);
        :not(:last-child){
            margin-right: 0.5em;
        }
    }
    &.tips{
        .g-input{
            margin-right: 0.5em;
        }
        & > .g-icon-message{
            & > .g-tips{
                fill: $color-tips;
            }
            & > .g-message{
                @include tips($color-tips);
            }
        }
    }
    &.success{
        .g-input{
            margin-right: 0.5em;
            border-color: $border-color-success;
            &:focus{
                box-shadow: 0 0 1px 1px $box-shadow-color-success;
            }
        }
        & > .g-success{
            margin-left: 0.5em;
            fill: $color-tips-success;
        }
    }
    &.error{
        .g-input{
            margin-right: 0.5em;
            border-color: $border-color-error;
            &:focus{
                box-shadow: 0 0 1px 1px $box-shadow-color-error;
            }
        }
        & > .g-icon-message{
            & > .g-error{
                fill: $color-tips-error;
            }
            & > .g-message{
                @include tips($color-tips-error);
            }
        }
    }
    &.tips, &.success, &.error{
        .g-input{
            width: 60%;
        }
    }
    &.tips-down{
        display: block;
        :not(:last-child){
            margin-right: 0;
        }
        .g-input{
            width: 100%;
        }
        & > .g-icon-message{
            @include flex(center);
            margin-top: 0.5em;
            padding-left: 4px;
            :not(:last-child){
                margin-right: 0.5em;
            }
        }
    }
}
</style>
