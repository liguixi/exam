var db = require('./db/index');
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