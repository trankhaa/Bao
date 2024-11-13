import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ContactWidget from './components/ContactWidget/ContactWidget';

// Import các provider
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div>
            <HeaderComponent />
            <Routes>
              {routes.map((route) => {
                const Page = route.page;
                const Layout = route.isShowHeader ? DefaultComponent : Fragment;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact
                    element={
                      <Layout>
                        <Page />
                        <ContactWidget />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
            <FooterComponent />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
