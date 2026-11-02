from pathlib import Path
p=Path('lib/products.ts');s=p.read_text().replace("officialImage:brand==='Nutri-Milk'","officialImage:slug==='nutri-yo-strawberry'?'/official/nutri-yo-strawberry.png':brand==='Nutri-Milk'");p.write_text(s)
p=Path('components/experience.tsx');s=p.read_text().replace("import Lenis from 'lenis';","import Lenis from 'lenis';\nimport 'lenis/dist/lenis.css';");s=s.replace("Math.min(1,fraction*9+.15,(1-fraction)*9+.15)","Math.min(1,idx===0?1:fraction*12+.25,idx===items.length-1?1:(1-fraction)*12+.25)");p.write_text(s)
