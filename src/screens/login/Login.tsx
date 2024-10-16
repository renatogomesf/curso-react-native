import { View, TextInput } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Login({ email, icon, type }: any) {
  return (
    <View className="flex-row w-10/12 mb-4 bg-gray-200 items-center justify-center p-2 rounded-lg">
      <FontAwesome name={icon} size={24} color="black" />
      <TextInput
        keyboardType={type}
        placeholder={email}
        className="w-[300] h-12 p-2 rounded-lg"
      />
    </View>
  );
}
