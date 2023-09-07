import { Router } from 'express'
import db from './db.js'


const app = Router()

const Links = db.models.Links

app.get('/:shortlink', async (req, res) => {
    if (req.params.shortlink.toLowerCase() === 'listar') {
        res.send(await Links.findAll())
    }
    else {
        Links.findOne({ where: { ShortLink: req.params.shortlink } }).then(link => {
            Links.update({Clicks: link.Clicks + 1}, {where: {Id: link.Id}})
            res.redirect(link.LinkOriginal)
        })
    }
})
app.get('/buscar/:shortlink', async (req, res) => {
    res.send(await Links.findOne({ where: { ShortLink: req.params.shortlink } }))
})
app.post('/gerar', (req, res) => {
    Links.create({ LinkOriginal: req.body.Link, ShortLink: Math.random().toString(36).slice(-10), DataCriacao: Date.now().toLocaleString(), Clicks: 0 }).then(response => {
        res.send('http://' + req.headers.host + '/' + response.ShortLink)
    })
})

export default app