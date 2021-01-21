import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItem from './NavigationItem';
import {NavLink} from "react-router-dom";

configure({ adapter: new Adapter() });

let wrapper;
beforeAll(() => {
    wrapper = shallow(<NavigationItem link="/"/>);
    });
describe('<NavigationItem/>', () => {
    it('should render one <NavLink/> element', () => {
        //wrapper.setProps({link: "/"}); cannot be called on a non-root element
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});