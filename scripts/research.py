import re,subprocess,concurrent.futures,json
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin
base='https://cwaygroup.com/'
h=Path('source/research/home.html').read_text(encoding='utf8')
links=sorted(set(urljoin(base,u) for u in re.findall(r'href=[\"\']([^\"\'#]*)',h) if u and not any(x in u for x in ['wp-','?','.css','.js','google','mailto','tel:']) and not u.startswith('#')))
def run(u):
 name=u.rstrip('/').split('/')[-1] or 'home'
 subprocess.run(['curl.exe','-sL',u,'-o','source/research/'+name+'.html'])
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:list(ex.map(run,links))
class P(HTMLParser):
 def __init__(self):super().__init__();self.text=[];self.img=[]
 def handle_data(self,d):
  if d.strip():self.text.append(d.strip())
 def handle_starttag(self,t,a):
  if t=='img':self.img.append(dict(a))
for f in Path('source/research').glob('*.html'):
 p=P();p.feed(f.read_text(encoding='utf8'));text='\n'.join(p.text);start=text.find('Humberger');Path(str(f).replace('.html','.txt')).write_text(text,encoding='utf8');Path(str(f).replace('.html','.images.json')).write_text(json.dumps(p.img,indent=2),encoding='utf8')
print('\n'.join(links))
