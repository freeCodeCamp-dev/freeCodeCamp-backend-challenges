

module.exports = (app) => {

  // API
  const apiRouter = require('./api')()
  app.use("/api", apiRouter)


  // Root Router Handler, Serves Pug rendered index
  app.route('/')
    .get((req, res, next) => {
      res.render('index', {
        title: "Metric-Imperial Converter",
        header: "Metric-Imperial Converter"
      })
    })


  // 404 Not Found Middleware
  app.use((req, res, next) => {
    res.status(404)
      .type('text')
      .send('Not Found')
  })


  // Error Handler
  app.use((err, req, res, next) => {
    console.error(err.message)

    res.send(err.message)
  })
}