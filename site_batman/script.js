




const pessoa = [

    {nome: 'Ana', idade: 23},

    {nome: 'Lucas', idade: 25},

    {nome: 'Elias', idade: 27},
    
    {nome: 'Eliseu', idade: 24, profissao: {
        1: 'marceneiro',
        2: 'padeiro'
    }},
    
];

console.log(pessoa[3].profissao[1]);


    pessoa.nome = 'Anja'      //Está mudando o valor

    pessoa.nomes = 'Maria'    //Está criando uma nova chave

    console.log(pessoa);

    //Se colocar um nome que não existe ele cria uma nova chave e se for uma chave  que já existe vai alterar o valor.


    const soccer = {
        name: 'Neymar',
        idade: 22
    }

   console.log(Object.values(soccer)); //Object converte objeto em array

   //para converter a chave e o valor usa o entries
   console.log(Object.entries(soccer));

