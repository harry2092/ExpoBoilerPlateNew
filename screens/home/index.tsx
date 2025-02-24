import { Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ROUTES } from "@/utils/enum";

export default function Home() {
  //Router
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(ROUTES.Welcome);
      }}
    >
      <Text>Home</Text>
    </Pressable>
  );
}
