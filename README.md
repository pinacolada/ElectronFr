# Comment utiliser Visual Studio Code, NodeJs, Typescript, Electron ET GitHub ? 

Ce tutoriel s'adresse à un utilisateur francophone, travaillant sous Windows. Il y a déjà plein de tutoriels en anglais, ou pour d'autres systèmes d'exploitation... Celui-ci devrait vous permettre de vous trouver tout de suite et tout le temps en terrain familier.

## Les logiciels

* Vous devez avoir [Visual Studio Code](https://code.visualstudio.com/) installé. Cet outil, créé lui-même avec *Electron*, est l'outil le plus pratique pour écrire et déboguer du javascript boosté.
* Vous devez avoir aussi un compte sur Github ainsi que [Github pour Windows](https://desktop.github.com/) installé. Si nécessaire, créez le compte après installation de [Github pour Windows](https://desktop.github.com/). C'est encore un logiciel écrit lui-même avec *Electron* ;) 
* Créez maintenant, où vous voulez sur votre ordinateur, un dossier vide auquel vous donnerez le nom de votre programme. Ce nom doit être assez court et en minuscules. Evitez aussi les caractères spéciaux. Ce dossier sera bien entendu celui que vous synchroniserez sur Github afin d'en disposer sur votre ordinateur mais aussi partout où il vous prendra l'envie de modifier votre programme. Vous pourrez l'utiliser en équipe pour faire avancer votre projet.

## Tout ce que vous avez toujours supposé et que personne ne vous a dit :

L'utilisation d'**Electron** avec **Typescript** n'est pas simple. L'utilisation de **Typescript** dans **Visual Studio Code** n'est pas simple non plus. Nous allons nous compliquer la vie en ajoutant la gestion de notre dossier de travail sur **Github**. Nous voulons absolument l'**autocomplétion** de nos classes et des packages en **Typescript**, ainsi que l'**IntelliSence**. Sinon quelle utilité de passer par tous ces logiciels ? Voyons donc comment procéder.

# Créer le fichier **package.json**

Attention, nous n'allons pratiquement rien créer à la main car cette étape permet de définir le projet et d'informer les différents logiciels de ce qui sera la configuration du programme : elle est donc importante. 

On y donne un **nom** au programme, une **description**, un **numéro de version**. Et tout ceci au format __json__. 
On ouvre **Visual Studio Code**, on ouvre le dossier choisi puis on affiche l'invite de commande. Nous allons souvent l'utiliser.

Notre fichier sera créé de façon interactive. Si on a ouvert d'abord le dossier de travail, l'invite de commande indique le bon chemin.

Sinon, il faut se placer dessus à l'aide de la commande `cd dossierDuProgramme`. 

Mettre des guillemets autour du nom du dossier s'il comporte des espaces, ce qui n'est pas conseillé... 

La commande qui permet de créer un dossier est `md`c'est-à-dire __Make directory__.

On crée le fichier **package.json** à l'aide de la commande suivante : `npm init`
 
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

# Installer les dépendances 
Dans votre package.json, un certain nombre de modules vont être installés de façon temporaire. Ce seront les dépendances. Il peut y en avoir d'autres, mais celles que nous installons sont celles qui nous permettent de programmer.

Installer **comme dépendance** (avec l'option **-d**) signifie installer des **modules** qui seront présents à la conception mais qui seront retirés du **package** à la diffusion. Cela ne grossit donc que temporairement votre dossier et vous permet de bénéficier de toute la gestion de l'**IntelliSence** et de l'**autocomplétion** qui nous intéressent tant. Plus besoin de mémoriser une commande et ses paramètres. Le logiciel nous proposera l'accès à toutes les signatures de fonctions.
Nous parlerons un peu plus tard des **modules** et du **package**.

## Installer **NodeJs** comme dépendance

Est-ce bien utile ? Nous avons NodeJs déjà installé, globalement, sur l'ordinateur. Pourquoi le réinstaller localement ? 

Eh bien **Visual Studio Code** nous informera et utilisera l'intellisence sur les modules présents dans le dossier __node_modules__ : il n'aura pas à chercher ailleurs les informations pour nous aider à la saisie.

Exécuter la commande suivante :

`npm install node -D`

## Installer **Electron** comme dépendance

Une commande dans **Visual Studio Code** permet d'utiliser __Electron__ dans le dossier en cours. Il faut toujours vérifier que vous êtes dans le bon dossier car tout se passera dedans. Ensuite, il faut simplement taper la commande :

`npm install electron -D`.

Après 21.7 secondes (chez moi) et plein de lignes étranges, vous verrez s'afficher, ce qui est rassurant, `npm info ok`.

## Installer **Typescript** comme dépendance

Pour installer _Typescript_ il faut utiliser la même commande. On vérifie qu'on est toujours dans le dossier de travail, puis on tape la commande :

`npm install typescript -D`. 

Durée de l'installation : 2.62 secondes... Oui, ça va vite. 

Et la fameuse ligne d'information `npm info ok` vous prouvera que tout s'est bien passé.

Nous venons d'installer 3 dépendances dans notre projet (__package__) et cela se voit dans le fichier **package.json**.
Il s'y est ajouté maintenant ceci : 
```json
  "dependencies": {
    "electron": "^1.7.9",
    "node": "^9.3.0",
    "typescript": "^2.6.2"
  }
```  
La version installée au moment où j'écris ces lignes est la **2.6.2** pour typescript et la **1.7.9** pour Electron.

Dans **Visual Studio Code**, le package est donc modifié automatiquement par **npm** quand on fait une installation, afin de correspondre aux dernières modifications (addition ou suppression de module). 

Il est donc important que le fichier **package.json** soit créé _avant_ les autres. 

C'était facile, non ? Et, petite remarque : tout ce que nous avons installé avec la commande **npm** peut se désinstaller avec la même commande et le mot-clé **uninstall**.

Pour le tester, faites le chemin à l'envers (n'oubliez pas le **-D** en fin de commande !):
```node
npm uninstall electron -d
npm uninstall typescript -d`
```
Et regardez ce qui se passe dans le fichier **package.json** ainsi que dans le dossier **node_modules** de votre programme. 
Evidemment, refaites-le dans le bon sens afin de retrouver la configuration désirée.

Vous pouvez donc maintenant installer dans votre programme les modules intéressants, les tester et vous en servir à votre guise. Si vous n'en voulez plus, vous pourrez donc les désinstaller à volonté. 

# Récapitulatif 

* Créer le fichier **package.json** à l'aide de la commande `npm init`.
* Installer ensuite les trois programmes suivants avec l'option **-D** (un tiret collé à la lettre d):
* le serveur de code **nodejs** à l'aide de la commande `npm install node -D`
* le créateur d'application **electron** à l'aide de la commande `npm install electron -D`
* le langage **typescript**  à l'aide de la commande `npm install typescript -D`
* les autres modules utiles, de la même façon.

## Notre projet

Notre projet est un **package**, c'est-à-dire un groupe de fichiers reliés par ce fichier **package.json** qui sert à le décrire et à le diffuser.
Il lui manque un certain nombre de fichiers dont nous avons parlé mais que nous n'avons pas encore créés : **main.js** ou **index.html**. Nous ne devrions pas créer main.**js** mais bien main.**ts** car le compilateur typescript devrait transformer notre **ts** (typescript) en **js** javascript. 

## Le compilateur typescript :

## Le fichier **index.html** :

Commençons par le **fichier html**, que nous allons créer à la racine de notre package, pour ne pas avoir de souci de chemin.
* Cliquez dans **VSC** sur le dossier du programme. Ce dossier doit juste avoir un sous-dossier nommé **node_modules** et un fichier nommé **package.json**.  
* Cliquez sur l'icone **Nouveau fichier** et donnez comme nom "index.html". Vous vous trouverez dans l'éditeur, en haut de la page. Il suffit de taper un **point d'exclamation** suivi de **tab** pour que le fichier soit pré-rempli.
* Je modifie le langage `lang="fr"`, le title auquel je donne le titre de mon programme et j'insère un titre de niveau 1 (balise h1) quelconque afin de tester le résultat. 

Ce fichier html ne sera pas une simple page web mais bien l'interface utilisateur de mon programme Electron. Je peux y mettre des image, des boutons, tout le css et le javascript d'une page web. Créer une application en utilisant le mde de création d'une page web traditionnelle est donc très facile.

## Le fichier **main.ts** :

```javascript 
import fs = require("fs");
import http = require("http");
import {BrowserWindow, app} from "electron"
```
# Syntaxe d'un fichier **MarkDown**

Le fichier **readme.md** est un fichier spécial qui se trouve à la racine du package dans l'espace github créé. Ce fichier descriptif est celui que vous utilisez pour décrire ce que vous faites. C'est donc un fichier important... 

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
* Pour créer un lien on écrit le texte du lien entre crochets droits et l'url entre parenthèses juste après. Le **title** facultatif est dans les parenthèses, séparé du lien par un espace.
* Pour afficher une **image**, l'ordre est différent : on met d'abord un point d'exclamation, puis le texte de remplacement entre crochets, l'url et le title entre parenthèses enfin. 

En voici un exemple :

![Couverture de l'album de Serge Gainsbourg](http://pina34colada.free.fr/img/gainsbourg.jpg).
