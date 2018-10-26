import React, { Component } from 'react';
import ThemeContext from './Context/theme';
import './Button.css';

class Button extends Component {
  setTheme = () => {
    if (this.context.theme === 'dark') {
      return 'Button-dark';
    } else {
      return 'Button-light';
    }
  };
  static contextType = ThemeContext;
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {theme => <button className={this.setTheme()}>Hello</button>}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default Button;
