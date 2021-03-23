import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

describe('Application', ()=>{
    const app = mount(<App />)

    test('Render of App component', ()=>{
        expect(app.length).toEqual(1);
    })
})