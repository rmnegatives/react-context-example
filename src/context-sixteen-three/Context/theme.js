import React from 'react';

const ThemeContext = React.createContext('light');

class ThemeProviderDark extends React.Component {
  state = {
    value: { theme: 'dark' }
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.value}>{this.props.children}</ThemeContext.Provider>
    );
  }
}

class ThemeProviderLight extends React.Component {
  state = {
    value: { theme: 'light' }
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.value}>{this.props.children}</ThemeContext.Provider>
    );
  }
}

export { ThemeProviderDark, ThemeProviderLight };

export default ThemeContext;
