import { Switch } from "@/components/ui/switch";
import { create } from "zustand";

type ThemeType = "light" | "dark";

type ThemeStore = {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "light",
    setTheme: (theme: ThemeType) => set({ theme }),
}));

export function ToggleTheme() {
    const { theme, setTheme } = useThemeStore();

    return (
        <Switch 
            size="sm"
            value={theme === "dark"}
            onToggle={(checked) => setTheme(checked ? "dark" : "light")}
            trackColor={{ true: "bg-gray-900", false: "bg-gray-200" }}
            thumbColor={"bg-white "}
            ios_backgroundColor={"bg-gray-900"} 
        />
    );
}