import {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Users from './Users';
import * as Actions from './userActions';
import {useDispatch, useSelector} from 'react-redux';
import ItemCard from './components/ItemCard';

export default function Home() {
  const dispatch = useDispatch();
  const isEdit = useSelector(initialState => initialState?.isEdit);
  const usersData = useSelector(initialState => initialState?.usersData);
  const hasError = useSelector(initialState => initialState?.hasError);
  const errorMsg = useSelector(initialState => initialState?.errorMsg);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (isEdit) {
      let editUserDataName = usersData[selectedIndex].name;
      let editUserDataAge = usersData[selectedIndex].age;
      setName(editUserDataName);
      setAge(editUserDataAge);
    }
  }, [isEdit]);
  const onEditClick = index => {
    dispatch(Actions.setEditTrue());
    setSelectedIndex(index);
  };
  function isValid() {
    if (name.length < 2) {
      dispatch(Actions.setErrorTrue());
      dispatch(
        Actions.setErrorMessage('Name should be more than 2 characters'),
      );
      return false;
    } else if (age.length < 1 || !(parseInt(age) > 0 && parseInt(age) <= 100)) {
      dispatch(Actions.setErrorTrue());
      dispatch(Actions.setErrorMessage('Enter valid age (1-100)'));
      return false;
    }
    return true;
  }
  const onAdd = isEdit => {
    if (!isValid()) return;
    Keyboard.dismiss();
    if (isEdit === false) {
      dispatch(Actions.addUser(name.trim(), age));
    } else {
      dispatch(Actions.updateUser(name.trim(), age, selectedIndex));
      dispatch(Actions.setEditFalse());
    }
    setName('');
    setAge('');
    dispatch(Actions.setErrorFalse());
    dispatch(Actions.setErrorMessage(''));
  };
  const onDelete = index => {
    dispatch(Actions.deleteUser(index));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F7FA',
      }}>
      <View
        style={{
          backgroundColor: '#3d79a8',
          marginBottom: 12,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholderTextColor={'#fff'}
          placeholder="Name"
          id="name"
        />
        <TextInput
          style={styles.input}
          value={age}
          placeholderTextColor={'#fff'}
          onChangeText={setAge}
          placeholder="Age"
          id="age"
          keyboardType="numeric"
        />
        {hasError && (
          <View style={{display: 'flex', alignItems: 'center', marginTop: 12}}>
            <Text style={{fontSize: 16, color: 'red'}}>{errorMsg}</Text>
          </View>
        )}
        {!isEdit ? (
          <TouchableOpacity style={styles.button} onPress={() => onAdd(isEdit)}>
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(Actions.setEditFalse())}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onAdd(isEdit)}>
              <Text style={styles.buttonText}>Update User</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ItemCard />
      {!isEdit && usersData && usersData.length > 0 && (
        <View style={{flex: 1}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 12,
              color: '#3d79a8',
            }}>
            Users
          </Text>
          <FlatList
            data={usersData}
            style={{flex: 1}}
            renderItem={({item, index}) => (
              <Users
                name={item.name}
                age={item.age}
                index={index}
                onEditClick={onEditClick}
                onDelete={onDelete}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: '#FCEDDA',
    padding: 16,
    width: '70%',
    height: 50,
    marginVertical: 8,
    borderRadius: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FCEDDA',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#FCEDDA',
    padding: 8,
    borderRadius: 10,
    marginTop: 12,
    width: 120,
  },
  buttonText: {
    color: '#3d79a8',
    fontWeight: 'bold',
  },
});
