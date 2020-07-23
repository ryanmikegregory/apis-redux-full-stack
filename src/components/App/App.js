import React, {Component} from 'react';
import { connect } from 'react-redux';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';
import axios from 'axios';


class App extends Component {

  // TODO - GET Book List from server

  render() {
    return (
        <div className="App">
          <header><h1>Books w/ Redux!</h1></header>
          <main>
            <BookForm getAllBooks={this.getAllBooks} />
            <BookList />
          </main>
        </div>
    );
  }
}

export default connect()(App);
