import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="textarea">
          Descrição:
          <textarea
            data-testid="description-input"
            name="Descrição"
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Attr-01:
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="attr2">
          Attr-02:
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="attr3">
          Attr-03:
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <br />
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="termos">
          <input
            type="checkbox"
            name="terms"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo!
        </label>
        <br />
        <input
          type="button"
          data-testid="save-button"
          value="Salvar"
        />
      </form>

    );
  }
}

export default Form;
