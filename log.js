
const fs = require('fs');

fs.appendFile('requeteclient.txt', "contenue de la requete get ...<= a faire ", function (err) {

   if (err) throw err;

   console.log('Fichier log mis à jour !');

});