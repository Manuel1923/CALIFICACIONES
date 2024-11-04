import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import ListaEstadoasistencia from './views/pages/calificaciones/ListaEstadoasistencia'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const ListaCiclos = React.lazy(() => import('./views/pages/calificaciones/ListaCiclos'))
const ListaPonderaciones = React.lazy(() => import('./views/pages/calificaciones/ListaPonderaciones'))
const ListaGrados = React.lazy(() => import('./views/pages/calificaciones/ListaGrados'))
const ListaProfesores = React.lazy(() => import('./views/pages/calificaciones/ListaProfesores'))
const ListaTipoContrato = React.lazy(() => import('./views/pages/calificaciones/ListaTipoContrato'))
const ListaActividadesAca = React.lazy(() => import('./views/pages/calificaciones/ListaActividadesAca'))
const ListaEspecialidades = React.lazy(() => import('./views/pages/calificaciones/ListaEspecialidades'))
const ListaGradoAcademico = React.lazy(() => import('./views/pages/calificaciones/ListaGradoAcademico'))
const ListaAsistencia = React.lazy(() => import('./views/pages/calificaciones/ListaAsistencia'))
const ListaAsignaturas = React.lazy(() => import('./views/pages/calificaciones/ListaAsignaturas'))
const ListaParciales = React.lazy(() => import('./views/pages/calificaciones/ListaParciales'))
const ListaHistoriales = React.lazy(() => import('./views/pages/calificaciones/ListaHistoriales')) 


const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/ciclos" name="Lista Ciclos" element={<ListaCiclos />} />   
          <Route exact path="/ponderaciones" name="Lista Ponderaciones" element={<ListaPonderaciones />} />  
          <Route exact path="/grados" name="Lista Grados" element={<ListaGrados />} />    
          <Route exact path="/profesores" name="Lista Profesores" element={<ListaProfesores />} />   
          <Route exact path="/tiposContrato" name="Lista Tipo Contratos" element={<ListaTipoContrato />} />
          <Route exact path="/actividades" name="Lista Actividades Academicas" element={<ListaActividadesAca />} />
          <Route exact path="/especialidades" name="Lista Especialidades" element={<ListaEspecialidades />} />
          <Route exact path="/gradosacademicos" name="Lista Grados academicos" element={<ListaGradoAcademico />} />
          <Route exact path="/asistencia" name="Lista asistencia" element={<ListaAsistencia />} />
          <Route exact path="/estadoasistencia" name="Lista estado asistencia" element={<ListaEstadoasistencia />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route exact path="/asignaturas" name="Lista Asignaturas" element={<ListaAsignaturas />} />
          <Route exact path="/parciales" name="Lista Parciales" element={<ListaParciales />} />
          <Route exact path="/historiales" name="Lista Historiales" element={<ListaHistoriales />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
