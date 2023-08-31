# Miles W3C Web Components

Dette prosjektet er et forsøk på å lage rammeverk agnostiske webkomponenter for nettsider og andre web baserte applikasjoner hos Miles.

## Teknologi

- css
- vanilla javascript
- custom elements
- Vite

## Setup

- `npm install`
- `npm run build`

Prosjektet har også linting og prettier. Se package.json

## Deployment

There is no pipelines fpr build and deployment pr 31/08/23, so the way
you deploy this components is that you copy them into this path via sftp

`/wp-newsite/wp-content/plugins/miles-wp-web-components-plugin/miles-wc-new`

You will find the web components used in miles in thos storybook:
https://miles-no.github.io/miles_web_components/?path=/docs/miles-components--docs
