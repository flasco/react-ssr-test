import asset_prd from '../../client/build/asset-prd.json'
import asset_dev from '../../client/local/asset-dev.json';

export function getScript(name) {
  return `<script src="${getUrl(name)}"></script>`
}

export function getStylesheet(name) {
  return `<link rel="stylesheet" href="${getUrl(name)}" >`
}

function getUrl(name) {
  if (process.env.NODE_ENV == 'production') {
    return asset_prd[name];
  } else return asset_dev[name];
}