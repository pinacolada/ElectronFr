# Comment utiliser Visual Studio Code, NodeJs, Typescript, Electron ET GitHub ? 

Ce tutoriel s'adresse à un utilisateur francophone, travaillant sous Windows. Il y a déjà plein de tutoriels en anglais, ou pour d'autres systèmes d'exploitation... Celui-ci devrait vous permettre de vous trouver tout de suite et tout le temps en terrain familier.

## Les logiciels

* Vous devez avoir [Visual Studio Code](https://code.visualstudio.com/) installé. Cet outil, créé lui-même avec Electron, est l'outil le plus pratique pour écrire et déboguer du javascript boosté.
* Vous devez avoir aussi un compte sur Github ainsi que **Github pour Windows** installé. Si nécessaire, créez le compte après installation de [Github pour Windows](https://desktop.github.com/). C'est encore un logiciel écrit lui-même avec _Electron_ ;) 
* Créez maintenant, où vous voulez sur votre ordinateur, un dossier vide auquel vous donnerez le nom de votre programme. Ce nom doit être assez court et en minuscules. Evitez aussi les caractères spéciaux. Ce dossier sera bien entendu celui que vous synchroniserez sur Github afin d'en disposer sur votre ordinateur mais aussi partout où il vous prendra l'envie de modifier votre programme. Vous pourrez l'utiliser en équipe pour faire avancer votre projet.

## Tout ce que vous avez toujours supposé et que personne ne vous a dit :

L'utilisation d'_Electron_ avec _Typescript_ n'est pas simple. L'utilisation de _Typescript_ dans _Visual Studio Code_ n'est pas simple non plus. Nous allons nous compliquer la vie en ajoutant la gestion de notre dossier de travail sur _Github_. Nous voulons absolument l'**autocomplétion** de nos classes et des packages en _Typescript_, ainsi que l'**IntelliSence**. Sinon quelle utilité de passer par tous ces logiciels ? Voyons donc comment procéder.

# Créer le fichier __package.json__

Attention, nous n'allons pratiquement rien créer à la main car cette étape permet de définir le projet et d'informer les différents logiciels de ce qui sera la configuration du programme : elle est donc importante. 

On y donne _un nom_ au programme, _une description_, un _numéro de version_. Et tout ceci au format _json_. 
On ouvre _Visual Studio Code_, on ouvre le dossier choisi puis on affiche l'invite de commande. Nous allons souvent l'utiliser.
Notre fichier sera créé de façon interactive. Si on a ouvert d'abord le dossier de travail, l'invite de commande indique le bon chemin. 
Sinon, il faut se placer dessus à l'aide de la commande cd "dossier du programme". Je mets des guillemets au cas où il y a des espaces dans le nom du dossier. 
On crée le fichier _package.json_ à l'aide de la commande suivante : `npm init`
 
 Une suite de questions (simples) auxquelles on répond et le notre fichier apparaitra dans le dossier. 
 Il ne faut pas mettre de guillemets. On peut **accepter la suggestion** mise entre parenthèses en tapant Entrée. 
 
 Voici les questions posées :
 - **package name** (nom proposé) : mettre le nom et éviter les majuscules
 - **version** (version proposée) : un numéro de version en 3 parties séparées par des points
 - **description** : Pas de proposition... Tapez un texte descriptif en une ligne ou deux du programme.
 - **entry point** (index.js) : j'ai répondu **main.js** car Avec _Electron_ le fichier central est un fichier nommé _main.js_
 - **test command** : J'ai répondu **electron index.html** (Je veux qu'à chaque test Electron affiche dans son interface mon fichier  _index.html_
 - **git repository** : le répertoire proposé par défaut est celui dans lequel je me trouve. C'est donc le bon !
 - **keywords** : ma réponse est Tutoriel Electron Typescript Github HSH, sans guillemets, avec juste des espaces entre les mots.
 - **author** : pina34colada
 - **licence** (ISC) : La licence proposée par défaut. J'accepte la suggestion : Je veux exposer mon oeuvre au monde entier sans contraintes.

Question finale : **Is this ok ?** (yes) Bah devinez quoi ? J'ai répondu **yes**.

Le fichier **package.json** est alors créé et j'y retrouve tout ce qui m'a été demandé.

# Installer _NodeJs_ comme dépendance

Est-ce bien utile ? Nous avons NodeJs déjà installé, globalement, sur l'ordinateur. Pourquoi le réinstaller localement ? 
Eh bien _Visual Studio Code_ nous informera sur les modules présents dans le dossier **node_modules** : il n'ira pas chercher ailleurs les informations pour nous aider à la saisie. il y a sans doute une commande qui lui permettrait de le faire... (à chercher)
Exécuter la commande suivante :

`npm install node -D`

# Installer _Electron_ comme dépendance

Une commande dans _Visual Studio Code_ permet d'utiliser _Electron_ dans le dossier en cours. Il faut toujours vérifier que vous êtes dans le bon dossier car tout se passera dedans. Ensuite, il faut simplement taper la commande :

`npm install electron -D`.

Après 21.7 secondes (chez moi) et plein de lignes étranges, vous verrez s'afficher, ce qui est rassurant, `npm info ok`.

# Installer _Typescript_ comme dépendance

Pour installer _Typescript_ il faut utiliser la même commande. On vérifie qu'on est toujours dans le dossier de travail, puis on tape la commande :

`npm install typescript -D`. 

Durée de l'installation : 2.62 secondes... Oui, ça va vite. 

Et la fameuse ligne d'information `npm info ok` vous prouvera que tout s'est bien passé.

Nous venons d'installer 3 _dépendances_ dans notre projet (_package_) et cela se voit dans le fichier **package.json**.
Il s'y est ajouté maintenant ceci : 
```json
  "dependencies": {
    "electron": "^1.7.9",
    "typescript": "^2.6.2"
  }
```  
La version installée au moment où j'écris ces lignes est la **2.6.2** pour typescript et la **1.7.9** pour Electron.

Dans _Visual Studio Code_, le package est donc modifié automatiquement par **npm** quand on fait une installation, afin de correspondre aux dernières modifications (addition ou suppression de module). 
Il est donc important que le fichier **package.json** soit créé _avant_ les autres. 

# Récapitulatif 

* Créer le fichier **package.json** à l'aide de la commande `npm init`
Installer ensuite les trois programmes suivants avec l'option **-D** (un tiret collé à la lettre d):
* le serveur de code **nodejs** à l'aide de la commande `npm install node -D`
* le créateur d'application **electron** à l'aide de la commande `npm install electron -D`
* le langage **typescript**  à l'aide de la commande `npm install typescript -D
`.
Installer **comme dépendance** (avec l'option **-d**) signifie installer des packages qui seront présents à la conception mais qui seront retirés du package à la diffusion. Cela ne grossit donc que temporairement votre dossier et vous permet de bénéficier de toute la gestion de l'**IntelliSence** et de l'**autocomplétion** qui nous intéressent tant. Plus besoin de mémoriser une commande et ses paramètres. Le logiciel nous proposera l'accès à toutes les signatures de fonctions.

C'était facile, non ? Et, petite remarque : tout ce que nous avons installé avec la commande **npm** peut se désinstaller avec la même commande et le mot-clé **uninstall**.
Pour le tester, faisons le chemin à l'envers :

`npm uninstall electron
npm uninstall typescript`

et regardez ce qui se passe dans le fichier **package.json** ainsi que dans le dossier **node_modules** de votre programme. 

Vous pouvez donc maintenant installer dans votre programme les modules intéressants, les tester et vous en servir à votre guise. Si vous n'en voulez plus, vous pourrez les désinstaller à volonté. Testons-le avec les commandes suivantes :

```javascript 
import fs = require("fs");
import http = require("http");
import {BrowserWindow, app} from "electron"
```
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
* **Souligné** : Deux traits __soulignés bas__ soulignaient (avant) le texte __mis en valeur__. Maintenant il est juste en gras.
## Liens et images
* Pour créer un lien on écrit le texte du lien entre crochets droits et l'url entre parenthèses juste après. Le _title_ facultatif est dans les parenthèses, séparé du lien par un espace.
* Pour afficher une image, l'ordre est différent : on met d'abord un point d'exclamation, puis le texte de remplacement entre crochets, l'url et le title entre parenthèses enfin. 

![Couverture de l'album de Serge Gainsbourg](http://pina34colada.free.fr/img/gainsbourg.jpg).
