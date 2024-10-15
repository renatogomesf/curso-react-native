import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";

import { useState } from "react";

export default function Login() {
  function submit() {
    setLogin("SALVEEEEEE")
  }

  const [login, setLogin] = useState('')

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-5xl font-bold mb-5">Login</Text>
      <TextInput
        placeholder="E-mail"
        className="bg-gray-300 w-3/4 h-12 p-2 rounded-lg"
      />
      <TextInput
        placeholder="Senha"
        className="bg-gray-300 w-3/4 h-12 p-2 rounded-lg"
      />
      <TouchableOpacity onPress={submit}>
        <View className="flex items-center justify-center bg-green-600 color-white font-bold w-[310] h-12 rounded-lg">
          <Text className="color-white font-bold">Entrar</Text>
        </View>
      </TouchableOpacity>

      <Text className="font-bold">{login}</Text>
    </View>
  );
}
