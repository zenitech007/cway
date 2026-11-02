from pathlib import Path
exec(Path('scripts/research.py').read_text().split('class P')[1].join(['class P','']) if False else 'pass')
import json
from html.parser import HTMLParser
class P(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.img=[]
 def handle_data(self,d):
  if d.strip():self.text.append(d.strip())
 def handle_starttag(self,t,a):
  if t=='img':self.img.append(dict(a))
for f in Path('source/research').glob('*.html'):
 p=P();p.feed(f.read_text(encoding='utf8'));text='\n'.join(p.text);Path(str(f).replace('.html','.txt')).write_text(text,encoding='utf8');Path(str(f).replace('.html','.images.json')).write_text(json.dumps(p.img,indent=2),encoding='utf8')
for name in ['about-us','mission-vision-and-values','nutri-choco','nutri-soya','nutri-milk-superkids','fruit-drink','c-fresh','boxi-energy-drink','darjeeling-ice-tea','assam','cafe','fuji','wellcome','cway-prime-water','locations','csr','customer-care']:
 t=Path('source/research/'+name+'.txt').read_text(encoding='utf8');i=t.rfind('FAQs');print('\n###',name,'\n',t[i+4:t.find('COMPANY COMMITMENT STRIVE',i)])
print('IMAGES')
for name in ['home','nutri-milk','cway-water','csr','image-library']:
 imgs=json.loads(Path('source/research/'+name+'.images.json').read_text());print(name,[(x.get('src'),x.get('alt')) for x in imgs][:30])
