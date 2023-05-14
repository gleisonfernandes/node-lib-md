import fs from 'fs';
import chalk from 'chalk';

const log = console.log;

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = async (caminhoDoArquivo) => {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        log(chalk.green(texto));
    }
    catch(erro){
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md');

