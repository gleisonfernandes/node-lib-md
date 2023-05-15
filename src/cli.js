import fs from "fs";
import chalk from "chalk";
import pegaArquivo from "./index.js";


const caminho = process.argv;

const imprimeLista = (resultado, nomeDoArquivo) => {
    console.log(chalk.yellow('Lista de Links'), resultado);
}

const processaTexto = async (argumentos) =>{
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if(erro.code === 'ENOENT'){
            console.log(`Arquivo ou diretório não existe`);
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista);
        })
    }
}

processaTexto(caminho);
