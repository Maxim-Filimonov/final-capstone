import React, { PropTypes } from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

export default function TextAnswer(props) {
  return (
    <div className="flex-container">
      <div className="content-container">
        <label htmlFor="single-answer">Please enter your answer</label>
        <input onChange={e => props.onChange(props.question, e.target.value)} id="single-answer" type="text" />
      </div>
      <style jsx>{flexContainer}</style>
      <style jsx>{contentContainer}</style>
    </div>
  );
}

TextAnswer.defaultProps = {
  question: '',
  onChange: () => { },
};

TextAnswer.propTypes = {
  onChange: PropTypes.func,
  question: PropTypes.string,
};
