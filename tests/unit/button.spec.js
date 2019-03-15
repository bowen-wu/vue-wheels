import Chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Button from '@/components/button/button';
Chai.use(SinonChai);


describe('Button', () => {
    it('exist', () => {
        expect(Button).to.exist;
    });

    it('setting icon', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            },
        });
        expect(wrapper.find('use').attributes().href).to.equal('#icon-settings');
    });

    it('setting loading', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true,
            }
        });
        expect(wrapper.find('use').attributes().href).to.equal('#icon-loading');
    });

    xit('icon default order is 0', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            },
        });
        const {
            vm
        } = wrapper;

        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).getPropertyValue('order')).to.equal('0');

    });

    xit('setting iconPosition and change order', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                iconPosition: 'right',
            },
        });
        const {
            vm
        } = wrapper;
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.equal('1');
    });

    it('trigger click event handle after click button', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            },
        });
        const {
            vm
        } = wrapper;
        const callback = sinon.fake();
        vm.$on('click', callback);

        wrapper.find('.g-button').trigger('click');
        // vm.$el.click();

        expect(callback).to.have.been.called;
    });
});