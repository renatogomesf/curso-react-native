import { useRoute } from "@react-navigation/native";
import React from "react";

import { View, Text, TouchableOpacity, Vibration, Share } from "react-native";

export default function Home({ navigation }: any) {
  const route: any = useRoute();

  const vibrar_1sec = 10000;

  const onShare = async ()=>{
    const result = await Share.share({'message': 'teste de compartilhamento'})
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="mb-6">
        <Text className="font-bold text-4xl">E tome home</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-4xl">{route.params.data}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View className="flex items-center justify-center bg-green-600 color-white font-bold w-[300] mb-8 h-12 rounded-lg">
          <Text className="color-white font-bold">Voltar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Vibration.vibrate(vibrar_1sec)}>
        <View className="flex items-center justify-center bg-gray-600 color-white font-bold w-[300] mb-8 h-12 rounded-lg">
          <Text className="color-white font-bold">VIBRAR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Vibration.cancel()}>
        <View className="flex items-center justify-center bg-gray-600 color-white font-bold w-[300] mb-8 h-12 rounded-lg">
          <Text className="color-white font-bold">CANCELAR VIBRAÇÃO</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onShare}>
        <View className="flex items-center justify-center bg-blue-600 color-white font-bold w-[300] mb-8 h-12 rounded-lg">
          <Text className="color-white font-bold">Compartilhar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
