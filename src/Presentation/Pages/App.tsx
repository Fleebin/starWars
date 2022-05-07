import { AppRoutes } from "../../Main/Router/Router";
import { Header } from "../Components/Header/Header";
import GlobalStyle from "../Styles/global";
import "../Assets/Fonts/StarJedi.ttf";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
};
