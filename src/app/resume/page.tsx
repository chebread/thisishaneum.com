import { promises as fs } from 'fs';
import IntroduceCard from 'components/cards/introduce-card';
import ContactCard from 'components/cards/contact-card';
import SkillCard from 'components/cards/skill-card';
import ProjectCard from 'components/cards/project-card';
import AwardCard from 'components/cards/award-card';
import EducationCard from 'components/cards/education-card';

type HomeProps = {
  introduces: string[];
  contacts: Contact[];
  skills: Skill[];
  awards: Award[];
  projects: Project[];
  educations: Education[];
};

export default async function Page() {
  const {
    introduces,
    contacts,
    skills,
    projects,
    awards,
    educations,
  }: HomeProps = await getDatas();

  return (
    <>
      <h2>Introduce</h2>
      <blockquote>뜨거운 열정보다 중요한 것은 지속적인 열정이다.</blockquote>
      {introduces.map(introduce => {
        return <IntroduceCard key={introduce} introduce={introduce} />;
      })}

      <h2>Contact</h2>
      <ul>
        {contacts.map(contact => {
          return <ContactCard key={contact.category} contact={contact} />;
        })}
      </ul>

      <h2>Skills</h2>
      <ul>
        {skills.map(skill => {
          return <SkillCard key={skill.category} skill={skill} />;
        })}
      </ul>

      <h2>Awards</h2>
      <ul>
        {awards.map(award => {
          return <AwardCard key={award.name} award={award} />;
        })}
      </ul>

      <h2>Side Project</h2>
      <ul>
        {projects.map(project => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </ul>

      <h2>Education</h2>
      <ul>
        {educations.map(education => {
          return <EducationCard key={education.title} education={education} />;
        })}
      </ul>
    </>
  );
}

const getFile = async (path: string) => {
  const introducesRes = await fs.readFile(process.cwd() + path, 'utf8');
  const introduces = JSON.parse(introducesRes);
  return introduces;
};

const getDatas = async () => {
  const introduces = await getFile('/public/data/introduces.json');
  const contacts = await getFile('/public/data/contacts.json');
  const skills = await getFile('/public/data/skills.json');
  const projects = await getFile('/public/data/projects.json');
  const awards = await getFile('/public/data/awards.json');
  const educations = await getFile('/public/data/educations.json');

  return {
    introduces,
    contacts,
    skills,
    projects,
    awards,
    educations,
  };
};
