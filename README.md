
# 🚗 Sistema de Locadora de Veículos (Vehicle Rental System)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 📖 Sobre o Projeto
Este é um sistema desenvolvido em **TypeScript** que simula a lógica de negócios e as operações de uma locadora de veículos. O objetivo principal do projeto é aplicar os pilares da **Programação Orientada a Objetos (POO)** para criar um código limpo, escalável e de fácil manutenção, gerenciando a disponibilidade de frota e o cálculo dinâmico de contratos de aluguel.

## ✨ Principais Funcionalidades
- **Gestão de Frota:** Cadastro e listagem de diferentes tipos de veículos (Carros, Motos e Caminhões).
- **Controle de Disponibilidade:** Bloqueio automático de veículos que já estão alugados, impedindo reservas duplicadas.
- **Precificação Dinâmica:** Cálculo automático do valor final do aluguel, variando conforme a categoria do veículo (ex: caminhões possuem taxas baseadas na capacidade de carga, enquanto carros possuem diárias fixas).

## 🛠️ Tecnologias Utilizadas
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- ts-node (para execução)

## 🧠 Conceitos de POO Aplicados
- **Tipagem Estática:** Uso de *Interfaces*, *Enums* (para tipos de combustível e categorias de CNH) e *Union Types*.
- **Abstração e Herança:** Criação de uma classe base `Veiculo` que serve de molde para subclasses específicas (`Carro`, `Moto`, `Caminhao`).
- **Polimorfismo:** Sobrescrita do método de cálculo de aluguel, permitindo que cada tipo de veículo aplique sua própria regra de precificação.
- **Encapsulamento:** Proteção do estado interno das instâncias (como o status de "alugado" ou "disponível"), garantindo que as alterações ocorram apenas através de métodos autorizados.
