module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log('Servidor rodando na porta', app.get('port'))
        })
    })
}