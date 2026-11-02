import zipfile,json,shutil
from pathlib import Path
for z in Path('public').glob('*.zip'):
 slug=z.stem.strip().replace('meca-','maca-'); out=Path('source/frames')/slug;out.mkdir(parents=True,exist_ok=True)
 with zipfile.ZipFile(z) as f:
  files=sorted([n for n in f.namelist() if n.lower().endswith(('.jpg','.jpeg'))])
  for i,n in enumerate(files): (out/f'frame-{i+1:03}.jpg').write_bytes(f.read(n))
 (out/'manifest.json').write_text(json.dumps({'slug':slug,'frameCount':len(files),'filenamePattern':'frame-%03d.jpg','fps':24},indent=2))
 Path('source/zips').mkdir(exist_ok=True);shutil.move(str(z),str(Path('source/zips')/(slug+'.zip')))
 print(slug,len(files))
