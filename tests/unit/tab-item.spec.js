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
import Vue from 'vue';
Chai.use(SinonChai);

describe('TabsItem', () => {

    it('exist', () => {
        expect(TabsItem).to.exist;
    });

    describe('props', () => {
        it('setting name', () => {
            const wrapper = mount(TabsItem, {
                propsData: {
                    name: 'I am name',
                },
                provide() {
                    return {
                        EventHub: new Vue(),
                    }
                },
            });
            expect(wrapper.find('.g-tabs-item').attributes()['data-name']).to.equal('I am name');
        });

        it('setting disabled', () => {
            const wrapper = mount(TabsItem, {
                propsData: {
                    name: 'I am name',
                    disabled: true,
                },
                provide() {
                    return {
                        EventHub: new Vue(),
                    }
                },
            });
            expect(wrapper.classes()).to.contain('disabled');

            const {
                vm
            } = wrapper;
            const callback = sinon.fake();
            vm.$on('click', callback);
            wrapper.trigger('click');
            expect(callback).to.have.not.been.called;
        });
    });
});