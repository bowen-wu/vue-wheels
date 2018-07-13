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
import spies from 'chai-spies';

chai.use(spies);

const expect = chai.expect;

{
    // icon
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    // first -> // vm.$mount('#test'); // 可以不用 $mount 具体实例, mount 到内存中
    // second -> // vm.$mount(); // 占用内存
    vm.$mount(div); // third
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-setting');

    // destroy
    vm.$el.remove();
    vm.$destroy();
}
{
    // icon + loading
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true,
        }
    });
    vm.$mount(div);
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-loading');

    // destroy
    vm.$el.remove();
    vm.$destroy();
}
{
    // icon order
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        },
    });
    vm.$mount(div);
    let useElement = vm.$el.querySelector('svg');
    let order = getComputedStyle(useElement).getPropertyValue('order');

    expect(order).to.equal('0');

    // destroy
    vm.$el.remove();
    vm.$destroy();
}
{
    // iconPosition
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right',
        }
    });
    vm.$mount(div);
    let useElement = vm.$el.querySelector('svg');
    let order = getComputedStyle(useElement).getPropertyValue('order');

    expect(order).to.equal('1');

    // destroy
    vm.$el.remove();
    vm.$destroy();
}
{
    // click event handle, function mock
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    });
    vm.$mount(div);

    let spy = chai.spy(() => {});

    vm.$on('click', spy);

    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();

    // destroy
    vm.$el.remove();
    vm.$destroy();
}
