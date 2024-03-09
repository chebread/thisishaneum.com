import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <>
      <li>
        <Link href={project.projectUrl} target="_self">
          {project.name}
        </Link>
        <ul>
          {project.description != undefined ? (
            <li>{project.description}</li>
          ) : (
            ''
          )}
          {project.projectStacks != undefined ? (
            <li>{project.projectStacks.join(', ')}</li>
          ) : (
            ''
          )}
        </ul>
      </li>
    </>
  );
};

export default ProjectCard;
