import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  text: {
    color: '#212121',
    fontSize: 14,
    fontWeight: '400'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 48,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    color: '#212121'
  },

});