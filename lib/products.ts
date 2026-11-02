import sequences from './sequences.json';
import official from './official-images.json';
export type Category = 'Water' | 'Beverages' | 'Snacks';
export type Product = {slug:string;name:string;brand:string;category:Category;flavour:string|null;sizes:string[];colours:string[];sequenceSlug:string|null;keyVisual:string|null;officialPageUrl:string;officialImage:string;description:string;headline:string};
type Sequence = {slug:string;frameCount:number;filenamePattern:string;fps:number;color:string;keyVisual:string|null};
export const sequenceData = sequences as Record<string,Sequence>;
const images=official as Record<string,string>;
function product(slug:string,name:string,brand:string,category:Category,sizes:string[],page:string,description:string,headline:string,flavour:string|null=null,sequenceSlug:string|null=null):Product { const s=sequenceSlug?sequenceData[sequenceSlug]:null;return {slug,name,brand,category,sizes,flavour,sequenceSlug,keyVisual:s?.keyVisual||null,colours:[s?.color||'#e8eef7','#003c99'],officialPageUrl:`https://cwaygroup.com/${page}`,officialImage:slug==='nutri-yo-strawberry'?'/official/nutri-yo-strawberry.png':brand==='Nutri-Milk'?`/official/nutri-milk-${flavour?.toLowerCase()}.png`:slug==='cway-on-the-go'?'/official/cway-on-the-go.png':slug==='cway-dispenser-water'?'/official/cway-dispenser.png':images[page],description,headline}; }
const water=product('cway-on-the-go','CWAY On-the-Go','CWAY Water','Water',['1.5L','750ml'],'cway-water','Bottled table water for wherever the day takes you.','Water, wherever life goes.',null,'cway-on-the-go-table-water-1.5l-and-750ml');
const dispenser=product('cway-dispenser-water','CWAY Dispenser Water','CWAY Water','Water',['18.9L'],'cway-water','Refillable dispenser water for homes and offices.','At the heart of home.',null,'cway-dispenser-water-18.9litre');
export const products:Product[]=[water,dispenser,
...['Apple','Orange','Peach','Pineapple','Banana','Pear'].map(f=>product(`nutri-milk-${f.toLowerCase()}`,`Nutri-Milk ${f}`,'Nutri-Milk','Beverages',['500ml'],'nutri-milk','A blend of milk and fruit flavour in an easy-to-grip bottle.','A little more flavour.',f,`nutri-milk-${f.toLowerCase()}-500ml`)),
...['Sweetened','Strawberry'].map(f=>product(`nutri-yo-${f.toLowerCase()}`,`Nutri-Yo ${f}`,'Nutri-Yo','Beverages',['500ml','125ml'],'nutri-yo','Sweetened yoghurt, made through natural fermentation.','Yoghurt, your way.',f,`nutri-yo-${f.toLowerCase()}-yoghurt-400ml-and-125ml`)),
product('nutri-choco','Nutri-Choco','Nutri-Choco','Beverages',['400ml','210ml'],'nutri-choco','A chocolate milk drink made with malt, milk and cocoa powder.','A chocolate kind of moment.',null,'nutri-choco-chocolate-milk-drink-400ml'),
product('maca-plus','Maca Plus','Maca Plus','Beverages',['600ml'],'maca-plus','Meet Maca Plus, the CWAY energy drink.','Turn up the moment.',null,'maca-plus-energy-drink-600ml'),
product('cway-prime-water','CWAY Prime Water','CWAY Prime Water','Water',['18.9L','750ml'],'cway-prime-water','Prime water in refillable dispenser and table-water formats.','Meet your Prime.'),
product('dispenser-machines','Dispenser Machines','Dispenser Machines','Water',[],'dispenser-machines','Explore the CWAY range of water dispenser machines.','A place for every pour.'),
product('nutri-milk-superkids','Nutri-Milk Superkids','Nutri-Milk Superkids','Beverages',['210ml'],'nutri-milk-superkids','The kids’ size of Nutri-Milk, in a range of fruit flavours.','Little bottles. Big moments.'),
product('nutri-soya','Nutri Soya','Nutri Soya','Beverages',['400ml'],'nutri-soya','A soya bean drink in Soya Milk and Malt Soya variants.','A different kind of milk.'),
product('fruit-drink','Fruit Drink','Fruit Drink','Beverages',['500ml'],'fruit-drink','Discover CWAY’s fruit drink range.','Make it fruity.'),
product('c-fresh','C Fresh','C Fresh','Beverages',['500ml'],'c-fresh','A pineapple and coconut flavoured drink.','A tropical moment.'),
product('boxi','BOXI Energy Drink','BOXI Energy Drink','Beverages',['400ml'],'boxi-energy-drink','A ready-to-drink, non-carbonated energy drink.','Meet BOXI.'),
product('darjeeling-ice-tea','Darjeeling Ice Tea','Darjeeling Ice Tea','Beverages',['500ml','400ml'],'darjeeling-ice-tea','A drink blending Darjeeling tea and fruit flavours.','Take time for tea.'),
product('assam-milk-tea','Assam Milk Tea Drink','Assam Milk Tea Drink','Beverages',['400ml'],'assam','Assam tea blended with creamy milk.','Tea meets creamy.'),
product('cappuccino-milk-drink','Cappuccino Milk Drink','Cappuccino Milk Drink','Beverages',['400ml'],'cafe','A ready-to-drink coffee-flavoured milk beverage.','Your coffee moment.'),
product('fuji-probiotic-drink','Fuji Probiotic Drink','Fuji Probiotic Drink','Beverages',['400ml'],'fuji','A carbonated soft drink with yoghurt flavour.','Meet Fuji.'),
product('wellcome','Wellcome','Wellcome','Snacks',['60g','30g'],'wellcome','Three-layered chips in Spicy Chicken and Chocolate variants.','Single crunch. Triple delight.')];
export const storyProducts=products.filter(p=>p.sequenceSlug);
export const chapters=[{id:'water',number:'01',label:'Water',title:'It all begins with water.',products:storyProducts.slice(0,2)},{id:'nutri-milk',number:'02',label:'Nutri-Milk',title:'Find your flavour.',products:storyProducts.slice(2,8)},{id:'nutri-yo',number:'03',label:'Nutri-Yo',title:'A softer side of the day.',products:storyProducts.slice(8,10)},{id:'nutri-choco',number:'04',label:'Nutri-Choco',title:'Make room for chocolate.',products:storyProducts.slice(10,11)},{id:'maca-plus',number:'05',label:'Maca Plus',title:'A change of pace.',products:storyProducts.slice(11,12)}];
export function poster(p:Product,set='mobile'){return p.keyVisual||(p.sequenceSlug?`/frames/${p.sequenceSlug}/${set}/frame-001.webp`:p.officialImage)}

