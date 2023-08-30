import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import App from '../App';
import BasicMenu from '../menu/menu';
import NoPage from "../nopage/NoPage";
import { GridData } from '../datagrid/dataGrid';
import ProtectedRoute from '../secureroutes/secureRoute';


const TicTacToe = lazy(() => import('../tictactoe/tictactoe'));
const LoginPage =  lazy(() => import('../login/login'));

function SetRoutes() {
    return (<>
        <BrowserRouter>
            <BasicMenu />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<NoPage />} />
                <Route path="grid" element={<GridData />} />
                <Route path='tictac' element={
                    <ProtectedRoute>
                        <React.Suspense fallback={<div>...Loading</div>}>
                            <TicTacToe />
                        </React.Suspense>
                    </ProtectedRoute>
                } />
                <Route path='login' element={<LoginPage /> } />
            </Routes>
        </BrowserRouter>
    </>);
}

export default SetRoutes;