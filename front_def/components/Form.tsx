import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useForm } from "react-hook-form";
import axios from "axios"
import { ScrollView } from 'react-native';
function Form() {
    const [age, setAge] = React.useState("");
    const [villequartier, setVileQuartier] = React.useState("");
    const [termeDebrouille, setTermeDebrouille] = React.useState("");
    const [quotidienDebrouille, setQuotidienDebrouille] = React.useState("");
    const [debrouillardeDefinition, setDebrouillardeDef] = React.useState("");
    const [debrouillarde, setDebrouillarde] = React.useState("");
    const [astuceVieFacile, setAstuceVieFacile] = React.useState("");
    const [savoirfaire, setSavoirFaire] = React.useState("");
    const [moyenTransmission, setMoyenTransmission] = React.useState("");
    const [dejaPartager, setDejaPartager] = React.useState("");
    const [schema, setSchema] = React.useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (osef: any) => {
        const data = {
            age,
            villequartier,
            termeDebrouille,
            quotidienDebrouille,
            debrouillardeDefinition,
            debrouillarde,
            astuceVieFacile,
            savoirfaire,
            moyenTransmission,
            dejaPartager,
            schema,
        }
        axios.post('http://localhost:5000/api/forms', data, {})
            .then((res) => {
                console.log("oii")
                //Perform Success Action
            })
            .catch((error) => {
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Text style={styles.text}>Quel âge avez-vous?</Text>
                <TextInput value={age} onChangeText={text => setAge(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Dans quel ville/quartier vivez-vous?</Text>
                <TextInput value={villequartier} onChangeText={text => setVileQuartier(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>À quoi vous fait penser le terme de « débrouille »?</Text>
                <TextInput value={termeDebrouille} onChangeText={text => setTermeDebrouille(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Selon-vous, qu'est-ce qui relève de la débrouille dans votre quotidien?</Text>
                <TextInput value={quotidienDebrouille} onChangeText={text => setQuotidienDebrouille(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Qu'est-ce qu'une personne débrouillarde?</Text>
                <TextInput value={debrouillardeDefinition} onChangeText={text => setDebrouillardeDef(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Êtes-vous une personne débrouillarde?</Text>
                <TextInput value={debrouillarde} onChangeText={text => setDebrouillarde(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Que faites-vous pour vous rendre la vie plus facile? Qu'est-ce que vous ne faites</Text>
                <TextInput value={astuceVieFacile} onChangeText={text => setAstuceVieFacile(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Avez-vous un savoir-faire à nous partager?</Text>
                <TextInput value={savoirfaire} onChangeText={text => setSavoirFaire(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Pour vous, quel est le meilleur moyen de le transmettre?</Text>
                <TextInput value={moyenTransmission} onChangeText={text => setMoyenTransmission(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Avez-vous déjà été amené.e à le partager? À qui et de quelle façon?</Text>
                <TextInput value={dejaPartager} onChangeText={text => setDejaPartager(text)}
                    style={styles.input}
                />
                <Text style={styles.text}>Pouvez-vous schématiser le processus (dessin, image, mot, etc.) ?</Text>
                <TextInput value={schema} onChangeText={text => setSchema(text)}
                    style={styles.input}
                />


                <input value="Envoyer le formulaire" type="submit" />
            </form>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    input: {

    },
    header: {
        padding: 20
    },
    text: {
        marginTop: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginVertical: '1em',
        textAlign: 'center'
    },
    link: {
        color: '#1B95E0'
    },
    code: {
        fontFamily: 'monospace, monospace'
    }
});
export default Form;