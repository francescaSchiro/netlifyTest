/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have the `th` "Items"', () => {    //controlla che nel DOM ci sia il titolo nella tabella (<table header>)
    const wrapper = shallow( //shallow è il comando più imp di ENZIME non entra nel livello più profondo(rimane nel componente dove lanci il test)
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>) // CONTAINS cerca nella renderata se esiste se quel pezzo di jsx esiste ESATTAMENTE così(il match deve essere perfetto con contains)
    ).toBe(true);
  });
});
