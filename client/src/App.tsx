import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Layout, { Content } from "antd/es/layout/layout";
import NavBar from "./components/nav-bar/nav-bar";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f4cbdf",
          fontSize: 18,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <NavBar />
            <Content style={{ padding: "20px", minHeight: "80vh" }}>
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

export default App;
