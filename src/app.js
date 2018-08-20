import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './column';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
        maxlength: 10,
        userTips: '啦啦啦',
        passwordTips: '',
        width: 200,
        autofocus: true,
        falsy: false,
        message: '',
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