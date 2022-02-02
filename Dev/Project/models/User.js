module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
       
        email : { type: DataTypes.STRING(100), validate: {isEmail: true}, unique: true},
        name : { type: DataTypes.STRING(100)},
        password: { type: DataTypes.STRING(100)},
        phone: { type: DataTypes.STRING(50)},
        createAt: {type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.NOW},
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "User",
        timestamps: true,
        paranoid: true
    });
    return User;
};