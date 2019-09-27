import React from 'react';
import './App.css';

class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <textarea
        id="editor"
        className="editor"
        onFocus={this.props.wipeEditor}
        onChange={this.props.onChange}
        defaultValue={this.props.defaultValue}
        dangerouslySetInnerHTML={this.props.value}>
      </textarea>
    )
  }

}

export default MarkdownEditor;
