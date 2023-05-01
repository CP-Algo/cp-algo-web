const site = {
  domain: process.env.DOMAIN,
  port: process.env.PORT,
}

site.host = site.domain
if (parseInt(site.port) !== 80) site.host += `:${site.port}`

module.exports = site
