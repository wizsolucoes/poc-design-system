import { Component, h } from '@stencil/core';

@Component({
  tag: 'wiz-button',
  styleUrl: 'button.css',
  shadow: true
})
export class MyButton {
  render() {
    return (
      <button><slot></slot></button>
    );
  }
}