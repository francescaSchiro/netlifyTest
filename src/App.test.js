import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

//primo test di default
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should have the `th` "Items"', () => {    //controlla che nel DOM ci sia il titolo nella tabella (<table header>)
    wrapper = shallow( //shallow è il comando più imp di ENZIME non entra nel livello più profondo(rimane nel componente dove lanci il test)
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>) // CONTAINS cerca nella renderata se esiste se quel pezzo di jsx esiste ESATTAMENTE così(il match deve essere perfetto con contains)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement(  // containsMatchingElement() non è un match perfetto( a prescindere dagli attributi che ha)
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement( // controlla se si è montato l'elemento di input. matcha il jsx <input / >
        <input />
      )
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    wrapper = shallow(
      <App />
    );
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });

  //--4---


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


  
  










