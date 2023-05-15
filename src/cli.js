import chalk from "chalk";
import pegaArquivo from "./index.js";



const caminho = process.argv;

const processaTexto = async (caminho) =>{
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('Lista de Links'), resultado);
}

processaTexto(caminho);
