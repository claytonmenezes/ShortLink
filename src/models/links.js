module.exports = (sequelize, DataType) => {
    const Links = sequelize.define('Links', {
        Id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        LinkOriginal: {
            type: DataType.STRING,
            allowNull: false
        },
        ShortLink: {
            type: DataType.STRING,
            allowNull: false
        },
        DataCriacao: {
            type: DataType.DATE,
            allowNull: false
        },
        Clicks: {
            type: DataType.INTEGER,
            allowNull: true
        }
    })

    return Links
}