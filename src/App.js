import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

function showEditorHTML() {

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "Enter content is the Text Area above."
    }
  }

  editorChange = (e) => {
    let content = e.target.value;
    content = marked(content);
    this.setState({value: content});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title1">Markdown Previewer</h1>
        </header>
        <main>
          <textarea
            className="editor"
            id="editor"
            onKeyUp={this.editorChange}
            placeholder="Compose your Markdown here..."
            ></textarea>
          <section className="preview" id="preview">
            {this.state.value}
          </section>
        </main>
        <footer>
          <span>Made by <a href="https://sgonzo3.github.io">Santos Gonzalez</a></span>
        </footer>
      </div>
    );
  }
}

export default App;
