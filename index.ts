import PromptSync from "prompt-sync" //versão mais nova do promptSync

const prompt = PromptSync()

const nome = prompt("Digite o seu nome: ")

console.log(`Olá ${nome}`)

const numero = prompt("Digite o valor: ")

function calcularArea(lado: number): number{
    return lado * lado
}
calcularArea(Number(numero))
type situacao = 'aprovado' | 'reprovado' | 'reprovado'
interface aluno{
    nome: string
    mediaFinal: number
    situacao: situacao
}
const aluno: aluno ={
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"

}
console.log("🚀 ~ file: index.ts:27 ~ aluno:", aluno)

const notas = [1,2,3,4,4] 
