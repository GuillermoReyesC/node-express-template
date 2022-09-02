
const table = {
  tableName: 'credit_request', 
  schema: process.env.DB_SCHEMA
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      uf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dues: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('credit_request');
  }
};
