import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCBA03',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  headerContainer: {
    marginBottom: 70,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    marginBottom: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccd1d8ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signInButton: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:15,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    padding:10
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginRight: 5,
  },
  signUpText: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
});
