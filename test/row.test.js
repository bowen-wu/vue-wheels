const { expect } = chai;
import Vue from 'vue';
import Row from '../src/grid/row.vue';
import Col from '../src/grid/column';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Row);
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

describe('Row', () => {
    // BDD

    it('exist', () => {
        expect(Row).to.exist;
    });

    describe('props', () => {
        it('setting gutter', (done) => {
            Vue.component('g-row', Row);
            Vue.component('g-col', Col);
            div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>`
            document.body.appendChild(div);
            const vm = new Vue({
                el: div,
            });
            setTimeout(() => {
                let rowElement = vm.$el.querySelector('.g-row');
                expect(getComputedStyle(rowElement).marginLeft).to.equal('-10px');
                expect(getComputedStyle(rowElement).marginRight).to.equal('-10px');
                let colElementArr = vm.$el.querySelectorAll('.g-col');
                expect(getComputedStyle(colElementArr[0]).paddingLeft).to.equal('10px');
                expect(getComputedStyle(colElementArr[0]).paddingRight).to.equal('10px');
                expect(getComputedStyle(colElementArr[1]).paddingLeft).to.equal('10px');
                expect(getComputedStyle(colElementArr[1]).paddingRight).to.equal('10px');
                done();
                // 销毁
                vm.$el.remove();
                vm.$destroy();
            }, 0);
        });
        it('setting justify', () => {
            instantiation({
                justify: 'center'
            }, (vm) => {
                expect(vm.$el.getAttribute('class').indexOf('justify-center')).to.not.equal(-1);
            }, true);
        });
        it('setting align', () => {
            instantiation({
                align: 'middle'
            }, (vm) => {
                expect(vm.$el.getAttribute('class').indexOf('align-middle')).to.not.equal(-1);
            }, true);
        });
    });

});
