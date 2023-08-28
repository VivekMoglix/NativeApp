import axios from 'axios';
import {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native';
import Posts from '../../components/Posts';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from '../../redux/actions/postActions';
import {Dropdown} from 'react-native-element-dropdown';
import Pagination from '../../components/Pagination';
import {
  setCurrentPage,
  setPostsPerPage,
  setSearchText,
} from '../../redux/actions/homeActions';
import HomeStyles from './styles';

const paginationData = [
  {label: '10', value: 10},
  {label: '15', value: 15},
  {label: '20', value: 20},
];

export default function HomeView() {
  const dispatch = useDispatch();
  const data = useSelector(({postsReducer}) => postsReducer?.posts);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = useSelector(
    ({homeReducer}) => homeReducer?.pagination?.postsPerPage,
  );
  const currentPage = useSelector(
    ({homeReducer}) => homeReducer?.pagination?.currentPage,
  );
  const searchText = useSelector(({homeReducer}) => homeReducer?.searchText);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (isFocus || postsPerPage) {
      return <Text style={{color: '#055600'}}>Posts</Text>;
    }
    return null;
  };

  const filteredData = useMemo(() => {
    return data.filter(d =>
      d.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  });

  const handleInputChange = value => {
    dispatch(setSearchText(value));
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${postsPerPage}&skip=${
          (currentPage - 1) * postsPerPage
        }`,
      );
      setIsLoading(false);
      dispatch(setPosts({type: 'ADD', data: [...res?.data?.products]}));
    }
    fetchData();
  }, [postsPerPage, currentPage]);

  return (
    <>
      {data.length > 0 && (
        <View style={HomeStyles.container}>
          <View style={HomeStyles.header}>
            <View style={{width: '100%'}}>
              <TextInput
                style={HomeStyles.searchInput}
                value={searchText}
                onChangeText={handleInputChange}
                placeholderTextColor={'#055600'}
                placeholder="Search"
              />
            </View>
            <View style={{marginLeft: 'auto'}}>
              {renderLabel()}
              <Dropdown
                style={{width: 60}}
                iconColor="#055600"
                selectedTextStyle={{color: '#055600'}}
                itemTextStyle={{color: '#055600'}}
                data={paginationData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={postsPerPage}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  dispatch(setPostsPerPage(item.value));
                  dispatch(setCurrentPage(1));
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          {isLoading ? (
            <ActivityIndicator
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              color={'#F4FBF4'}
              size="large"
            />
          ) : (
            <FlatList
              style={{paddingHorizontal: 15, marginTop: 10}}
              showsVerticalScrollIndicator={false}
              data={filteredData}
              renderItem={({item}) => {
                return <Posts title={item.title} body={item.description} />;
              }}
            />
          )}
          <View style={{marginTop: 'auto', width: '100%'}}>
            <Pagination />
          </View>
        </View>
      )}
    </>
  );
}
