import React from 'react';

function NumberSelect(props) {
  const onChange = e => {
    const value = Number(e.currentTarget.value)
    props.onChange(value)
  }
  const { value, options, postfix } = props
  const optionList = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ))
  return (
    <div>
      <select onChange={onChange} value={value}>
        {optionList}
        {/*{options.map(option => (*/}
        {/*  <option key={option} value={option}>*/}
        {/*    {option}*/}
        {/*  </option>*/}
        {/*))}*/}
      </select>
      {postfix}
    </div>
  );
}

export default NumberSelect;
