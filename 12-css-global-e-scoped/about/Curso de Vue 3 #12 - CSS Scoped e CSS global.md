# Curso de Vue 3: #12 - CSS Scoped e CSS global
Neste vídeo você vai aprender a como estilizar a sua aplicação em #Vue, utilizando os dois principais recursos: CSS Scoped (para componentes) e CSS global (para toda a aplicação)

------



* O **CSS** no Vue pode ser dividido em duas categorias:
* **Global:** Onde definimos no App, por exemplo, e se aplica a todos os elementos;
* **Scoped:** Onde cada componente pode ter se estilo, deixando mais fácil de personalizar os elementos;
* Geralmente utilizamos o scoped para estilizar os componentes individualmente;

Para criarmos estilos em nossa aplicação conhecemos agora outra área chamada style em nosso documento, nela podemos utilizar qualquer regra CSS
~~~vue
<style>
    a {
        color: red;
    }
</style>
~~~

## CSS Global
Aqui utilizamos para fazer estilização de forma global na aplicação, funciona modificando todos os components

## CSS Scoped
Este utilizamos para fazer modificações específicas em cada componente
~~~vue
<style scoped>
    div {
        background-color: #111;
    }
</style>
~~~