const EducationCard = ({ education }) => {
  return (
    <>
      <li>{education.title}</li>
      <ul>
        {education.details.map(detail => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
    </>
  );
};

export default EducationCard;
