import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PagesList } from "../config/routing-config";
import { Suspense } from "react";

export function RouteProvider(){
    return (
        <BrowserRouter>
            <Suspense fallback={<>loading</>}>
                <Routes>
                    {Object.values(PagesList).map((page,id)=>(
                        <Route {...page} key={id}/>
                    ))} 
                </Routes> 
            </Suspense> 
        </BrowserRouter>
    )
}