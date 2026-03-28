import StudentTemplate from './components/templates/personal-brand-student-profile/StudentTemplate';
import ITProfessionalTemplate from './components/templates/professionals/ITProfessionalTemplate';
import ITProfessionalUmbra from './components/templates/professionals/ITProfessionalUmbra';
import HotelBrick from './components/templates/hotel-brick/HotelBrick';

export const templateList = [
  {
    id: 'student-01',
    component: StudentTemplate,
    path: '/templates/student-profile',
    title: "Student Profile - Sirius",
    category: "Personal Brand",
  },
  {
    id: 'professional-01',
    component: ITProfessionalTemplate,
    path: '/templates/professional-profile',
    title: "Professional Profile - Sirius",
    category: "Personal Brand",
  },
  {
    id: 'professional-02',
    component: ITProfessionalUmbra,
    path: '/templates/professional-profile-umbra',
    title: "Professional Profile - Umbra",
    category: "Personal Brand",
  },
  {
    id: 'business-01',
    component: HotelBrick,
    path: '/templates/hotel-brick',
    title: "Hotel Brick & Walls",
    category: "Business",
  },
];