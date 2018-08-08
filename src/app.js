import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
        maxlength: 10,
        userTips: '啦啦啦',
        passwordTips: '',
        width: 300,
        autofocus: true,
        falsy: false,
    },
    created() {
        // validate dispatchEvent
        // setTimeout(() => {
        //     let event = new Event('change');
        //     let inputElement = this.$el.querySelector('input');
        //     inputElement.dispatchEvent(event);
        //     console.log('hi');
        // }, 3000);
    },
    methods: {
        inputChange(e) {
            console.log('e', e)
        }
    },
});