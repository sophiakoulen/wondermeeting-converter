const createLink = (filename, mime, encoding, buffer) => {
    const link = document.createElement('a');
    link.setAttribute('href', `data:${mime};charset=${encoding},` + encodeURIComponent(buffer));
    link.setAttribute('download', filename);
    return link;
}

export default createLink;