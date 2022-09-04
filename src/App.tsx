import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { configureStore } from "@reduxjs/toolkit";

import coffeeReducer from './reducer/Coffee';


const store = configureStore({
	reducer: {
		coffee: coffeeReducer
	}
});

function App() {

  return (
    <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    </Provider>
  )
}

export default App
