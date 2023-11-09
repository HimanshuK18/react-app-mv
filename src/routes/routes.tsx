import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import App from '../App';
import BasicMenu from '../menu/menu';
import NoPage from "../nopage/NoPage";
import { GridData } from '../datagrid/dataGrid';
import { Controls } from '../controls/controls';
import  ProductPage  from '../hooks/useCallback';
import { UseDeferredValue } from '../hooks/useDeferredValue';
import {  ParentComponent } from '../hooks/useImperativeHandle/useImperativeHandleP';
import { MyComponentInsertionEffect } from '../hooks/useInsertionEffect ';
import UseRef  from '../hooks/useRef';
import { UseMemo }  from '../hooks/usememo';
import AppForwardRef from '../apiReact/forwardRef';
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
                <Route path="controls" element={<Controls />} />
                <Route path="usedeferedvalue" element={<UseDeferredValue />} />
                <Route path="UseImperativeHandle" element={<ParentComponent />} />
                <Route path="myComponentInsertionEffect" element={<MyComponentInsertionEffect />} />
                <Route path="usref" element={<UseRef />} />
                <Route path="usememo" element={<UseMemo />} />
                <Route path="forwardRef" element={<AppForwardRef />} />
                <Route path="usecallback" element={<ProductPage productId={'rr'} referrer={'tt'} theme={'dark'} />} />
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