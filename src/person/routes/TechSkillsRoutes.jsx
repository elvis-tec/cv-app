import { Footer, Navbar } from '../../ui';
import { TechSkillsPage } from '../pages';

export const TechSkillsRoutes = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />
        <TechSkillsPage />
        <Footer />
    </div>
  )
}
