import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  onSubmit(event) {
    const url = this.state.url;

    event.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({url: ''});
        }
      });
    }
  }
  onChange(event){
    this.setState({
      url: event.target.value
    });
  }

  render(){
    return(
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}/>
          <button>Add Link</button>
        </form>
      </div>
    )
  };
}
