import { getAllUsers } from "./query.js"

// Supposons que vous ayez une balise <ul> avec l'ID "admin-list" dans votre HTML pour afficher la liste des admins
const adminList = document.getElementById('utilisateur-list');

// Appeler la fonction getAllUsers pour récupérer les utilisateur
getAllUsers((err, results) => {
  if (err) {
    console.error('Erreur lors de la récupération des utilisateurs : ' + err.stack);
    // Traiter l'erreur ici
    return;
  }

  // Boucler à travers les résultats de la requête SQL
  for (let i = 0; i < results.length; i++) {
    // Extraire le nom de l'admin
    const nomUtilisateur = results[i].Nom_Utilisateur;
    const prenomUtilisateur = results[i].Prenom_Utilisateur;
    const TeleUtilisateur = results[i].Tel_Utilisateur;
    const EmailUtilisateur = results[i].Email_Utilisateur;
    const Login_Utilisateur = results[i].Login_Utilisateur;

    // Créer un élément <li> pour afficher le nom de l'admin
    const adminItem = document.createElement('tr');
    adminItem.textContent = nomUtilisateur;

    // Ajouter l'élément <li> à la liste des admins
    adminList.appendChild(adminItem);
  }
});