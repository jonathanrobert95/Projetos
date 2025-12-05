import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Series from '../pages/Series'
import DefaulLayout from '../layout/DefaultLayout'
import Detail from '../containers/Detail'


function Router() {

    return (

        <Routes>
            <Route element={<DefaulLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/Filmes' element={<Movies />} />
                <Route path='/Series' element={<Series />} />
                <Route path='/Detalhe/:id' element={<Detail />} />
            </Route>

        </Routes>
    )
}

export default Router