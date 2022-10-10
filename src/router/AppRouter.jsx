import { Route, Routes } from 'react-router-dom';
import { EducationRoutes, PersonRoutes, TechSkillsRoutes, WorkHistoryRoutes } from '../person';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PersonRoutes />} />
      <Route path="/education" element={<EducationRoutes />} />
      <Route path="/work" element={<WorkHistoryRoutes />} />
      <Route path="/techs" element={<TechSkillsRoutes />} />
    </Routes>
  )
}
