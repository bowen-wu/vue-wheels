const expect = chai.expect;
import Vue from 'vue';

import Tabs from '../src/tabs/tabs.vue';
import TabsHead from '../src/tabs/tabs-head.vue';
import TabsBody from '../src/tabs/tabs-body.vue';
import TabsItem from '../src/tabs/tabs-item.vue';
import TabsPane from '../src/tabs/tabs-pane.vue';

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('TabsItem', () => {

    it('exist', () => {
        expect(TabsItem).to.exist;
    });

    describe('props', () => {
        it('setting name', () => {
            const Constructor = Vue.extend(TabsItem);
            const vm = new Constructor({
                propsData: {
                    name: 'xxx',
                }
            }).$mount();
            expect(vm.$el.getAttribute('data-name')).to.equal('xxx');
        });

        it('setting disabled', () => {
            const Constructor = Vue.extend(TabsItem);
            const vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount();
            expect(vm.$el.classList.contains('disabled')).to.be.true;
            const callback = sinon.fake();
            vm.$on('click', callback);
            vm.$el.click();
            expect(callback).to.have.not.been.called;
        })
    });
})