# and-or

支持 & 和 | 组合的字符串，方便以字符串的形式配置逻辑组合条件


## Installation

```bash
npm i -S and-or
```


## Usage

```js
import { andOr } from 'and-or'

// 指定字符串中包含元音字母就返回 true
const isContainsVowel = (str) => [ 'a', 'e', 'i', 'o', 'u' ].some(k => str.includes(k))

andOr('a && (b || c)', isContainsVowel) // 等介于执行 `true && (false || false)`，所以最终返回 false
```



<!--
## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.
-->

## Changelog

[Changelog](./CHANGELOG.md)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

[MIT](https://choosealicense.com/licenses/mit/)
