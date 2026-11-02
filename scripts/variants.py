import json,subprocess,concurrent.futures,re
from pathlib import Path
jobs=[]
for flavour,n in [('apple',1),('orange',3),('peach',4),('pineapple',6),('banana',2),('pear',5)]:jobs.append((f'https://cwaygroup.com/img/nutri-milk-{n}.png',f'public/official/nutri-milk-{flavour}.png'))
imgs=json.loads(Path('source/research/nutri-yo.images.json').read_text());print([x.get('src') for x in imgs[5:]])
h=Path('source/research/csr-live.html').read_text(encoding='utf8');srcs=re.findall(r'<img[^>]+src=[\"\']([^\"\']+)',h);print('CSR',srcs[:12])
def dl(j):subprocess.run(['curl.exe','-sL','--max-time','40',j[0],'-o',j[1]])
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as e:list(e.map(dl,jobs))
p=Path('lib/products.ts');s=p.read_text().replace("officialImage:slug==='cway-on-the-go'","officialImage:brand==='Nutri-Milk'?`/official/nutri-milk-${flavour?.toLowerCase()}.png`:slug==='cway-on-the-go'");p.write_text(s)
