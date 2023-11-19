import { type } from "os"
import { AboutPage } from "pages/AboutPage"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticleEditPage } from "pages/ArticleEditPage"
import { ArticlePage } from "pages/ArticlePage"
import { MainPage } from "pages/MainPage"
import { NotefoundPage } from "pages/NotfoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',// +:id
  [AppRoutes.ARTICLE]: '/article',
  [AppRoutes.ARTICLE_DETAILS]: '/article/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/article/new',
  [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePatch.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePatch.about,
    element: <AboutPage/>
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePatch.profile}:id`,
    element: <ProfilePage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePatch.article,
    element: <ArticlePage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePatch.article_details}:id`,
    element: <ArticleDetailsPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePatch.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
},
[AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePatch.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
},
  [AppRoutes.NOT_FOUND]: {
    path: RoutePatch.not_found,
    element: <NotefoundPage/>
  },
}
