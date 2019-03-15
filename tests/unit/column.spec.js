import Chai, {
    expect
} from 'chai';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Col from '@/components/grid/column';
Chai.use(SinonChai);

describe('Col', () => {
    it('exist', () => {
        expect(Col).to.exist;
    });

    describe('props', () => {
        it('setting span', () => {
            const wrapper = mount(Col, {
                propsData: {
                    span: 12
                }
            });
            expect(wrapper.classes()).to.contain('col-12');
        });
        it('setting offset', () => {
            const wrapper = mount(Col, {
                propsData: {
                    span: 10,
                    offset: 2
                }
            });
            expect(wrapper.classes()).to.contain('col-offset-2');
        });

        it('setting sm', () => {
            const wrapper = mount(Col, {
                propsData: {
                    sm: {
                        span: 2,
                        offset: 4
                    }
                }
            });
            expect(wrapper.classes()).to.contain('col-sm-2');
            expect(wrapper.classes()).to.contain('col-sm-offset-4');
        });
        it('setting md', () => {
            const wrapper = mount(Col, {
                propsData: {
                    md: {
                        span: 4,
                        offset: 2
                    }
                }
            });
            expect(wrapper.classes()).to.contain('col-md-4');
            expect(wrapper.classes()).to.contain('col-md-offset-2');
        });
        it('setting lg', () => {
            const wrapper = mount(Col, {
                propsData: {
                    lg: {
                        span: 6,
                        offset: 4
                    }
                }
            });
            expect(wrapper.classes()).to.contain('col-lg-6');
            expect(wrapper.classes()).to.contain('col-lg-offset-4');
        });
        it('setting xl', () => {
            const wrapper = mount(Col, {
                propsData: {
                    xl: {
                        span: 4,
                        offset: 4
                    }
                }
            });
            expect(wrapper.classes()).to.contain('col-xl-4');
            expect(wrapper.classes()).to.contain('col-xl-offset-4');
        });
    });
});