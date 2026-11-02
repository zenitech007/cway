from pathlib import Path
p=Path('lib/products.ts');s=p.read_text();s=s.replace("officialImage:images[page]","officialImage:slug==='cway-on-the-go'?'/official/cway-on-the-go.png':slug==='cway-dispenser-water'?'/official/cway-dispenser.png':images[page]");p.write_text(s)
p=Path('app/layout.tsx');s=p.read_text().replace('export const metadata:Metadata={','export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||\'http://localhost:3000\'),');p.write_text(s)
p=Path('next.config.ts');s=p.read_text().replace('devIndicators: false','devIndicators: false, turbopack: {root: process.cwd()}');p.write_text(s)
p=Path('components/sections.tsx');s=p.read_text().replace('href="https://cwaygroup.com/about-us"','href="https://www.cwaygroup.com/csr.php"');p.write_text(s)
