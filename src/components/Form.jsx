import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta:
          <input id="card-name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="card-description">
          Descrição da Carta:
          <input
            id="card-description"
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="first-attr">
          Valor de Ataque:
          <input id="first-attr" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="second-attr">
          Valor de Defesa:
          <input id="second-attr" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="third-attr">
          Valor de Equilibrio:
          <input id="third-attr" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-card">
          Imagem:
          <input id="image-card" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-card">
          Raridade:
          <select id="rare-card" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo:
          <input id="super-trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
