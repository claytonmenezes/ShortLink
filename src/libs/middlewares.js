import express from 'express'

module.exports = app => {
    app.set('port', 56849)
    app.use(express.json())
}