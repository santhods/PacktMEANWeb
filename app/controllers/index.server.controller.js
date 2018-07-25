
exports.render = function(req, res) {
 if (req.session.recent){
    console.log(req.session.recent);
  }
  req.session.recent = new Date();

   res.render('index', {
     title: 'Hiya'
   })
};
