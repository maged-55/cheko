import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import MapPage from "./pages/map-page";
import Layout, { Content } from "antd/es/layout/layout";
import NavBar from "./components/nav-bar/nav-bar";
import { ConfigProvider, theme } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, useTheme } from "./components/hooks/theme-context";

const { defaultAlgorithm, darkAlgorithm } = theme;

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();

  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#f4cbdf",
          fontSize: 18,
          colorBgContainer: isDarkMode ? "#1f1f1f" : "#ffffff",
          colorText: isDarkMode ? "#ffffff" : "#000000",
        
        
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <NavBar />
            <Content>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapPage />} />
              </Routes>
            </Content>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
