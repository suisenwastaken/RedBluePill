import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import QuestionScreen from "../../screens/QuestionScreen"
import LoginScreen from "../../screens/LoginScreen/LoginScreen"
import RequireAdmin from "../RequireAdmin"
import Admin from "../../screens/Admin"
import Greetings from "../../screens/Greetings/Greetings"
import {AnimatePresence} from 'framer-motion'

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key = {location.pathname}>
                <Route element={<Greetings />} path="/" />
                <Route element={<QuestionScreen />} path="/:id" />
                <Route element={<LoginScreen />} path="/login" />
                <Route element={<div>404</div>} path="*" />
                <Route path="/admin" element={
                    <RequireAdmin>
                        <Admin />
                    </RequireAdmin>}
                />
            </Routes>
        </AnimatePresence>
    )
}
