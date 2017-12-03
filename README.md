# Comment utiliser Visual Studio Code, NodeJs, Typescript, Electron ET GitHub ? 

Ce tutoriel s'adresse à un utilisateur français, travaillant sous Windows. Il y a plein de tutoriels en anglais ou pour d'autres systèmes d'exploitation... Ici, vous devez vous trouver tout de suite et tout le temps en terrain familier. 
Vous devez avoir [Visual Studio Code](https://code.visualstudio.com/) installé. Vous créez où vous voulez un dossier vide auquel vous donnez le nom de votre programme. Ce nom doit être assez court et écrit en minuscules (Vous comprendrez vite pourquoi). Ce dossier sera bien entendu celui que vous modifierez sur Github et sur votre ordinateur en même temps.
Vous devez avoir un compte sur Github ainsi que **Github pour Windows** installé. Si nécessaire, créez le compte après installation de [Github pour Windows](https://desktop.github.com/). C'est un logiciel écrit lui-même avec Electron ;) 

## Tout ce que vous avez toujours supposé et que personne ne vous a dit :

L'utilisation d'Electron avec Typescript n'est pas simple. L'utilisation de Typescript dans Visual Studio Code n'est pas simple non plus. Nous allons nous compliquer la vie en ajoutant la gestion de notre dossier de travail sur Github. Nous pourrons ainsi travailler partout sur notre programme, et avec notre langage favori car, mine de rien, ces outils ont été faits pour fonctionner ensemble. Voyons donc comment les utiliser.

# Créer le fichier __package.json__

Attention, nous n'allons pas le créer à la main. Cette étape est importante. On y donne un nom au programme, une description, un numéro de version. Et tout ceci au format **json**. Notre fichier sera créé de façon interactive, à l'aide de la commande suivante dans le dossier de référence : **npm init**
 
 Une suite de questions (simples et logiques) auxquelles on répond et le fichier apparait dans le dossier ! 
 Il ne faut pas mettre de guillemets. Voici les questions posées :
 - package name (nom attendu) : mettre le nom et éviter les majuscules
 - version (version attendue) : un numéro de version en 3 parties séparées par des points
 - description : taper un texte descriptif du programme
 - entry point (index.js) : j'ai répondu index.js. Avec Electron ? Chercher l'utilité de cet index.js
 - test command : J'ai répondu electron index.html (electron affichera simplement ma page html)
 - git repository : le répertoire proposé par défaut est le bon !
 - keywords : ma réponse est Tutoriel Electron Typescript Github hsh avec juste des espaces entre les mots.
 - author : pina34colada
 - licence (ISC) : C'est la licence par défaut : Tout public.
 
Question finale : Is this ok? (yes) Bah devinez quoi ? J'ai répondu __yes__.

Le fichier **package.json** sera automatiquement créé maintenant.

# Syntaxe d'un fichier .md 
 
Le fichier readme.md est un fichier spécial qui se trouve à la racine du package dans l'espace github créé. Ce fichier descriptif est celui que vous utilisez pour décrire ce que vous faites. C'est donc un fichier important... 

Comme nous l'avons dit, c'est un [fichier Markdown](https://fr.wikipedia.org/wiki/Markdown) avec l'extension **.md** correspondante. Ce type de fichier dispose d'un balisage facile à mémoriser et qui s'adapte au texte normal. 
 
Une puce ? C'est juste une étoile en début de ligne, par exemple. On crée très facilement une **liste à puces** facilement ainsi. On peut indenter les listes à puces les unes dans les autres. Il suffit de mettre un nombre constant d'espaces pour créer ces indentations. 

* Un titre de *niveau 1* est marqué par un dièse **#** en début de ligne. 
* Niveau 2 : 2 dièses (**##**). 
* Niveau 4 : **####**. Oui, c'est facile.

## Balises de style 
* **Gras** : Deux étoiles. Ceci est en **gras**
* **Italiques** : Une étoile ou un souligné bas : ceci est en *italiques*, et ceci _aussi_ alors que ceci n'est qu'en **gras**.
* **Souligné** : Deux traits __soulignés bas__ soulignaient (avant) le texte __mis en valeur__.
## Liens et images
* Pour créer un lien on écrit le texte du lien entre crochets droits et l'url entre parenthèses juste après. Le _title_ facultatif est dans les parenthèses, séparé du lien par un espace.
* Pour afficher une image, l'ordre est différent : on met d'abord un point d'exclamation, puis le texte de remplacement entre crochets, l'url et le title entre parenthèses enfin. 

![Couverture de l'album de Serge Gainsbourg](http://pina34colada.free.fr/img/gainsbourg.jpg).

# Installer Electron 

Une commande dans Visual Studio Code permet d'utiliser Electron dans le dossier en cours. Il faut toujours vérifier que vous êtes dans le bon dossier car tout se passera dedans. Ensuite, il faut simplement taper la commande
`npm install electron -D`.
Après 21.7 secondes (chez moi) et plein de lignes étranges, vous verrez s'afficher `npm info ok`.

# Installer Typescript

Pour installer typescript il faut utiliser la même comande. On vérifie qu'on est toujours dans le dossier de travail, puis on tape la commande 
`npm install typescript -D`. 

Durée de l'installation : 2.62 secondes... Oui, ça va vite. 
Et la fameuse ligne d'information `npm info ok` vous prouvera que tout s'est bien passé.
La version installée est la **2.6.2** pour typescript et la **1.7.9** pour Electron.
Nous venons d'installer 2 _dépendances_ dans notre projet (_package_) et cela se voit dans le fichier **package.json**.
Il s'y est ajouté maintenant ceci : 
```json
  "dependencies": {
    "electron": "^1.7.9",
    "typescript": "^2.6.2"
  }
```  
Dans Visual Studio Code (que je nommerai maintenant simplement _VSCode_), le package est modifié automatiquement par **npm** quand on fait une installation, afin de correspondre aux dernières modifications. Il est donc important que le fichier **package.json** soit créé _avant_ les autres. 

# Récapitulatif 

* [*] Créer le fichier **package.json** à l'aide de la commande `npm init`
Installer ensuite _comme dépendances_ (donc avec l'option -D):
* [*] Installer **nodejs** à l'aide de la commande `npm install node -D`
* [*] Installer le créateur d'application **electron** à l'aide de la commande `npm install electron -D`
* [*] Installer le langage **typescript**  à l'aide de la commande `npm install typescript -D`.
Installer _comme dépendance_ signifie installer des logiciels qui seront dans le dossier à la création mais qui seront retirés du package créé pour être diffusé.

C'était facile, non ? Normalement, c'est aussi suffisant. _Vous pourriez commencer à coder_.
En réalité, il nous faut aussi nous simplifier la vie en tant que codeur. Il y a d'autres choses à modifier.