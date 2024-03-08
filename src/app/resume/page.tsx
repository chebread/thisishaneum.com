const getDatas = async () => {
  const introduceRes = await fetch(`http://localhost:3000/introduce.json`); // fs로 전환하기
  const introduce = await introduceRes.json();

  return {
    introduce,
  };
};

export default async function Page() {
  const { introduce } = await getDatas();

  return (
    <div>
      <h1>{introduce.title}</h1>
      <p>{introduce.details}</p>
    </div>
  );
}
