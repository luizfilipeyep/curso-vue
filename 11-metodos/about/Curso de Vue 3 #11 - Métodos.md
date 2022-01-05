# Curso de Vue 3: #11 - Métodos
Neste vídeo você vai aprender a criar métodos com #Vue, para criar comportamentos no software baseado em ações do usuário, como um click ou envio de formulário.

------



* Os **métodos** do Vue são como **funções**;
* Podemos **executá-los baseados em eventos** ou por alguma lógica da aplicação;
* Eles ficam em um objeto chama **methods**;
* Onde criamos as funções que posteriormente serão executadas;

# Click
Este método executa um função ao clicar no elemento
~~~vue
    button @click="showEmail">Mostrar email</button>
~~~

Para criar o métodos utiliza-se o objeto methods na parte de script:
~~~vue
    methods: {
        
    }
~~~