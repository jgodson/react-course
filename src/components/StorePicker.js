import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  goToStore(evt) {
    evt.preventDefault();
    const storeId = this.storeInput.value;

    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="StorePicker" onSubmit={(evt) => this.goToStore(evt)}>
        <h2>Please enter a store</h2>
        <input type="text" placeholder="Store Name" defaultValue={getFunName()} required ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}