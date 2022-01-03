# Curso de Vue 3: #05 - Criando componentes

Neste vídeo você vai conhecer um dos recursos mais utilizados do [#Vue](https://www.youtube.com/hashtag/vue) - os componentes. Estas entidades podem ser reutilizadas em todo o seu projeto e também podem manipular dados da aplicação para renderizar informações diferentes em cada situação. 

------



* É por meio de **Componentes** que podemos dividir o nosso layout em partes;
* **Cada componente tem a sua responsabilidade**, por exemplo: um componente que é uma tabela e outro que é um rodapé;
* Dividir as entidades desta maneira deixa o projeto com uma **separação de responsabilidades** maior;
* Cada um tendo seu CSS e também os dados que manipula;



## Começando com o Vue

O arquivo central do Vue é o App.vue e nele podemos começar a escrever os nossos primeiros códigos:

~~~vue
<template> // aqui fica tudo que vai ser visível em nosso app
	<h1>Olá, Mundo!</h1>
</template>

<script> 
  export default { // exporta o documento como app
    name: 'App'
  }
</script>
~~~



## Criando componentes

Para criar um componente ele precisa estar na pasta **components** com a extensão de arquivo **.vue**

A extrutura é a mesma do documento app:

~~~vue
<template> // html da aplicação
	<h1>Olá, Vue!</h1>
</template>

<script> 
  export default { // exporta o documento como app
    name: 'PrimeiroComponente'
  }
</script>
~~~

Agora precisamos importar e depois utilizar o componente no documento que queremos, no caso, o App.vue

~~~vue
<template> // aqui fica tudo que vai ser visível em nosso app
	<h1>Olá, Mundo!</h1>
	<PrimeiroComponente/> // Utiliza o componente
</template>

<script> 
  import PrimeiroComponente from './components/PrimeiroComponent.vue' // importa o componente
    
  export default { // exporta o documento como app
    name: 'App',
    components: { // indica ao vue quais componentes estão sendo usados na aplicação
      PrimeiroComponente
    }
  }
</script>
~~~

