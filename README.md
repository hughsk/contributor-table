# contributor-table

![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/contributor-table.svg?style=flat)
![](http://img.shields.io/npm/dm/contributor-table.svg?style=flat)
![](http://img.shields.io/npm/l/contributor-table.svg?style=flat)

Automatically inject a list of your git repository's contributors into your
readme.

## Usage

[![NPM](https://nodei.co/npm/contributor-table.png)](https://nodei.co/npm/contributor-table/)

    Usage: contributor-table {OPTIONS}

    Automatically inject a list of your git repository's
    contributors into your readme.

    Options:
      -d, --dirname  The git project to check for contributors. Default: $(pwd)
      -r, --readme   The readme file to process and update. Default: README.md
      -c, --check    Ignore the email cache and prompt for new user details again.
                     Useful for correcting mistakes.

On encountering a new email address, you'll be prompted
for that user's github/twitter accounts. This could be done
semi-automatically but turns out it's just simpler this way.
You'll only need to do this once per email on your system :)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/contributor-table/blob/master/LICENSE.md) for details.

## Contributors

| Name             | GitHub                              | Twitter                                           |
| ---------------- | ----------------------------------- | ------------------------------------------------- |
| **Hugh Kennedy** | [hughsk](https://github.com/hughsk) | [@hughskennedy](https://twitter.com/hughskennedy) |
