import PropTypes from 'prop-types';

import { UL, LI } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return;
  }
  return (
    <UL>
      <LI>Good: {good}</LI>
      <LI>Neutral: {neutral}</LI>
      <LI>Bad: {bad}</LI>
      <LI>Total: {total}</LI>
      <LI>Positive feedback: {positivePercentage || ''}% </LI>
    </UL>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
