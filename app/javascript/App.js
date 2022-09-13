import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import store from './configureStore';
import { Provider } from 'react-redux';
import Greetings from './Greetings';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;