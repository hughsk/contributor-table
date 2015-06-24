const contributors = require('git-contributors').GitContributors
const map          = require('map-limit')
const inquirer     = require('inquirer')
const userhome     = require('userhome')
const crypto       = require('crypto')
const mkdirp       = require('mkdirp')
const path         = require('path')
const fs           = require('fs')

module.exports = grabContributorDetails

function grabContributorDetails (dirname, opts, done) {
  opts = opts || {}

  var memory = userhome('.contributor-table')
  var check  = !!opts.check

  mkdirp.sync(memory)

  contributors.list({
    cwd: path.resolve(dirname)
  }, function (err, users) {
    if (err) return done(err)

    map(users, 1, function (user, next) {
      var src = path.join(memory, crypto.createHash('md5')
        .update(user.email)
        .digest('hex')
      )

      fs.readFile(src, function (err, login) {
        if (!check && !err && login) return next(null, JSON.parse(login))

        inquirer.prompt([{
          type: 'input',
          message: user.email + '\'s GitHub account?',
          name: 'github'
        }, {
          type: 'input',
          message: user.email + '\'s Twitter account?',
          name: 'twitter'
        }], function (results) {
          fs.writeFile(src, JSON.stringify(results), function(err) {
            return next(err, results)
          })
        })
      })
    }, function (err, accounts) {
      if (err) return done(err)

      accounts = accounts.map(function (account, i) {
        account.email = users[i].email
        account.name  = users[i].name
        return account
      })

      done(null, accounts)
    })
  })
}
