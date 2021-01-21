import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Layout from './assets/hoc/Layout';

configure({ adapter: new Adapter() });

let wrapper;
beforeAll(() => {
    wrapper = shallow(<App/>);
});
describe('<App/>', () => {
    it('should contain a <Layout/> component only', () => {
        expect(wrapper.contains(<Layout/>));
    });
});