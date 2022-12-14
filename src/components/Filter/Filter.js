import React, { Component } from 'react';
import s from './Filter.module.css';
import { PropTypes } from 'prop-types';

const Filter = ({ value, onChengeFilter }) => {
  // console.log(onChengeFilter);
  return (
    <div>
      <label className={s.filter}>Filter</label>
      <input type="text" value={value} onChange={onChengeFilter} />
    </div>
  );
};

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};

export default Filter;
