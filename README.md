# badwords
The best way to handle badwords.

## Installation

## Testing

``` npm run test ```

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


