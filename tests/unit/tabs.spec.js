import Chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Tabs from '@/components/tabs/tabs.vue';
import TabsHead from '@/components/tabs/tabs-head.vue';
import TabsBody from '@/components/tabs/tabs-body.vue';
import TabsItem from '@/components/tabs/tabs-item.vue';
import TabsPane from '@/components/tabs/tabs-pane.vue';
Chai.use(SinonChai);


describe('Tabs', () => {

    it('exist', () => {
        expect(Tabs).to.exist;
    });

    describe('props', () => {
        xit('setting selected', (done) => {
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

        xit('setting direction', () => {
            // TODO:
        })
    });
})