import React from 'react';
import './App.css';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{__html: this.props.defaultValue}}></section>
    )
  }
}

export default MarkdownPreviewer;
