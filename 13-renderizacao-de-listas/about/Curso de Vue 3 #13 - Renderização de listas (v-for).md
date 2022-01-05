# Curso de Vue 3: #13 - Renderização de listas (v-for)
Neste vídeo você vai aprender a renderizar listas, ou seja, imprimir arrays no HTML com #Vue, vamos utilizar uma diretiva bem famosa: a v-for, que faz um loop em um array, que pode também ser um array de objetos.

------



* As listas (**arrays**) serão renderizadas por **diretivas**;
* Utilizaremos **v-for** para isso;
* O dado pode vir de **data**, como um array;
* E cada item pode ser impresso **junto do HTML**;

## Renderizando array em forma de lista
Para utilizar este recurso vamos primeiro criar um array em data:
~~~vue
data () {
    return {
        array: ["item1", "item2", "item3"]
    }
}
~~~

Agora vamos renderizar na aplicação:
~~~vue
    <ul v-for="itens in array"> // obtem o item 'itens' no array 'array'
        <li>{{itens}}</li> // agora lista todos os itens em 'array' utilizando a tag <li> como base
    </ul>
~~~

Note que isso vai gerar um erro pois estamos repetindo a tag errada, vários <ul>. Vamos resolver este erro:
~~~vue
    <ul
        <li v-for="itens in array">{{itens}}</li>
    </ul>
~~~

Agora vemos outro erro pois o Vue precisa que cada elemendo seja referenciado por um atributo chamado key:
~~~vue
    <li v-for="(itens, index) in array" v-bind:key="index">{{intens}}</li>
~~~

## Renderizando array em forma de objeto
Primeiro criamos o objeto:
~~~vue
    frontend_technologies: [
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'Vue'}
    ]
~~~

E agora renderizamos:
~~~vue
    <ul>
        <li v-for="technology in frontend_technologies" :key="technology.id">{{technology.language}}</li>
    </ul>
~~~