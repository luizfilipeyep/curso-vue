# Curso de Vue 3: #02 - Como instalar o Vue (2021)

Neste vídeo você vai aprender como isntalar o [#Vue](https://www.youtube.com/hashtag/vue) utilizando o CDN, vamos também explorar algumas funcionalidades básicas do framework com esta abordagem.

------



## Começando com o Vue

O Vue pode ser executado de duas maneiras: CLI e CDN

A maneira CDN é mais fácil e simples, por isso vamos usar ela para começar. Ela é uma versão limitada do Vue que é usada para projetos mais básicos, ela não precisa ser instalada. Para usá-la, basta colocar o link do script encontrado no site, no documento HTML.

A primeira coisa a fazer é cria uma div para execução do Vue no HTML:

~~~html
<div id="app"></div>
~~~

Agora configurar o documento JS para o Vue:

~~~javascript
const MyNameApp = {
    data() { // exporta dados pro front-end da aplicação
        return {
            name: 'Matheus', 
            age: 18
        }
    }
}

Vue.createApp(MyNameApp).mount('#app') // cria o app
~~~



## Integração HTML-VUE

~~~html
<div id="app">
    <p>O meu nome é {{name}} e tenho {{age}} anos.</p>
</div>
~~~

