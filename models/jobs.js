'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobs = sequelize.define('Jobs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    title: DataTypes.STRING,
    poster: DataTypes.INTEGER,
    doer: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    payment: DataTypes.INTEGER,
    address: DataTypes.STRING,
    time_started: DataTypes.DATE,
    completed: DataTypes.BOOLEAN
  }, {});
  jobs.associate = function(models) {
    // associations can be defined here
  };
  return jobs;
};