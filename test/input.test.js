const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Input);
const div = document.createElement('div');
function instantiation(propsData = {}, callback, mount = false) {
    if (mount) {
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

    describe('props', () => {
        before(() => {
            // runs before all tests in this block
        });

        after(() => {
            // runs after all tests in this block
        });

        beforeEach(() => {
            // runs before each test in this block
        });

        afterEach(() => {
            // runs after each test in this block
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

        it('settting preText', () => {
            instantiation({
                preText: '前置文本'
            }, (inputElement, vm) => {
                let divElement = vm.$el.querySelector('label').querySelector('div');
                expect(divElement.textContent.trim()).to.equal('前置文本');
            });
        });

        it('settting nextText', () => {
            instantiation({
                nextText: '后置文本'
            }, (inputElement, vm) => {
                let divElement = vm.$el.querySelector('label').querySelector('div');
                expect(divElement.textContent.trim()).to.equal('后置文本');
            });
        });

        it('setting autofocus', () => {
            instantiation({
                autofocus: true,
            }, (inputElement) => {
                expect(inputElement.getAttribute('autofocus')).to.equal('autofocus');
            });
        });

        it('setting tipsType', () => {
            instantiation({
                tipsType: 'tips',
            }, (inputElement, vm) => {
                let useElement = vm.$el.querySelector('use');
                expect(useElement.getAttribute('xlink:href')).to.equal('#icon-tips');
            });
        });

        it('setting tipsMessage', () => {
            instantiation({
                tipsType: 'success',
                tipsMessage: '这是提示文本',
            }, (inputElement, vm) => {
                // TODO: tisMEssage not work when only setting tispMessage 
                let useElement = vm.$el.querySelector('use');
                expect(useElement.getAttribute('xlink:href')).to.equal('#icon-success');
                let spanElement = vm.$el.querySelector('span');
                expect(spanElement.textContent.trim()).to.equal('这是提示文本');
            });
        });

        it('setting tipsPosition', () => {
            instantiation({
                tipsPosition: 'down',
            }, (inputElement, vm) => {
                let labelElement = vm.$el.querySelector('label');
                expect(getComputedStyle(labelElement).display).to.equal('block');
            }, true);
        });
    });

    describe('event', () => {
        function eventTest(eventName, inputElement, vm) {
            const callback = sinon.fake();
            vm.$on(eventName, callback);

            // trigger input change event
            let event = new Event(eventName);
            inputElement.dispatchEvent(event);

            // 期待函数被调用并且传 event 参数 -> sinon-chai[https://github.com/domenic/sinon-chai]
            // expect(callback).to.have.been.called;
            expect(callback).to.have.been.calledWith(event)
        }
        it('change event', () => {
            instantiation({}, (inputElement, vm) => {
                eventTest('change', inputElement, vm);
            });
        });

        it('input event', () => {
            instantiation({}, (inputElement, vm) => {
                eventTest('input', inputElement, vm);   
            });
        });

        it('focus event', () => {
            instantiation({}, (inputElement, vm) => {
                eventTest('focus', inputElement, vm);   
            });
        });

        it('blur event', () => {
            instantiation({}, (inputElement, vm) => {
                eventTest('blur', inputElement, vm);   
            });
        });
    })
})
