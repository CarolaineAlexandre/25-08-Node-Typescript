"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync")); //versão mais nova do promptSync
const prompt = (0, prompt_sync_1.default)();
const nome = prompt("Digite o seu nome: ");
console.log(`Olá ${nome}`);
const numero = prompt("Digite o valor: ");
function calcularArea(lado) {
    return lado * lado;
}
calcularArea(Number(numero));
const aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"
};
