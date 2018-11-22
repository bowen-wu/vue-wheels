import Chai, {
    expect
} from 'chai';
import SinonChai from 'sinon-chai';
import {
    mount
} from '@vue/test-utils';
import Row from '@/components/grid/row';
import Col from '@/components/grid/column';
Chai.use(SinonChai);

describe('Row', () => {

    it('exist', () => {
        expect(Row).to.exist;
    });

    describe('props', () => {
        xit('setting gutter', () => {
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
            }, 0);
        });
        xit('setting justify', () => {
            instantiation({
                justify: 'center'
            }, (vm) => {
                expect(vm.$el.getAttribute('class').indexOf('justify-center')).to.not.equal(-1);
            }, true);
        });
        xit('setting align', () => {
            instantiation({
                align: 'middle'
            }, (vm) => {
                expect(vm.$el.getAttribute('class').indexOf('align-middle')).to.not.equal(-1);
            }, true);
        });
    });

});
