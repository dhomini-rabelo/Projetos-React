import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './pages'
import { Step2 } from './pages/step2'
import { Step3 } from './pages/step3'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
            </Routes>
        </BrowserRouter>
    )
}