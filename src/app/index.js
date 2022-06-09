import '../style.css';

import scrape from "./functions/scrape";
import createCSV from "./functions/create-csv";
import populateButton from './functions/populate-button';
import { attribuerDossards } from './functions/attribuer-dossards';

const url = `https://www.atleticageneve.com/seltec2.asp`;

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