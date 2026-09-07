import React from 'react';
import { RouterProvider, RouterOutlet } from './router';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import CaseStudiesIndexPage from './pages/CaseStudiesIndexPage';
import CaseStudyPage from './pages/CaseStudyPage';

const routes = [
  { path: '/', component: HomePage },
  { path: '/work', component: WorkPage },
  { path: '/case-studies', component: CaseStudiesIndexPage },
  { path: '/case-studies/:slug', component: CaseStudyPage },
  { path: '*', component: HomePage },
];

export default function App() {
  return (
    <RouterProvider routes={routes}>
      <RouterOutlet />
    </RouterProvider>
  );
}
