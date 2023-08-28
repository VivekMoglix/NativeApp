import axios from 'axios';
import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Posts from './Posts';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from '../redux/actions/postActions';
import Loader from './Loader';

export default function HomeView() {
  const dispatch = useDispatch();
  const data = useSelector(({postsReducer}) => postsReducer?.posts);
  const isLoading = useSelector(({authReducer}) => authReducer?.isLoading);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts({type: 'ADD', data: [...res?.data]}));
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={{backgroundColor: '#055600'}}>
          <FlatList
            style={{padding: 15}}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              return <Posts title={item.title} body={item.body} />;
            }}
          />
        </View>
      )}
    </>
  );
}
