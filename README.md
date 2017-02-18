# gulp-configly

[![npm](https://img.shields.io/npm/v/gulp-configly.svg?style=flat-square)](https://www.npmjs.com/package/gulp-configly)
[![Travis](https://img.shields.io/travis/nativecode-dev/gulp-configly.svg?style=flat-square&label=travis)](https://travis-ci.org/nativecode-dev/gulp-configly)
[![TeamCity](https://img.shields.io/teamcity/https/build.nativecode.com/s/gulpconfigly_continuous.svg?style=flat-square)](https://build.nativecode.com/viewType.html?buildTypeId=gulpconfigly_continuous&guest=1)
[![David](https://img.shields.io/david/nativecode-dev/gulp-configly.svg?style=flat-square&label=deps)](https://www.npmjs.com/package/gulp-configly)
[![David](https://img.shields.io/david/dev/nativecode-dev/gulp-configly.svg?style=flat-square&label=devdeps)](https://www.npmjs.com/package/gulp-configly)

Node module to merge multiple JSON files into a single configuration object. The module is primarily
used to join multiple configurations, usually for `gulp`. However, it can be used without `gulp`.

## Usage

```javascript
const configly = require('gulp-configly')
const config = configly(__dirname, 'package.json', 'someother.json')
```

When used with `gulp-load-plugins`, you can use it thusly:
```javascript
const gulp = require('gulp')
const plugins = require('gulp-load-plugins')
const $ = plugins.configly(__dirname, 'package.json')
```

The above will automatically load `gulpfile.json` if it exists in the base directory as well as create
a `package` property containing the `package.json` configuration.
