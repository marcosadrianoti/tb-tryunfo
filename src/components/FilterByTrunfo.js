import React from 'react';
import PropTypes from 'prop-types';

class FilterByTrunfo extends React.Component {
  render() {
    const { filterByName } = this.props;
    return (
      <label htmlFor="trunfoCheck">
        <input
          type="checkbox"
          name="trunfoCheck"
          data-testid="trunfo-filter"
          onChange={ filterByName }
        />
        Super Trunfo
      </label>
    );
  }
}

FilterByTrunfo.propTypes = {
  filterByName: PropTypes.func,
}.isRequired;

export default FilterByTrunfo;
