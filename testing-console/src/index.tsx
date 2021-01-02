import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { ReactQueryDevtoolsPanel } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/store';
import App from './App';
import './assets/scss/index.scss';

const queryClient = new QueryClient();
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtoolsPanel /> */}
      </QueryClientProvider>
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
