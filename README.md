# wondermeeting-converter

Link for the proof of concept / *lien vers la version test*: https://wondermeeting-converter-poc.netlify.app/

## What is this?

This mini javascript frontend app is for generating a CSV file acceptable for Seltec TAF3 from the wondermeeting data.

*Cette mini app frontend javascript permet de convertir les données wondermeeting en fichier CSV acceptable par Seltec TAF3.*

wondermeeting link: https://www.atleticageneve.com/seltec2.asp.

## Why this?

The idea is to be able to generate the needed data in csv format as efficiently possible, without having to copy and paste anything into Excel.
Ideally, if additional changes need to be made to the data, we could to so with a script.

*L'idée est de pouvoir générer les données nécessaires pour le meeting le plus rapidement possible, sans devoir passer par Excel et devoir copier coller beaucoup de données. Idéallement, si des modifications doivent être faites sur les données, on pourrait également le faire avec un script.*

## images

### Overview de mon application:
![image](https://user-images.githubusercontent.com/100098656/167602639-acd45c05-7825-42fb-a6e3-81bf80d72ca6.png)

### Le fichier généré peut ensuite être ouvert par Seltec TAF3:
(on peut ensuite indiquer à quoi correspond chaque colonne)
![image](https://user-images.githubusercontent.com/100098656/167603461-c5bcf6bc-ca5d-4f49-91c4-61bbae2cc09c.png)


## About the code

This app is written in modern modular javascript compiled with webpack. The source files are in the `src/` folder and the compiled project is found in the `public/` folder.

*Cette appli est écrite en javascript modulaire moderne compilé avec webpack. Le code source est dans le dossier `src` et le projet compilé se trouve dans le dossier `public`.*

## How it works

This app is very simple.
1) request the html string via the fetch API.
2) parse it using Cheerio JS. (Cheerio JS is a webscraping library, allowing to extract data from an html string very easily)
3) extract the data we're interested in. In our case, we want every <tr> (table row) except the first (since the first is the table header).
4) create a csv buffer with the data in the right format. In this case, the separator between values is a `;` and the linebreak is a `\r\n`.
5) create a download link that allows to download the csv buffer we just created.

*Cette appli est très simple.*
1) Obtenir le code html via l'API fetch.
2) Analyser ce code avec Cheerio JS. (Cheerio JS est une librarie qui permet de faire du webscraping, donc d'extraire facilement des données à partir d'une chaîne de charactères html).
3) Extraire les données qui nous intéressent. Ici, il s'agit de tout <tr> (chaque ligne du tableau) sauf la première (car la prmière joue le rôle d'en-tête du tableau).
4) Créer une chaîne csv avec les données correctement formattées. Ici, le séparateur est le `;` et le changement de ligne est le `\r\n`.
5) Créer un lien qui permet de télécharger le fichier qu'on vient de créer.



