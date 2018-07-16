const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
    // BDD
    const Constructor = Vue.extend(Button);
    const div = document.createElement('div');

    it('exist', () => {
        expect(Button).to.exist;
    });

    it('setting icon', () => {
        // 实例化 + 挂载
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            },
        }).$mount();

        // 断言
        const userElement = vm.$el.querySelector('use');
        expect(userElement.getAttribute('xlink:href')).to.equal('#icon-settings');

        // 销毁
        vm.$destroy();

    });

    it('setting loading', () => {
        // 实例化 + 挂载
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true,
            },
        }).$mount();

        // 断言
        const useElement = vm.$el.querySelectorAll('use');
        expect(useElement.length).to.equal(1);
        expect(useElement[0].getAttribute('xlink:href')).to.equal('#icon-loading');

        // 销毁
        vm.$destroy();
    });

    it('icon default order is 0', () => {
        // 实例化 + 挂载
        document.body.appendChild(div);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            },
        }).$mount(div);

        // 断言
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).getPropertyValue('order')).to.equal('0');

        // 销毁
        vm.$el.remove();
        vm.$destroy();
    });

    it('setting iconPosition and change order', () => {
        // 实例化 + 挂载
        document.body.appendChild(div);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right',
            },
        }).$mount(div);

        // 断言
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.equal('1');

        // 销毁
        vm.$el.remove();
        vm.$destroy();
    });

    it('trigger click event handle after click button', () => {
        // 实例化 + 挂载
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            },
        }).$mount();

        // 断言
        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called;

        // 销毁
        vm.$destroy();
    });
});