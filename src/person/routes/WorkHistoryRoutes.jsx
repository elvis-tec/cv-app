import { Footer, Navbar } from '../../ui';
import { WorkHistoryPage } from '../pages';

export const WorkHistoryRoutes = () => {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar/>
        <WorkHistoryPage />
        <Footer />
      </div>
    </>
  )
}