const {StyleSheet} = require('react-native');

export default HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#055600',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F4FBF4',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#979797',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#055600',
    paddingHorizontal: 10,
    color: '#055600',
    width: '60%',
    borderRadius: 6,
  },
});
