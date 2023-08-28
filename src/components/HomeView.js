import axios from 'axios';
import {useEffect, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Posts from './Posts';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from '../redux/actions/postActions';
import {Dropdown} from 'react-native-element-dropdown';
import Loader from './Loader';
import Pagination from './Pagination';
import {setPostsPerPage, setSearchText} from '../redux/actions/homeActions';

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
      {data.length > 0 && isLoading ? (
        <Loader />
      ) : (
        <View style={{backgroundColor: '#055600', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#F4FBF4',
              alignItems: 'center',
              paddingVertical: 4,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: '#979797',
            }}>
            <View style={{width: '100%'}}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#055600',
                  paddingHorizontal: 10,
                  color: '#055600',
                  width: '60%',
                  borderRadius: 6,
                }}
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
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <FlatList
            style={{paddingHorizontal: 15, marginTop: 10}}
            showsVerticalScrollIndicator={false}
            data={filteredData}
            renderItem={({item}) => {
              return <Posts title={item.title} body={item.description} />;
            }}
          />
          <View style={{marginTop: 'auto', width: '100%'}}>
            <Pagination />
          </View>
        </View>
      )}
    </>
  );
}
