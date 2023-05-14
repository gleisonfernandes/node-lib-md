import fs from 'fs';
import chalk from 'chalk';

const log = console.log;

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

const pegaArquivo = (caminhoDoArquivo) => {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
        if(erro){
            trataErro(erro);
        }
        log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');

