import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentTemplate from './components/templates/personal-brand-student-profile/StudentTemplate';
import ITProfessionalTemplate from './components/templates/professionals/ITProfessionalTemplate';
import ITProfessionalUmbra from './components/templates/professionals/ITProfessionalUmbra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// To add more templates, just import them and add to this array
export const templateList = [
  {
    id: 'student-01',
    component: StudentTemplate,
    path: '/templates/student-profile',
    title: "Student Profile - Sirius", // Must be 'title'
    category: "Personal Brand",
  },
    {
    id: 'professional-01',
    component: ITProfessionalTemplate,
    path: '/templates/professional-profile',
    title: "Professional Profile - Sirius", // Must be 'title'
    category: "Personal Brand",
  },
      {
    id: 'professional-02',
    component: ITProfessionalUmbra,
    path: '/templates/professional-profile-umbra',
    title: "Professional Profile - Umbra", // Must be 'title'
    category: "Personal Brand",
  },
  // { id: 'pro-01', component: ProfessionalTemplate, ...ProfessionalTemplate.metadata }
];
