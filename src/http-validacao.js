const extraiLinks = (arrLinks) =>{
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

const checaStatus = async (listaURLs) =>{
    const arrStatus = await Promise
    .all(
        listaURLs.map(async(url) => {
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
            } catch (erro) {
                return manejaErros(erro);
            }
        })
    )
    return arrStatus;
}

const manejaErros = (erro) => {
    if(erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado';
    }else{
        return 'Ocorreu algum erro';
    }
}

const listaValidada = async (listaDelinks) =>{
    const links = extraiLinks(listaDelinks);
    const status = await checaStatus(links);

    return listaDelinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

export default listaValidada;