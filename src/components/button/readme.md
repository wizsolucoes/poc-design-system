# wiz-button

# Teste de encapsulamento de um componente ing-bank/lion

Link para o componente base: https://github.com/ing-bank/lion/tree/master/packages/button

O componente foi extendido e customizado em `src/base/base-button`. 

```javascript
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
```

Criamos um componente com o tag `<wiz-button>` que encapsula o componente lion, usando-o como um elemento html customizado em `src/components/button/button.tsx`

```javascript
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
```

Testamos o `<wiz-button>` em uma aplicação Angular. Segue imagem:
![wiz-button in an Angular app](https://i.imgur.com/OvuO3iz.jpg "wiz-button in an Angular app")


## Observações

- Componentes ing-bank/lion são extensões de componentes web [LitElement](https://lit-element.polymer-project.org/). Cada componente lion encapsula sua árvores de DOM em um [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) e, portanto, seus estilos não podem ser sobrepostos por regras fora do elemento. O método estático  `static get styles()` do LitElement tem que ser usado para estilizar o componente lion.

- Quando o `<wiz-button>` é usado no DOM, a estrutura é a seguinte:
![wiz-button DOM structure](https://i.imgur.com/8u1r6jk.jpg "wiz-button DOM structure"). 

- `#shadow-root(open)`no DOM que apresenta o Shadow DOM do componente. O primeiro Shadow root é do nosso componente. StencilJS nós dá opção de usar o Shadow DOM ou nao, usdno a propriedade `shadow: true|false` da anotação `@Component`. O segundo Shadow root é do componente lion que encapsulamos.

- Temos uma limitação de estilização de componentes lion, pois não temos a opção de "desligar" o Shadow DOM neste componente enscapsulado.

- No entatno, é possível usar [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) para customizar o copmonente lion. Quando extendemos o componente lion e customizamos o estilo usamos o variável `--primary` para possilibiltar a customização da propriedade `background` da class `.btn`. (Veja `src/base/base-button`.)
  ```css
  background: var(--primary, rgb(245, 108, 0));
  ```
  **Logo as possibilidades de estilização com componente `<wiz-button>` são limitadas às propriedades que usam CSS custom properties no componente lion extendido.**
  
  Por exemplo a seguinte regra CSS na página que consumir o `<wiz-button>` deixaria o botão vermelho.
  ```css
  * {
    --primary: red;
  }
  ```



<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
