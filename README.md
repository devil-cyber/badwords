# badwords
Javascript handler for badwords. Work in browser & node.
Open for contribution. You can text me on discord Kawacrepe#8492

## Installation

``` npm i @kawacrepe/badwords ```

## Testing

``` npm test ```

## Usage

```javascript
const Filter = require('badwords');
const filter = new Filter();

console.log(filter.clean("Don't be an ashole"));
// 'Don't be an ******
```

```javascript
const Filter = require('badwords');
const filter = new Filter();

console.log(filter.doesContainBadwords("Don't be an asshole"));
// [true, 'asshole']
```


