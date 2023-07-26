import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
