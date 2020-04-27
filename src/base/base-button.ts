import { LionButton } from '@lion/button';
import { css } from 'lit-element';

export class BaseButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        .btn {
            background: var(--primary, rgb(245, 108, 0));
            color: rgb(255, 255, 255);
            font-family: 'Roboto', sans-serif;
            font-size: small;
            border-radius: 5px;
        }

        :host(:hover) .btn {
            background: var(--primary-hover, rgb(255, 145, 0));
        }

        :host(:focus:not([disabled])) .btn {
            outline: none;
          }

        :host(:active) .btn, /* keep native :active to render quickly where possible */
        :host([active]) .btn /* use custom [active] to fix IE11 */ {
            background: var(--primary-clicked, rgb(255, 173, 66));
        }
    `
    ];
  }
};