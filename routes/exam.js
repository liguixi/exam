var db = require('./db/index');

/*
 * addExam
 */

exports.addExam = function(req, res){
  res.render('addExam', { title: 'UU空间' });
};

/*
 * exams
 */

exports.exams = function(req, res){
  var pageSize = 30;
  db.queryByParams('select * from t_exam where delete_flag = ? limit ? ', [0, pageSize], function(results){
	  res.render('exams', { title: 'UU空间' , exams : results, pageNo: 1, pageSize: pageSize, count: 10});
  });
};