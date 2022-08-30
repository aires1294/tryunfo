import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  verifyTrunfo = (hasTrunfo) => {
    if (hasTrunfo) {
      return (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    }
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <input
          id="super-trunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          // defaultChecked={ cardTrunfo }
          name="cardTrunfo"
        />
      </div>
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta:
          <input
            id="card-name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>

        <label htmlFor="card-description">
          Descrição da Carta:
          <input
            id="card-description"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>

        <label htmlFor="first-attr">
          Valor de Atributo 1:
          <input
            id="first-attr"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>

        <label htmlFor="second-attr">
          Valor de Atributo 2:
          <input
            id="second-attr"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>

        <label htmlFor="third-attr">
          Valor de Atributo 3:
          <input
            id="third-attr"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>

        <label htmlFor="image-card">
          Imagem:
          <input
            id="image-card"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>

        <label htmlFor="rare-card">
          Raridade:
          <select
            id="rare-card"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trunfo:
          {this.verifyTrunfo(hasTrunfo)}
          {/* <input
            id="super-trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            // defaultChecked={ cardTrunfo }
            name="cardTrunfo"
          /> */}
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => {
            onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
              hasTrunfo,
            });
          } }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
