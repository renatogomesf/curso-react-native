import { useRoute } from "@react-navigation/native";
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }: any) {
  const route: any = useRoute();

  return (
    <View className="flex-1 items-center justify-center">
      <View className="mb-6">
        <Text className="font-bold text-4xl">E tome home</Text>
      </View>

      <View className="mb-6">
        <Text className="font-bold text-4xl">{route.params.data}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View className="flex items-center justify-center bg-green-600 color-white font-bold w-[300] h-12 rounded-lg">
          <Text className="color-white font-bold">Voltar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
