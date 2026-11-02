import {Hero,ChapterRail,SequenceChapter,Portfolio,Reveal} from '@/components/experience';
import {Presence,CSR} from '@/components/sections';
import {chapters} from '@/lib/products';
export default function Home(){return <><Hero/><ChapterRail/><section className="intro section"><Reveal><span className="eyebrow">A LITTLE CWAY. EVERY DAY.</span><h2>Life is full of moments.<br/><span className="muted">There’s a CWAY for yours.</span></h2><p>Water for the journey. Flavour for the pause.<br/>Favourites for the whole family.</p></Reveal><span className="intro-mark">CWAY FOR EVERY FAMILY</span></section>{chapters.map(c=><SequenceChapter key={c.id} items={c.products} id={c.id} number={c.number} label={c.label}/>)}<Portfolio/><Presence/><CSR/></>}
