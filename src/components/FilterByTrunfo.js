import React from 'react';
import PropTypes from 'prop-types';

class FilterByTrunfo extends React.Component {
  render() {
    const { filterAnyThing } = this.props;
    return (
      <label htmlFor="trunfoCheck">
        <input
          type="checkbox"
          name="trunfoCheck"
          data-testid="trunfo-filter"
          onChange={ filterAnyThing }
        />
        Super Trunfo
      </label>
    );
  }
}

FilterByTrunfo.propTypes = {
  filterAnyThing: PropTypes.func,
}.isRequired;

export default FilterByTrunfo;
