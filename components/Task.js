import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/FontAwesome5';

const Task =({index,text,completeTask,editTask}) => { 
    const deleteTask=()=>{

        completeTask(index);

    }

    const edit=() =>{
        editTask(index);
    }
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.itemRight}>
                
                <IconAntDesign onPress={edit} name='edit' style={styles.edit} size={20}/>
                <IconAntDesign onPress={deleteTask}  name='trash' style={styles.delete} size={20}/>
            </View>
        </View>
    )



}

const styles= StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius:10,
        marginBottom:10,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',

    },

    itemLeft:{
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',


    },
    square:{
        // width:24,
        // height:24,
        // backgroundColor:'cyan',
        // shadowOpacity:0.1,
        // opacity:0.8,
        borderRadius:5,
        borderWidth:10,
        borderColor:'#E8EAED',
        marginRight:5,
    },
    itemText:{
        maxWidth: '80%'
    
    },
    
    delete:{
        color:'red',
        paddingHorizontal:10
        
    },

    edit:{
        color:'black',
        paddingHorizontal:10

    },
    itemRight:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        
    },
    

    
    


}); 

export default Task;