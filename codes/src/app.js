import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
    },
});

// unit test
import chai from 'chai';

const expect = chai.expect;

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    // first -> // button.$mount('#test'); // 可以不用 $mount 具体实例, mount 到内存中
    // second -> // button.$mount(); // 占用内存
    button.$mount(div); // third
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-setting');

    // destroy
    button.$el.remove();
    button.$destroy()
}