import { Component, h } from '@stencil/core';
import { BaseButton } from '../../base/base-button';

customElements.define('base-button', BaseButton as any);

@Component({
  tag: 'wiz-button',
  styleUrl: 'button.css',
  shadow: true
})
export class MyButton {
  render() {
    return (
      <base-button><slot></slot></base-button>
    );
  }
}