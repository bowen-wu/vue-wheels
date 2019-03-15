import Chai, {
    expect
} from 'chai';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Popover from '@/components/popover/popover';
Chai.use(SinonChai);

describe('Popover', () => {

    it('exist', () => {
        expect(Popover).to.exist;
    });

    describe('props', () => {
        it('setting position', () => {
            const wrapper = mount(Popover, {
                propsData: {
                    position: 'bottom'
                },
                slots: {
                    default: '<button>click</button>',
                    content: '<div>内容</div>'
                }
            });
            wrapper.find('button').trigger('click');
            expect(wrapper.find('.g-popover-content-wrapper').classes()).to.contain('position-bottom');
        });

        it('setting hover trigger', () => {
            const wrapper = mount(Popover, {
                propsData: {
                    trigger: 'hover'
                },
                slots: {
                    default: '<button>click</button>',
                    content: '<div>内容</div>'
                }
            });
            wrapper.find('button').trigger('mouseenter');
            expect(wrapper.find('.g-popover-content-wrapper').element).to.exist;
        });
    });
});