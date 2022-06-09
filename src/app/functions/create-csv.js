const createCSV = (data) => {
    let csvBuffer = '';
    csvBuffer += `id; prenom; nom; naissance; sexe; nat; nomclub; event; cat; pb; sb; sb; infoEv\r\n`;
    const DELIM = ';';
    const LINEBREAK = '\r\n';
    for (const row of data) { 
        const csvRow =
            row.id + DELIM +
            row.prenom + DELIM +
            row.nom + DELIM +
            row.naissance + DELIM +
            row.sexe + DELIM +
            row.nat + DELIM +
            row.nomclub + DELIM +
            row.event + DELIM +
            row.cat + DELIM +
            row.pb + DELIM +
            row.sb + DELIM +
            row.sb + DELIM +
            'B' + LINEBREAK;
        csvBuffer += csvRow;
    }
    //file will be encoded in UTF-8 with BOM, hence the \ufeff character at the beginning of the file
    return "\ufeff" + csvBuffer;
}

export default createCSV;