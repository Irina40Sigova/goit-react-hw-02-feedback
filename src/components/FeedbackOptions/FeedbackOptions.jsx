import PropTypes from 'prop-types';

import { BtnBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <BtnBox>
      <Button type="button" onClick={good}>
        Good
      </Button>
      <Button type="button" onClick={neutral}>
        Neutral
      </Button>
      <Button type="button" onClick={bad}>
        Bad
      </Button>
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
