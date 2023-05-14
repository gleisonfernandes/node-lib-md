import fs from 'fs';
import chalk from 'chalk';

const log = console.log;

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = (caminhoDoArquivo) => {
    const encoding = 'utf-8';
    fs.promises
      .readFile(caminhoDoArquivo, encoding)
      .then((texto) => log(chalk.green(texto)))
      .catch(trataErro)
}

pegaArquivo('./arquivos/texto.md');

