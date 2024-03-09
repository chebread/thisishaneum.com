import Link from 'next/link';

const AwardCard = ({ award }) => {
  return (
    <>
      <li>
        <Link href={award.projectUrl} target="_self">
          {award.name}
        </Link>
        <ul>
          {<li>{award.detail}</li>}
          {<li>{award.description}</li>}
          {award.projectStacks != undefined ? (
            <li>{award.projectStacks.join(', ')}</li>
          ) : (
            ''
          )}
        </ul>
      </li>
    </>
  );
};

export default AwardCard;
