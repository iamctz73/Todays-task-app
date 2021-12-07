import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView, FlatList} from 'react-native';
import Task from './components/Task';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const arr =[];

  useEffect(()=>{
    readData();

  },[taskItems])


  const handleAddTask = async() =>{
    Keyboard.dismiss();
    // setTaskItems([...taskItems, task]);
    arr.push({text:task,key:Math.random().toString()})
    setTask(null);

    let jsonValue = JSON.stringify(taskItems);    
    await AsyncStorage.setItem('keystorage', jsonValue);

    let value=JSON.parse(await AsyncStorage.getItem('keystorage'));
    setTaskItems(value);
    

   
  }

  const completeTask =(index) =>{
    let copyitems=[...taskItems];
    copyitems.splice(index,1);
    setTaskItems(copyitems);

  }

  const editTask =(index)=>{
    let copyitems=[...taskItems];
    setTaskItems(copyitems);
  }

   
  const readData = async () => {
    try {
      let value =  JSON.parse(await AsyncStorage.getItem('keystorage'));
      setTaskItems(value);
      console.log(taskItems);
      if (arr !== null) {
        arr=value;
        console.log(finalValue);
      }
    } catch (e) {
      console.log('Failed to fetch the data from storage')
    }
  }


  // const storeData =  () => {
  //   console.log("hello");
  //   try {
     
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  
// const getData = async () => {
//   try {
   
//   } catch(e) {
//     // error reading value
//   }
// }




  return (

    <View style={styles.container}>



      <View style={styles.taskWrapper}>

        {/*Todays task*/}

        <Text style={styles.sectionTitle}>Todays tasks</Text>
        <ScrollView style={styles.scrollview}>
        <View style={styles.items}>
          


            <FlatList
            data={taskItems}
            renderItem={({item})=>
            (
                <TouchableOpacity key={item.key} >
                  <Task completeTask={completeTask} editTask={editTask} index={item.key} text = {item} />
                </TouchableOpacity>
            )
            
            }    

            
      
            />
        
          
        </View>
        </ScrollView>
      </View>


        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Enter task here....'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity style={styles.backcircle} onPress={() => handleAddTask()}><IconAntDesign name="pushpin" style={styles.icon} /></TouchableOpacity>
          
         
        </KeyboardAvoidingView>




    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  taskWrapper:{
    padding: 80,
    paddingHorizontal:20,
    marginHorizontal:10,
    marginBottom: 0,



  },


sectionTitle:{
  fontSize:24,
  fontWeight:'bold',
  marginBottom:10

},

items:{
  fontSize:32,
  fontWeight:'bold'

},
writeTaskWrapper:{
  
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
  // marginRight:50,
  position:'absolute',
  bottom:30,
  marginTop:20,
  paddingTop:30

},
input:{
  paddingVertical:10,
  paddingHorizontal:15,
  width:'80%',
  borderRadius:150,
  backgroundColor:'white',
  borderColor:'navy',
  // opacity:0.4,
  borderWidth:1
  
},

icon:{
  
  color:"white",
  fontSize:20,
  justifyContent:'center',
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:15
  
},
backcircle:{
  width:50,
  height:50,
  backgroundColor:'navy',
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row'

},

scrollview:{
  marginBottom:40
},







 



  

});
