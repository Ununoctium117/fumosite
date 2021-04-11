# Fumo Guides

This is the source code for https://fumo.website.

## Development

Pages are generated using the templates in src/ and the data in data/fumo_data.json. CSS for all pages is generated
using SCSS.

Changes to this repository are automatically reflected in the real site (excluding images). Please feel free to
open pull requests with content changes, fixes, or improvements.

Anyone is welcome to contribute.

As of the last merge, site is now using express backend.
Please make sure to add routes for any new html page you add to this site if you make any.
You can add new routes on routes/fumo-routes.js

Static files should be put inside the static folder. Express looks for them in there.