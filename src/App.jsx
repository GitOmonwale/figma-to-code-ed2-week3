 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoinOverview from './pages/coinOverview/CoinOverview';
import News from './pages/news/News';
import Home from './pages/home/Home';
import CryptoProvider from './contexts/CryptoContext';
import { TrendingCoinsProvider } from './contexts/TrendingCoinsContext';
import { CoinOverviewProvider } from './contexts/CoinOverviewContext';
import { NewsProvider } from './contexts/NewsContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coinOverview/:coinOverviewId",
    element: <CoinOverview />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

function App() {
  return (
    <div className="overflow-hidden w-full box-border text-dark font-mona-sans">
      <div className="m-auto">
        <NewsProvider>
        <CryptoProvider>
          <CoinOverviewProvider>
            <TrendingCoinsProvider>
              <RouterProvider router={router} />
            </TrendingCoinsProvider>
            </CoinOverviewProvider>
          </CryptoProvider>
        </NewsProvider>
      </div>
    </div>
  );
}

export default App;
