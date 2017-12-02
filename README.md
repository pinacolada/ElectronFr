# Comment utiliser Visual Studio Code, NodeJs, Typescript, Electron ET GitHub ? 
__Tout ce que vous avez toujours voulu savoir et que personne ne vous a dit__
L'utilisation de nodejs, d'Electron avec Typescript n'est pas simple.
Par un tutoriel progressif et simple, voyons quels outils et quelles méthodes utiliser.

# Créer le fichier __package.json__
Cette étape est importante. On donne un nom au programme, une description, un numéro de version.
Tout ceci peut être fait de façon interactive, à l'aide de la commande suivante, dans le bon dossier : **npm init**
 Une suite de questions (simples et logiques) auxquelles on répond et le fichier apparait dans le dossier... 
 Il ne faut pas mettre de guillemets. Voici les questions posées :
 - package name (nom attendu) : mettre le nom et éviter les majuscules
 - version (version attendue) : un numéro de version en 3 parties séparées par des points
 - description : taper un texte descriptif du programme
 - entry point (index.js) : j'ai répondu index.js. Avec Electron ? Chercher l'utilité de cet index.js
 - test command : J'ai répondu electron . (electron suivi d'un point)
 - git repository : le répertoire proposé par défaut est le bon !
 - keywords : ma réponse est Tutoriel Electron Typescript Github hsh avec juste des espaces entre les mots.
 - author : pina34colada
 - licence (ISC) : C'est la licence par défaut : Tout public.

 # Fichier package créé à la fin de cet interrogatoire...
Question finale : Is this ok? (yes) Bah oui, j'ai répondu __yes__.
 # Syntaxe d'un fichier .md 
 C'est un fichier [Markdown](https://fr.wikipedia.org/wiki/Markdown l'article correspondant sur wikipédia) avec l'extension **.md** correspondante. 
 Une puce est juste une étoile en début de ligne. On crée une liste à puces facilement ainsi.
 Un titre de niveau 1 est un dièse (#) en début de ligne. Niveau 2 : 2 dièses(##). Niveau 4 : ####... 
## Balises de style 
* **Gras** : Deux étoiles. Ceci est en **gras**
* **Italiques** : Une étoile ou un souligné bas : ceci est en *italiques*, et ceci _aussi_ alors que ceci n'est qu'en **gras**.
* **Souligné** : Deux traits __soulignés bas__ soulignent le texte ainsi __mis en valeur__.

## Liens et images
* Pour créer un lien on écrit le texte du lien entre crochets droits et l'url entre parenthèses juste après. Le _title_ facultatif est dans les parenthèses, séparé du lien par un espace.
* Pour afficher une image, l'ordre est différent : on met d'abord un point d'exclamation, puis le texte de remplacement entre crochets, l'url et le title entre parenthèses enfin. ![Serge Gainsbourg](http://pina34colada.free.fr/img/gainsbourg.jpg Couverture de You're under arrest).

# Installer Electron 
Une commande dans Visual Studio Code permet d'utiliser Electron dans le dossier en cours.
Il faut toujours vérifier que vous êtes dans le bon dossier car tout se passera dedans.
Ensuite, il faut simplement taper la commande **npm install electron -d**.
Après 21.7 secondes (chez moi) et plein de lignes étranges, vous verrez s'afficher **nom info ok**. 