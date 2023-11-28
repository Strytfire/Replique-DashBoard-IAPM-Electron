import { connection } from "./database.js"

// fonction pour récupérer tous les utilisateurs
export function getAllUsers(callback) {
  const sql = 'SELECT Nom_Utilisateur, Prenom_Utilisateur, Tel_Utilisateur, Email_Utilisateur, Login_Utilisateur FROM utilisateur';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs : ' + err.stack);
      return callback(err, null);
    }
    return callback(null, results);
  });
}

// Voila un appel de fonction Precedent

// getAllUsers((err, users) => {
//     if (err) {
//       console.error('Erreur lors de la récupération des utilisateurs : ' + err.stack);
//       return;
//     }
//     console.log(users);
// })
