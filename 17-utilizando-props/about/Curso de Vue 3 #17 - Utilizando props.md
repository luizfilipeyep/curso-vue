# Curso de Vue 3: #17 - Utilizando props
Neste vídeo você vai ver como utilizar as props no #Vue, props é um recurso para passar dado do componente pai para o componente filho, podendo alterar como cada componente é executado de forma individual.

------



* **Os componentes do Vue podem receber dados**, e este recurso é chamado de **props**;
* As props podem ser passadas por **valores do data**, como também podemos **inserir diretamente** eles;
* **Precisamos declarar as propriedades recebidas pelos componentes**, em um array ou objeto chamado props;

## Criando props
Para utiliar props primeiro precisamos setar o dado que vai ser passado de um componente para outro:
No template:

~~~vue
    <Info compEmail="joao@email.com"/>
~~~

Agora dentro do componente Info, na parte script vamos criar um objeto chamado props e nele colocamos a nossa informação junto com seu tipo:
~~~vue
<script>
    export default {
        props: {
            compEmail: String
        }
    }
</script>
~~~

E para utilizar basta usar a notação do Vue para mostrar no <template>:
~~~vue
    <p>{{ compEmail }}</p>
~~~

## Utilizando prosp com v-bind
Para utilizar props com v-bind basta usá-lo na propriedade criada no componente:
~~~vue
    <template>
        <Info :compEmail="email"/> // ou v-bind:compEmail="email"
    </template>

    <script>
        export default {
            data() {
                email: joao@email.com
            }
        }
    </script>
~~~

Quando passamos um prop do tipo boolean pode ocorrer um erro, então na propriedade do componente utilizamos v-bind.

## Props em formato de array
Não é necessário referenciar o tipo
~~~vue
<script>
    export default {
        props: ["compEmail"]
    }
</script>
~~~