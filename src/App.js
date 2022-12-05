import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ListCards from './components/ListCards';
import FilterByName from './components/FilterByName';
import FilterByRare from './components/FilterByRare';
import FilterByTrunfo from './components/FilterByTrunfo';
import './app.css';

let countRestCards = 0; // Testando o funcionamento de variável "global" dentro da classe.

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
    filteredCards: [],
    filter: '',
    disableFilters: false,
    shuffledCards: [],
    currentCard: 0,
    gameStarted: false,
  };

  validationFields = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
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
    this.setState({ [name]: value }, this.validationFields);
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
      filteredCards: [],
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
    const { listCards, filteredCards } = this.state;
    const isCardTrunfo = listCards.filter((card) => card.cardName === cardName)[0]
      .cardTrunfo;
    if (isCardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newListCards = listCards.filter((card) => card.cardName !== cardName);
    const newFilteredCards = filteredCards.filter((card) => card.cardName !== cardName);
    this.setState({
      listCards: newListCards,
      filteredCards: newFilteredCards,
    });
  };

  filterAnyThing = (e) => {
    const { listCards } = this.state;
    let filteredList = [];
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (e.target.type === 'text') {
      filteredList = listCards
        .filter((card) => card.cardName.includes(value));
    } else if (e.target.type === 'select-one') {
      filteredList = listCards
        .filter((card) => card.cardRare === value);
    } else if (e.target.type === 'checkbox') {
      filteredList = value === false
        ? listCards
        : listCards
          .filter((card) => card.cardTrunfo === value);

      this.setState({ disableFilters: value });
    }
    this.setState({
      filteredCards: filteredList,
      filter: value,
    });
  };

  whatList = () => {
    const { listCards, filteredCards, filter } = this.state;
    if (filter === 'todas') { return listCards; }
    if (filteredCards.length === 0 && filter !== '') {
      return filteredCards;
    }
    if (filteredCards.length !== 0) {
      return filteredCards;
    }
    return listCards;
  };

  shufflingCards = () => {
    const { listCards } = this.state;
    const param = 0.5;
    const shuffled = (listCards.sort(() => Math.random() - param));
    this.setState({
      shuffledCards: shuffled,
      currentCard: 0,
      gameStarted: true,
    });
  };

  currCard = () => {
    const { currentCard, shuffledCards } = this.state;
    const currentCardPlusOne = currentCard + 1;
    this.setState({ currentCard: currentCardPlusOne });
    countRestCards = shuffledCards.length - (currentCard + 2);
    if (countRestCards < 0) {
      this.setState({ gameStarted: false });
    }
  };

  render() {
    const { disableFilters, shuffledCards, currentCard, gameStarted } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        { gameStarted === false
          ? (
            <>
              <section className="formCard">
                <Form
                  onInputChange={ this.onInputChange }
                  onSaveButtonClick={ this.onSaveButtonClick }
                  { ...this.state }
                />
                <Card { ...this.state } />
              </section>
              <section className="filters">
                Filtros de busca
                <FilterByName
                  filterAnyThing={ this.filterAnyThing }
                  disableFilters={ disableFilters }
                />
                <FilterByRare
                  filterAnyThing={ this.filterAnyThing }
                  disableFilters={ disableFilters }
                />
                <FilterByTrunfo filterAnyThing={ this.filterAnyThing } />
              </section>
              <section className="listCards">
                <ListCards
                  listCards={ this.whatList() }
                  removeCard={ this.removeCard }
                />
              </section>
            </>
          )
          : undefined }
        <section className="game">
          <button
            type="button"
            onClick={ this.shufflingCards }
          >
            Jogar
          </button>
          { gameStarted === true && currentCard !== shuffledCards.length
            ? (
              <>
                <Card { ...shuffledCards[currentCard] } />
                <button type="button" onClick={ this.currCard }>Próxima carta</button>
                <p>
                  Cartas restantes:
                  {` ${currentCard === 0
                    ? shuffledCards.length - 1
                    : countRestCards}` }
                </p>
              </>
            ) : undefined }
        </section>
      </div>
    );
  }
}
export default App;
