const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
      title: 'Personal Finance',
      name: 'Kapil Garg'
  })
})

//Main Logic here
app.get('/finance',(req, res) => {
  console.log('kapil')
  res.send({
    labels: ['abc','def','ghi'],
    datasets:[
      {
        label: 'Population',
        data: [100000, 200000, 250000]
      },
      {
        label: 'Income',
        data: [10000, 20000, 25000]
      }
    ]
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'Kapil Garg'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
      helpText: 'This is some helpful text.',
      title: 'Help',
      name: 'Kapil Garg'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'Kapil Garg',
      errorMessage: 'Page not found.'
  })
})

app.listen(port, () => {
  console.log('Server is up on port '+port)
})