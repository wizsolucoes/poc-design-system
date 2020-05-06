import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    transformIgnorePatterns: [ "<rootDir>/node_modules/(?!lit-element|lit-html|@lion)" ],
    transform:  {
      "^.+\\.(js|jsx)$": "ts-jest"
    }
  }
};
