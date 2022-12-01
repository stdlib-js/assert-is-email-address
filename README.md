<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isEmail

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an email address.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
isEmail = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-email-address@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isEmail = require( 'path/to/vendor/umd/assert-is-email-address/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-email-address@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isEmail;
})();
</script>
```

#### isEmail( value )

Tests if a `value` is an [email address][validate-email-address].

```javascript
var bool = isEmail( 'beep@boop.com' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Validation is **not** rigorous, nor [should it be][validate-email-address]. **9** RFCs relate to email addresses, and accounting for all of them is a fool's errand. This module performs the simplest validation; i.e., requiring **at least** one `@` symbol.
-   For rigorous validation, send a confirmation email. If the email bounces, consider the email invalid.

<!-- </notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-email-address@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool;

bool = isEmail( 'beep@boop.com' );
// returns true

bool = isEmail( 'beep' );
// returns false

bool = isEmail( 'beep.com' );
// returns false

bool = isEmail( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-email-address.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-email-address

[test-image]: https://github.com/stdlib-js/assert-is-email-address/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-email-address/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-email-address/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-email-address?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-email-address.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-email-address/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-email-address/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-email-address/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-email-address/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-email-address/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-email-address/main/LICENSE

[validate-email-address]: http://davidcel.is/posts/stop-validating-email-addresses-with-regex/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
