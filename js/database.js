const mysql = require('mysql');

// configuration de la connexion à la base de données
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ppe_marchand_cintrat'
});

// connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connexion à la base de données établie avec succès.');
});

// export de la connexion pour une utilisation dans d'autres fichiers
