const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const getBooks = require('./routes/books/getBooks')
const addBooks = require('./routes/books/addBooks')
// const editBooks = require('./routes/books/editBooks')
// const deleteBooks = require('./routes/books/deleteBooks')

const getCategories = require('./routes/categories/getCategories')
const addCategories = require('./routes/categories/addCategories')
// const editCategory = require('./routes/categories/editCategory')
// const deleteCategory = require('./routes/categories/deleteCategory')

const getCustomers = require('./routes/customers/getCustomers')
const addCustomers = require('./routes/customers/addCustomers')
// const editCustomer = require('./routes/customers/editCustomer')
// const deleteCustomer = require('./routes/customers/deleteCustomer')

const getPublishers = require('./routes/publishers/getPublishers')
const addPublishers = require('./routes/publishers/addPublishers')
// const editPublisher = require('./routes/publishers/editPublisher')
// const deletePublisher = require('./routes/publishers/deletePublisher')

const getTransactions = require('./routes/transactions/getTransactions')
const addTransactions = require('./routes/transactions/addTransactions')
// const editTransactions = require('./routes/transactions/editTransactions')
// const deleteTransactions = require('./routes/transactions/deleteTransactions')


const app = express()
app.use(rootRoute)

app.use(bodyParser.json())

app.use(getBooks)
app.use(addBooks)
// app.use(editBooks)
// app.use(deleteBooks)

app.use(getCategories)
app.use(addCategories)
// app.use(editCategory)
// app.use(deleteCategory)

app.use(getCustomers)
app.use(addCustomers)
// app.use(editCustomer)
// app.use(deleteCustomer)

app.use(getPublishers)
app.use(addPublishers)
// app.use(editPublisher)
// app.use(deletePublisher)

app.use(getTransactions)
app.use(addTransactions)
// app.use(editTransactions)
// app.use(deleteTransactions)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
