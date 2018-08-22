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
import Toast from './toast';
import ToastPlugin from './plugin/toast';

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
Vue.component('g-toast', Toast);

Vue.use(ToastPlugin);

new Vue({
    el: '#app',
    data: {

    },
    created() {
    },
    methods: {
        showToast() {
            this.$toast('I am toast');
        },
    },
});