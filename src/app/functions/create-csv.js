const createCSV = (data) => {
    let csvBuffer = '';
    for (const row of data) {
        const DELIM = ';';
        const LINEBREAK = '\r\n';
        const csvRow =
            row.prenom + DELIM +
            row.nom + DELIM +
            row.naissance + DELIM +
            row.sexe + DELIM +
            row.nat + DELIM +
            row.nomclub + DELIM +
            row.event + DELIM +
            row.cat + DELIM +
            row.pb + DELIM +
            row.sb + LINEBREAK;
        csvBuffer += csvRow;
    }
    //file will be encoded in UTF-8 with BOM, hence the \ufeff character at the beginning of the file
    return "\ufeff" + csvBuffer;
}

export default createCSV;