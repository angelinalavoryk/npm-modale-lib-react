# npm-modale-lib-react
`npm-modale-lib-react` est une librairie React qui permet d'afficher une modale de confirmation de sauvegarde de formulaire.

Pour utiliser cette librairie dans votre projet React, suivez ces étapes :

## Installation
      ` npm i npm-modale-lib-react `

Une fois l'installation terminée, la bibliothèque est prête à être utilisée dans votre projet.

## Importation

 1. Dans le composant où vous souhaitez utiliser la modale, importez la bibliothèque en haut de votre fichier :
 ``` 
 import { Modale } from "modal-react-lib-projet-14"; 
 
 ```

 ## Utilisation

exemple d'utilisation dans un projet: 

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

` showModal ` : C'est un booléen qui indique si la modale doit être affichée ou non.
` closeModal ` : C'est une fonction de rappel que vous devez définir pour fermer la modale lorsque nécessaire.
` message ` : C'est le message que vous souhaitez afficher dans la modale.


--- 


-  Assurez-vous d'ajouter la logique pour gérer la visibilité de la modale en fonction de vos besoins.

- Pour personnaliser le style de la modale, vous pouvez modifier les classes CSS dans votre projet.

- C'est tout ! Vous avez maintenant intégré avec succès la Modale React Library dans votre projet React.
 