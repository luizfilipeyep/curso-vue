# Curso de Vue 3: #03 - Inputs e Data Binding

Neste vídeo você vai aprender os principais conceitos sobre data binding no [#Vue](https://www.youtube.com/hashtag/vue) e também como tratar o envio de inputs de formulários com o framework.

------



- Uma das funcionalidades mais interessantes é o **data binding**;
- Onde temos a possibilidade de **mudar em tempo real um dado**, por meio do que é recebido de um input, por exemplo;
- O Vue torna isso mais fácil ainda, **algumas linhas e pronto**;
- Vamos ver o data binding na prática!

Para utilizar o data binding é necessário primeiro fazer um formulário no HTML:

~~~html
<form id="app-form">
    <input type="text" v-model="input_name"> // v-model - forma de comunicar ao vue que quer salvar um dado em alguma parte dele
    <input type="submit" value="Enviar" v-on:click="submitForm">
</form>
~~~

Depois criar o local onde será guardado o dado no Vue:

~~~javascript
const MyNameApp = {
    data() {
        return {
            input_name: ""
        }
    }
}
~~~



## Propriedade methods

Local para escrever várias funções da aplicação:

~~~javascript
const MyNameApp = {
    data() {
        return {
            input_name: ""
        }
    },
    methods: {
        // funções da aplicação
    }
}
~~~

~~~javascript
methods: {
        submitForm(e) {
            e.preventDefault() // evita que os dados vão para o servidor
            console.log(input_name) // mostra no console o valor de input_name
            this.name = this.input_name // atribue o valor de input_name à name
        }
    }
~~~

