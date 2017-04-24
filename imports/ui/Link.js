import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from './../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(event) {
    const url = this.refs.url.value.trim();

    event.preventDefault();

    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }
  }
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Log out</button>
      <LinksList/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}
