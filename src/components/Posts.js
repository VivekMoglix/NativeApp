import {StyleSheet, Text, View} from 'react-native';

export default function Posts({title, body}) {
  return (
    <View style={PostsStyles.postsContainer}>
      <Text style={PostsStyles.titleText}>{title}</Text>
      <Text style={PostsStyles.bodyText}>{body}</Text>
    </View>
  );
}

const PostsStyles = StyleSheet.create({
  postsContainer: {
    backgroundColor: '#F4FBF4',
    borderWidth: 1,
    borderColor: '#1D2E00',
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#055600',
    fontFamily: 'Poppins-Bold',
  },
  bodyText: {
    fontSize: 14,
    color: '#1D2E00',
    fontFamily: 'Poppins',
  },
});
