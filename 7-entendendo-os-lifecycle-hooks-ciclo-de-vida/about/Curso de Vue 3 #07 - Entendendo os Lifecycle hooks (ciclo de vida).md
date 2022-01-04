# Curso de Vue 3: #07 - Entendendo os Lifecycle hooks (ciclo de vida)

Neste vídeo você vai aprender sobre os life cycle hooks, um recurso do #Vue que permite interagir com a aplicação em diversos pontos do ciclo de vida dela, por exemplo: quando um componente é criado.

------



* Os **Lyfe Cycle Hooks** são eventos que podem ser ativados em determinadas partes da execução do programa;

* Exemplo: **created**;

* Executa o código a partir do momento que o componente é criado;

* Estes gatilhos são interessantes para alterar a aplicação em diversas etapas diferentes;

  

## Created
É um LifeCycle Hook executado depois da criação do componente, é colocado dentro do export default
~~~vue
    created() {
        this.nome = "Matheus"
    }
~~~

## Mounted
~~~vue
    mounted() {
        this.nome = "Pedro"
    }
~~~

~~~vue
created() {
    setTimeout(() => {
        this.nome = "Matheus"
    }, 1000)    
},
mounted() {
    setTimeout(() => {
        this.nome = "Pedro"
    }, 2000)
}
~~~