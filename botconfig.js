/* Simula o bot digitando. (Tempo em ms) */
window.bottyping = 10

/* Nome do chat */
window.chatname = "Atendente"

/* Foto de perfil do chat */
window.chatphoto = "https://thispersondoesnotexist.com/image"

/* O bot começa mandando mensagem */
window.botstart = {
    media: {
        type: "image",
        src: 'https://assets.b9.com.br/wp-content/uploads/2015/08/kuat-gif.gif'
    },
    text:
        `**Ola td bem?**  [Google](https://www.google.com)
        ___Quer___ participar do grupo premium com mais de 1.700 apostadores, e receber as melhores dicas dos nossos especialistas, todos os dias direto no seu celular?
    `,
    awnsers: [
        {
            pattern: "sim|positivo|quero|com certeza|manda|eu quero",
            exec: function () {
                window.open('https://youtube.com')
                return 0
            }
        },
        {
            pattern: "não|deixa quieto|deixa pra [la|lá]|não quero|n|no|deixa",
            exec: function () {
                return 15
            }
        } 
    ],
}
/* Caso o usuário responda fora do script */
window.notunderstand = {
    text: "Desculpe não entendi. :("
}

/* Mensagens */
window.sentences =
    [
        {
            media: {
                type: 'image',
                src: 'https://i.stack.imgur.com/8A1zI.gif'
            },
            text:
                `Digite o número da opção desejada:
 - :arrow_right: 1) O QUE VOCÊ RECEBERÁ NO PACOTE PREMIUM MAIS COMPLETO?
 - :arrow_right: 2) QUAL VANTAGEM DE ASSINAR O NOSSO GRUPO VIP de +1.700 membros assinates
 - :arrow_right: 3) COMO SE CADASTRAR PARA PARTICIPAR DO GRUPO?
 - :arrow_right: 4) QUAIS AS OUTRAS FORMAS DE PAGAMENTO?
 - :arrow_right: 5) QUAIS OS PLANOS?`
 ,
            awnsers: [
                {
                    pattern: "1",
                    exec: function () {
                        return 1
                    }
                },
                {
                    pattern: "2",
                    exec: function () {
                        return 4
                    }
                },
                {
                    pattern: "3",
                    exec: function () {
                        return 5
                    }
                },
                {
                    pattern: "4",
                    exec: function () {
                        return 7
                    }
                },
                {
                    pattern: "5",
                    exec: function () {
                        return 11
                    }
                }
            ],
        },
        {
            text:
                `Assinando o pacote vip completo você receberá 50 a 300 dicas diariamente como:
            Bilhetes prontos (todos os dias)`,
            next: 2
        },
        {
            text:
                `
 Listas de jogos diários para:*
 
 :arrow_right: Vitórias  
 :arrow_right: Empate anula aposta  
 :arrow_right: Dupla chance  
 :arrow_right: Empate Anula Aposta  
 :arrow_right: Acima de 1.5 gols  
 :arrow_right: Acima e abaixo de 2.5 gols   
 :arrow_right: Abaixo de 3.5 gols  
 :arrow_right: Handicap Asiático  
 :arrow_right: Ambas marcam  
 :arrow_right: Gol no 1° e 2° tempo  
 :arrow_right: Escanteios (cantos)  
   
 👉 Taxa de acertos 78%`,
            next: 3
        },
        {
            text: `Quer saber mais ?`,
            awnsers: [
                {
                    pattern: "sim|positivo|quero|com certeza|manda|eu quero",
                    exec: function () {
                        return 0
                    }
                },
                {
                    pattern: "não|deixa quieto|deixa pra [la|lá]|não quero|n|no|deixa",
                    exec: function () {
                        return 15
                    }
                }
            ],
        },
        {
            text: `
Uma vez que você assina para entrar no grupo **nunca mais terá que assinar novamente por mês, ou seja, ficará recebendo dicas para o resto da vida no grupo após 1 única assinatura**  
A mensalidade é apenas no site (login) se você quiser pegar os jogos de todos os mercados (+5.000 jogos por mês).
            `,
            next: 3
        },
        {
            text:
                `👉 Passo 1
- Cadastre-se facilmente no site  clicando em GRUPO PREMIUM utilizando seu email e criando um usuário com uma senha.
- Faça o pagamento com o Pagseguro (via boleto ou cartão)`,
            next: 6
        },
        {
            text:
                `👉 Passo 2

- Depois de efetuar o pagamento você acessa sua conta com seu usuário e senha criado CLICANDO em ENTRAR NO GRUPO
- Dentro da sua conta (login) fica todas as dicas vip diariamente, só acessar e visualizar bem prático.
- Lá no seu login vai está o link para entrar direto em nosso grupo para pegar outras dicas de apostas e começar a faturar com nossa equipe`,
            next: 3
        },
        {
            text:
                `Também temos opção de pagamento via transferência bancária via Banco do Brasil, ou Paypal `,
            next: 8
        },
        {
            text: `Qual a melhor forma de pagamento pra você?`,
            next: 9
        },
        {
            text: `Se quiser fazer a assinatura via conta bancária`,
            next: 10
        },
        {
            text:
                `Banco do Brasil - Poupança
Conta 45871-6  
Agência - 0563-0  
Variação - 51  
Beneficiado - Mateus Italo Silva Cruz  
Em seguida só mandar o comprovante por aqui e está tudo ok. `,
            next: 3
        },
        {
            text:
                `💰 R$ 50.00  = Acesso para sempre ao Grupo Vip (mais de 1.700 membros) + 30 dias de acesso ao banco de dados premium com Bilhetes Prontos e Listas de jogos de todos os mercados (Parcele em até 12x)`,
            next: 12
        },
        {
            text: `💰 R$ 100.00 = Acesso para sempre ao Grupo Vip (mais de 1.700 membros) + 90 dias de acesso ao banco de dados premium com Bilhetes Prontos e Listas de jogos de todos os mercados (Parcele em até 12x)`,
            next: 13
        },
        {
            text: `💰 R$ 200.00 = Acesso para sempre ao Grupo Vip (mais de 1.700 membros) + 180 dias de acesso ao banco de dados premium com Bilhetes Prontos e Listas de jogos de todos os mercados (Parcele em até 12x)`,
            next: 14
        },
        {
            text: `💰 R$ 300.00 = Acesso para sempre ao Grupo Vip (mais de 1.700 membros) + 365 dias de acesso ao banco de dados premium com Bilhetes Prontos e Listas de jogos de todos os mercados (Parcele em até 12x)`,
            next: 3
        },
        {
            "text": "Tudo bem. se precisa estou aqui. É só chamar",
        }
    ]