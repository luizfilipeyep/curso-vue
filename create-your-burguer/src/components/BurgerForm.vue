<template>
    <p>Componente de mensagem</p>
    <div class="form-container">
        <form id="burger-form" @submit="createBurger">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
            
            <div class="input-container">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                </select>
            </div>
            
            <div class="input-container">
                <label for="carne">Escolha a carne do seu Burger:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione o tipo de carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                </select>
            </div>

            <div id="opcionais-container" class="input-container">
                <label for="opcionais-title">Selecione os opcionais:</label>
                <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
                    <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{ opcional.tipo }}</span>
                </div>
            </div>

            <div class="input-container">
                <input type="submit" class="submit-btn" value="Criar meu Burger!">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'BurgerForm',
        data() {
            return {
                paes: null,
                carnes: null,
                opcionaisData: null,
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                msg: null
            }
        },
        methods: {
            async getIngredientes() {
                const req = await fetch("http://localhost:3000/ingredientes")
                const data = await req.json()

                this.paes = data.paes
                this.carnes = data.carnes
                this.opcionaisData = data.opcionais
            },
            async createBurger(e) {
                e.preventDefault()

                const data = {
                    nome: this.nome,
                    carne: this.carne,
                    pao: this.pao,
                    opcionais: Array.from(this.opcionais),
                    status: "Solicitado"
                }

                const dataJson = JSON.stringify(data)

                const req = await fetch("http://localhost:3000/burgers", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: dataJson
                })
                const res = await req.json()
                
                // colocar uma msg de sistema

                // limpar msg

                // limpar os campos
                this.nome = ""
                this.carne = ""
                this.pao = ""
                this.opcionais = ""
            }
        },
        mounted() {
            this.getIngredientes()
        }
    }
</script>

<style lang="scss" scoped>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #burger-form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            label {
                font-weight: bold;
                margin-bottom: 15px;
                color: #222;
                padding: 5px 10px;
                border-left: 4px solid #fcba03;
            }

            input, select {
                padding: 5px 10px;
                width: 300px;
                outline: none;
            }

            select {
                cursor: pointer;
            }

            .submit-btn {
                background-color: #222;
                color: #fcba03;
                font-weight: bold;
                border: 2px solid #222;
                padding: 10px;
                font-size: 16px;
                cursor: pointer;
                transition: .2s;
            }
            .submit-btn:hover {
                background-color: transparent;
                color: #222;
            }
        }

        #opcionais-container {
            width: 75%;
            flex-direction: row;
            flex-wrap: wrap;

            #opcionais-title {
                width: 100%;
            }

            .checkbox-container {
                display: flex;
                align-items: flex-start;
                width: 50%;
                margin-bottom: 20px;

                span, input {
                    width: auto;
                }

                span {
                    margin-left: 6px;
                    font-weight: bold;
                }
            }        
        }
    }
</style>