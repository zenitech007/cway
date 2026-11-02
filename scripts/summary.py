import re,json
from pathlib import Path
for name in ['about-us','mission-vision-and-values','nutri-choco','nutri-soya','nutri-milk-superkids','fruit-drink','c-fresh','boxi-energy-drink','darjeeling-ice-tea','assam','cafe','fuji','wellcome','cway-prime-water','locations','customer-care','image-library']:
 t=Path('source/research/'+name+'.txt').read_text(encoding='utf8');end=t.find('COMPANY COMMITMENT STRIVE'); t=t[:end];i=t.rfind('FAQs');print('\n###',name,'\n',t[i+4:][:6500]); imgs=json.loads(Path('source/research/'+name+'.images.json').read_text());print('IMAGES',[(x.get('src'),x.get('alt')) for x in imgs[5:9]])
