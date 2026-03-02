import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import IntroduccionPage from '@/components/pages/IntroduccionPage';
import PlantasNaturalesPage from '@/components/pages/PlantasNaturalesPage';
import PlantaNaturalDetailPage from '@/components/pages/PlantaNaturalDetailPage';
import VegetacionCosteraPage from '@/components/pages/VegetacionCosteraPage';
import VegetacionCosteraDetailPage from '@/components/pages/VegetacionCosteraDetailPage';
import CultivosPage from '@/components/pages/CultivosPage';
import CultivoDetailPage from '@/components/pages/CultivoDetailPage';
import PlantasAromaticasPage from '@/components/pages/PlantasAromaticasPage';
import PlantaAromaticaDetailPage from '@/components/pages/PlantaAromaticaDetailPage';
import RecomendacionesPage from '@/components/pages/RecomendacionesPage';
import ConclusionesPage from '@/components/pages/ConclusionesPage';
import BibliografiaPage from '@/components/pages/BibliografiaPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "introduccion",
        element: <IntroduccionPage />,
      },
      {
        path: "plantas-naturales",
        element: <PlantasNaturalesPage />,
      },
      {
        path: "plantas-naturales/:id",
        element: <PlantaNaturalDetailPage />,
      },
      {
        path: "vegetacion-costera",
        element: <VegetacionCosteraPage />,
      },
      {
        path: "vegetacion-costera/:id",
        element: <VegetacionCosteraDetailPage />,
      },
      {
        path: "cultivos",
        element: <CultivosPage />,
      },
      {
        path: "cultivos/:id",
        element: <CultivoDetailPage />,
      },
      {
        path: "plantas-aromaticas",
        element: <PlantasAromaticasPage />,
      },
      {
        path: "plantas-aromaticas/:id",
        element: <PlantaAromaticaDetailPage />,
      },
      {
        path: "recomendaciones",
        element: <RecomendacionesPage />,
      },
      {
        path: "conclusiones",
        element: <ConclusionesPage />,
      },
      {
        path: "bibliografia",
        element: <BibliografiaPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
