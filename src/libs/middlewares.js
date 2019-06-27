import express from 'express'

module.exports = app => {
    app.set('port', process.env.PORT || 8085)
    app.use(express.json())
}