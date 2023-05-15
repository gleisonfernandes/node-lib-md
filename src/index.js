import fs from 'fs';
import chalk from 'chalk';

const log = console.log;

const extraiLinks = (texto) => {
    const regex = /\[([^[\]]*?)\]\((https?[^\s?]*)\)/gm;
    const captura = [...texto.matchAll(regex)];
    const resultados = captura.map(captura => ({[captura[1]]: [captura[2]]}));
    return resultados.length !== 0 ? resultados : 'Não há Link do arquivo';
}

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = async (caminhoDoArquivo) => {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    }
    catch(erro){
        trataErro(erro);
    }
}

export default pegaArquivo;
