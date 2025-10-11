import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import PagesToRead from '../pages/PagesToRead/PagesToRead';
import BookDetails from '../pages/BookDetails/BookDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=>fetch('bookData.json'),
        path:"/",
        Component: Home
      },
      {
        path: '/about',
        Component:About
      },
      {
      path: '/PagesToRead',
      Component:PagesToRead
      },
      {
        path: '/bookDetails/:id',
        loader:()=>fetch('./bookData.json'),
        Component:BookDetails
      }
    ]

  },
]);



