import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Dummy = () => <div>Works</div>

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dummy />, div);
    ReactDOM.unmountComponentAtNode(div);
});
