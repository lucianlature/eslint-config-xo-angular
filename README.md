# eslint-config-xo-angular
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Angaulr to be used with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)

This is for advanced users. You probably want to use [XO](https://github.com/sindresorhus/xo) directly.


## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-angular eslint-plugin-angular
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-angular"]
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": ["xo", "xo-angular"]
}
```

You can also mix it with a sub-config:

```json
{
	"extends": ["xo/esnext", "xo-angular"]
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [eslint-config-xo-space](https://github.com/sindresorhus/eslint-config-xo-space) - ESLint shareable config for XO with 2-space indent


## License

MIT © [Lucian Lature](http://codelinks.net)