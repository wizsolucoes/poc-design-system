## Erro 1

### Erro:

```bash
FAIL src/components/button/button.spec.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    C:\Users\toureholder\wiz\studies\web-components\stencil\design-system\node_modules\@lion\button\index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){export { LionButton } from './src/LionButton.js';
                                                                                             ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { LionButton } from '@lion/button';
        | ^
      2 | import { css } from 'lit-element';
      3 |
      4 | export class BaseButton extends LionButton {

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:579:25)
      at Object.<anonymous> (src/base/base-button.ts:1:1)

```

### Causa: 
Isto acontece porque os arquivos javascript no código fonte de `@lion/button` e usa syntax de módulos ES6 e os arquivos não está sendo transformados pelo compilador Typescript. Isso é indicada por essa parta da mensagem de erro: "This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript."

### Solução:
Por default Jest ignora `node_modules`, então seguindo as sugestões na mesnagem de erro, especifiquei um "transformIgnorePatterns" e um "transform" para falar para Jest deixar de ignorar o módulo `node_modules/@lion` e tansformar os arquivos `js` e `jsx` com "ts-jest" (instalei ts-jest e dependências).
Também precisei setar `allowJs` como `true` em `tsconfig.json`.

```javascript
// Configuração de Jest é feita no arquivo stenicl.config.ts

  testing: {
    transformIgnorePatterns: [ "<rootDir>/node_modules/(?!@lion)" ],
    transform:  {
      "^.+\\.(js|jsx)$": "ts-jest"
    }
  }
```

```javascript
// tsconfig.json

{
  "compilerOptions": {
    "allowJs": true,
    ....
  },
  ...
}
```


## Erro 2

### Erro:
O mesmo erro ocorre com o módulos `node_modules/lit-element` e `node_modules/lit-html`.

### Solução:
Mudei o "transformIgnorePatterns" para `transformIgnorePatterns: [ "<rootDir>/node_modules/(?!lit-element|lit-html|@lion)" ]` para tanfsormar o código fonte de `lit-element`.

## Errro 3

### Erro:
```bash
FAIL src/components/button/button.spec.tsx
  ● Test suite failed to run

    ReferenceError: Document is not defined

      at Object.<anonymous> (node_modules/lit-element/lib/css-tag.js:11:69)
      at Object.<anonymous> (node_modules/lit-element/lit-element.js:19:1)

```


