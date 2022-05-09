/* Home page. */
exports.index = function(req, res) {
  //res.send('Page d\'accueil salem');
  res.render('layout_page.ejs');
  //res.render('partials/head.ejs');
  //res.render('partials/products_list.ejs');
};
