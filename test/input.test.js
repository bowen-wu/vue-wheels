const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input/input.vue';

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

        it('setting disabled | readonly', () => {
            ['disabled', 'readonly', 'autofocus'].map(propertyName => {
                instantiation({
                    [propertyName]: true,
                }, (inputElement) => {
                    expect(inputElement.getAttribute(propertyName)).to.equal(propertyName);
                });
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

        it('setting preIcon | nextIcon', () => {
            ['preIcon', 'nextIcon'].map(propertyName => {
                instantiation({
                    [propertyName]: 'setting'
                }, (inputElement, vm) => {
                    let useElement = vm.$el.querySelector('use');
                    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting');
                    let padding = ['padding-left', 'padding-right'];
                    let propertyValue = propertyName === 'preIcon' ? padding[0] : padding[1];
                    expect(getComputedStyle(inputElement).getPropertyValue(propertyValue)).to.not.equal('8px');
                    propertyValue = propertyName === 'preIcon' ? padding[1] : padding[0];
                    expect(getComputedStyle(inputElement).getPropertyValue(propertyValue)).to.equal('8px');
                }, true);
            });
        });

        it('settting preText | nextText', () => {
            ['preText', 'nextText'].map(propertyName => {
                instantiation({
                    [propertyName]: '文本'
                }, (inputElement, vm) => {
                    let divElement = vm.$el.querySelector('label').querySelector('div');
                    expect(divElement.textContent.trim()).to.equal('文本');
                });
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

        it('settting clearable and no have value', () => {
            instantiation({
                clearable: true,
            }, (inputElement, vm) => {
                let clearableElement = vm.$el.querySelector('div.g-clear-icon');
                expect(clearableElement).to.exist;
                expect(clearableElement.className.indexOf('active')).to.equal(-1);
            });
        });

        it('settting clearable and have value', () => {
            instantiation({
                clearable: true,
                value: '文本'
            }, (inputElement, vm) => {
                let clearableElement = vm.$el.querySelector('div.g-clear-icon');
                expect(clearableElement).to.exist;
                expect(clearableElement.className.indexOf('active')).to.not.equal(-1);
                inputElement.focus();
                expect(getComputedStyle(clearableElement).display).to.equal('block');
                inputElement.blur();
                expect(getComputedStyle(clearableElement).display).to.equal('none');

                // TODO: 未测试 hover 状态
            }, true);
        });
    });

    describe('event', () => {
        it('change | input | focus | blur event', () => {
            instantiation({}, (inputElement, vm) => {
                ['change', 'input', 'focus', 'blur'].map(eventName => {
                    const callback = sinon.fake();
                    vm.$on(eventName, callback);

                    // trigger input event
                    let event = new Event(eventName);
                    Object.defineProperty(event, 'target', {
                        value: {
                            value: 'hi',
                        },
                        enumerable: true,
                    });
                    inputElement.dispatchEvent(event);

                    // 期待函数被调用并且传 event 参数 -> sinon-chai[https://github.com/domenic/sinon-chai]
                    // expect(callback).to.have.been.called;
                    expect(callback).to.have.been.calledWith('hi');
                });
            });
        });
    })
})
