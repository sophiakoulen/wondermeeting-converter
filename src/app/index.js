import '../style.css';

import scrape from "./functions/scrape";
import createCSV from "./functions/create-csv";
import populateButton from './functions/populate-button';

//due to CORS issues, requesting to https://www.atleticageneve.com/seltec2.asp isn't possible yet
//so i copied the html into a local file.
//this issue has to be fixed on the server side, by enabling script requests with
//the 'Access-Control-Allow-Origin "*"' header
const url = `wondermeeting-fake-data.html`;

fetch(url).then(
    resp => resp.text()
).then(
    html => {
        //generating the csv file content
        const data = scrape(html);
        const buffer = createCSV(data);

        //targetting needed elements in the DOM
        const btnDownloadElt = document.querySelector('#download-button');
        const btnGenerateElt = document.querySelector('#generator-button');
        const inputElt = document.querySelector('#filename');
        const dataElt = document.querySelector('#data');

        //output data in the document for visualisation purposes
        dataElt.innerText = buffer;

        //populating the download button with a download link to the generated file
        populateButton(btnDownloadElt, inputElt.value, buffer);

        //modifying the filename and the button if needed
        const handleClick = (e) => {
            e.preventDefault();
            populateButton(btnDownloadElt, inputElt.value, buffer);
        }
        btnGenerateElt.addEventListener('click', handleClick);
    }
)