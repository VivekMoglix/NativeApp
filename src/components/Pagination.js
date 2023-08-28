import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../redux/actions/homeActions';

export default function Pagination() {
  const postsPerPage = useSelector(
    ({homeReducer}) => homeReducer?.pagination?.postsPerPage,
  );
  const totalPosts = useSelector(
    ({homeReducer}) => homeReducer?.pagination?.totalPosts,
  );
  const currentPage = useSelector(
    ({homeReducer}) => homeReducer?.pagination?.currentPage,
  );
  const totaLpages = Math.ceil(totalPosts / postsPerPage);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: '#F4FBF4',
        width: '100%',
        paddingHorizontal: 4,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: '#979797',
      }}>
      {Array.from({length: totaLpages}, (value, index) => index).map(p => {
        return (
          <View key={p}>
            <Text
              onPress={() => dispatch(setCurrentPage(p + 1))}
              style={{
                paddingVertical: 4,
                paddingHorizontal: 8,
                fontSize: 14,
                borderBottomWidth: currentPage === p + 1 ? 2 : 0,
                borderBottomColor: '#055600',
                fontWeight: currentPage === p + 1 ? 'bold' : 'normal',
                color: currentPage === p + 1 ? '#055600' : '#979797',
              }}>
              {p + 1}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
