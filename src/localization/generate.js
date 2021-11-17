import ru from './ru.js';
import fs from 'fs';

const h = Object.keys(ru).reduce((acc, curr) => ((acc[curr] = curr), acc), {});

fs.writeFileSync(
  './src/localization/h.js',
  `export default ${JSON.stringify(h)}`,
);
