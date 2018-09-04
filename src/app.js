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
import Tabs from './tabs/tabs.vue';
import TabsHead from './tabs/tabs-head';
import TabsBody from './tabs/tabs-body';
import TabsItem from './tabs/tabs-item';
import TabsPane from './tabs/tabs-pane';



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
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);

Vue.use(ToastPlugin);

new Vue({
    el: '#app',
    data: {
        selected: 'sport'
    },
    created() {
        setTimeout(() => {
            console.log('app', this.selected);
        }, 10000);
    },
    methods: {

    },
});