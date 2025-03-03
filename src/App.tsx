import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
