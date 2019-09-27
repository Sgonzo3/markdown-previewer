import React from 'react';
import './App.css';
import MarkdownEditor from './MarkdownEditor.js';
import MarkdownPreviewer from './MarkdownPreviewer.js'
import marked from 'marked';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: `
  # Markdown Previewer
  ## Santos Gonzalez

  - [Portfolio](https://sgonzo3.github.io/)
  - [Github](https://github.com/Sgonzo3)
  - [LinkedIn](https://www.linkedin.com/in/sgonzo3/)

  ![alt text](https://sgonzo3.github.io/img/Profile_Pic.jpg 'Profile Pic')

  > I'm a **Web Developer** passionate about working with JavaScript and modern web frameworks to develop and deploy responsive and accessible Progressive Web Applications available across as many devices as possible, to users from all backgrounds.

  \`let number = 0;\`

  \`\`\`
  for ( let i = 0; i <= 10; i++) {console.log(i)};
  \`\`\`

  `
    }
  }

  wipeEditor = (e) => {
      e.target.value = ``
  }

  editorChange = (e) => {
    this.alterMarkdown(e.target.value);
  }

  alterMarkdown = (val) => {
    let content = val;
    marked.setOptions({
      breaks: true
    });
    content = marked(content);
    this.setState({
      value: content,
    });
  }

  componentDidMount(){
    let content = this.state.value;
    this.alterMarkdown(content);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title1">Markdown Previewer</h1>
        </header>
        <main>
          <MarkdownEditor
            wipeEditor={this.wipeEditor}
            onChange={this.editorChange}
            defaultValue={this.state.value}/>
          <MarkdownPreviewer
            defaultValue={this.state.value}
            alterMarkdown={this.alterMarkdown}/>
        </main>
        <footer>
          <span>Made by <a href="https://sgonzo3.github.io">Santos Gonzalez</a></span>
        </footer>
      </div>
    );
  }
}

export default App;
