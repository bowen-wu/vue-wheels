const { expect } = chai;
import Vue from 'vue';
import Popover from '../src/popover/popover.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const Constructor = Vue.extend(Popover);
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

describe('Popover', () => {
    // BDD

    it('exist', () => {
        expect(Popover).to.exist;
    });

    describe('props', () => {
        it('setting position', (done) => {
            Vue.component('g-popover', Popover);
            div.innerHTML = `
            <g-popover position="bottom" ref="test">
                <template slot="content">
                    <div>内容</div>
                </template>
                <button>click</button>
            </g-popover>`
            document.body.appendChild(div);
            const vm = new Vue({
                el: div,
            });
            vm.$el.querySelector('button').click();
            vm.$nextTick(() => {
                expect(vm.$refs.test.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
                done();
            });
        });
        xit('setting trigger', (done) => {
            // TODO: 模拟 hover 事件
        });
    });

});
