import React from 'react';
import {shallow} from 'enzyme';
import withCondition from './WithCondition';

describe('withCondition', () => {
    let Component = () => (<div>Test component</div>);

    beforeEach(() => {
        Component = withCondition(Component);
    });

    it('Should render if shouldShow is true', () => {
        const wrapper = shallow(<Component shouldShow={true}/>);
        expect(wrapper.type() !== null).toEqual(true);
    });

    it('Should not render if shouldShow is false', () => {
        const wrapper = shallow(<Component shouldShow={false}/>);
        expect(wrapper.type() === null).toEqual(true);
    });
});