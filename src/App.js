import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ListCards from './components/ListCards';
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

  removeCard = (e) => {
    const cardName = e.target.getAttribute('data-cardname');
    const { listCards } = this.state;
    const isCardTrunfo = listCards.filter((card) => card.cardName === cardName)[0]
      .cardTrunfo;
    if (isCardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newArray = listCards.filter((card) => card.cardName !== cardName);
    this.setState({
      listCards: newArray,
    });
  };

  render() {
    const { listCards } = this.state;
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
        <section className="listCards">
          <ListCards listCards={ listCards } removeCard={ this.removeCard } />
        </section>
      </div>
    );
  }
}

export default App;
