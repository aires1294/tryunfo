import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  validationTest = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sumAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const validationName = cardName && cardDescription && cardImage && cardRare;
    const somaAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validationAttr = (
      somaAttr <= sumAttr
      && cardAttr1 <= maxAttr && cardAttr1 >= minAttr
      && cardAttr2 <= maxAttr && cardAttr2 >= minAttr
      && cardAttr3 <= maxAttr && cardAttr3 >= minAttr
    );
    return (validationName && validationAttr);
  };

  onHandleChange = ({ target }) => {
    // console.log(target);
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      if (this.validationTest()) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  saveButtonClick = (objetoCard) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoCard],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
      });
    });
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
      data,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onHandleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          saveButtonClick={ this.saveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          data.map((e) => (
            <div key={ e.cardName }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
            </div>
          ))
        }

      </div>
    );
  }
}

export default App;
