import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(){
    return (
        <TouchableOpacity style={styles.container} >
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x:1, y: 1}}
                style={styles.button}
               >
                <Text style={styles.text}>SING IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 500,
        marginTop: 60,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
      },
    button: {
       width: '40%',
       height: 50,
       borderRadius: 25,
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
    },
    
})