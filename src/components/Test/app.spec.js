import React from 'react';
// import expect from 'expect';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import App from '../app';

describe('<App />', () => {
    const component = mount(<App />);

    it('should be defined', () => {
        expect(component).to.have.length(1);
    });

    it('input field should be defined', () => {
        expect(component.find('input')).to.have.length(1);
    });

    it('state email is', () => {
        expect(component.state().email).to.equal('komaldeep1993@gmail.com');
    });

});
