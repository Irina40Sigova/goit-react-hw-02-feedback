import { Component } from 'react';

import { Container } from './App.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

  handleClickNeutral = () =>
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

  handleClickBad = () =>
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;

    let rate = 0;

    rate = (good / (good + bad + neutral)) * 100;
    return Math.round(rate);
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.handleClickGood}
            neutral={this.handleClickNeutral}
            bad={this.handleClickBad}
          />
        </Section>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
