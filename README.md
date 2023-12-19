# Modale - Projet 14 - OpenClassrooms
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
[![CSS](https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)


`npm-modale-lib-react` est une librairie React qui permet d'afficher une modale de confirmation de sauvegarde de formulaire.

![Image de démonstration](https://github.com/angelinalavoryk/images/blob/main/npm-modale.png)

Pour utiliser cette librairie dans votre projet React, suivez ces étapes :
## :triangular_flag_on_post: Prérequis
- [Node.js](https://nodejs.org/) version 18.12.1 ou supérieure
- [npm](https://www.npmjs.com/) version 8.19.2 ou supérieure
- Editeur de texte recommandé: VS Code


## :triangular_flag_on_post: Installation
      ` npm i npm-modale-lib-react `

Une fois l'installation terminée, la bibliothèque est prête à être utilisée dans votre projet.

## :triangular_flag_on_post: Importation

 1. Dans le composant où vous souhaitez utiliser la modale, importez la bibliothèque en haut de votre fichier :
 ``` 
 import { Modale } from "npm-modale-lib-react"; 
 ```

 ## :triangular_flag_on_post: Utilisation

exemple d'utilisation dans un projet :arrow_heading_down:

 1. Dans le composant où vous souhaitez afficher la modale, créez un état pour gérer sa visibilité :
 ``` 
 import React, { useState } from 'react'; 
 ```
 ``` 
 const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); 
 ```

 2. Dans votre composant, utilisez la modale en ajoutant le code suivant où vous souhaitez afficher la modale :
 ``` 
 {isConfirmationVisible && (
  <div className="overlay">
    <Modale
      showModal={isConfirmationVisible}
      closeModal={handleCloseConfirmation}
      message="Employee Created !"
    />
  </div>
)} 
```
---

:green_square: ` showModal ` :(booléen) indique si la modale doit être affichée ou non.

:yellow_square: ` closeModal ` :fonction de rappel que vous devez définir pour fermer la modale.

:blue_square: ` message ` :(chaîne de caractères) message que vous souhaitez afficher dans la modale.


--- 


-  Assurez-vous d'ajouter la logique pour gérer la visibilité de la modale en fonction de vos besoins.

---

C'est tout ! Vous avez maintenant intégré avec succès la Modale React Library dans votre projet.
 