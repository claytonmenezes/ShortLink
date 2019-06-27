module.exports = (sequelize, DataType) => {
    const Links = sequelize.define('Links', {
        id: {
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
        }
    })

    return Links
}