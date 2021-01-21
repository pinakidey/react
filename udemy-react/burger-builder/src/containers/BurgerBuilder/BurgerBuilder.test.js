import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './BurgerBuilder';
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl';

configure({ adapter: new Adapter() });

let wrapper;
beforeAll(() => {
    wrapper = shallow(<BurgerBuilder/>);
});

describe('Name of the group', () => {
    it('should render <BuildControls/> when ingredients is not empty', () => {
        expect(wrapper.contains(BuildControl))
    });
});