import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {

  onSubmit(event) {
    const url = this.refs.url.value.trim();

    event.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }

  render(){
    return(
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    )
  };
}
