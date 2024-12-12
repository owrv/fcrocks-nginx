'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
export function setup(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
}

export function up(db, callback) {
  db.createTable('peoples', {
    cod_people: { type: 'int', primaryKey: true, autoIncrement: true },
    des_name: { type: 'string', notNull: true },
  }, callback)
}

export function down(db) {
  return null;
}

export const _meta = {
  "version": 1
};
