# Curso de Vue 3: #18 - Emit
Neste vídeo você vai aprender em #Vue, como fazer a comunicação de um componente filho para o pai, podendo executar métodos e também realizar outras ações, vamos utilizar o $emit.

------



* Utilizando o **$emit** é possível ouvir um evento de um componente filho em um componente pai;
* Com isso, **podemos ativar comportamentos (como métodos)** no componente pai;
* **O evento deve ser registrado** no componente;
* E é preciso definir o que será feito com a ativação do evento na chamada do componente;

## Criando um Emit
No componente filho:
~~~vue
<template>
    <div>
        <button @click="$emit('mudarImagem')">Trocar imagem de perfil</button> // utilizamos esta sintaxe para executar um emit
    </div>
</template>

<script> 
export default {
    name: 'MudarImagem',
    emits: ["mudarImagem"] // aqui referenciamos os emits
}
</script>
~~~

No componente pai:
~~~vue
<template>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem" /> // chamamos o emit mudarImagem e vamos utilizar o método trocarImagem
</template>

<script>
    import MudarImagem from './MudarImagem.vue' // importamos o componente filho

    export default {
        name: 'Picture',
        components: {
            MudarImagem // importamos o componente filho
        },
        data() {
            return {
                avatar: "/img/avatar.png",
                descricao: "Matheus Battisti"
            }
        },
        methods: {
            trocarImagem() {
                this.avatar = "/img/avatar2.png"
            }
        }
    }
</script>
~~~