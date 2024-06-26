import { Link,Router,Route,Routes } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from 'react-query'
import {ReactQueryDevtools} from  'react-query/devtools'
import HeadingSection from './sections/HeadingSection/HeadingSection'
import InfoSection from './sections/InfoSection/InfoSection'
import Footer from './sections/Footer/Footer'
import { Home } from './components/Home'
import { Superhero } from './components/Superhero'
import { RQSuperHero } from './components/RQSuperHero'
import { HerosDetails } from './components/HerosDetails'
import { ParallelQueries } from './components/ParallelQueries'
import { DynamicParallel } from './components/DynamicParallel'
import { DependentQueries }  from './components/DependentQueries'
import { PagenatedQueries } from './components/PagenatedQueries'
import './App.scss'
import { InfiniteQuery } from './components/InfiniteQuery'

const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <div className='wrapper_hero container' >
        <h1>React Query learning</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heros'>Super hero</Link>
            </li>
            <li>
              <Link to='/rq-super-heros'>RQ superhero</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pagenation' element={<PagenatedQueries/>} />
        <Route path='/dependent' element={<DependentQueries email='amirqulov323@gmail.com'/>} />
        <Route path='/infinite-query' element={<InfiniteQuery/>} />
        <Route path='/dynamic-parallel' element={<DynamicParallel heroId={[1,3]}/>}  />
        <Route path='/super-heros' element={<Superhero/>} />
        <Route path='/heros-details/:heroId' element={<HerosDetails/>} />
        <Route path='/parallel-queries' element={<ParallelQueries/>} />
        <Route path='/rq-super-heros' element={<RQSuperHero/>} />
        </Routes>
      </div>
      {/* <div className="wrapper"> */}
        {/* <HeadingSection /> */}
        {/* <InfoSection /> */}
      {/* </div> */}
      <ReactQueryDevtools  initialIsOpen ={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
