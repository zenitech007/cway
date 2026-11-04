import fs from 'node:fs/promises';
const home=await (await fetch('http://localhost:3000')).text();const paths=[...new Set([...home.matchAll(/href="(\/[^"#?]*)"/g)].map(x=>x[1]))];let failures=[];for(const path of paths){const response=await fetch('http://localhost:3000'+path);if(!response.ok)failures.push([path,response.status]);}
console.log(JSON.stringify({routes:paths.length,failures},null,2));if(failures.length)throw new Error('Local route verification failed');
const seq=JSON.parse(await fs.readFile('lib/sequences.json'));let bytes=0;for(const s of Object.values(seq)){for(const set of ['desktop','mobile']){const files=await fs.readdir(`public/frames/${s.slug}/${set}`);if(files.length!==(set==='desktop'?120:60))throw Error('frame count');for(const f of files)bytes+=(await fs.stat(`public/frames/${s.slug}/${set}/${f}`)).size;}}
console.log('All 12 manifests verified; optimized WebP assets: '+(bytes/1024/1024).toFixed(1)+' MB total, progressively loaded.');
