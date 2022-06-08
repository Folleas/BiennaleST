<script>
import axios from 'axios';
export default {
    data() {
        return {
            results: []
        }
    },
    created(){
        axios.get("https://collectifae:5000/api/forms")
        .then(response => this.results = response.data);
    }
}
</script>

<template>
    <button @click="submitForm()">Test Button</button>

    <div>
        <ul>
            <div v-for='data in this.results' :key='data._id'>
                <p>Age: {{ data.age }}</p>
                <p>villequartier: {{ data.villequartier }}</p>
                <p>termeDebrouille: {{ data.termeDebrouille }}</p>
                <p>quotidienDebrouille: {{ data.quotidienDebrouille }}</p>
                <p>debrouillardeDefinition: {{ data.debrouillardeDefinition }}</p>
                <p>debrouillarde: {{ data.debrouillarde }}</p>
                <p>astuceVieFacile: {{ data.astuceVieFacile }}</p>
                <p>savoirfaire: {{ data.savoirfaire }}</p>
                <p>moyenTransmission: {{ data.moyenTransmission }}</p>
                <p>dejaPartager: {{ data.dejaPartager }}</p>
                <p>schema: {{ data.schema }}</p>
            </div>
        </ul>
    </div>
</template>