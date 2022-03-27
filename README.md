# webapp-env

```
npm install webapp-env
```

## Usage

1. Prepare input env file(.env).

```
A=foo
B=bar
```

2. Run command

```
webapp-env .env vars.js
 ```

It generates the following js file.

```
window.envVars = {"A":"foo","B":"bar"};
```

You can import this file on your html file.

```
<script src="./vars.js"></script>
<script>
   window.addEventListener("load", function () {
     console.log(envVars);
   });
</script>
```

## Contribution

1. Fork it ( http://github.com/argano/webapp-env )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## License

MIT
