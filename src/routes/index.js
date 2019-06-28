module.exports = app => {
    const Links = app.db.models.Links

    app.get('/:shortlink', (req, res) => {
        Links.findOne({ where: { ShortLink: req.params.shortlink } }).then(link => {
            res.redirect(link.LinkOriginal)
        })
    })
    app.post('/gerar', (req, res) => {
        Links.create({ LinkOriginal: req.body.Link, ShortLink: Math.random().toString(36).slice(-10) }).then(response => {
            res.send('http://' + req.headers.host + '/' + response.ShortLink)
        })
    })
}