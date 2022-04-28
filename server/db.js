const path = require('path')
const dbPath = path.resolve(__dirname, 'db/database.sqlite')
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
.hasTable('users')
.then((exists) => {
    if (!exists) {
    return knex.schema.createTable('users', (table)  => {
        table.increments('id').primary()
        table.string('username')
        table.string('password')
        table.string('area')
    })
    .then(() => {
        console.log('Table \'users\' wurde erstellt')
    })
    .catch((error) => {
        console.error(`Ein Fehler ist aufgetaucht: ${error}`)
    })
    }
})
.then(() => {
    console.log('done')
})
.catch((error) => {
    console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
})

//Zum Debuggen
knex.select('*').from('users')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))
  
module.exports = knex