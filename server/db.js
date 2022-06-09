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
        console.log('users table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('customers')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('customers', (table)  => {
                table.increments('id').primary()
                table.string('name')
                table.integer('age')
                table.string('address')
                table.string('phone')
                table.date('dateOfSubscription')
                table.date('dateOfSubscriptionEnd')
                table.integer('paidAmount')
            })
            .then(() => {
                console.log('Table \'customers\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('customers table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('personal')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('personal', (table)  => {
                table.increments('id').primary()
                table.string('name')
                table.integer('age')
                table.integer('workingHours')
                table.string('freeDays')
                table.string('area')
                table.string('phone')
            })
            .then(() => {
                console.log('Table \'personal\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('personal table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('orders')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('orders', (table)  => {
                table.increments('id').primary()
                table.string('customerId')
                table.date('date')
                table.integer('price')
                table.string('menuId')
            })
            .then(() => {
                console.log('Table \'orders\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('orders table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('menus')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('menus', (table)  => {
                table.increments('id').primary()
                table.string('name')
                table.integer('price')
                table.string('calories')
            })
            .then(() => {
                console.log('Table \'menus\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('menus table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('income_expense')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('income_expense', (table)  => {
                table.increments('id').primary()
                table.integer('dailyIncome')
                table.integer('dailyExpenses')
                table.date('date')
            })
            .then(() => {
                console.log('Table \'income_expense\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('income_expense table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })

knex.schema
    .hasTable('ingredients')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('ingredients', (table)  => {
                table.increments('id').primary()
                table.string('name')
                table.integer('stock')
                table.string('unit')
            })
            .then(() => {
                console.log('Table \'ingredients\' wurde erstellt')
            })
            .catch((error) => {
                console.error(`Ein Fehler ist aufgetaucht: ${error}`)
            })
        }
    })
    .then(() => {
        console.log('ingredients table done')
    })
    .catch((error) => {
        console.error(`Es gab einen Fehler waehrend des Erstellens der Datenbank: ${error}`)
    })


//Zum Debuggen
knex.select('*').from('users')
  .then(data => console.log('users data:', data))
  .catch(err => console.log(err))

knex.select('*').from('customers')
    .then(data => console.log('customers data:', data))
    .catch(err => console.log(err))
    
knex.select('*').from('personal')
    .then(data => console.log('personal data:', data))
    .catch(err => console.log(err))
    
knex.select('*').from('orders')
    .then(data => console.log('orders data:', data))
    .catch(err => console.log(err))

knex.select('*').from('menus')
    .then(data => console.log('menus data:', data))
    .catch(err => console.log(err))

knex.select('*').from('income_expense')
    .then(data => console.log('income_expense data:', data))
    .catch(err => console.log(err))

knex.select('*').from('ingredients')
    .then(data => console.log('ingredients data:', data))
    .catch(err => console.log(err))

module.exports = knex