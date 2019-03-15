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


describe('Tabs', () => {

    it('exist', () => {
        expect(Tabs).to.exist;
    });

    describe('props', () => {
        it('setting selected', (done) => {
            div.innerHTML = `
            <g-tabs selected="selected">
                <g-tabs-head>
                    <g-tabs-item name="women">美女</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <g-tabs-item name="sport">体育</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                    <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                    <g-tabs-pane name="sport">体育相关资讯</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
            `
            document.body.appendChild(div);
            const vm = new Vue({
                el: 'women',
            });
            vm.$nextTick(() => {
                expect(vm.$el.querySelector(`.tabs-item[data-name='women']`).classList.contains('active')).to.be.true;
                done();
            })
        });

        it('setting direction', () => {
            // TODO:
        })
    });
})
