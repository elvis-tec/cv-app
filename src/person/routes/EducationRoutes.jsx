import { Footer, Navbar } from '../../ui';
import { EducationPage } from '../pages';

export const EducationRoutes = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Navbar />
      <EducationPage />
      <Footer />
    </div>
  )
}