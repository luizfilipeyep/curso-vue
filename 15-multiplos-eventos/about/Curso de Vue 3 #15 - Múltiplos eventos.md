# Curso de Vue 3: #15 - Múltiplos eventos
Neste vídeo você vai aprender sobre a criação de múltiplos eventos com #Vue, uma forma de ativar dois ou mais métodos com apenas uma ação do usuário.

------



* O Vue tambpem permite a entrada de **múltiplos eventos** em um único evento;
* A sintaze permanece a mesma;
* Porém vamos **separar os eventos por vírgula**;
* Isso permite **executar dois ou mais métodos com um click**, por exemplo;

Para utilizarmos este recurso basta separar os métodos por vírgula:
~~~vue
    <button @click="primeiro(), segundo()">Ativar múltiplos eventos</button>
~~~

~~~vue
    <button @click="primeiro(txt1, $event), segundo(txt2, $event)">Ativar múltiplos eventos</button>

    data() {
            return {
                multiplos_eventos: "",
                txt1: "Primeiro evento ativado!",
                txt2: "Segundo evento!"
            }
        },
    methods: {
        primeiro(txt, e) {
            this.multiplos_eventos = txt
        },
        segundo(txt, e) {
            setTimeout(()=> this.multiplos_eventos = txt, 500)
        }
    }
~~~