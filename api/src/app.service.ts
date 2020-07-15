import { Injectable } from '@nestjs/common';

let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [
      'g:availability',
      'g:custom_label_0',
      'g:custom_label_1',
      'g:custom_label_2',
      'g:custom_label_3',
    ]
  }
});

function addPrefix(url) {
  const prefixes = ['http://', 'https://'];
  if (url.substr(0, prefixes[0].length) !== prefixes[0] && url.substr(0, prefixes[1].length) !== prefixes[1]) {
    return url = prefixes[0] + url;
  }
  return url
}

@Injectable()
export class AppService {

  fetchRRS(url) {
    url = addPrefix(url)
    const resultObj = {
      itemsNumber: 0,
      availableItemsNumber: 0,
      label0Items: [0, 0],
      label1Items: [0, 0],
      label2Items: [0, 0],
      label3Items: [0, 0]
    }
    return (
      parser.parseURL(url)
        .then(res => {res.items.map(item => {
          resultObj.itemsNumber += 1
          if(item['g:availability'] === 'in stock') {
            resultObj.availableItemsNumber += 1
          }
          for(let i = 0; i <= 3; i += 1) {
            if(item[`g:custom_label_${i}`] !== '') {
              resultObj[`label${i}Items`][0] += 1
              if(item['g:availability'] !== '') {
                resultObj[`label${i}Items`][1] += 1
              }
            }
          }
        })
        return resultObj
        })
        .catch(() => {
          return {error: true}
        })
    )
  }

}
