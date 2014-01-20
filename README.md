# WebComponentsMonkeyPatch

A library to write web components code using modern unprefixed syntax and the latest standard method names (these change as the spec evolves).

But so far only two things are fixed:

* `webkitCreateShadowRoot` is patched to `createShadowRoot`
* `document.register`      is patched to `document.registerElement`

When your browser supports unprefixed methods or the latest names, nothing will be patched.  So far that's only:

- recent [Firefox Nightlies](http://nightly.mozilla.org/) with `dom.webcomponents.enabled` set to true, and
- recent [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html) with the following features enabled in the `chrome://flags` page.
    - Experimental Web Platform Features
    - Experimental JavaScript
    - HTML Imports


## Usage

Include the library JS file before your code using web components:

```html
<script src="WebComponentsMonkeyPatch.js"></script>
<script>
    // you're ready to go
</script>
```

Done!

## Contributing

I am by no means an expert on polyfilling or shimming prototypes, so if you find something grossly offensive and/or wrong, feel free to submit a patch/pull request. You can also contribute new shims, of course! Thanks.

## License

Apache License.
