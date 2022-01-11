
import './App.css';
import React from 'react';
const { Remarkable } = require('remarkable');
var md = new Remarkable();

    class App extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Bonjour, **monde** !' };
  }
   

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
<>
      <div className="header"><h1>Saisissez du markdown !</h1></div>

      <div className="body">
      <div className="MarkdownEditor">

        <div className="block1">

        <div className="p1"><h3>Entrée</h3></div>

        <div className="text">
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        </div>
        </div>


        <div className="block2">
          
        <div className="p1"><h3>Sortie</h3></div>
        
        <div className="text">
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        </div>
      </div>
      </div>
      </div>

      </>
    );
  }
}

export default App;
