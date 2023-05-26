import React from 'react';
import AppContainer from './src/components/app-container';
import Navigator from './src/';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/utils/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContainer>
        <Navigator />
      </AppContainer>
    </I18nextProvider>
  );
}

