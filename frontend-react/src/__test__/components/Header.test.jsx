import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Header from '../../components/Header';

describe('<Header />', () => {
    const testTitle = 'Test title';
    const header = mount(
        <BrowserRouter>
            <Header title={testTitle} />
        </BrowserRouter>
    )

    test('Test render of Header', () => {
        expect(header.length).toBe(1);
    })

    test('Testing rendering of title', () => {
        expect(header.find('h1').text()).toBe(testTitle);
    })
})