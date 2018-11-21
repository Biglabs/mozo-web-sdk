import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mozo-sdk-ui',
  bundles: [
    { components: ['my-component'] },
    { components: ['mozo-transfer'] },
    { components: ['mozo-offchain'] },
    { components: ['mozo-address-book'] },
    { components: ['mozo-history'] }
  ],
  globalStyle: 'src/styles/app.scss',
  //globalScript: 'src/index.ts',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      }
    }
  ]
};
