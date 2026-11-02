import json,subprocess,concurrent.futures
from pathlib import Path
pages=['dispenser-machines','cway-prime-water','nutri-milk-superkids','nutri-soya','fruit-drink','c-fresh','boxi-energy-drink','darjeeling-ice-tea','assam','cafe','fuji','wellcome','nutri-milk','nutri-yo','nutri-choco','maca-plus','cway-water']
jobs=[];mapping={}
for page in pages:
 imgs=json.loads(Path(f'source/research/{page}.images.json').read_text()); items=[x['src'] for x in imgs if x.get('src') and 'LOGO' not in x['src']];src=items[1] if len(items)>1 else items[0];ext=Path(src).suffix;dest=f'public/official/{page}{ext}';mapping[page]='/'+dest.removeprefix('public/');jobs.append((src,dest))
jobs += [('wp-content/uploads/2022/05/FINAL_GROUP_LOGO_1.png','public/official/logo.png'),('wp-content/uploads/2024/03/iwd.jpg','public/official/community.jpg')]
def dl(job):
 src,dest=job;subprocess.run(['curl.exe','-sL','--max-time','50','https://cwaygroup.com/'+src,'-o',dest])
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:list(ex.map(dl,jobs))
Path('lib/official-images.json').write_text(json.dumps(mapping,indent=2))
for name in ['fruit-drink','c-fresh','dispenser-machines']:
 t=Path(f'source/research/{name}.txt').read_text(encoding='utf8');t=t[:t.find('COMPANY COMMITMENT STRIVE')];print(name,t[t.rfind('FAQs')+4:][:1800])
