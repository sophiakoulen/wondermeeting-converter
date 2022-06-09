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
                id: arr[0],
                lic: arr[1],
                prenom: arr[2],
                nom: arr[3],
                naissance: arr[4],
                sexe: arr[5],
                nomrel: arr[6],
                nat: arr[7],
                nomclub: arr[8]||'?',
                event: arr[9],
                cat: arr[10],
                pb: arr[11],
                sb: arr[12]
            }
            data.push(obj);
        }
    });
    return data;
}

export default scrape;