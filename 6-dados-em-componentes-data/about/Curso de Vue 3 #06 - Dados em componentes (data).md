# Curso de Vue 3: #06 - Dados em componentes (data)

Neste vídeo você vai aprender a manusear dados em componentes, que ficam a cargo da chave data. Este é também um recurso fundamental para o desenvolvimento de aplicações em #Vue.

------



* Os componentes podem conter dados;
* Podemos **inicializar já com algum valor** e também modificar durante a execução do programa;
* Os dados ficam em uma função chamada **data**;
* Esta função deve retornar os dados em **formato de objeto**;

## Adicionando dados à um componente
Para começar a adicionar dados à um componente no Vue, dentro do componentes, em script, dentro do export default vamos criar a função data() e dentro dele o retorno de dados:
~~~vue
data() {
  return {
    nome: "Matheus"
  }
}
~~~

E para utilizar vamos usar a notação do Vue {{ }} na área template
~~~vue
<template>
  <p>Meu nome é {{ nome }}</p>
</template>
~~~