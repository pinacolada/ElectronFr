# Comment utiliser Electron
L'utilisation de nodejs et d'electron n'est pas simple.
Par un tutoriel progressif et simple, voyons quels outils et quelles méthodes utiliser.
Il serait d'ailleurs intéressant de savoir si les modifications apportées dans Visual Studio Code (l'éditeur) sont directement répertoriées. Si c'est le cas, vous imaginez l'intérêt.

# Première étape : créer package.json
Cette étape est importante. On donne un nom au programme, une description, un numéro de version.
Tout ceci peut être fait de façon interactive, à l'aide de la commande suivante :
  npm init
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

 # Syntaxe d'un fichier .md (Titres, sous-titres, citations, caractères gras, etc.) 
 