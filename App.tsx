import { View, Text } from "react-native";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View className="bg-black text-white h-full w-full">
      <Navbar />
      <View className="p-4">
        <Text className="text-white">Le N2 Template</Text>
      </View>
    </View>
  );
}
