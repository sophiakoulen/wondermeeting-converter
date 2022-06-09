const req = async (id, gender) => {
    return fetch(`http://localhost/Attribution-Dossards/?id=${id}&gender=${gender}`).then(
        resp => resp.json()
    )
}

export const attribuerDossards = async (data) => {
    for(const row of data){
        req(row.id, row.sexe).then(
            result => console.log(result)
        )
    }
}