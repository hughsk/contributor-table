#!/usr/bin/env node

const insertTable = require('mdast-contributors')
const minimist    = require('minimist')
const mdast       = require('mdast')
const path        = require('path')
const grabDetails = require('./')
const fs          = require('fs')

const argv = minimist(process.argv.slice(2), {
  boolean: ['c'],
  alias: {
    c: 'check',
    d: 'dirname',
    r: 'readme'
  },
  default: {
    d: process.cwd()
  }
})

argv.r = argv.readme = argv.r || (
  path.resolve(argv.dirname, 'README.md')
)

grabDetails(argv.dirname, {
  check: argv.check
}, function (err, contributors) {
  if (err) throw err

  var readme = fs.readFileSync(argv.readme, 'utf8')

  readme = mdast.use(insertTable, {
    contributors: contributors
  }).process(readme)

  fs.writeFileSync(argv.readme, readme)
})
