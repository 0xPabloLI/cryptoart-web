
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Copyright from './index';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    mount(
        <MemoryRouter initialEntries={['/projects?type=test']}>
            <Copyright />
        </MemoryRouter>
    );
});
