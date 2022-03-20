module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "clients",
    {
      name: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      },
      birthday: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      underscored: true
    }
  );
}
