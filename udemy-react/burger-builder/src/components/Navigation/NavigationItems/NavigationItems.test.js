import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let wrapper;
beforeAll(() => {
    wrapper = shallow(<NavigationItems />);
    });

describe('<NavigationItems/>', () => {
    it('should render three <NavigationItem/> elements', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});