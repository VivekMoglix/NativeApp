import {Text, View} from 'react-native';
import {PostsStyles} from '../styles/PostsStyles';

export default function Posts({title, body}) {
  return (
    <View style={PostsStyles.postsContainer}>
      <Text style={PostsStyles.titleText}>{title}</Text>
      <Text style={PostsStyles.bodyText}>{body}</Text>
    </View>
  );
}
