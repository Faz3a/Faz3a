var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
	client: 'sqlite3',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'MyProject',
		filename: path.join(__dirname, '../db/MyProject.sqlite')
	}
});

db.knex.schema.hasTable('users').then(function(exists) {
	if(!exists){
		db.knex.schema.createTable('users' , function(user){
			user.increments('id').primary();
			user.string('fullname' , 255);
			user.string('username' , 255);
			user.string('password' , 255);
			user.string('location' , 255);
			user.string('loanthing' , 255);
			user.decimal('lat');
			user.decimal('lng');
			user.timestamps();
		}).then(function(table){
			console.log('Table Created' , table);
		});
	}
});

db.knex.schema.hasTable('loans').then(function(exists){
	if(!exists){
		db.knex.schema.createTable('loans' , function(loan){
			loan.increments('id').primary();
			loan.string('loan_name' , 255);
			loan.string('description' , 255);
			loan.string('available' , 255);
			loan.integer('quntity');
			loan.timestamps();
		}).then(function(table){
			console.log('Table Created' , table)
		});
	}
});

module.exports = db;