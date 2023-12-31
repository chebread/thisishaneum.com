import fs from 'fs';
import path from 'path';

// (0): vercel에서 오류 발생함 해결하기

const getAllFiles = (dir: any) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

export default getAllFiles;
