# textlint-rule-no-empty-section

textlint rule not allow to create empty section.

## Features

**OK** :green_heart:

```
# Header1

text.

# Header2

text.
```

**NG** :negative_squared_cross_mark:

> Found empty header: `# Header2`

```
# Header1

text.

# Header2

```

## Section

This rule defined **section** as following:

The Markdown contents 
```
# Header1

text.

# Header2

text.

```

to be

```
------------|---- # Header 1
            | 
Section1    |     text.
            |
------------|---- # Header 2
            |
Section2    |     text.
            |
------------|---------------
```

A **section** is slitted by Header Node.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-empty-section

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "no-empty-section": true
    }
}
```

Via CLI

```
textlint --rule no-empty-section README.md
```


## Changelog

See [Releases page](https://github.com/azu/textlint-rule-no-empty-section/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/textlint-rule-no-empty-section/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
