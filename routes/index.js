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

/*
 * addExam
 */

exports.addExam = function(req, res){
  res.render('addExam', { title: 'UU空间' });
};

/*
 * addPaper
 */

exports.addPaper = function(req, res){
  res.render('addPaper', { title: 'UU空间' });
};

/*
 * papers
 */
exports.papers = function(req, res){
  var pageSize = 3;
  db.queryByParams('select * from t_paper where delete_flag = ? limit ? ', [0, pageSize], function(results){
	  res.render('papers', { title: 'UU空间' , papers : results, pageNo: 1, pageSize: pageSize, count: 10});
  });

};