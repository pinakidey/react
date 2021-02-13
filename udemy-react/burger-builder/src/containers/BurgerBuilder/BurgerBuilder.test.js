import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './BurgerBuilder';
import BuildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl';
import { useSelector, useDispatch } from 'react-redux';

configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));
let wrapper;
beforeAll(() => {
    wrapper = shallow(<BurgerBuilder/>);
});

describe.skip('Name of the group', () => {
    it('should render <BuildControls/> when ingredients is not empty', () => {
        expect(wrapper.contains(<BuildControl/>))
    });

    /* it('loads data on init', () => {
        const mockedDispatch = jest.fn();
        useSelector.mockImplementation((selectorFn) => selectorFn(yourMockedStoreData));
        useDispatch.mockReturnValue(mockedDispatch);
        mount(<Router><Clients history={historyMock} /></Router>);
        expect(mockDispatch).toHaveBeenCalledWith(<arguments you expect>);
    }); */
});





