/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should have the `th` "Items"', () => {
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });

  // 4

  describe('the user populates the input', () => {
    const item = 'Vancouver';

    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', { //simula il firing di un evento a partire da un certo componente(input in questo caso). vogliamo simulare l'onChange>> quindi scriviamo 'change'
        target: { value: item }   // simulate spara un oggetto dentro e
      })
    });

    it('should update the state property `item`', () => {
      expect(
        wrapper.state().item
      ).toEqual(item);
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(false);
    });
  });
});
