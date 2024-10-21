import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";

import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [text, setText] = useState("bem vindo(a)");

  const navigation: any = useNavigation();

  return (
    <Pressable onPress={Keyboard.dismiss} className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold mb-5">Login</Text>

      <Input email="E-mail" icon="user-circle-o" type="email-address" />

      <Input email="Senha" icon="lock" type="numeric" />

      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { data: text })}
      >
        <View className="flex items-center justify-center bg-green-600 color-white font-bold w-[300] h-12 rounded-lg">
          <Text className="color-white font-bold">Entrar</Text>
        </View>
      </TouchableOpacity>

      <Text className="mt-10">{text}</Text>
    </Pressable>
  );
}
