import { Footer, Navbar } from '../../ui';
import { InitialPage } from '../pages';

export const PersonRoutes = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Navbar/>
      <InitialPage />
      <Footer />
    </div>
  )
}
