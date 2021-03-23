import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

describe('<Header />', () => {
    const testTitle = 'Test title';
    const header = mount(<Header title={testTitle} />)

    test('Test render of Header', () => {
        expect(header.length).toBe(1);
    })

    test('Testing rendering of title', () => {
        expect(header.find('h1').text()).toBe(testTitle);
    })
})