import createLink from "./create-link";

const populateButton = (btnElt, filename, buffer) => {
    const link = createLink(`${filename}.csv`, 'text/csv', 'utf-8', buffer);
    link.innerText = `Download ${filename}.csv`;

    btnElt.innerHTML = '';
    btnElt.appendChild(link);
}

export default populateButton;