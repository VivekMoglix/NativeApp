import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Users({name, age, index, onEditClick, onDelete}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: '#3d79a8',
        borderRadius: 12,
        marginHorizontal: 16,
        marginBottom: 10,
        padding: 12,
      }}>
      <Image
        style={{
          width: 36,
          height: 36,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 50,
          marginRight: 8,
        }}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
        }}
      />
      <View>
        <Text style={{fontSize: 18, color: '#FCEDDA', fontWeight: 'bold'}}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <Text style={{fontSize: 14, color: '#FCEDDA'}}>Age: {age}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          marginLeft: 'auto',
          marginRight: 10,
        }}>
        <TouchableOpacity onPress={() => onEditClick(index)}>
          <Icon name="edit" size={24} color="orange" solid />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(index)}>
          <Icon name="delete" size={24} color="#db1a1a" solid />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const userStyles = StyleSheet.create({});
