import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// const INITIAL_STATE = {

// };
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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription,
        cardAttr1, cardAttr2, cardAttr3,
        cardRare, cardImage } = this.state;
      const somaFinal = Number.parseInt(cardAttr1, 10)
      + Number.parseInt(cardAttr2, 10) + Number.parseInt(cardAttr3, 10);
      const max = 210;
      const ButtonDisabled = cardName.length === 0
      || cardDescription.length === 0
      || cardAttr1 > '90' || cardAttr1 < 0
      || cardAttr2 > '90' || cardAttr2 < 0
      || cardAttr3 > '90' || cardAttr3 < 0
      || cardImage.length === 0
      || cardRare.length === 0
      || somaFinal > max;
      this.setState({
        isSaveButtonDisabled: ButtonDisabled,
      });
    });
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardImage, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
