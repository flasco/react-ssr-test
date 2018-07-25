let asset = null;

export function getScript(name) {
  return `<script src="${getUrl(name)}"></script>`
}

export function getStylesheet(name) {
  return `<link rel="stylesheet" href="${getUrl(name)}" >`
}

function getUrl(name) {
  return getAsset()[name];
}

function getAsset() {
  if (asset == null) {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'production') {
      console.log('action?')
      asset = require('../../client/build/asset-prd.json');
    } else {
      asset = require('../../client/local/asset-dev.json');
    }
  }
  return asset;
}