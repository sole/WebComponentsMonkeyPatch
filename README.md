# WebComponentsMonkeyPatch

A library to write web components code using modern unprefixed syntax.

But so far only one thing is fixed:

* `webkitCreateShadowRoot` is patched to `createShadowRoot`

If your browser supports unprefixed methods, nothing will be patched (so far that's only recent Firefox Nightlies with `dom.webcomponents.enabled` set to true).

## Using

Include the library JS file before your code using web components:

```html
<script src="WebComponentsMonkeyPatch.js"></script>
<script>
    // you're ready to go
</script
```

Done!

## Contributing

I am by no means an expert on polyfilling or shimming prototypes, so if you find something grossly offensive and/or wrong, feel free to submit a patch/pull request.

## License

Apache License.
