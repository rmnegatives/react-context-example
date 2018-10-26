import React, { Component } from 'react';
import Button from './Button';
import EmptySection from './EmptySection';
import './ReactContextApp.css';
import { ThemeProviderDark, ThemeProviderLight } from './Context/theme';

class ReactContextApp extends Component {
  render() {
    return (
      <div className="ReactContext-main">
        <section>
          <ThemeProviderDark>
            <EmptySection>
              <EmptySection>
                <EmptySection>
                  <EmptySection>
                    <Button />
                  </EmptySection>
                </EmptySection>
              </EmptySection>
            </EmptySection>
          </ThemeProviderDark>
          <ThemeProviderLight>
            <EmptySection>
              <EmptySection>
                <EmptySection>
                  <EmptySection>
                    <Button />
                  </EmptySection>
                </EmptySection>
              </EmptySection>
            </EmptySection>
          </ThemeProviderLight>
        </section>
      </div>
    );
  }
}

export default ReactContextApp;
