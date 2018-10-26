import React from 'react';

const ThemeContext = React.createContext('light');

class ThemeProviderDark extends React.Component {
  render() {
    return <ThemeContext.Provider value="dark">{this.props.children}</ThemeContext.Provider>;
  }
}

class ThemeProviderLight extends React.Component {
  render() {
    return <ThemeContext.Provider value="light">{this.props.children}</ThemeContext.Provider>;
  }
}

export { ThemeProviderDark, ThemeProviderLight };

export default ThemeContext;
