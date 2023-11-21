import fs from 'fs/promises';

// (0): Vercel 배포시 파일 시간이 접근이 안됨. 해결하기

function getLastModifiedDate(filepath: string) {
  const mtime = fs.stat(filepath).then(data => {
    return data.mtime;
  });

  // const stats = fs.statSync(filepath).mtime;

  return mtime;
}

export default getLastModifiedDate;
