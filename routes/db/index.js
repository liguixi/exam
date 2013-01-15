// mysql.js
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'192.168.1.8',
    port: 3306,
    user: 'dev_user',
    password: '123456',
    database: 'exam'
})

connection.connect();

/**
 * 简单查询实现
 */
function query(str, callback){
	//connection.connect();
	connection.query(  
	  str,  
	  function(err, results, fields) {  
		if (err) {  
		  throw err;  
		}    
		callback(results);
	  }  
	); 
	//connection.end();
}

/**
 * 简单查询实现
 */
function queryByParams(str, params, callback){
	//connection.connect();
	connection.query(  
	  str,  params, 
	  function(err, results, fields) {  
		if (err) {  
		  throw err;  
		}    
		callback(results);
		//connection.end();
	  }  
	); 
}

/**
 * 分页查询
 */
function queryByPage(str, pageNo, pageSize, callback){
	//connection.connect();
	// 查询符合条件的记录总数量
	var count = 0;
	connection.query(str,
			function(err, results, fields){
				if(err){
					throw err;
				}
				count = results.length
				console.log(count);
				connection.query(  
				  str,  
				  function(err, results, fields) {
					if (err) {  
					  throw err;  
					}    
					callback(count, pageNo, pageSize, results);
					//connection.end();
				  }  
				); 
			}
		);	
}

exports.query = query;

exports.queryByParams = queryByParams;
exports.queryByPage = queryByPage;

