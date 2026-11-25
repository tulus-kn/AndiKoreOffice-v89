import{p as E}from"./chunk-JWPE2WC7-CnTBqAaL.js";import{s as F,g as R,o as z,n as D,a as P,b as B,_ as c,D as G,p as W,A as w,y as b,B as V,l as C,E as _,d as j}from"./mermaid.core-Dta6dAAb.js";import{p as H}from"./cynefin-OW5HDTMX-TlBldmuJ.js";import"./index-DfjR4kE1.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},v=32,M={axes:[],curves:[],options:h},x=structuredClone(M),U=V.radar,Z=c(()=>w({...U,...b().radar}),"getConfig"),L=c(()=>x.axes,"getAxes"),q=c(()=>x.curves,"getCurves"),J=c(()=>x.options,"getOptions"),K=c(a=>{x.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),N=c(a=>{x.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:Q(t.entries)}))},"setCurves"),Q=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=L();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>s.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),X=c(a=>{const t=a.reduce((e,r)=>(e[r.name]=r,e),{});x.options={showLegend:t.showLegend?.value??h.showLegend,ticks:t.ticks?.value??h.ticks,max:t.max?.value??h.max,min:t.min?.value??h.min,graticule:t.graticule?.value??h.graticule},x.options.ticks>v&&(C.warn(`Radar diagram ticks (${x.options.ticks}) exceeds maximum allowed (${v}). Using ${v} instead.`),x.options.ticks=v)},"setOptions"),Y=c(()=>{W(),x=structuredClone(M)},"clear"),f={getAxes:L,getCurves:q,getOptions:J,setAxes:K,setCurves:N,setOptions:X,getConfig:Z,clear:Y,setAccTitle:B,getAccTitle:P,setDiagramTitle:D,getDiagramTitle:z,getAccDescription:R,setAccDescription:F},tt=c(a=>{E(a,f);const{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),et={parse:c(async a=>{const t=await H("radar",a);C.debug(t),tt(t)},"parse")},at=c((a,t,e,r)=>{const s=r.db,o=s.getAxes(),l=s.getCurves(),i=s.getOptions(),n=s.getConfig(),d=s.getDiagramTitle(),p=G(t),g=rt(p,n),u=i.max??Math.max(...l.map(y=>Math.max(...y.entries))),m=i.min,$=Math.min(n.width,n.height)/2;st(g,o,$,i.ticks,i.graticule),it(g,o,$,n),k(g,o,l,m,u,i.graticule,n),O(g,l,i.showLegend,n),g.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-n.height/2-n.marginTop)},"draw"),rt=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return j(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),st=c((a,t,e,r,s)=>{if(s==="circle")for(let o=0;o<r;o++){const l=e*(o+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(s==="polygon"){const o=t.length;for(let l=0;l<r;l++){const i=e*(l+1)/r,n=t.map((d,p)=>{const g=2*p*Math.PI/o-Math.PI/2,u=i*Math.cos(g),m=i*Math.sin(g);return`${u},${m}`}).join(" ");a.append("polygon").attr("points",n).attr("class","radarGraticule")}}},"drawGraticule"),it=c((a,t,e,r)=>{const s=t.length;for(let o=0;o<s;o++){const l=t[o].label,i=2*o*Math.PI/s-Math.PI/2,n=Math.cos(i),d=Math.sin(i);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*n).attr("y2",e*r.axisScaleFactor*d).attr("class","radarAxisLine");const p=n>.01?"start":n<-.01?"end":"middle",g=d>.01?"hanging":d<-.01?"auto":"central",u=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*n+u*n).attr("y",e*r.axisLabelFactor*d+u*d).attr("text-anchor",p).attr("dominant-baseline",g).attr("class","radarAxisLabel")}},"drawAxes");function k(a,t,e,r,s,o,l){const i=t.length,n=Math.min(l.width,l.height)/2;e.forEach((d,p)=>{if(d.entries.length!==i)return;const g=d.entries.map((u,m)=>{const $=2*Math.PI*m/i-Math.PI/2,y=A(u,r,s,n),S=y*Math.cos($),I=y*Math.sin($);return{x:S,y:I}});o==="circle"?a.append("path").attr("d",T(g,l.curveTension)).attr("class",`radarCurve-${p}`):o==="polygon"&&a.append("polygon").attr("points",g.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}c(k,"drawCurves");function A(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}c(A,"relativeRadius");function T(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const o=a[(s-1+e)%e],l=a[s],i=a[(s+1)%e],n=a[(s+2)%e],d={x:l.x+(i.x-o.x)*t,y:l.y+(i.y-o.y)*t},p={x:i.x-(n.x-l.x)*t,y:i.y-(n.y-l.y)*t};r+=` C${d.x},${d.y} ${p.x},${p.y} ${i.x},${i.y}`}return`${r} Z`}c(T,"closedRoundCurve");function O(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,o=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((i,n)=>{const d=a.append("g").attr("transform",`translate(${s}, ${o+n*l})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${n}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}c(O,"drawLegend");var nt={draw:at},ot=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),lt=c(a=>{const t=_(),e=b(),r=w(t,e.themeVariables),s=w(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),ct=c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=lt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${ot(t,e)}
	`},"styles"),dt={parser:et,db:f,renderer:nt,styles:ct};export{dt as diagram};
