
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
      tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('description', 255)
    tbl.boolean('finished')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
