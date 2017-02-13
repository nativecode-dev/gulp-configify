# gulp-configly

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