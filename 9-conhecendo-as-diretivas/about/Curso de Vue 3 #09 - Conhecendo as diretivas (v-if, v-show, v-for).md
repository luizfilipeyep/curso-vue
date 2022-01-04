# Curso de Vue 3: #09 - Conhecendo as diretivas (v-if, v-show, v-for)
Neste vídeo você vai aprender diretivas, um recurso fundamental do #Vue para inserir condições lógicas na aplicação ou também imprimir uma lista de dados para a view do usuário, temos diversas diretivas no framework e vamos aprender algumas delas nesta aula.

------



* As **diretivas** em Vue são muitas;

* Por exemplo: **v-if**;

* Pode mudar a exibição de uma parte do layout, baseada em uma condição;

* **As diretivas são essenciais** para uma aplicação dinâmica;

* Podemos alterar a lógica pelos valores inseridos em **data**;

  

## If
Este programa só mostra o páragrafo se a condição for true
~~~vue
<template>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p>Utilizo as seguintes tecnologias: </p>
    <ul>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>Python</li>
    </ul>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: true
            }
        }
    }
</script>
~~~

## Else
Deve ser colocado após o v-if no código pois trabalham juntos
~~~vue
    <p v-else>Estou em busca de novas oportunidades</p>
~~~

## Show
O v-show mostra se for true
~~~vue
    <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
~~~