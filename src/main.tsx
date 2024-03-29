import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.scss'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './app/shared/redux/store.ts';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter basename='/virtualScroll/'>
            <App />
        </BrowserRouter>
    </Provider>


)
