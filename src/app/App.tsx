import AppRouter from "./app-router";
import MainProvider from "./layouts/main-provider";
const App = () => {
  return (
    <MainProvider>
      <AppRouter />
    </MainProvider>
  );
};

export default App;
