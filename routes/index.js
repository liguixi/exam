var db = require('./db/index');
/*
 * GET home page.
 */

exports.index = function(req, res){
  db.query('select * from t_exam ', function(results){
	res.render('index', { title: 'UU空间' , activities : results});
  });
};


/*
 * login
 */

exports.login = function(req, res){
  res.render('login', { title: 'UU空间' });
};

/*
 * reg
 */

exports.reg = function(req, res){
  res.render('regist', { title: 'UU空间' });
};
