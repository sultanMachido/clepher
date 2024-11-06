import { useReducer } from "react";
import CollapsibleSidebar from "./components/sidebar";
import ThemeContext, {
  selectedTheme,
  selectedThemeReducer,
} from "./provider/ThemeProvider";
import Topbar from "./components/topbar";
import { Outlet } from "react-router-dom";
function App() {
  const [theme, themeDispatch] = useReducer(
    selectedThemeReducer,
    selectedTheme
  );

  return (
    <ThemeContext.Provider
      value={{ selectedTheme: theme, selectedThemeDispatch: themeDispatch }}
    >
      <Topbar />
      <main className="flex  h-screen overflow-y-hidden dark:bg-bgBlackSecondary bg-bgPrimary pt-[73px]">
        <CollapsibleSidebar />
        <section className="mx-auto grow w-[95%] lg:mx-0 lg:w-[78%] overflow-y-scroll">
          <Outlet />
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
