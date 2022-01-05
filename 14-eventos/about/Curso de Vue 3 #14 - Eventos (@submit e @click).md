# Curso de Vue 3: #14 - Eventos (@submit e @click)
Neste vídeo você vai aprender sobre como utilizar eventos no #Vue, quando vamos utilizar um formulário o evento é o @submit e o @click para quando precisamos colocar eventos clicáveis em elementos, estes são só alguns dos exemplos de eventos em Vue.js!

------



* Os **eventos** são utilizados para complementar ações dos usuários com ativações de métodos;
* Temos diversos tipos de eventos em Vue, como o click: **@click**;
* Que podem ser **adicionados diretamente a elementos do HTML**;
O evento recebe um "parâmetro" que é o método que será executados;

~~~vue
    <form action="" @submit="enviarFormulario($event)">

    methods: {
        enviarFormulario(e) {
            e.preventDefault()

            console.log("Formulário Enviado!")
        }       
    }
~~~