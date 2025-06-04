import { AppRoutes, RoutePath } from "@shared/const/RoutePath";
import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const StatisticPage = lazy(()=>import("@pages/Statistic/ui/Statistic"))
export const PagesList:Record<AppRoutes,RouteProps> ={
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<StatisticPage/>
    }
}