<template>
    <h2>Meu formulário</h2>
    <form action="" @submit="enviarFormulario($event)">
        <input type="text" v-model="name">
        <br>
        <input type="text" v-model="email">
        <br>
        <Submit/>
    </form>
</template>

<script>
    import InputText from './form/InputText.vue'
    import Submit from './form/Submit.vue'

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                name: "Matheus",
                email: "matheus@email.com"
            }
        },
        methods: {
            enviarFormulario(e) {
                e.preventDefault()

                const name = this.name;
                const email = this.email;

                console.log("Formulário Enviado!")
                console.log(`O nome é: ${name}`)
                console.log(`O email: ${email}`)

                // Ajax

                // Inserir no banco os dados
            }
        }
    }
</script>