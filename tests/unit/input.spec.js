import Chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Input from '@/components/input/input';
Chai.use(SinonChai);

describe('Input', () => {

    it('exist', () => {
        expect(Input).to.exist;
    });

    describe('props', () => {
        it('type default is text', () => {
            const wrapper = mount(Input);
            expect(wrapper.find('input').attributes().type).to.equal('text');
        });

        it('setting type', () => {
            const wrapper = mount(Input, {
                propsData: {
                    type: 'button'
                }
            });
            expect(wrapper.find('input').attributes().type).to.equal('button');
        });

        it('setting value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: 'hello world'
                }
            });
            expect(wrapper.find('input').element.value).to.equal('hello world');
        });

        it('setting width', () => {
            const wrapper = mount(Input, {
                propsData: {
                    width: 100
                }
            });
            expect(wrapper.find('input').attributes().style).to.equal('width: 100px;');
        });

        it('setting placeholder', () => {
            const wrapper = mount(Input, {
                propsData: {
                    placeholder: 'placeholder'
                }
            });
            expect(wrapper.find('input').attributes().placeholder).to.equal('placeholder');
        });

        it('setting maxlength', () => {
            const wrapper = mount(Input, {
                propsData: {
                    maxlength: 10
                }
            });
            expect(wrapper.find('input').attributes().maxlength).to.equal('10');
        });

        it('setting disabled | readonly | autofocus', () => {
            ['disabled', 'readonly', 'autofocus'].map(propertyName => {
                const wrapper = mount(Input, {
                    propsData: {
                        [propertyName]: true
                    }
                });
                expect(wrapper.find('input').attributes()[propertyName]).to.equal(propertyName);
            });
        });

        it('setting label', () => {
            const wrapper = mount(Input, {
                propsData: {
                    label: '字符串'
                }
            });
            expect(wrapper.find('label span').text()).to.equal('字符串');
        });

        it('setting preIcon | nextIcon', () => {
            ['preIcon', 'nextIcon'].map(propertyName => {
                const wrapper = mount(Input, {
                    propsData: {
                        [propertyName]: 'setting'
                    }
                });
                let propName = propertyName.replace(/([A-Z])/g,"-$1").toLowerCase();
                expect(wrapper.find('label').classes()).to.contain(propName);
                expect(wrapper.find(`.g-${propName}`).html()).to.exist;
            });
        });

        it('settting preText | nextText', () => {
            ['preText', 'nextText'].map(propertyName => {
                const wrapper = mount(Input, {
                    propsData: {
                        [propertyName]: '文本'
                    }
                });                
                expect(wrapper.find('label div').text().trim()).to.equal('文本');
            });
        });

        it('setting tipsType', () => {
            const wrapper = mount(Input, {
                propsData: {
                    tipsType: 'tips'
                }
            });
            expect(wrapper.find('use').attributes().href).to.equal('#icon-tips');
        });

        it('setting tipsMessage', () => {
            const wrapper = mount(Input, {
                propsData: {
                    tipsType: 'success',
                    tipsMessage: '这是提示文本'
                }
            });
            // TODO: tisMessage not work when only setting tispMessage 
            expect(wrapper.find('use').attributes().href).to.equal('#icon-success');
            expect(wrapper.find('span').text().trim()).to.equal('这是提示文本');
        });

        it('setting tipsPosition', () => {
            const wrapper = mount(Input, {
                propsData: {
                    tipsPosition: 'down'
                }
            });
            expect(wrapper.classes()).to.contain('tips-down');
        });

        it('settting clearable and no have value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    clearable: true
                }
            });
            expect(wrapper.find('div.g-clear-icon')).to.exist;
            expect(wrapper.find('div.g-clear-icon').classes()).to.not.contain('active');
        });

        xit('settting clearable and have value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    clearable: true,
                    value: '文本'
                }
            });

            let clearIconEle = wrapper.find('div.g-clear-icon');
            expect(clearIconEle).to.exist;
            expect(clearIconEle.classes()).to.contain('active');

            // TODO: CSS -> display: block | none;
            clearIconEle.trigger('mouseenter');
            expect(clearIconEle.isVisible()).to.equal(true);
            clearIconEle.trigger('mouseleave');
            expect(clearIconEle.isVisible()).to.equal(false);

        });
    });

    describe('event', () => {
        it('change | input | focus | blur event', () => {
            const wrapper = mount(Input);
            ['change', 'input', 'focus', 'blur'].map(eventName => {
                const callback = sinon.fake();
                const {vm} = wrapper;
                vm.$on(eventName, callback);

                // trigger input event
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', {
                    value: {
                        value: 'hi',
                    },
                    enumerable: true,
                });
                vm.$el.querySelector('input').dispatchEvent(event);

                // 期待函数被调用并且传 event 参数 -> sinon-chai[https://github.com/domenic/sinon-chai]
                // expect(callback).to.have.been.called;
                expect(callback).to.have.been.calledWith('hi');
            });
        });
    });
});