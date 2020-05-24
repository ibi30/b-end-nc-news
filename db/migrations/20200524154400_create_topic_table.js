exports.up = function (knex) {
  console.log('creating topic table')
  return knex.schema.createTable("topics", (topicTable) => {
    topicTable.string("slug").unique().primary();
    topicTable.string("description").notNullable();
  });
};

exports.down = function (knex) {
  console.log('dropping topic table')
  return knex.schema.dropTable("topics");
};
