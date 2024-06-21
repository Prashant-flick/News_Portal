import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import {
	Home,
	Favourite,
	DetailedArticle
} from "./Pages/index.js"

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/favourite',
				element: <Favourite />
			},
			{
				path: '/article/:uuid',
				element: <DetailedArticle />
			}
		]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
)
