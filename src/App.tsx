import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import "../global.css"

import { View, Text, TouchableOpacity } from "react-native";

import Login from "./screens/login/Login";

export default function App() {

  const [check, setCheck] = useState(false);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold mb-5">Login</Text>

      <Login email="E-mail" icon="user-circle-o" type="email-address"/>

      <Login email="Senha" icon="lock" type="numeric"/>

      <TouchableOpacity onPress={() => setCheck(!check)}>
        <View className="flex items-center justify-center bg-green-600 color-white font-bold w-[300] h-12 rounded-lg">
          {check ? (
            <Ionicons name="checkmark-circle" size={32} color="white" />
          ) : (
            <Text className="color-white font-bold">Entrar</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
