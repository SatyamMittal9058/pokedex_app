import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import PokemonCard from './PokemonCard';

const Browse = () => {
    const appRouter = createBrowserRouter([{
        path: '/',
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/',
                element: <Body/>,
            },
            {
                path: "/pokemondetail/:pokemonid",
                element:<PokemonCard/>,
            }
        ]
    }]);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Browse