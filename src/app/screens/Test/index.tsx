import { ToggleTheme } from "@src/app/theme/ToggleTheme";
import { useState } from "react";
import { SafeAreaView } from "react-native";

export function Test() {
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(false)
  
  return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ToggleTheme />
      </SafeAreaView>
  )
}