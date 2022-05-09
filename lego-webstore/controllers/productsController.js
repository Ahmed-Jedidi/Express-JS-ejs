/* Produit. */
exports.products_list = function(req, res) {
    res.send("Liste des produits");
  };

  exports.products_infos = function(req, res) {
    
    //res.send("Fiche produit : [idproduct]");

    //res.setHeader('Content-Type', 'text/plain');
    //const id = Number(req.params.idproduct);

    //const id = Number(req.params.idproduct);
    //res.send('Fiche produit : '+ id);

    res.send('Fiche produit : '+ req.params.idproduct);


  };