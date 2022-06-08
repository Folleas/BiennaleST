<script>
import axios from 'axios';
import FileSelector from 'vue-file-selector';
export default {
    name: 'PostFormAxios',
    data() {
        return {
            form: {
                age: '',
                villequartier: '',
                termeDebrouille: '',
                quotidienDebrouille: '',
                debrouillardeDefinition: '',
                debrouillarde: '',
                astuceVieFacile: '',
                savoirfaire: '',
                moyenTransmission: '',
                dejaPartager: '',
                schema: '',
            }
        }
    },
    methods: {
        submitForm() {
            console.log(this.form.age)
            var data = this.form
            axios.post('http://node:5000/api/forms', data, {})
                .then((res) => {
                    console.log("oii")
                    //Perform Success Action
                })
                .catch((error) => {
                    // error.response.status Check status code
                }).finally(() => {
                    //Perform action in always
                });
        },
        handleFilesValidated(result, files) {
            console.log('Validation result: ' + result);
        },

        handleFilesChanged(files) {
            console.log('Selected files: ');
            console.table(files);
        },
    },
}
</script>

<!-- <template> -->
  <!-- <div>
    <p>Pouvez-vous schématiser le processus (dessin, image, mot, etc.) ? {{ message }}</p>
    <input v-model="schema" placeholder="" />
  </div> -->
  
<template>
    <button @click="submitForm()">Test Button</button>
    <div>
        <h2> Contact US </h2>
        <form v-on:submit.prevent="submitForm">
            <div class="form-group">
                <label for="number">Quel âge avez-vous?</label>
                <input type="text" class="form-control" id="age" placeholder="" v-model="form.age">
            </div>
            <div class="form-group">
                <label for="name">Dans quel ville/quartier vivez-vous?</label>
                <input type="text" class="form-control" id="villequartier" v-model="form.villequartier">
            </div>
            <div class="form-group">
                <label for="message">À quoi vous fait penser le terme de « débrouille »?</label>
                <textarea name="termeDebrouille" class="form-control" id="termeDebrouille" rows="3"
                    v-model="form.termeDebrouille"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Selon-vous, qu'est-ce qui relève de la débrouille dans votre quotidien?</label>
                <textarea name="quotidienDebrouille" class="form-control" id="quotidienDebrouille" rows="3"
                    v-model="form.quotidienDebrouille"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Qu'est-ce qu'une personne débrouillarde?</label>
                <textarea name="debrouillardeDefinition" class="form-control" id="debrouillardeDefinition" rows="3"
                    v-model="form.debrouillardeDefinition"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Êtes-vous une personne débrouillarde?</label>
                <textarea name="debrouillarde" class="form-control" id="debrouillarde" rows="3"
                    v-model="form.debrouillarde"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Que faites-vous pour vous rendre la vie plus facile? Qu'est-ce que vous ne faites
                    pas ?</label>
                <textarea name="astuceVieFacile" class="form-control" id="astuceVieFacile" rows="3"
                    v-model="form.astuceVieFacile"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Avez-vous un savoir-faire à nous partager?</label>
                <textarea name="savoirfaire" class="form-control" id="savoirfaire" rows="3"
                    v-model="form.savoirfaire"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Pour vous, quel est le meilleur moyen de le transmettre?</label>
                <textarea name="moyenTransmission" class="form-control" id="moyenTransmission" rows="3"
                    v-model="form.moyenTransmission"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Avez-vous déjà été amené.e à le partager? À qui et de quelle façon?</label>
                <textarea name="dejaPartager" class="form-control" id="dejaPartager" rows="3"
                    v-model="form.dejaPartager"></textarea>
            </div>
            <div class="form-group">
                <label for="message">Pouvez-vous schématiser le processus (dessin, image, mot, etc.) ?</label>
                <textarea name="schema" class="form-control" id="schema" rows="3" v-model="form.schema"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
        <file-selector accept-extensions=".jpg,.svg" :multiple="true" :max-file-size="5 * 1024 * 1024"
            @validated="handleFilesValidated" @changed="handleFilesChanged">
            Select image files
        </file-selector>
    </div>
</template>