import Chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Toast from '@/components/toast/toast';
Chai.use(SinonChai);

describe('Toast', () => {
    it('exist', () => {
        expect(Toast).to.exist;
    });

    describe('props', () => {
        xit('setting autoClose', () => {
            const callback = sinon.fake();
            const wrapper = mount(Toast, {
                propsData: {
                    autoClose: 1,
                },
                destroyed () {
                    callback();
                }
            });
            const {vm} = wrapper;
            
            // TODO: 如何检测销毁 || 检测事件被触发

            vm.$on('close', () => {
                // expect(wrapper.emitted().close).to.equal(true);

                // expect(callback).to.have.been.called;
                
                // expect(document.body.contains(vm.$el)).to.equal(false);
            });
        });

        it('setting closeButton', () => {
            const callback = sinon.fake();
            const wrapper = mount(Toast, {
                propsData: {
                    closeButton: {
                        text: '关闭啦',
                        callback,
                    },
                }
            });

            expect(wrapper.find('.close-button .text').text().trim()).to.equal('关闭啦');
            wrapper.find('.close-button').trigger('click');
            expect(callback).to.have.been.called;
        });

        xit('setting enableHTML', () => {
            const wrapper = mount(Toast, {
                propsData: {
                    enableHTML: true
                },
                slots: {
                    default: [`<strong id="test">Hello World</strong>`],
                },
            });
            console.log(wrapper.html());
            // expect(wrapper.find('#test')).to.exist;
        });

        it('setting position', () => {
            const wrapper = mount(Toast, {
                propsData: {
                    position: 'bottom'
                }
            });
            expect(wrapper.classes()).to.contain('position-bottom');
        });
    });
});