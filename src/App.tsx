import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from './routes';
import { AppThemeProvider } from "./shared/contexts";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <AppThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}