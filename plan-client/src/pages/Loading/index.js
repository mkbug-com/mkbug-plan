import React from 'react';
import './index.css';

export default class Loading extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      duration: 360,
      curIdx: 0,
      text: 'Loading...'.split('')
    }

    this.timer = null;
  }

  resetTimer() {
    let {
      duration = 360,
      curIdx = 0,
      text = []
    } = this.state;

    const len = text.length;

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      if (curIdx === len) {
        curIdx = 0;
      } else {
        curIdx ++;
      }
      this.setState({
        curIdx: curIdx
      })
    }, duration);
  }

  componentDidMount() {
    this.resetTimer();
  }

  componentDidUpdate() {
    this.resetTimer();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const {
      text = [],
      curIdx = 0
    } = this.state;

    return <section className="mkbug__loading">
      <div className="loading__icon">
        <img
          className="loading__img"
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
          alt="ICON"
        />
        <div className="loading__text">
          {
            text.map((item, idx) => {
              return <span
                key={idx}
                className={`loading__text_item ${idx === curIdx ? "is_current" : ""}`}>
                {item}
              </span>
            })
          }
        </div>
      </div>
    </section>
  }
}
