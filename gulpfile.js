var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        // .copy('node_modules/jquery/dist/jquery.min.js', 'resources/assets/js/vendor/jquery.min.js')
        // .copy('node_modules/lodash/lodash.min.js', 'resources/assets/js/vendor/lodash.min.js')
        // .copy('node_modules/foundation-apps/dist/js/foundation-apps.min.js', 'resources/assets/js/vendor/foundation-apps.min.js')
        .sass('app.scss', 'public/css/app.css', { includePaths: ['node_modules/foundation-apps/scss'] })
        .browserify('app.js')
        .copy('resources/assets/img', 'public/img')
        .copy('resources/assets/fonts', 'public/fonts');
});