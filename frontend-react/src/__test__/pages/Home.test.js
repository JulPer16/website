import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

import Home from '../../pages/Home';

describe('<Home />', () => {
    // const testTitle = 'Test title';
    const home = shallow(
        <Home />
    )

    test('Test render of Home', () => {
        expect(home.length).toBe(1);
    })

})