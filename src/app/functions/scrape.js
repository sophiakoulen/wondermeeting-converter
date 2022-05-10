const cheerio = require('cheerio');
/*cheerio is a webscraping library and works with a similar syntax to JQuery
it allows to extract elements from a html document */
/* more info on https://cheerio.js.org/ */


/*this function will extract relevant data from an html string
it will return an array of objects with structure:  
{
    lic: [string],
    prenom: [string],
    nom: [string],
    naissance: [string],
    sexe: [string],
    nomrel: [string],
    nat: [string],
    nomclub: [string],
    event: [string],
    cat: [string],
    pb: [string],
    sb: [string]

}
Each object represents a row.*/


const scrape = (html) => {
    const $ = cheerio.load(html);
    const data = [];
    $('tr').each((i, elt) => {
        if(i != 0){
            let arr = [];
            $(elt).find('td').each((j, td) => arr.push($(td).text().replace(/\s\s+/g, '')));
            let obj = {
                lic: arr[0],
                prenom: arr[1],
                nom: arr[2],
                naissance: arr[3],
                sexe: arr[4],
                nomrel: arr[5],
                nat: arr[6],
                nomclub: arr[7],
                event: arr[8],
                cat: arr[9],
                pb: arr[10],
                sb: arr[11]
            }
            data.push(obj);
        }
    });
    return data;
}

export default scrape;