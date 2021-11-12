import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);
    const incrementaContador = () => setContador(contador + 1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            
            <TouchableOpacity
                onPress={incrementaContador}
            >
                <View style={styles.botonIncrementar}>
                    <Text>Incrementar</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        fontStyle: 'italic',
        textAlign: 'center',
        top: -15
    },
    botonIncrementar: {
        backgroundColor: 'green',
        borderRadius: 100
    }
  });
