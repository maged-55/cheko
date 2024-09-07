import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Layout, { Content } from "antd/es/layout/layout";
import NavBar from "./components/header/Header";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f4cbdf", 
          fontSize: 18,
          
        },
      }}
    >
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
    </ConfigProvider>
  );
};

export default App;
