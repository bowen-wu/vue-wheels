const {expect} = chai;
import Vue from 'vue';
import Col from '../src/column';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Col);
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
    callback && callback(vm);

    // 销毁
    vm.$el.remove();
    vm.$destroy();
}

describe('Col', () => {
    // BDD

    it('exist', () => {
        expect(Col).to.exist;
    });

    describe('props', () => {
        it('setting span', () => {
            instantiation({
                span: 12,
            }, (vm) => {
                expect(vm.$el.classList.contains('col-12')).to.equal(true);
            });
        });
        it('setting offset', () => {
            instantiation({
                span: 10,
                offset: 2,
            }, (vm) => {
                expect(vm.$el.classList.contains('col-offset-2')).to.equal(true);
            });
        });

        it('setting sm', () => {
            instantiation({
                sm: {span: 2, offset: 4},
            }, (vm) => {
                expect(vm.$el.classList.contains('col-sm-2')).to.equal(true);
                expect(vm.$el.classList.contains('col-sm-offset-4')).to.equal(true);
            });
        });
        it('setting md', () => {
            instantiation({
                md: {span: 4, offset: 2},
            }, (vm) => {
                expect(vm.$el.classList.contains('col-md-4')).to.equal(true);
                expect(vm.$el.classList.contains('col-md-offset-2')).to.equal(true);
            });
        });
        it('setting lg', () => {
            instantiation({
                lg: {span: 6, offset: 4},
            }, (vm) => {
                expect(vm.$el.classList.contains('col-lg-6')).to.equal(true);
                expect(vm.$el.classList.contains('col-lg-offset-4')).to.equal(true);
            });
        });
        it('setting xl', () => {
            instantiation({
                xl: {span: 4, offset: 4},
            }, (vm) => {
                expect(vm.$el.classList.contains('col-xl-4')).to.equal(true);
                expect(vm.$el.classList.contains('col-xl-offset-4')).to.equal(true);
            });
        });

    });

});