import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './app.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    listCards: [],
  };

  validationFields = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const validateCardName = cardName !== '';
    const validateCardDescription = cardDescription !== '';
    const validateCardImage = cardImage !== '';
    const validateCardRare = cardRare !== '';
    const maxNumber = 90;
    const maxSum = 210;
    const validadeCardAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxNumber;
    const validadeCardAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxNumber;
    const validadeCardAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxNumber;
    const validadeSumAttr = (
      Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
    ) <= maxSum;
    this.setState({
      isSaveButtonDisabled: !(
        validateCardName
        && validateCardDescription
        && validateCardImage
        && validateCardRare
        && validadeSumAttr
        && validadeCardAttr1
        && validadeCardAttr2
        && validadeCardAttr3),
    });
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // if (target.type === 'checkbox' && value === true){
    //   this.setState({
    //     hasTrunfo: true,
    //   });
    // };
    const { name } = target;
    this.setState({
      [name]: value }, this.validationFields);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prev) => ({
      listCards: [...prev.listCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="formCard">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card
            { ...this.state }
          />
        </section>
      </div>
    );
  }
}

export default App;
