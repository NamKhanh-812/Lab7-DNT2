import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { FIRESTORE } from './fireBaseConfig'

const Viewww = () => {
    const [text, setText] = useState('');
    const handleInsert = async () => {
       try{
           const sinhViensRef = collection(FIRESTORE, 'SinhViens'); // Lấy tham chiếu đến bộ sưu tập "SinhViens"
           const tailieu = await addDoc(sinhViensRef, { // Thêm dữ liệu vào bộ sưu tập "SinhViens"
               text: text,
           });
           console.log('Tài liệu được ghi với ID =', tailieu.id);
           setText('');
       } catch(error){
           console.error('Lỗi ghi dữ liệu', error);
       }
    }
    return (
       <View style = {{height:'100%',justifyContent:'center',alignItems:'center'}}>
           <TextInput  placeholder='Nhập tên sinh viên' value={text} onChangeText={setText} style = {{borderWidth:1,borderRadius:10,borderStyle:'dashed',width:'90%', padding: 10}}/>
           <TouchableOpacity onPress={handleInsert} style={{backgroundColor:'gray',height:'7%',width:'30%',justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}}>
            <Text style={{fontWeight:'bold',color:'white'}}>Thêm dữ liệu</Text>
           </TouchableOpacity>
       </View>
    )
}

export default Viewww

const styles = StyleSheet.create({})