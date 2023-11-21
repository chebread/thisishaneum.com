import fs from 'fs/promises';

function getLastModifiedDate(filepath: string) {
  const mtime = fs.stat(filepath).then(data => data.mtime);

  // const stats = fs.statSync(filepath).mtime;

  return mtime;
}

export default getLastModifiedDate;
