# Curso de Vue 3: #10 - Atributos dinâmicos
Neste vídeo você vai aprender sobre como manipular os atributos das tags com #Vue, ou seja, trocar imagens de forma dinâmica ou alterar classes de elementos com o framework.

------



* Os **argumentos são valores dinâmicos** que podem ser inseridos em:

* **Diretivas:** baseados neste valores para executar um determinado comportamento;

* **Atributos:** mudar URL de linls ou src de imagens;

* Essenciais para alterar a experiência do usuário no uso da aplicação;

  

Com o atributo v-bind podemos mudar links dinâmicamente:
~~~vue
    <p>Para acessar meu portfólio <a v-bind:href="meu_link">basta clicar aqui</a></p>
~~~
~~~vue
    data() {
        return {
            meu_link: "https://google.com"
        }
    }
~~~

A forma resumida do v-bind é ':'
~~~vue
    <img :src="avatar" :alt="descricao">
~~~