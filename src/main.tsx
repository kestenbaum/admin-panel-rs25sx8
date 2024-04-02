import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import {Provider} from "./Provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider>
        <App />
    </Provider>
)
