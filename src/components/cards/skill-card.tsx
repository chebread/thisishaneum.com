const SkillCard = ({ skill }) => {
  const { category, details } = skill;

  return (
    <>
      <li>{category}</li>
      <ul>
        {details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </>
  );
};

export default SkillCard;
