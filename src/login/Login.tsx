import { View, Text, StyleSheet, TextInput, Alert } from "react-native";

import { LoginComponent, Title, Input, ButtonLogin } from "./LoginStyle";

export default function Login() {

  function submit() {
    console.log(`vix`);
    Alert.alert("VIX 2")
  }

    return (
        <LoginComponent>
            <Title>Login</Title>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <ButtonLogin onPress={submit}>
                <Text style={{fontWeight:"bold"}}>Entrar</Text>
            </ButtonLogin>
        </LoginComponent>
    );
}
