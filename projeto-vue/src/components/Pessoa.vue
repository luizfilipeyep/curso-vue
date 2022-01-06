<template>
    <h2>Esta é a descrição da pessoa: {{nome}}</h2>
    <Info v-bind:compEmail="email" :esta_trabalhando=false />
    <Form/>
</template>

<script>
    import Info from './Info.vue'
    import Form from './Form.vue'


    export default {
        name: 'Pessoa',
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome: "Matheus",
                email: "joao@email.com"
            }
        } 
    }
</script>