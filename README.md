# wondermeeting-converter
This mini javascript frontend app is for generating a CSV file acceptable for Seltec TAF3 from the wondermeeting data.

*Cette mini app frontend javascript permet de convertir les données wondermeeting en fichier CSV acceptable par Seltec TAF3.*


wondermeeting link: https://www.atleticageneve.com/seltec2.asp.


**The app isn't fully functional yet, since requesting the data directly from the link isn't possible due to CORS issues.
This is a server issue. The API isn't public. It can be fixed by adding a 
```Access-Control-Allow-Origin * ```
header on the server side.**

### Overview de mon application:
![image](https://user-images.githubusercontent.com/100098656/167602639-acd45c05-7825-42fb-a6e3-81bf80d72ca6.png)

### Le fichier généré peut ensuite être ouvert par Seltec TAF3:
(on peut ensuite indiquer à quoi correspond chaque colonne)
![image](https://user-images.githubusercontent.com/100098656/167603461-c5bcf6bc-ca5d-4f49-91c4-61bbae2cc09c.png)





