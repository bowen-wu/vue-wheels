const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Input);
const div = document.createElement('div');
function instantiation(propsData = {}, callback, mount) {
    if(mount){
        document.body.appendChild(div);
    }
    // 实例化 + 挂载
    const VM = new Constructor({
        propsData,
    });
    let vm = mount ? VM.$mount(div) : VM.$mount();

    // 断言
    let inputElement = vm.$el.querySelector('input');
    callback && callback(inputElement, vm);

    // 销毁
    vm.$el.remove();
    vm.$destroy();
}

describe('Input', () => {
    // BDD

    it('exist', () => {
        expect(Input).to.exist;
    });

    it('type default is text', () => {
        // 实例化 + 挂载
        const vm = new Constructor().$mount();

        // 断言
        let inputElement = vm.$el.querySelector('input');
        expect(inputElement.getAttribute('type')).to.equal('text');

        // 销毁
        vm.$destroy();
    });

    it('setting type', () => {
        instantiation({
            type: 'button'
        }, (inputElement) => {
            expect(inputElement.getAttribute('type')).to.equal('button');
        });
    });

    it('setting value', () => {
        instantiation({
            value: 'lalala'
        }, (inputElement) => {
            expect(inputElement.value).to.equal('lalala');
        });
    });

    it('setting width', () => {
        instantiation({
            width: 100,
        }, (inputElement) => {
            expect(inputElement.getAttribute('style')).to.equal('width: 100px;');
        });
    });

    it('setting placeholder', () => {
        instantiation({
            placeholder: 'placeholder',
        }, (inputElement) => {
            expect(inputElement.getAttribute('placeholder')).to.equal('placeholder');
        });
    });

    it('setting maxlength', () => {
        instantiation({
            maxlength: 10,
        }, (inputElement) => {
            expect(inputElement.getAttribute('maxlength')).to.equal('10');
        });
    });

    it('setting disabled', () => {
        instantiation({
            disabled: true,
        }, (inputElement) => {
            expect(inputElement.getAttribute('disabled')).to.equal('disabled');
        });
    });

    it('setting readonly', () => {
        instantiation({
            readonly: true,
        }, (inputElement) => {
            expect(inputElement.getAttribute('readonly')).to.equal('readonly');
        });
    });
    
    it('setting label', () => {
        instantiation({
            label: '字符串',
        }, (inputElement, vm) => {
            let labelElement = vm.$el.querySelector('label')
            let spanElement = labelElement.querySelector('span');
            expect(spanElement.textContent).to.equal('字符串');
        });
    });

    it('setting preIcon', () => {
        instantiation({
            preIcon: 'setting'
        }, (inputElement, vm) => {
            let useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting');
            expect(getComputedStyle(inputElement).getPropertyValue('padding-left')).to.not.equal('8px');
            expect(getComputedStyle(inputElement).getPropertyValue('padding-right')).to.equal('8px');
        }, true);
    });

    it('setting nextIcon', () => {
        instantiation({
            nextIcon: 'tips'
        }, (inputElement, vm) => {
            let useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-tips');
            expect(getComputedStyle(inputElement).getPropertyValue('padding-left')).to.equal('8px');
            expect(getComputedStyle(inputElement).getPropertyValue('padding-right')).to.not.equal('');
        }, true);
    });
    
})
