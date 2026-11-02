import sharp from 'sharp';
import fs from 'node:fs/promises';
sharp.concurrency(1);
const catalog={},jobs=[];
for(const slug of await fs.readdir('source/frames')){
 const dir=`source/frames/${slug}`;const m=JSON.parse(await fs.readFile(`${dir}/manifest.json`,'utf8'));
 const {data}=await sharp(`${dir}/frame-001.jpg`).extract({left:0,top:0,width:240,height:240}).resize(1,1).raw().toBuffer({resolveWithObject:true});
 const color='#'+[...data].slice(0,3).map(v=>v.toString(16).padStart(2,'0')).join('');let keyVisual=null;try{await fs.access(`public/products/${slug}.png`);keyVisual=`/products/${slug}.png`}catch{}
 catalog[slug]={...m,color,keyVisual};
 for(const [set,width,step]of [['desktop',1600,1],['mobile',960,2]]){const out=`public/frames/${slug}/${set}`;await fs.mkdir(out,{recursive:true});for(let i=1;i<=m.frameCount;i+=step){const n=`frame-${String(i).padStart(3,'0')}`;jobs.push({input:`${dir}/${n}.jpg`,output:`${out}/${n}.webp`,width})}}
}
await fs.writeFile('lib/sequences.json',JSON.stringify(catalog,null,2));let cursor=0,done=0;
async function worker(){while(cursor<jobs.length){const j=jobs[cursor++];try{await fs.access(j.output)}catch{await sharp(j.input).resize(j.width).webp({quality:76,effort:0}).toFile(j.output)}if(++done%180===0)console.log(`${done}/${jobs.length} frames ready`)}}
await Promise.all(Array.from({length:4},worker));console.log('All sequences converted.');
