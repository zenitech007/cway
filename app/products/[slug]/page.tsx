import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {products} from '@/lib/products';
import {SequenceChapter} from '@/components/experience';
import Link from 'next/link';
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=products.find(x=>x.slug===slug);return {title:p?.name||'Product not found',description:p?.description}}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(x=>x.slug===slug);if(!p)notFound();return <><div id="top"/>{p.sequenceSlug&&<SequenceChapter items={[p]} id="product-story" label={p.brand}/>}<section className="product-info section"><img src={p.officialImage} alt={`${p.name} official product packaging`}/><div><Link className="eyebrow" href="/brands">← THE CWAY COLLECTION / {p.category.toUpperCase()}</Link><h1>{p.name}</h1><p>{p.description}</p><div className="sizes">{p.sizes.length?p.sizes.join(' / '):'Explore the full range on the official product page.'}</div><a className="text-link" href={p.officialPageUrl}>Official product details ↗</a><br/><Link className="text-link" href="/contact">Get in touch ↗</Link></div></section></>}
