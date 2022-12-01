import React from 'react';
import './form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="url-img">
          URl da imagem
          <input
            type="text"
            name="url-img"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="rare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Carta Super Trunfo:
          <input
            type="checkbox"
            name="super-trunfo"
            data-testid="trunfo-input"
          // checked={specialCard}
          // onChange={handleChange}
          // disabled={isDisabledButton}
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
