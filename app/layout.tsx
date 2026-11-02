import type {Metadata} from 'next';
import './globals.css';
import {Header,Footer,SmoothScroll} from '@/components/experience';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),title:{default:'CWAY Group — CWAY for Every Family',template:'%s | CWAY Group'},description:'Explore the world of CWAY. Water, beverages and snacks for the moments that make up your everyday.',openGraph:{title:'CWAY for Every Family',description:'Discover the CWAY collection.',type:'website',images:['/official/logo.png']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><SmoothScroll/><Header/><main id="main">{children}</main><Footer/></body></html>}
