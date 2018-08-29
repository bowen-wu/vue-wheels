const { expect } = chai;
import Vue from 'vue';
import Toast from '../src/toast';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Toast);
const div = document.createElement('div');
function instantiation(propsData = {}, callback, mount = false, async = false) {
    if(mount){
        document.body.appendChild(div);
    }

    // 实例化 + 挂载
    const VM = new Constructor({
        propsData
    });
    let vm = mount ? VM.$mount(div) : VM.$mount();

    // 断言
    callback && callback(vm);

    // 销毁
    if(!async){
        vm.$el.remove();
        vm.$destroy();
    }
}

describe('Toast', () => {
    it('exist', () => {
        expect(Toast).to.exist;
    });

    describe('props', () => {
        it('setting autoClose', (done) => {
            instantiation({
                autoClose: 1,
            }, (vm) => {
                vm.$on('close', () => {
                    expect(document.body.contains(vm.$el)).to.equal(false);
                    done();

                    vm.$el.remove();
                    vm.$destroy();
                });
            }, true, true);
        });

        it('setting closeButton', (done) => {
            const callback = sinon.fake();
            instantiation({
                closeButton: {
                    text: '关闭啦',
                    callback,
                }
            }, (vm) => {
                let closeButtonElement = vm.$el.querySelector('.close-button');
                let closeButtonTextElement = closeButtonElement.querySelector('.text');
                expect(closeButtonTextElement.textContent.trim()).to.equal('关闭啦');
                setTimeout(() => {
                    closeButtonElement.click();
                    expect(callback).to.have.been.called;
                    done();

                    vm.$el.remove();
                    vm.$destroy();
                }, 200);
            }, false, true);
        });

        it('setting enableHTML', () => {
            // 实例化 + 挂载
            const vm = new Constructor({
                propsData: {
                    enableHTML: true,
                }
            });

            vm.$slots.default = [`<strong id="test">Hello World</strong>`]

            vm.$mount();
        
            // 断言
            expect(vm.$el.querySelector('#test')).to.exist;
        
            // 销毁
            vm.$el.remove();
            vm.$destroy();
        });

        it('setting position', () => {
            instantiation({
                position: 'bottom',
            }, (vm) => {
                expect(vm.$el.classList.contains('position-bottom')).to.equal(true);
            });
        });
    });
});
