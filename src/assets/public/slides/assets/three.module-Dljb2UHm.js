const $p="186",Qp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ef={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lh=0,il=1,ch=2,tf=3,rf=0,Rn=1,hh=2,Gr=3,Ki=0,Gt=1,wi=2,Ai=0,Vr=1,rl=2,nl=3,al=4,uh=5,nf=6,fr=100,dh=101,ph=102,fh=103,mh=104,gh=200,_h=201,vh=202,xh=203,sl=204,ol=205,yh=206,Mh=207,Sh=208,bh=209,Th=210,Eh=211,wh=212,Ah=213,Ch=214,Pa=0,La=1,Da=2,kr=3,Na=4,Ua=5,Oa=6,Fa=7,In=0,Rh=1,Ih=2,pi=0,ll=1,cl=2,hl=3,ul=4,dl=5,pl=6,fl=7,ml="attached",Ph="detached",Ba=300,Ci=301,$i=302,Pn=303,Ln=304,Hr=306,Dn=1e3,Yt=1001,Nn=1002,bt=1003,gl=1004,af=1004,Wr=1005,sf=1005,gt=1006,Un=1007,of=1007,Ri=1008,lf=1008,Zt=1009,_l=1010,vl=1011,Xr=1012,za=1013,oi=1014,Vt=1015,fi=1016,Ga=1017,Va=1018,jr=1020,xl=35902,yl=35899,Ml=1021,Sl=1022,kt=1023,Ii=1026,Qi=1027,ka=1028,On=1029,er=1030,Ha=1031,cf=1032,Wa=1033,Fn=33776,Bn=33777,zn=33778,Gn=33779,Xa=35840,ja=35841,qa=35842,Ya=35843,Za=36196,Ja=37492,Ka=37496,$a=37488,Qa=37489,Vn=37490,es=37491,ts=37808,is=37809,rs=37810,ns=37811,as=37812,ss=37813,os=37814,ls=37815,cs=37816,hs=37817,us=37818,ds=37819,ps=37820,fs=37821,ms=36492,gs=36494,_s=36495,vs=36283,xs=36284,kn=36285,ys=36286,Lh=2200,Dh=2201,Nh=2202,Hn=2300,Ms=2301,Ss=2302,bl=2303,mr=2400,gr=2401,Wn=2402,bs=2500,Tl=2501,hf=0,uf=1,df=2,Uh=3200,pf=3201,ff=3202,mf=3203,Ui=0,Oh=1,Oi="",Jt="srgb",Xn="srgb-linear",jn="linear",ot="srgb",gf="",_f="rg",vf="ga",xf=0,Ts=7680,yf=7681,Mf=7682,Sf=7683,bf=34055,Tf=34056,Ef=5386,wf=512,Af=513,Cf=514,Rf=515,If=516,Pf=517,Lf=518,Fh=519,Bh=512,zh=513,Gh=514,Es=515,Vh=516,kh=517,ws=518,Hh=519,As=35044,Df=35048,Nf=35040,Uf=35045,Of=35049,Ff=35041,Bf=35046,zf=35050,Gf=35042,Vf="100",El="300 es",ii=2e3,_r=2001,kf={COMPUTE:"compute",RENDER:"render"},Hf={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Wf={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Xf={TEXTURE_COMPARE:"depthTextureCompare"},jf={NONE:0,SHARED:1,FULL:2};function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const Yf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function qr(n,e){return new Yf[n](e)}function Wh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=qn("canvas");return n.style.display="block",n}const jh={};let tr=null;function Zf(n){tr=n}function Jf(){return tr}function Yn(...n){const e="THREE."+n.shift();tr?tr("log",e,...n):console.log(e,...n)}function qh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=qh(n);const e="THREE."+n.shift();if(tr)tr("warn",e,...n);else{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pe(...n){n=qh(n);const e="THREE."+n.shift();if(tr)tr("error",e,...n);else{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fi(...n){const e=n.join(" ");e in jh||(jh[e]=!0,de(...n))}function Kf(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const $f={[Pa]:La,[Da]:Oa,[Na]:Fa,[kr]:Ua,[La]:Pa,[Oa]:Da,[Fa]:Na,[Ua]:kr};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const vr=Math.PI/180,Yr=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function ze(n,e,t){return Math.max(e,Math.min(t,n))}function wl(n,e){return(n%e+e)%e}function Qf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function em(n,e,t){return n!==e?(t-n)/(e-n):0}function Zn(n,e,t){return(1-t)*n+t*e}function tm(n,e,t,i){return Zn(n,e,1-Math.exp(-t*i))}function im(n,e=1){return e-Math.abs(wl(n,e*2)-e)}function rm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function am(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sm(n,e){return n+Math.random()*(e-n)}function om(n){return n*(.5-Math.random())}function lm(n){n!==void 0&&(Yh=n);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cm(n){return n*vr}function hm(n){return n*Yr}function um(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function dm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fm(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),p=a((e-i)/2),u=s((e-i)/2),d=a((i-e)/2),f=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*p,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*p,o*c);break;case"ZXZ":n.set(l*p,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*d,o*h,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mm={DEG2RAD:vr,RAD2DEG:Yr,generateUUID:ri,clamp:ze,euclideanModulo:wl,mapLinear:Qf,inverseLerp:em,lerp:Zn,damp:tm,pingpong:im,smoothstep:rm,smootherstep:nm,randInt:am,randFloat:sm,randFloatSpread:om,seededRandom:lm,degToRad:cm,radToDeg:hm,isPowerOfTwo:um,ceilPowerOfTwo:dm,floorPowerOfTwo:pm,setQuaternionFromProperEuler:fm,normalize:Ye,denormalize:Ht},Zh=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;let ie=Zh;class Wt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],u=a[s+0],d=a[s+1],f=a[s+2],_=a[s+3];if(p!==_||l!==u||c!==d||h!==f){let g=l*u+c*d+h*f+p*_;g<0&&(u=-u,d=-d,f=-f,_=-_,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+f*o,p=p*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+f*o,p=p*m+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=a[s],u=a[s+1],d=a[s+2],f=a[s+3];return e[t]=o*f+h*p+l*d-c*u,e[t+1]=l*f+h*u+c*p-o*d,e[t+2]=c*f+h*d+o*u-l*p,e[t+3]=h*f-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(a/2),u=l(i/2),d=l(r/2),f=l(a/2);switch(s){case"XYZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"YXZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"ZXY":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"ZYX":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"YZX":this._x=u*h*p+c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p-u*d*f;break;case"XZY":this._x=u*h*p-c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p+u*d*f;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(s-r)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(s-r)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jh=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),p=2*(a*i-s*t);return this.x=t+l*c+s*p-o*h,this.y=i+l*h+o*c-a*p,this.z=r+l*p+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jh.prototype.isVector3=!0;let R=Jh;const Al=new R,Kh=new Wt,$h=class{constructor(e,t,i,r,a,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],f=i[8],_=r[0],g=r[3],m=r[6],M=r[1],E=r[4],x=r[7],T=r[2],b=r[5],A=r[8];return a[0]=s*_+o*M+l*T,a[3]=s*g+o*E+l*b,a[6]=s*m+o*x+l*A,a[1]=c*_+h*M+p*T,a[4]=c*g+h*E+p*b,a[7]=c*m+h*x+p*A,a[2]=u*_+d*M+f*T,a[5]=u*g+d*E+f*b,a[8]=u*m+d*x+f*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*s-o*c,u=o*l-h*a,d=c*a-s*l,f=t*p+i*u+r*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=p*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*s)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let qe=$h;const Cl=new qe,Qh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){const n={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ot&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Oi?jn:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xn]:{primaries:e,whitePoint:i,transfer:jn,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const et=gm();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jr;class tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=qn("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Bi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _m=0;class zi{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Rl(r[s].image)):a.push(Rl(r[s]))}else a=Rl(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}class vm extends zi{constructor(e=null){Fi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}}let xm=0;const Il=new R;class vt extends mi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=Yt,r=Yt,a=gt,s=Ri,o=kt,l=Zt,c=vt.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ri(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){de(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){de(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Nn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Nn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null,vt.DEFAULT_MAPPING=Ba,vt.DEFAULT_ANISOTROPY=1;const iu=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],p=s[5],u=s[9],d=s[2],f=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-d)<.01&&Math.abs(u-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+d)<.1&&Math.abs(u+f)<.1&&Math.abs(o+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,M=(p+1)/2,E=(_+1)/2,x=(l+h)/4,T=(c+d)/4,b=(u+f)/4;return m>M&&m>E?m<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(m),r=x/i,a=T/i):M>E?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=x/r,a=b/r):E<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(E),i=T/a,r=b/a),this.set(i,r,a,t),this}let g=Math.sqrt((f-u)*(f-u)+(c-d)*(c-d)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(f-u)/g,this.y=(c-d)/g,this.z=(h-l)/g,this.w=Math.acos((o+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iu.prototype.isVector4=!0;let dt=iu;class Pl extends mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},a=new vt(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends Pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cs extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ym extends Kt{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Cs(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class Rs extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Mm extends Kt{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Rs(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}const ru=class Wp{constructor(e,t,i,r,a,s,o,l,c,h,p,u,d,f,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,p,u,d,f,_,g)}set(e,t,i,r,a,s,o,l,c,h,p,u,d,f,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=u,m[3]=d,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wp().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),a=1/Kr.setFromMatrixColumn(e,1).length(),s=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*h,d=s*p,f=o*h,_=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+d*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,d=l*p,f=c*h,_=c*p;t[0]=u+_*o,t[4]=f*o-d,t[8]=s*c,t[1]=s*p,t[5]=s*h,t[9]=-o,t[2]=d*o-f,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,d=l*p,f=c*h,_=c*p;t[0]=u-_*o,t[4]=-s*p,t[8]=f+d*o,t[1]=d+f*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,d=s*p,f=o*h,_=o*p;t[0]=l*h,t[4]=f*c-d,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,d=s*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-u*p,t[8]=f*p+d,t[1]=p,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+f,t[10]=u-_*p}else if(e.order==="XZY"){const u=s*l,d=s*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+_,t[5]=s*h,t[9]=d*p-f,t[2]=f*p-d,t[6]=o*h,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,bm)}lookAt(e,t,i){const r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ir.crossVectors(i,ni),ir.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ir.crossVectors(i,ni)),ir.normalize(),Is.crossVectors(ni,ir),r[0]=ir.x,r[4]=Is.x,r[8]=ni.x,r[1]=ir.y,r[5]=Is.y,r[9]=ni.y,r[2]=ir.z,r[6]=Is.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],f=i[2],_=i[6],g=i[10],m=i[14],M=i[3],E=i[7],x=i[11],T=i[15],b=r[0],A=r[4],v=r[8],w=r[12],I=r[1],L=r[5],U=r[9],V=r[13],P=r[2],k=r[6],Y=r[10],j=r[14],re=r[3],q=r[7],J=r[11],ee=r[15];return a[0]=s*b+o*I+l*P+c*re,a[4]=s*A+o*L+l*k+c*q,a[8]=s*v+o*U+l*Y+c*J,a[12]=s*w+o*V+l*j+c*ee,a[1]=h*b+p*I+u*P+d*re,a[5]=h*A+p*L+u*k+d*q,a[9]=h*v+p*U+u*Y+d*J,a[13]=h*w+p*V+u*j+d*ee,a[2]=f*b+_*I+g*P+m*re,a[6]=f*A+_*L+g*k+m*q,a[10]=f*v+_*U+g*Y+m*J,a[14]=f*w+_*V+g*j+m*ee,a[3]=M*b+E*I+x*P+T*re,a[7]=M*A+E*L+x*k+T*q,a[11]=M*v+E*U+x*Y+T*J,a[15]=M*w+E*V+x*j+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],f=e[3],_=e[7],g=e[11],m=e[15],M=l*d-c*u,E=o*d-c*p,x=o*u-l*p,T=s*d-c*h,b=s*u-l*h,A=s*p-o*h;return t*(_*M-g*E+m*x)-i*(f*M-g*T+m*b)+r*(f*E-_*T+m*A)-a*(f*x-_*b+g*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(s*h-o*c)-i*(a*h-o*l)+r*(a*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],f=e[12],_=e[13],g=e[14],m=e[15],M=t*o-i*s,E=t*l-r*s,x=t*c-a*s,T=i*l-r*o,b=i*c-a*o,A=r*c-a*l,v=h*_-p*f,w=h*g-u*f,I=h*m-d*f,L=p*g-u*_,U=p*m-d*_,V=u*m-d*g,P=M*V-E*U+x*L+T*I-b*w+A*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=(o*V-l*U+c*L)*k,e[1]=(r*U-i*V-a*L)*k,e[2]=(_*A-g*b+m*T)*k,e[3]=(u*b-p*A-d*T)*k,e[4]=(l*I-s*V-c*w)*k,e[5]=(t*V-r*I+a*w)*k,e[6]=(g*x-f*A-m*E)*k,e[7]=(h*A-u*x+d*E)*k,e[8]=(s*U-o*I+c*v)*k,e[9]=(i*I-t*U-a*v)*k,e[10]=(f*b-_*x+m*M)*k,e[11]=(p*x-h*b-d*M)*k,e[12]=(o*w-s*L-l*v)*k,e[13]=(t*L-i*w+r*v)*k,e[14]=(_*E-f*T-g*M)*k,e[15]=(h*T-p*E+u*M)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,p=o+o,u=a*c,d=a*h,f=a*p,_=s*h,g=s*p,m=o*p,M=l*c,E=l*h,x=l*p,T=i.x,b=i.y,A=i.z;return r[0]=(1-(_+m))*T,r[1]=(d+x)*T,r[2]=(f-E)*T,r[3]=0,r[4]=(d-x)*b,r[5]=(1-(u+m))*b,r[6]=(g+M)*b,r[7]=0,r[8]=(f+E)*A,r[9]=(g-M)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),gi.copy(this);const c=1/s,h=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,t.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,r,a,s,o=ii,l=!1){const c=this.elements,h=2*a/(t-e),p=2*a/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(l)f=a/(s-a),_=s*a/(s-a);else if(o===ii)f=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===_r)f=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ii,l=!1){const c=this.elements,h=2/(t-e),p=2/(i-r),u=-(t+e)/(t-e),d=-(i+r)/(i-r);let f,_;if(l)f=1/(s-a),_=s/(s-a);else if(o===ii)f=-2/(s-a),_=-(s+a)/(s-a);else if(o===_r)f=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ru.prototype.isMatrix4=!0;let We=ru;const Kr=new R,gi=new We,Sm=new R(0,0,0),bm=new R(1,1,1),ir=new R,Is=new R,ni=new R,nu=new We,au=new Wt;class Si{constructor(e=0,t=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Ps{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tm=0;const su=new R,$r=new Wt,Gi=new We,Ls=new R,Jn=new R,Em=new R,wm=new Wt,ou=new R(1,0,0),lu=new R(0,1,0),cu=new R(0,0,1),hu={type:"added"},Am={type:"removed"},Qr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class nt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new R,t=new Si,i=new Wt,r=new R(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new qe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Jn,Ls,this.up):Gi.lookAt(Ls,Jn,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Gi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Am),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),p=s(e.shapes),u=s(e.skeletons),d=s(e.animations),f=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nt.DEFAULT_UP=new R(0,1,0),nt.DEFAULT_MATRIX_AUTO_UPDATE=!0,nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cm={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,f=.005;c.inputState.pinching&&u>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=wl(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Dl(s,a,e+1/3),this.g=Dl(s,a,e),this.b=Dl(s,a,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(a){a!==void 0&&parseFloat(a)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:de("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return et.workingToColorSpace(Ot.copy(this),e),Math.round(ze(Ot.r*255,0,255))*65536+Math.round(ze(Ot.g*255,0,255))*256+Math.round(ze(Ot.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,a=Ot.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=h<=.5?p/(s+o):p/(2-s-o),s){case i:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-i)/p+2;break;case a:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Jt){et.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Ns);const i=Zn(rr.h,Ns.h,t),r=Zn(rr.s,Ns.s,t),a=Zn(rr.l,Ns.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new xe;xe.NAMES=uu;class Fo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=i}clone(){return new Bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class du extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new R,Vi=new R,Nl=new R,ki=new R,tn=new R,rn=new R,pu=new R,Ul=new R,Ol=new R,Fl=new R,Bl=new dt,zl=new dt,Gl=new dt;class ti{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_i.subVectors(e,t),r.cross(_i);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){_i.subVectors(r,t),Vi.subVectors(i,t),Nl.subVectors(e,t);const s=_i.dot(_i),o=_i.dot(Vi),l=_i.dot(Nl),c=Vi.dot(Vi),h=Vi.dot(Nl),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,f=(s*h-o*l)*u;return a.set(1-d-f,f,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ki.x),l.addScaledVector(s,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Bl.setScalar(0),zl.setScalar(0),Gl.setScalar(0),Bl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Bl,a.x),s.addScaledVector(zl,a.y),s.addScaledVector(Gl,a.z),s}static isFrontFacing(e,t,i,r){return _i.subVectors(i,t),Vi.subVectors(e,t),_i.cross(Vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),_i.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;tn.subVectors(r,i),rn.subVectors(a,i),Ul.subVectors(e,i);const l=tn.dot(Ul),c=rn.dot(Ul);if(l<=0&&c<=0)return t.copy(i);Ol.subVectors(e,r);const h=tn.dot(Ol),p=rn.dot(Ol);if(h>=0&&p<=h)return t.copy(r);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(tn,s);Fl.subVectors(e,a);const d=tn.dot(Fl),f=rn.dot(Fl);if(f>=0&&d<=f)return t.copy(a);const _=d*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(rn,o);const g=h*f-d*p;if(g<=0&&p-h>=0&&d-f>=0)return pu.subVectors(a,r),o=(p-h)/(p-h+(d-f)),t.copy(r).addScaledVector(pu,o);const m=1/(g+_+u);return s=_*m,o=u*m,t.copy(i).addScaledVector(tn,s).addScaledVector(rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ft{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,vi):vi.fromBufferAttribute(a,s),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),Os.subVectors(this.max,Kn),nn.subVectors(e.a,Kn),an.subVectors(e.b,Kn),sn.subVectors(e.c,Kn),nr.subVectors(an,nn),ar.subVectors(sn,an),xr.subVectors(nn,sn);let t=[0,-nr.z,nr.y,0,-ar.z,ar.y,0,-xr.z,xr.y,nr.z,0,-nr.x,ar.z,0,-ar.x,xr.z,0,-xr.x,-nr.y,nr.x,0,-ar.y,ar.x,0,-xr.y,xr.x,0];return!Vl(t,nn,an,sn,Os)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,nn,an,sn,Os))?!1:(Fs.crossVectors(nr,ar),t=[Fs.x,Fs.y,Fs.z],Vl(t,nn,an,sn,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new R,new R,new R,new R,new R,new R,new R,new R],vi=new R,Us=new Ft,nn=new R,an=new R,sn=new R,nr=new R,ar=new R,xr=new R,Kn=new R,Os=new R,Fs=new R,yr=new R;function Vl(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){yr.fromArray(n,a);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Wi=Rm();function Rm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}function $t(n){Math.abs(n)>65504&&de("DataUtils.toHalfFloat(): Value out of range."),n=ze(n,-65504,65504),Wi.floatView[0]=n;const e=Wi.uint32View[0],t=e>>23&511;return Wi.baseTable[t]+((e&8388607)>>Wi.shiftTable[t])}function $n(n){const e=n>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[e]+(n&1023)]+Wi.exponentTable[e],Wi.floatView[0]}class Im{static toHalfFloat(e){return $t(e)}static fromHalfFloat(e){return $n(e)}}const wt=new R,Bs=new ie;let Pm=0;class pt extends mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=As,this.updateRanges=[],this.gpuType=Vt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lm extends pt{constructor(e,t,i){super(new Int8Array(e),t,i)}}class Dm extends pt{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Nm extends pt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class Um extends pt{constructor(e,t,i){super(new Int16Array(e),t,i)}}class kl extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Om extends pt{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Hl extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fm extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=$n(this.array[e*this.itemSize]);return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=$t(t),this}getY(e){let t=$n(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=$t(t),this}getZ(e){let t=$n(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=$t(t),this}getW(e){let t=$n(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=$t(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(i),this.array[e+2]=$t(r),this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array)),this.array[e+0]=$t(t),this.array[e+1]=$t(i),this.array[e+2]=$t(r),this.array[e+3]=$t(a),this}}class Te extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Bm=new Ft,Qn=new R,Wl=new R;class Lt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bm.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(Wl)),this.expandByPoint(Qn.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zm=0;const li=new We,Xl=new nt,on=new R,ai=new Ft,ea=new Ft,Pt=new R;class Xe extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Hl:kl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(on).negate(),this.translate(on.x,on.y,on.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Te(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(ai.min,ea.min),ai.expandByPoint(Pt),Pt.addVectors(ai.max,ea.max),ai.expandByPoint(Pt)):(ai.expandByPoint(ea.min),ai.expandByPoint(ea.max))}ai.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(on.fromBufferAttribute(e,c),Pt.add(on)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new pt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new R,l[v]=new R;const c=new R,h=new R,p=new R,u=new ie,d=new ie,f=new ie,_=new R,g=new R;function m(v,w,I){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,I),u.fromBufferAttribute(a,v),d.fromBufferAttribute(a,w),f.fromBufferAttribute(a,I),h.sub(c),p.sub(c),d.sub(u),f.sub(u);const L=1/(d.x*f.y-f.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(p,-d.y).multiplyScalar(L),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(L),o[v].add(_),o[w].add(_),o[I].add(_),l[v].add(g),l[w].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,w=M.length;v<w;++v){const I=M[v],L=I.start,U=I.count;for(let V=L,P=L+U;V<P;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new R,x=new R,T=new R,b=new R;function A(v){T.fromBufferAttribute(r,v),b.copy(T);const w=o[v];E.copy(w),E.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);const I=x.dot(l[v])<0?-1:1;s.setXYZW(v,E.x,E.y,E.z,I)}for(let v=0,w=M.length;v<w;++v){const I=M[v],L=I.start,U=I.count;for(let V=L,P=L+U;V<P;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const r=new R,a=new R,s=new R,o=new R,l=new R,c=new R,h=new R,p=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){const f=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),p.subVectors(r,a),h.cross(p),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),p.subVectors(r,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[f++]=c[d++]}return new pt(u,h,p)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xe,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=As,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Xt=new R;class Or{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ht(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ht(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ht(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ht(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),a=Ye(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Yn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jl=new R,Gm=new R,Vm=new qe;class Xi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jl.subVectors(i,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(jl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vm.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let km=0;class Dt extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Vr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){de(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){de(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ql extends Dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ln;const ta=new R,cn=new R,hn=new R,un=new ie,ia=new ie,fu=new We,Gs=new R,ra=new R,Vs=new R,mu=new ie,Yl=new ie,gu=new ie;class _u extends nt{constructor(e=new ql){if(super(),this.isSprite=!0,this.type="Sprite",ln===void 0){ln=new Xe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zs(t,5);ln.setIndex([0,1,2,0,2,3]),ln.setAttribute("position",new Or(i,3,0,!1)),ln.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=ln,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cn.setFromMatrixScale(this.matrixWorld),fu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cn.multiplyScalar(-hn.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;ks(Gs.set(-.5,-.5,0),hn,s,cn,r,a),ks(ra.set(.5,-.5,0),hn,s,cn,r,a),ks(Vs.set(.5,.5,0),hn,s,cn,r,a),mu.set(0,0),Yl.set(1,0),gu.set(1,1);let o=e.ray.intersectTriangle(Gs,ra,Vs,!1,ta);if(o===null&&(ks(ra.set(-.5,.5,0),hn,s,cn,r,a),Yl.set(0,1),o=e.ray.intersectTriangle(Gs,Vs,ra,!1,ta),o===null))return;const l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:ti.getInterpolation(ta,Gs,ra,Vs,mu,Yl,gu,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ks(n,e,t,i,r,a){un.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ia.x=a*un.x-r*un.y,ia.y=r*un.x+a*un.y):ia.copy(un),n.copy(e),n.x+=ia.x,n.y+=ia.y,n.applyMatrix4(fu)}const Hs=new R,vu=new R;class xu extends nt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const a=t[i];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let a;for(a=0;a<r.length&&!(t<r[a].distance);a++);return r.splice(a,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const r=t.splice(i,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),e<a)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Hs.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Hs);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Hs.setFromMatrixPosition(e.matrixWorld),vu.setFromMatrixPosition(this.matrixWorld);const i=Hs.distanceTo(vu)/e.zoom;t[0].object.visible=!0;let r,a;for(r=1,a=t.length;r<a;r++){let s=t[r].distance;if(t[r].object.visible&&(s-=s*t[r].hysteresis),i>=s)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<a;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const i=this.levels;for(let r=0,a=i.length;r<a;r++){const s=i[r];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}}const ji=new R,Zl=new R,Ws=new R,Xs=new R;class dn{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(Zl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ws),o=Xs.dot(this.direction),l=-Xs.dot(Ws),c=Xs.lengthSq(),h=Math.abs(1-s*s);let p,u,d,f;if(h>0)if(p=s*l-o,u=s*o-l,f=a*h,p>=0)if(u>=-f)if(u<=f){const _=1/h;p*=_,u*=_,d=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-f?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=f?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Zl).addScaledVector(Ws,u),d}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),r=ji.dot(ji)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,r,a){const s=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-s.x,u=e.y-s.y,d=e.z-s.z,f=t.x-s.x,_=t.y-s.y,g=t.z-s.z,m=i.x-s.x,M=i.y-s.y,E=i.z-s.z,x=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let A,v,w,I,L,U,V,P,k,Y,j,re;if(x>=T&&x>=b?(w=l,U=p,k=f,re=m,l>=0?(A=c,v=h,I=u,L=d,V=_,P=g,Y=M,j=E):(A=h,v=c,I=d,L=u,V=g,P=_,Y=E,j=M)):T>=b?(w=c,U=u,k=_,re=M,c>=0?(A=h,v=l,I=d,L=p,V=g,P=f,Y=E,j=m):(A=l,v=h,I=p,L=d,V=f,P=g,Y=m,j=E)):(w=h,U=d,k=g,re=E,h>=0?(A=l,v=c,I=p,L=u,V=f,P=_,Y=m,j=M):(A=c,v=l,I=u,L=p,V=_,P=f,Y=M,j=m)),w===0)return null;const q=A/w,J=v/w,ee=1/w,Fe=I-q*U,Ce=L-J*U,lt=V-q*k,tt=P-J*k,rt=Y-q*re,Z=j-J*re,K=rt*tt-Z*lt,Me=Fe*Z-Ce*rt,Ge=lt*Ce-tt*Fe;if(r){if(K<0||Me<0||Ge<0)return null}else if((K<0||Me<0||Ge<0)&&(K>0||Me>0||Ge>0))return null;const me=K+Me+Ge;if(me===0)return null;const we=ee*(K*U+Me*k+Ge*re);return(me>0?we<0:we>0)?null:this.at(we/me,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sr extends Dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=In,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yu=new We,Mr=new dn,js=new Lt,Mu=new R,qs=new R,Ys=new R,Zs=new R,Jl=new R,Js=new R,Su=new R,Ks=new R;class At extends nt{constructor(e=new Xe,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Js.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],p=a[l];h!==0&&(Jl.fromBufferAttribute(p,e),s?Js.addScaledVector(Jl,h):Js.addScaledVector(Jl.sub(t),h))}t.add(Js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(a),Mr.copy(e.ray).recast(e.near),!(js.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(js,Mu)===null||Mr.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(yu.copy(a).invert(),Mr.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=s[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,T=E;x<T;x+=3){const b=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);r=$s(this,m,e,i,c,h,p,b,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const M=o.getX(g),E=o.getX(g+1),x=o.getX(g+2);r=$s(this,s,e,i,c,h,p,M,E,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=s[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,T=E;x<T;x+=3){const b=x,A=x+1,v=x+2;r=$s(this,m,e,i,c,h,p,b,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const M=g,E=g+1,x=g+2;r=$s(this,s,e,i,c,h,p,M,E,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Hm(n,e,t,i,r,a,s,o){let l;if(e.side===Gt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ki,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:n}}function $s(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,qs),n.getVertexPosition(l,Ys),n.getVertexPosition(c,Zs);const h=Hm(n,e,t,i,qs,Ys,Zs,Su);if(h){const p=new R;ti.getBarycoord(Su,qs,Ys,Zs,p),r&&(h.uv=ti.getInterpolatedAttribute(r,o,l,c,p,new ie)),a&&(h.uv1=ti.getInterpolatedAttribute(a,o,l,c,p,new ie)),s&&(h.normal=ti.getInterpolatedAttribute(s,o,l,c,p,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};ti.getNormal(qs,Ys,Zs,u.normal),h.face=u,h.barycoord=p}return h}const na=new dt,bu=new dt,Tu=new dt,Wm=new dt,Eu=new We,Qs=new R,Kl=new Lt,wu=new We,$l=new dn;class Au extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ml,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qs),this.boundingBox.expandByPoint(Qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qs),this.boundingSphere.expandByPoint(Qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(r),e.ray.intersectsSphere(Kl)!==!1&&(wu.copy(r).invert(),$l.copy(e.ray).applyMatrix4(wu),!(this.boundingBox!==null&&$l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ph?this.bindMatrixInverse.copy(this.bindMatrix).invert():de("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;bu.fromBufferAttribute(r.attributes.skinIndex,e),Tu.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(na.copy(t),t.set(0,0,0,0)):(na.set(...t,1),t.set(0,0,0)),na.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){const s=Tu.getComponent(a);if(s!==0){const o=bu.getComponent(a);Eu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Wm.copy(na).applyMatrix4(Eu),s)}}return t.isVector4&&(t.w=na.w),t.applyMatrix4(this.bindMatrixInverse)}}class Ql extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ci extends vt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=bt,h=bt,p,u){super(null,s,o,l,c,h,r,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cu=new We,Xm=new We;class zo{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){de("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:Xm;Cu.multiplyMatrices(o,t[a]),Cu.toArray(i,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new zo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ci(t,e,e,kt,Vt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const a=e.bones[i];let s=t[a];s===void 0&&(de("Skeleton: No bone found with UUID:",a),s=new Ql),this.bones.push(s),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const s=t[r];e.bones.push(s.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class pn extends pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fn=new We,Ru=new We,eo=[],Iu=new Ft,jm=new We,aa=new At,sa=new Lt;class Pu extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fn),Iu.copy(e.boundingBox).applyMatrix4(fn),this.boundingBox.union(Iu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fn),sa.copy(e.boundingSphere).applyMatrix4(fn),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,fn),Ru.multiplyMatrices(i,fn),aa.matrixWorld=Ru,aa.raycast(e,eo);for(let s=0,o=eo.length;s<o;s++){const l=eo[s];l.instanceId=a,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(r*this.count),r,this.count,ka,Vt));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new Lt,qm=new ie(.5,.5),to=new R;class br{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,a=new Xi,s=new Xi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],d=a[7],f=a[8],_=a[9],g=a[10],m=a[11],M=a[12],E=a[13],x=a[14],T=a[15];if(r[0].setComponents(c-s,d-h,m-f,T-M).normalize(),r[1].setComponents(c+s,d+h,m+f,T+M).normalize(),r[2].setComponents(c+o,d+p,m+_,T+E).normalize(),r[3].setComponents(c-o,d-p,m-_,T-E).normalize(),i)r[4].setComponents(l,u,g,x).normalize(),r[5].setComponents(c-l,d-u,m-g,T-x).normalize();else if(r[4].setComponents(c-l,d-u,m-g,T-x).normalize(),t===ii)r[5].setComponents(c+l,d+u,m+g,T+x).normalize();else if(t===_r)r[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const t=qm.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(to.x=r.normal.x>0?e.max.x:e.min.x,to.y=r.normal.y>0?e.max.y:e.min.y,to.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lu=new We;class Go{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const a=t[r];Lu.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[r]===void 0&&(i[r]=new br),i[r].setFromProjectionMatrix(Lu,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new br),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new Go().copy(this)}}function ec(n,e){return n-e}function Ym(n,e){return n.z-e.z}function Zm(n,e){return e.z-n.z}class Jm{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){const a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});const o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}}const Qt=new We,Km=new xe(1,1,1),$m=new br,Qm=new Go,io=new Ft,Tr=new Lt,oa=new R,Du=new R,eg=new R,tc=new Jm,Bt=new At,ro=[];function tg(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const r=n.count;for(let a=0;a<r;a++)for(let s=0;s<i;s++)e.setComponent(a+t,s,n.getComponent(a,s))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function Er(n,e){if(n.constructor!==e.constructor){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{const t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}class Nu extends At{constructor(e,t,i=t*2,r){super(new Xe,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new ci(t,e,e,kt,Vt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new ci(t,e,e,On,oi);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new ci(t,e,e,kt,Vt);i.colorSpace=et.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const s=e.getAttribute(a),{array:o,itemSize:l,normalized:c}=s,h=new o.constructor(i*l),p=new pt(h,l,c);t.setAttribute(a,p)}if(e.getIndex()!==null){const a=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new pt(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=e.getAttribute(i),a=t.getAttribute(i);if(r.itemSize!==a.itemSize||r.normalized!==a.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const a=t[i].geometryIndex;this.getMatrixAt(i,Qt),this.getBoundingBoxAt(a,io).applyMatrix4(Qt),e.union(io)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const a=t[i].geometryIndex;this.getMatrixAt(i,Qt),this.getBoundingSphereAt(a,Tr).applyMatrix4(Qt),e.union(Tr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ec),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const r=this._matricesTexture;Qt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Km.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},a=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const s=e.getIndex();if(s!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=i===-1?s.count:i),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ec),o=this._availableGeometryIds.shift(),a[o]=r):(o=this._geometryCount,this._geometryCount++,a.push(r)),this.setGeometryAt(o,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=i.getIndex()!==null,a=i.getIndex(),s=t.getIndex(),o=this._geometryInfo[e];if(r&&s.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const p=t.getAttribute(h),u=i.getAttribute(h);tg(p,u,l);const d=p.itemSize;for(let f=p.count,_=c;f<_;f++){const g=l+f;for(let m=0;m<d;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(r){const h=o.indexStart,p=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<s.count;u++)a.setX(h+u,l+s.getX(u));for(let u=s.count,d=p;u<d;u++)a.setX(h+u,l);a.needsUpdate=!0,a.addUpdateRange(h,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let r=0,a=i.length;r<a;r++)i[r].active&&i[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,r=i.map((s,o)=>o).sort((s,o)=>i[s].vertexStart-i[o].vertexStart),a=this.geometry;for(let s=0,o=i.length;s<o;s++){const l=r[s],c=i[l];if(c.active!==!1){if(a.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:p,reservedIndexCount:u}=c,d=a.index,f=d.array,_=e-p;for(let g=h;g<h+u;g++)f[g]=f[g]+_;d.array.copyWithin(t,h,h+u),d.addUpdateRange(t,u),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:p}=c,u=a.attributes;for(const d in u){const f=u[d],{array:_,itemSize:g}=f;_.copyWithin(e*g,h*g,(h+p)*g),f.addUpdateRange(e*g,p*g),f.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=a.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const a=new Ft,s=i.index,o=i.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let h=l;s&&(h=s.getX(h)),a.expandByPoint(oa.fromBufferAttribute(o,h))}r.boundingBox=a}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const a=new Lt;this.getBoundingBoxAt(e,io),io.getCenter(a.center);const s=i.index,o=i.attributes.position;let l=0;for(let c=r.start,h=r.start+r.count;c<h;c++){let p=c;s&&(p=s.getX(p)),oa.fromBufferAttribute(o,p),l=Math.max(l,a.center.distanceToSquared(oa))}a.radius=Math.sqrt(l),r.boundingSphere=a}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(ec);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),a=new Int32Array(e);Er(this._multiDrawCounts,r),Er(this._multiDrawStarts,a),this._multiDrawCounts=r,this._multiDrawStarts=a,this._maxInstanceCount=e;const s=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;s.dispose(),this._initIndirectTexture(),Er(s.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Er(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Er(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Xe,this._initializeGeometry(r));const a=this.geometry;r.index&&Er(r.index.array,a.index.array);for(const s in r.attributes)Er(r.attributes[s].array,a.attributes[s].array)}raycast(e,t){const i=this._instanceInfo,r=this._geometryInfo,a=this.matrixWorld,s=this.geometry;Bt.material=this.material,Bt.geometry.index=s.index,Bt.geometry.attributes=s.attributes,Bt.geometry.boundingBox===null&&(Bt.geometry.boundingBox=new Ft),Bt.geometry.boundingSphere===null&&(Bt.geometry.boundingSphere=new Lt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=r[c];Bt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Bt.matrixWorld).premultiply(a),this.getBoundingBoxAt(c,Bt.geometry.boundingBox),this.getBoundingSphereAt(c,Bt.geometry.boundingSphere),Bt.raycast(e,ro);for(let p=0,u=ro.length;p<u;p++){const d=ro[p];d.object=this,d.batchId=o,t.push(d)}ro.length=0}Bt.material=null,Bt.geometry.index=null,Bt.geometry.attributes={},Bt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,r,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=r.getIndex();let o=s===null?1:s.array.BYTES_PER_ELEMENT,l=1;a.wireframe&&(l=2,o=r.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,p=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,_=f.image.data,g=i.isArrayCamera?Qm:$m;d&&(i.isArrayCamera?g.setFromArrayCamera(i):(Qt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(Qt,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){Qt.copy(this.matrixWorld).invert(),oa.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Qt),Du.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Qt);for(let x=0,T=c.length;x<T;x++)if(c[x].visible&&c[x].active){const b=c[x].geometryIndex;this.getMatrixAt(x,Qt),this.getBoundingSphereAt(b,Tr).applyMatrix4(Qt);let A=!1;if(d&&(A=!g.intersectsSphere(Tr)),!A){const v=u[b],w=eg.subVectors(Tr.center,oa).dot(Du);tc.push(v.start,v.count,w,x)}}const M=tc.list,E=this.customSort;E===null?M.sort(a.transparent?Zm:Ym):E.call(this,M,i);for(let x=0,T=M.length;x<T;x++){const b=M[x];h[m]=b.start*o*l,p[m]=b.count*l,_[m]=b.index,m++}tc.reset()}else for(let M=0,E=c.length;M<E;M++)if(c[M].visible&&c[M].active){const x=c[M].geometryIndex;let T=!1;if(d&&(this.getMatrixAt(M,Qt),this.getBoundingSphereAt(x,Tr).applyMatrix4(Qt),T=!g.intersectsSphere(Tr)),!T){const b=u[x];h[m]=b.start*o*l,p[m]=b.count*l,_[m]=M,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,a,s){this.onBeforeRender(e,null,r,a,s)}}class jt extends Dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const no=new R,ao=new R,Uu=new We,la=new dn,so=new Lt,ic=new R,Ou=new R;class or extends nt{constructor(e=new Xe,t=new jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)no.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=no.distanceTo(ao);e.setAttribute("lineDistance",new Te(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=a,e.ray.intersectsSphere(so)===!1)return;Uu.copy(r).invert(),la.copy(e.ray).applyMatrix4(Uu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let f=u,_=d-1;f<_;f+=c){const g=h.getX(f),m=h.getX(f+1),M=oo(this,e,la,l,g,m,f);M&&t.push(M)}if(this.isLineLoop){const f=h.getX(d-1),_=h.getX(u),g=oo(this,e,la,l,f,_,d-1);g&&t.push(g)}}else{const u=Math.max(0,s.start),d=Math.min(p.count,s.start+s.count);for(let f=u,_=d-1;f<_;f+=c){const g=oo(this,e,la,l,f,f+1,f);g&&t.push(g)}if(this.isLineLoop){const f=oo(this,e,la,l,d-1,u,d-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function oo(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(no.fromBufferAttribute(o,r),ao.fromBufferAttribute(o,a),t.distanceSqToSegment(no,ao,ic,Ou)>i)return;ic.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ic);if(!(l<e.near||l>e.far))return{distance:l,point:Ou.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Fu=new R,Bu=new R;class Pi extends or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Fu.fromBufferAttribute(t,r),Bu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fu.distanceTo(Bu);e.setAttribute("lineDistance",new Te(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zu extends or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rc extends Dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new We,nc=new dn,lo=new Lt,co=new R;class Vu extends nt{constructor(e=new Xe,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=a,e.ray.intersectsSphere(lo)===!1)return;Gu.copy(r).invert(),nc.copy(e.ray).applyMatrix4(Gu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let d=p,f=u;d<f;d++){const _=c.getX(d);co.fromBufferAttribute(h,_),ku(co,_,l,r,e,t,this)}}else{const p=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let d=p,f=u;d<f;d++)co.fromBufferAttribute(h,d),ku(co,d,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function ku(n,e,t,i,r,a,s){const o=nc.distanceSqToPoint(n);if(o<t){const l=new R;nc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Hu extends vt{constructor(e,t,i,r,a=gt,s=gt,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function p(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class ig extends Hu{constructor(e,t,i,r,a,s,o,l){super({},e,t,i,r,a,s,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class rg extends vt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ho extends vt{constructor(e,t,i,r,a,s,o,l,c,h,p,u){super(null,s,o,l,c,h,r,a,p,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ng extends ho{constructor(e,t,i,r,a,s){super(e,t,i,a,s),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Yt,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ag extends ho{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Ci),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class ca extends vt{constructor(e=[],t=Ci,i,r,a,s,o,l,c,h){super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends vt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class og extends vt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class mn extends vt{constructor(e,t,i=oi,r,a,s,o=bt,l=bt,c,h=Ii,p=1){if(h!==Ii&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Wu extends mn{constructor(e,t=oi,i=Ci,r,a,s=bt,o=bt,l,c=Ii){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,a,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ac extends vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends Xe{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],p=[];let u=0,d=0;f("z","y","x",-1,-1,i,t,e,s,a,0),f("z","y","x",1,-1,i,t,-e,s,a,1),f("x","z","y",1,1,e,i,t,r,s,2),f("x","z","y",1,-1,e,i,-t,r,s,3),f("x","y","z",1,-1,e,t,i,r,a,4),f("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(p,2));function f(_,g,m,M,E,x,T,b,A,v,w){const I=x/A,L=T/v,U=x/2,V=T/2,P=b/2,k=A+1,Y=v+1;let j=0,re=0;const q=new R;for(let J=0;J<Y;J++){const ee=J*L-V;for(let Fe=0;Fe<k;Fe++){const Ce=Fe*I-U;q[_]=Ce*M,q[g]=ee*E,q[m]=P,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[m]=b>0?1:-1,h.push(q.x,q.y,q.z),p.push(Fe/A),p.push(1-J/v),j+=1}}for(let J=0;J<v;J++)for(let ee=0;ee<A;ee++){const Fe=u+ee+k*J,Ce=u+ee+k*(J+1),lt=u+(ee+1)+k*(J+1),tt=u+(ee+1)+k*J;l.push(Fe,Ce,tt),l.push(Ce,lt,tt),re+=6}o.addGroup(d,re,w),d+=re,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vo extends Xe{constructor(e=1,t=1,i=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:a},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));const s=[],o=[],l=[],c=[],h=t/2,p=Math.PI/2*e,u=t,d=2*p+u,f=i*2+a,_=r+1,g=new R,m=new R;for(let M=0;M<=f;M++){let E=0,x=0,T=0,b=0;if(M<=i){const w=M/i,I=w*Math.PI/2;x=-h-e*Math.cos(I),T=e*Math.sin(I),b=-e*Math.cos(I),E=w*p}else if(M<=i+a){const w=(M-i)/a;x=-h+w*t,T=e,b=0,E=p+w*u}else{const w=(M-i-a)/i,I=w*Math.PI/2;x=h+e*Math.sin(I),T=e*Math.cos(I),b=e*Math.sin(I),E=p+u+w*p}const A=Math.max(0,Math.min(1,E/d));let v=0;M===0?v=.5/r:M===f&&(v=-.5/r);for(let w=0;w<=r;w++){const I=w/r,L=I*Math.PI*2,U=Math.sin(L),V=Math.cos(L);m.x=-T*V,m.y=x,m.z=T*U,o.push(m.x,m.y,m.z),g.set(-T*V,b,T*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+v,A)}if(M>0){const w=(M-1)*_;for(let I=0;I<r;I++){const L=w+I,U=w+I+1,V=M*_+I,P=M*_+I+1;s.push(L,U,V),s.push(U,P,V)}}}this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ko extends Xe{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new R,h=new ie;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){const d=i+p/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/e+1)/2,h.y=(s[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ea extends Xe{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],p=[],u=[],d=[];let f=0;const _=[],g=i/2;let m=0;M(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function M(){const x=new R,T=new R;let b=0;const A=(t-e)/i;for(let v=0;v<=a;v++){const w=[],I=v/a,L=I*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,P=V*l+o,k=Math.sin(P),Y=Math.cos(P);T.x=L*k,T.y=-I*i+g,T.z=L*Y,p.push(T.x,T.y,T.z),x.set(k,A,Y).normalize(),u.push(x.x,x.y,x.z),d.push(V,1-I),w.push(f++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<a;w++){const I=_[w][v],L=_[w+1][v],U=_[w+1][v+1],V=_[w][v+1];(e>0||w!==0)&&(h.push(I,L,V),b+=3),(t>0||w!==a-1)&&(h.push(L,U,V),b+=3)}c.addGroup(m,b,0),m+=b}function E(x){const T=f,b=new ie,A=new R;let v=0;const w=x===!0?e:t,I=x===!0?1:-1;for(let U=1;U<=r;U++)p.push(0,g*I,0),u.push(0,I,0),d.push(.5,.5),f++;const L=f;for(let U=0;U<=r;U++){const V=U/r*l+o,P=Math.cos(V),k=Math.sin(V);A.x=w*k,A.y=g*I,A.z=w*P,p.push(A.x,A.y,A.z),u.push(0,I,0),b.x=P*.5+.5,b.y=k*.5*I+.5,d.push(b.x,b.y),f++}for(let U=0;U<r;U++){const V=T+U,P=L+U;x===!0?h.push(P,P+1,V):h.push(P+1,P,V),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends Ea{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new wa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends Xe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),h(),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(a.slice(),3)),this.setAttribute("uv",new Te(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new R,x=new R,T=new R;for(let b=0;b<t.length;b+=3)d(t[b+0],E),d(t[b+1],x),d(t[b+2],T),l(E,x,T,M)}function l(M,E,x,T){const b=T+1,A=[];for(let v=0;v<=b;v++){A[v]=[];const w=M.clone().lerp(x,v/b),I=E.clone().lerp(x,v/b),L=b-v;for(let U=0;U<=L;U++)U===0&&v===b?A[v][U]=w:A[v][U]=w.clone().lerp(I,U/L)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){const I=Math.floor(w/2);w%2===0?(u(A[v][I+1]),u(A[v+1][I]),u(A[v][I])):(u(A[v][I+1]),u(A[v+1][I+1]),u(A[v+1][I]))}}function c(M){const E=new R;for(let x=0;x<a.length;x+=3)E.x=a[x+0],E.y=a[x+1],E.z=a[x+2],E.normalize().multiplyScalar(M),a[x+0]=E.x,a[x+1]=E.y,a[x+2]=E.z}function h(){const M=new R;for(let E=0;E<a.length;E+=3){M.x=a[E+0],M.y=a[E+1],M.z=a[E+2];const x=g(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;s.push(x,1-T)}f(),p()}function p(){for(let M=0;M<s.length;M+=6){const E=s[M+0],x=s[M+2],T=s[M+4],b=Math.max(E,x,T),A=Math.min(E,x,T);b>.9&&A<.1&&(E<.2&&(s[M+0]+=1),x<.2&&(s[M+2]+=1),T<.2&&(s[M+4]+=1))}}function u(M){a.push(M.x,M.y,M.z)}function d(M,E){const x=M*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function f(){const M=new R,E=new R,x=new R,T=new R,b=new ie,A=new ie,v=new ie;for(let w=0,I=0;w<a.length;w+=9,I+=6){M.set(a[w+0],a[w+1],a[w+2]),E.set(a[w+3],a[w+4],a[w+5]),x.set(a[w+6],a[w+7],a[w+8]),b.set(s[I+0],s[I+1]),A.set(s[I+2],s[I+3]),v.set(s[I+4],s[I+5]),T.copy(M).add(E).add(x).divideScalar(3);const L=g(T);_(b,I+0,M,L),_(A,I+2,E,L),_(v,I+4,x,L)}}function _(M,E,x,T){T<0&&M.x===1&&(s[E]=M.x-1),x.x===0&&x.z===0&&(s[E]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.vertices,e.indices,e.radius,e.detail)}}class Ho extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}const uo=new R,po=new R,sc=new R,fo=new ti;class Xu extends Xe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(vr*t),a=e.getIndex(),s=e.getAttribute("position"),o=a?a.count:s.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),p={},u=[];for(let d=0;d<o;d+=3){a?(l[0]=a.getX(d),l[1]=a.getX(d+1),l[2]=a.getX(d+2)):(l[0]=d,l[1]=d+1,l[2]=d+2);const{a:f,b:_,c:g}=fo;if(f.fromBufferAttribute(s,l[0]),_.fromBufferAttribute(s,l[1]),g.fromBufferAttribute(s,l[2]),fo.getNormal(sc),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const M=(m+1)%3,E=h[m],x=h[M],T=fo[c[m]],b=fo[c[M]],A=`${E}_${x}`,v=`${x}_${E}`;v in p&&p[v]?(sc.dot(p[v].normal)<=r&&(u.push(T.x,T.y,T.z),u.push(b.x,b.y,b.z)),p[v]=null):A in p||(p[A]={index0:l[m],index1:l[M],normal:sc.clone()})}}for(const d in p)if(p[d]){const{index0:f,index1:_}=p[d];uo.fromBufferAttribute(s,f),po.fromBufferAttribute(s,_),u.push(uo.x,uo.y,uo.z),u.push(po.x,po.y,po.z)}this.setAttribute("position",new Te(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const h=i[r],p=i[r+1]-h,u=(s-h)/p;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),s=this.getPoint(r),o=t||(a.isVector2?new ie:new R);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,r=[],a=[],s=[],o=new R,l=new We;for(let d=0;d<=e;d++){const f=d/e;r[d]=this.getTangentAt(f,new R)}a[0]=new R,s[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(ze(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,f))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(ze(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let f=1;f<=e;f++)a[f].applyMatrix4(l.makeRotationAxis(r[f],d*f)),s[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mo extends xi{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ju extends mo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,p){let u=(s-a)/c-(o-a)/(c+h)+(o-s)/h,d=(o-s)/h-(l-s)/(h+p)+(l-o)/p;u*=h,d*=h,r(s,o,u,d)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const qu=new R,Yu=new R,lc=new oc,cc=new oc,hc=new oc;class Zu extends xi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%a]:(Yu.subVectors(r[0],r[1]).add(r[0]),c=Yu);const p=r[o%a],u=r[(o+1)%a];if(this.closed||o+2<a?h=r[(o+2)%a]:(qu.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=qu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(p),d),_=Math.pow(p.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),lc.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,f,_,g),cc.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,f,_,g),hc.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),cc.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),hc.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(lc.calc(l),cc.calc(l),hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function lg(n,e){const t=1-n;return t*t*e}function cg(n,e){return 2*(1-n)*n*e}function hg(n,e){return n*n*e}function ha(n,e,t,i){return lg(n,e)+cg(n,t)+hg(n,i)}function ug(n,e){const t=1-n;return t*t*t*e}function dg(n,e){const t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function fg(n,e){return n*n*n*e}function ua(n,e,t,i,r){return ug(n,e)+dg(n,t)+pg(n,i)+fg(n,r)}class uc extends xi{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ua(e,r.x,a.x,s.x,o.x),ua(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ku extends xi{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ua(e,r.x,a.x,s.x,o.x),ua(e,r.y,a.y,s.y,o.y),ua(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dc extends xi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends xi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pc extends xi{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends xi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y),ha(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],p=r[s>r.length-3?r.length-1:s+2];return i.set(Ju(o,l.x,c.x,h.x,p.x),Ju(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this}}var go=Object.freeze({__proto__:null,ArcCurve:ju,CatmullRomCurve3:Zu,CubicBezierCurve:uc,CubicBezierCurve3:Ku,EllipseCurve:mo,LineCurve:dc,LineCurve3:$u,QuadraticBezierCurve:pc,QuadraticBezierCurve3:fc,SplineCurve:mc});class Qu extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new go[r.type]().fromJSON(r))}return this}}class da extends Qu{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dc(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new pc(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new uc(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const c=new mo(e,t,i,r,a,s,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pa extends da{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new da().fromJSON(r))}return this}}function mg(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=ed(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c;if(i&&(a=yg(n,e,a,t)),n.length>80*t){o=n[0],l=n[1];let h=o,p=l;for(let u=t;u<r;u+=t){const d=n[u],f=n[u+1];d<o&&(o=d),f<l&&(l=f),d>h&&(h=d),f>p&&(p=f)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return fa(a,s,t,o,l,c,0),s}function ed(n,e,t,i,r){let a;if(r===Pg(n,e,t,i)>0)for(let s=e;s<t;s+=i)a=nd(s/i|0,n[s],n[s+1],a);else for(let s=t-i;s>=e;s-=i)a=nd(s/i|0,n[s],n[s+1],a);return a&&gn(a,a.next)&&(_a(a),a=a.next),a}function wr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gn(t,t.next)||_t(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fa(n,e,t,i,r,a,s){if(!n)return;!s&&a&&Eg(n,i,r,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?_g(n,i,r,a):gg(n)){e.push(l.i,n.i,c.i),_a(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=vg(wr(n),e),fa(n,e,t,i,r,a,2)):s===2&&xg(n,e,t,i,r,a):fa(wr(n),e,t,i,r,a,1);break}}}function gg(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,a,s),p=Math.min(o,l,c),u=Math.max(r,a,s),d=Math.max(o,l,c);let f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=p&&f.y<=d&&ma(r,o,a,l,s,c,f.x,f.y)&&_t(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function _g(n,e,t,i){const r=n.prev,a=n,s=n.next;if(_t(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,h=r.y,p=a.y,u=s.y,d=Math.min(o,l,c),f=Math.min(h,p,u),_=Math.max(o,l,c),g=Math.max(h,p,u),m=gc(d,f,e,t,i),M=gc(_,g,e,t,i);let E=n.prevZ,x=n.nextZ;for(;E&&E.z>=m&&x&&x.z<=M;){if(E.x>=d&&E.x<=_&&E.y>=f&&E.y<=g&&E!==r&&E!==s&&ma(o,h,l,p,c,u,E.x,E.y)&&_t(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=_&&x.y>=f&&x.y<=g&&x!==r&&x!==s&&ma(o,h,l,p,c,u,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=_&&E.y>=f&&E.y<=g&&E!==r&&E!==s&&ma(o,h,l,p,c,u,E.x,E.y)&&_t(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=f&&x.y<=g&&x!==r&&x!==s&&ma(o,h,l,p,c,u,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vg(n,e){let t=n;do{const i=t.prev,r=t.next.next;!gn(i,r)&&id(i,t,t.next,r)&&ga(i,r)&&ga(r,i)&&(e.push(i.i,t.i,r.i),_a(t),_a(t.next),t=n=r),t=t.next}while(t!==n);return wr(t)}function xg(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Cg(s,o)){let l=rd(s,o);s=wr(s,s.next),l=wr(l,l.next),fa(s,e,t,i,r,a,0),fa(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function yg(n,e,t,i){const r=[];for(let a=0,s=e.length;a<s;a++){const o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=ed(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Ag(c))}r.sort(Mg);for(let a=0;a<r.length;a++)t=Sg(r[a],t);return t}function Mg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Sg(n,e){const t=bg(n,e);if(!t)return e;const i=rd(t,n);return wr(i,i.next),wr(t,t.next)}function bg(n,e){let t=e;const i=n.x,r=n.y;let a=-1/0,s;if(gn(n,t))return t;do{if(gn(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>a&&(a=p,s=t.x<t.next.x?t:t.next,p===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&td(r<c?i:a,r,l,c,r<c?a:i,r,t.x,t.y)){const p=Math.abs(r-t.y)/(i-t.x);ga(t,n)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&Tg(s,t)))&&(s=t,h=p)}t=t.next}while(t!==o);return s}function Tg(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function Eg(n,e,t,i){let r=n;do r.z===0&&(r.z=gc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,wg(r)}function wg(n){let e,t=1;do{let i=n,r;n=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let l=t;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,t*=2}while(e>1);return n}function gc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ag(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function td(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function ma(n,e,t,i,r,a,s,o){return!(n===s&&e===o)&&td(n,e,t,i,r,a,s,o)}function Cg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rg(n,e)&&(ga(n,e)&&ga(e,n)&&Ig(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||gn(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gn(n,e){return n.x===e.x&&n.y===e.y}function id(n,e,t,i){const r=vo(_t(n,e,t)),a=vo(_t(n,e,i)),s=vo(_t(t,i,n)),o=vo(_t(t,i,e));return!!(r!==a&&s!==o||r===0&&_o(n,t,e)||a===0&&_o(n,i,e)||s===0&&_o(t,n,i)||o===0&&_o(t,e,i))}function _o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function Rg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&id(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ga(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function Ig(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rd(n,e){const t=_c(n.i,n.x,n.y),i=_c(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function nd(n,e,t,i){const r=_c(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _c(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class Lg{static triangulate(e,t,i=2){return mg(e,t,i)}}class bi{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return bi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];ad(e),sd(i,e);let s=e.length;t.forEach(ad);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,sd(i,t[l]);const o=Lg.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function ad(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Wo extends Xe{constructor(e=new pa([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(a,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Dg;let E,x=!1,T,b,A,v;if(m){E=m.getSpacedPoints(h),x=!0,u=!1;const te=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,te),b=new R,A=new R,v=new R}u||(g=0,d=0,f=0,_=0);const w=o.extractPoints(c);let I=w.shape;const L=w.holes;if(!bi.isClockWise(I)){I=I.reverse();for(let te=0,ne=L.length;te<ne;te++){const Q=L[te];bi.isClockWise(Q)&&(L[te]=Q.reverse())}}function U(te){const ne=10000000000000001e-36;let Q=te[0];for(let _e=1;_e<=te.length;_e++){const ve=_e%te.length,De=te[ve],Ue=De.x-Q.x,$e=De.y-Q.y,Ve=Ue*Ue+$e*$e,Ze=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Q.x),Math.abs(Q.y)),D=ne*Ze*Ze;if(Ve<=D){te.splice(ve,1),_e--;continue}Q=De}}U(I),L.forEach(U);const V=L.length,P=I;for(let te=0;te<V;te++){const ne=L[te];I=I.concat(ne)}function k(te,ne,Q){return ne||Pe("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ne,Q)}const Y=I.length;function j(te,ne,Q){let _e,ve,De;const Ue=te.x-ne.x,$e=te.y-ne.y,Ve=Q.x-te.x,Ze=Q.y-te.y,D=Ue*Ue+$e*$e,xt=Ue*Ze-$e*Ve;if(Math.abs(xt)>Number.EPSILON){const je=Math.sqrt(D),C=Math.sqrt(Ve*Ve+Ze*Ze),y=ne.x-$e/je,B=ne.y+Ue/je,H=Q.x-Ze/C,X=Q.y+Ve/C,ce=((H-y)*Ze-(X-B)*Ve)/(Ue*Ze-$e*Ve);_e=y+Ue*ce-te.x,ve=B+$e*ce-te.y;const pe=_e*_e+ve*ve;if(pe<=2)return new ie(_e,ve);De=Math.sqrt(pe/2)}else{let je=!1;Ue>Number.EPSILON?Ve>Number.EPSILON&&(je=!0):Ue<-Number.EPSILON?Ve<-Number.EPSILON&&(je=!0):Math.sign($e)===Math.sign(Ze)&&(je=!0),je?(_e=-$e,ve=Ue,De=Math.sqrt(D)):(_e=Ue,ve=$e,De=Math.sqrt(D/2))}return new ie(_e/De,ve/De)}const re=[];for(let te=0,ne=P.length,Q=ne-1,_e=te+1;te<ne;te++,Q++,_e++)Q===ne&&(Q=0),_e===ne&&(_e=0),re[te]=j(P[te],P[Q],P[_e]);const q=[];let J,ee=re.concat();for(let te=0,ne=V;te<ne;te++){const Q=L[te];J=[];for(let _e=0,ve=Q.length,De=ve-1,Ue=_e+1;_e<ve;_e++,De++,Ue++)De===ve&&(De=0),Ue===ve&&(Ue=0),J[_e]=j(Q[_e],Q[De],Q[Ue]);q.push(J),ee=ee.concat(J)}let Fe;if(g===0)Fe=bi.triangulateShape(P,L);else{const te=[],ne=[];for(let Q=0;Q<g;Q++){const _e=Q/g,ve=d*Math.cos(_e*Math.PI/2),De=f*Math.sin(_e*Math.PI/2)+_;for(let Ue=0,$e=P.length;Ue<$e;Ue++){const Ve=k(P[Ue],re[Ue],De);K(Ve.x,Ve.y,-ve),_e===0&&te.push(Ve)}for(let Ue=0,$e=V;Ue<$e;Ue++){const Ve=L[Ue];J=q[Ue];const Ze=[];for(let D=0,xt=Ve.length;D<xt;D++){const je=k(Ve[D],J[D],De);K(je.x,je.y,-ve),_e===0&&Ze.push(je)}_e===0&&ne.push(Ze)}}Fe=bi.triangulateShape(te,ne)}const Ce=Fe.length,lt=f+_;for(let te=0;te<Y;te++){const ne=u?k(I[te],ee[te],lt):I[te];x?(A.copy(T.normals[0]).multiplyScalar(ne.x),b.copy(T.binormals[0]).multiplyScalar(ne.y),v.copy(E[0]).add(A).add(b),K(v.x,v.y,v.z)):K(ne.x,ne.y,0)}for(let te=1;te<=h;te++)for(let ne=0;ne<Y;ne++){const Q=u?k(I[ne],ee[ne],lt):I[ne];x?(A.copy(T.normals[te]).multiplyScalar(Q.x),b.copy(T.binormals[te]).multiplyScalar(Q.y),v.copy(E[te]).add(A).add(b),K(v.x,v.y,v.z)):K(Q.x,Q.y,p/h*te)}for(let te=g-1;te>=0;te--){const ne=te/g,Q=d*Math.cos(ne*Math.PI/2),_e=f*Math.sin(ne*Math.PI/2)+_;for(let ve=0,De=P.length;ve<De;ve++){const Ue=k(P[ve],re[ve],_e);K(Ue.x,Ue.y,p+Q)}for(let ve=0,De=L.length;ve<De;ve++){const Ue=L[ve];J=q[ve];for(let $e=0,Ve=Ue.length;$e<Ve;$e++){const Ze=k(Ue[$e],J[$e],_e);x?K(Ze.x,Ze.y+E[h-1].y,E[h-1].x+Q):K(Ze.x,Ze.y,p+Q)}}}tt(),rt();function tt(){const te=r.length/3;if(u){let ne=0,Q=Y*ne;for(let _e=0;_e<Ce;_e++){const ve=Fe[_e];Me(ve[2]+Q,ve[1]+Q,ve[0]+Q)}ne=h+g*2,Q=Y*ne;for(let _e=0;_e<Ce;_e++){const ve=Fe[_e];Me(ve[0]+Q,ve[1]+Q,ve[2]+Q)}}else{for(let ne=0;ne<Ce;ne++){const Q=Fe[ne];Me(Q[2],Q[1],Q[0])}for(let ne=0;ne<Ce;ne++){const Q=Fe[ne];Me(Q[0]+Y*h,Q[1]+Y*h,Q[2]+Y*h)}}i.addGroup(te,r.length/3-te,0)}function rt(){const te=r.length/3;let ne=0;Z(P,ne),ne+=P.length;for(let Q=0,_e=L.length;Q<_e;Q++){const ve=L[Q];Z(ve,ne),ne+=ve.length}i.addGroup(te,r.length/3-te,1)}function Z(te,ne){let Q=te.length;for(;--Q>=0;){const _e=Q;let ve=Q-1;ve<0&&(ve=te.length-1);for(let De=0,Ue=h+g*2;De<Ue;De++){const $e=Y*De,Ve=Y*(De+1),Ze=ne+_e+$e,D=ne+ve+$e,xt=ne+ve+Ve,je=ne+_e+Ve;Ge(Ze,D,xt,je)}}}function K(te,ne,Q){l.push(te),l.push(ne),l.push(Q)}function Me(te,ne,Q){me(te),me(ne),me(Q);const _e=r.length/3,ve=M.generateTopUV(i,r,_e-3,_e-2,_e-1);we(ve[0]),we(ve[1]),we(ve[2])}function Ge(te,ne,Q,_e){me(te),me(ne),me(_e),me(ne),me(Q),me(_e);const ve=r.length/3,De=M.generateSideWallUV(i,r,ve-6,ve-3,ve-2,ve-1);we(De[0]),we(De[1]),we(De[3]),we(De[1]),we(De[2]),we(De[3])}function me(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function we(te){a.push(te.x),a.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ng(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new go[r.type]().fromJSON(r)),new Wo(i,e.options)}}const Dg={generateTopUV:function(n,e,t,i,r){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ie(a,s),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(n,e,t,i,r,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],p=e[i*3+2],u=e[r*3],d=e[r*3+1],f=e[r*3+2],_=e[a*3],g=e[a*3+1],m=e[a*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new ie(s,1-l),new ie(c,1-p),new ie(u,1-f),new ie(_,1-m)]:[new ie(o,1-l),new ie(h,1-p),new ie(d,1-f),new ie(g,1-m)]}};function Ng(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xo extends ur{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class jo extends Xe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ze(r,0,Math.PI*2);const a=[],s=[],o=[],l=[],c=[],h=1/t,p=new R,u=new ie,d=new R,f=new R,_=new R;let g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-g,d.z=m*0,f.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(f)}for(let M=0;M<=t;M++){const E=i+M*h*r,x=Math.sin(E),T=Math.cos(E);for(let b=0;b<=e.length-1;b++){p.x=e[b].x*x,p.y=e[b].y,p.z=e[b].x*T,s.push(p.x,p.y,p.z),u.x=M/t,u.y=b/(e.length-1),o.push(u.x,u.y);const A=l[3*b+0]*x,v=l[3*b+1],w=l[3*b+0]*T;c.push(A,v,w)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){const x=E+M*e.length,T=x,b=x+e.length,A=x+e.length+1,v=x+1;a.push(T,b,v),a.push(A,v,b)}this.setIndex(a),this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.points,e.segments,e.phiStart,e.phiLength)}}class Aa extends ur{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class An extends Xe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,u=t/l,d=[],f=[],_=[],g=[];for(let m=0;m<h;m++){const M=m*u-s;for(let E=0;E<c;E++){const x=E*p-a;f.push(x,-M,0),_.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const E=M+c*m,x=M+c*(m+1),T=M+1+c*(m+1),b=M+1+c*m;d.push(E,x,b),d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class qo extends Xe{constructor(e=.5,t=1,i=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let p=e;const u=(t-e)/r,d=new R,f=new ie;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const m=a+g/i*s;d.x=p*Math.cos(m),d.y=p*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}p+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let m=0;m<i;m++){const M=m+g,E=M,x=M+i+1,T=M+i+2,b=M+1;o.push(E,x,b),o.push(x,T,b)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yo extends Xe{constructor(e=new pa([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(s,2));function c(h){const p=r.length/3,u=h.extractPoints(t);let d=u.shape;const f=u.holes;bi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=f.length;g<m;g++){const M=f[g];bi.isClockWise(M)===!0&&(f[g]=M.reverse())}const _=bi.triangulateShape(d,f);for(let g=0,m=f.length;g<m;g++){const M=f[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){const M=d[g];r.push(M.x,M.y,0),a.push(0,0,1),s.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){const M=_[g],E=M[0]+p,x=M[1]+p,T=M[2]+p;i.push(E,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ug(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const s=t[e.shapes[r]];i.push(s)}return new Yo(i,e.curveSegments)}}function Ug(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Ca extends Xe{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],p=new R,u=new R,d=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){const M=[],E=m/i,x=s+E*o,T=e*Math.cos(x),b=Math.sqrt(e*e-T*T);let A=0;m===0&&s===0?A=.5/t:m===i&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const w=v/t,I=r+w*a;p.x=-b*Math.cos(I),p.y=T,p.z=b*Math.sin(I),f.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),g.push(w+A,1-E),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const E=h[m][M+1],x=h[m][M],T=h[m+1][M],b=h[m+1][M+1];(m!==0||s>0)&&d.push(E,x,b),(m!==i-1||l<Math.PI)&&d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zo extends ur{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zo(e.radius,e.detail)}}class Jo extends Xe{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],p=[],u=new R,d=new R,f=new R;for(let _=0;_<=i;_++){const g=s+_/i*o;for(let m=0;m<=r;m++){const M=m/r*a;d.x=(e+t*Math.cos(g))*Math.cos(M),d.y=(e+t*Math.cos(g))*Math.sin(M),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(d,u).normalize(),h.push(f.x,f.y,f.z),p.push(m/r),p.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){const m=(r+1)*_+g-1,M=(r+1)*(_-1)+g-1,E=(r+1)*(_-1)+g,x=(r+1)*_+g;l.push(m,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ko extends Xe{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],p=new R,u=new R,d=new R,f=new R,_=new R,g=new R,m=new R;for(let E=0;E<=i;++E){const x=E/i*a*Math.PI*2;M(x,a,s,e,d),M(x+.01,a,s,e,f),g.subVectors(f,d),m.addVectors(f,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let T=0;T<=r;++T){const b=T/r*Math.PI*2,A=-t*Math.cos(b),v=t*Math.sin(b);p.x=d.x+(A*m.x+v*_.x),p.y=d.y+(A*m.y+v*_.y),p.z=d.z+(A*m.z+v*_.z),l.push(p.x,p.y,p.z),u.subVectors(p,d).normalize(),c.push(u.x,u.y,u.z),h.push(E/i),h.push(T/r)}}for(let E=1;E<=i;E++)for(let x=1;x<=r;x++){const T=(r+1)*(E-1)+(x-1),b=(r+1)*E+(x-1),A=(r+1)*E+x,v=(r+1)*(E-1)+x;o.push(T,b,v),o.push(b,A,v)}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function M(E,x,T,b,A){const v=Math.cos(E),w=Math.sin(E),I=T/x*E,L=Math.cos(I);A.x=b*(2+L)*.5*v,A.y=b*(2+L)*w*.5,A.z=b*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class $o extends Xe{constructor(e=new fc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new R,l=new R,c=new ie;let h=new R;const p=[],u=[],d=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function _(){for(let E=0;E<t;E++)g(E);g(a===!1?t:0),M(),m()}function g(E){h=e.getPointAt(E/t,h);const x=s.normals[E],T=s.binormals[E];for(let b=0;b<=r;b++){const A=b/r*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+v*T.x,l.y=w*x.y+v*T.y,l.z=w*x.z+v*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let x=1;x<=r;x++){const T=(r+1)*(E-1)+(x-1),b=(r+1)*E+(x-1),A=(r+1)*E+x,v=(r+1)*(E-1)+x;f.push(T,b,v),f.push(b,A,v)}}function M(){for(let E=0;E<=t;E++)for(let x=0;x<=r;x++)c.x=E/t,c.y=x/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $o(new go[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class od extends Xe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new R,a=new R;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const p=l[c],u=p.start,d=p.count;for(let f=u,_=u+d;f<_;f+=3)for(let g=0;g<3;g++){const m=o.getX(f+g),M=o.getX(f+(g+1)%3);r.fromBufferAttribute(s,m),a.fromBufferAttribute(s,M),ld(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,p=3*o+(c+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,p),ld(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ld(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var cd=Object.freeze({__proto__:null,BoxGeometry:Fr,CapsuleGeometry:Vo,CircleGeometry:ko,ConeGeometry:wa,CylinderGeometry:Ea,DodecahedronGeometry:Ho,EdgesGeometry:Xu,ExtrudeGeometry:Wo,IcosahedronGeometry:Xo,LatheGeometry:jo,OctahedronGeometry:Aa,PlaneGeometry:An,PolyhedronGeometry:ur,RingGeometry:qo,ShapeGeometry:Yo,SphereGeometry:Ca,TetrahedronGeometry:Zo,TorusGeometry:Jo,TorusKnotGeometry:Ko,TubeGeometry:$o,WireframeGeometry:od});class hd extends Dt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function _n(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(ud(r))r.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ud(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][i]=a}else e[t][i]=r.slice();else e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=_n(n[t]);for(const r in i)e[r]=i[r]}return e}function ud(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Og(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const pd={clone:_n,merge:qt};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_n(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new We().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vc extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xc extends Dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends xc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class md extends Dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=In,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gd extends Dt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class _d extends Dt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vd extends Dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=In,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yc extends Dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mc extends Dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xd extends Dt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yd extends jt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function yi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function va(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Md(n){function e(r,a){return n[r]-n[a]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sc(n,e,t){const i=n.length,r=new n.constructor(i);for(let a=0,s=0;s!==i;++a){const o=t[a]*e;for(let l=0;l!==e;++l)r[s++]=n[o+l]}return r}function Sd(n,e,t,i){let r=1,a=n[0];for(;a!==void 0&&a[i]===void 0;)a=n[r++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push(...s)),a=n[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=n[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=n[r++];while(a!==void 0)}function zg(n,e,t,i,r=30){const a=n.clone();a.name=e;const s=[];for(let l=0;l<a.tracks.length;++l){const c=a.tracks[l],h=c.getValueSize(),p=[],u=[];for(let d=0;d<c.times.length;++d){const f=c.times[d]*r;if(!(f<t||f>=i)){p.push(c.times[d]);for(let _=0;_<h;++_)u.push(c.values[d*h+_])}}p.length!==0&&(c.times=yi(p,c.times.constructor),c.values=yi(u,c.values.constructor),s.push(c))}a.tracks=s;let o=1/0;for(let l=0;l<a.tracks.length;++l)o>a.tracks[l].times[0]&&(o=a.tracks[l].times[0]);for(let l=0;l<a.tracks.length;++l)a.tracks[l].shift(-1*o);return a.resetDuration(),a}function Gg(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,a=e/i;for(let s=0;s<r;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const p=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=p/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const f=o.times.length-1;let _;if(a<=o.times[0]){const m=h,M=p-h;_=o.values.slice(m,M)}else if(a>=o.times[f]){const m=f*p+h,M=m+p-h;_=o.values.slice(m,M)}else{const m=o.createInterpolant(),M=h,E=p-h;m.evaluate(a),_=m.resultBuffer.slice(M,E)}l==="quaternion"&&new Wt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const M=m*d+u;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{const E=d-u*2;for(let x=0;x<E;++x)c.values[M+x]-=_[x]}}}return n.blendMode=Tl,n}class Vg{static convertArray(e,t){return yi(e,t)}static isTypedArray(e){return Wh(e)}static hasTangents(e){return va(e)}static getKeyframeOrder(e){return Md(e)}static sortedArray(e,t,i){return Sc(e,t,i)}static flattenJSON(e,t,i,r){Sd(e,t,i,r)}static subclip(e,t,i,r,a=30){return zg(e,t,i,r,a)}static makeClipAdditive(e,t=0,i=e,r=30){return Gg(e,t,i,r)}}class vn{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=a)){const o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bd extends vn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mr,endingEnd:mr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case gr:a=e,o=2*t-i;break;case Wn:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gr:s=e,l=2*i-t;break;case Wn:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(i-t)/(r-t),_=f*f,g=_*f,m=-u*g+2*u*_-u*f,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*f+1,E=(-1-d)*g+(1.5+d)*_+.5*f,x=d*g-d*_;for(let T=0;T!==o;++T)a[T]=m*s[h+T]+M*s[c+T]+E*s[l+T]+x*s[p+T];return a}}class bc extends vn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),p=1-h;for(let u=0;u!==o;++u)a[u]=s[c+u]*p+s[l+u]*h;return a}}class Td extends vn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ed extends vn{interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){const f=(i-t)/(r-t),_=1-f;for(let g=0;g!==o;++g)a[g]=s[c+g]*_+s[l+g]*f;return a}const u=o*2,d=e-1;for(let f=0;f!==o;++f){const _=s[c+f],g=s[l+f],m=d*u+f*2,M=p[m],E=p[m+1],x=e*u+f*2,T=h[x],b=h[x+1],A=Hg(i,t,M,T,r);a[f]=wd(A,_,E,b,g)}return a}}function wd(n,e,t,i,r){const a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*r}function kg(n,e,t,i,r){const a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(r-i)}function Hg(n,e,t,i,r){let a=(n-e)/(r-e);for(let s=0;s<8;s++){const o=wd(a,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;const l=kg(a,e,t,i,r);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}class ui{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yi(t,this.TimeBufferType),this.values=yi(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yi(e.times,Array),values:yi(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),va(e.settings)&&(i.settings={inTangents:yi(e.settings.inTangents,Array),outTangents:yi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ed(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hn:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break;case bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hn;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return Ss;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;va(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,r=i.length;let a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,a=i.length;a===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Wh(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ss,a=e.length-1;let s=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const p=o*i,u=p-i,d=p+i;for(let f=0;f!==i;++f){const _=t[p+f];if(_!==t[u+f]||_!==t[d+f]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const p=o*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[p+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,va(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function Ad(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ui.prototype.ValueTypeName="",ui.prototype.TimeBufferType=Float32Array,ui.prototype.ValueBufferType=Float32Array,ui.prototype.DefaultInterpolation=Ms;class Ar extends ui{constructor(e,t,i){super(e,t,i)}}Ar.prototype.ValueTypeName="bool",Ar.prototype.ValueBufferType=Array,Ar.prototype.DefaultInterpolation=Hn,Ar.prototype.InterpolantFactoryMethodLinear=void 0,Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Tc extends ui{constructor(e,t,i,r){super(e,t,i,r)}}Tc.prototype.ValueTypeName="color";class xo extends ui{constructor(e,t,i,r){super(e,t,i,r)}}xo.prototype.ValueTypeName="number";class Cd extends vn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(a,0,s,c-o,s,c,l);return a}}class yo extends ui{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion",yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends ui{constructor(e,t,i){super(e,t,i)}}Cr.prototype.ValueTypeName="string",Cr.prototype.ValueBufferType=Array,Cr.prototype.DefaultInterpolation=Hn,Cr.prototype.InterpolantFactoryMethodLinear=void 0,Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ec extends ui{constructor(e,t,i,r){super(e,t,i,r)}}Ec.prototype.ValueTypeName="vector";class xa{constructor(e="",t=-1,i=[],r=bs){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Xg(i[s]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,s=i.length;a!==s;++a)t.push(ui.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const a=t.length,s=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const h=Md(l);l=Sc(l,1,h),c=Sc(c,1,h),!r&&l[0]===0&&(l.push(a),c.push(c[0])),s.push(new xo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(a);if(h&&h.length>1){const p=h[1];let u=r[p];u||(r[p]=u=[]),u.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return s}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Wg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return Ec;case"color":return Tc;case"quaternion":return yo;case"bool":case"boolean":return Ar;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Xg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wg(n.type);if(n.times===void 0){const i=[],r=[];Sd(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),va(n.settings)&&(t.settings={inTangents:yi(n.settings.inTangents,Float32Array),outTangents:yi(n.settings.outTangents,Float32Array)}),t}const Li={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Rd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Rd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Rd(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wc{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){const d=c[p],f=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Id=new wc;class ei{constructor(e){this.manager=e!==void 0?e:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ei.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class jg extends Error{constructor(e,t){super(e),this.response=t}}class Yi extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Li.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:r});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&de("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qi[e],p=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,f=d!==0;let _=0;const g=new ReadableStream({start(m){M();function M(){p.read().then(({done:E,value:x})=>{if(E)m.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:d});for(let b=0,A=h.length;b<A;b++){const v=h[b];v.onProgress&&v.onProgress(T)}m.enqueue(x),M()}},E=>{m.error(E)})}}});return new Response(g)}else throw new jg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(p);return c.arrayBuffer().then(d=>u.decode(d))}}}).then(c=>{Li.add(`file:${e}`,c);const h=qi[e];delete qi[e];for(let p=0,u=h.length;p<u;p++){const d=h[p];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let p=0,u=h.length;p<u;p++){const d=h[p];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qg extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new Yi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),a.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=xa.parse(e[i]);t.push(r)}return t}}class Yg extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=[],o=new ho,l=new Yi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(a.withCredentials);let c=0;function h(p){l.load(e[p],function(u){const d=a.parse(u,!0);s[p]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=gt),o.image=s,o.format=d.format,o.needsUpdate=!0,t&&t(o))},i,r)}if(Array.isArray(e))for(let p=0,u=e.length;p<u;++p)h(p);else l.load(e,function(p){const u=a.parse(p,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)s[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+_]),s[f].format=u.format,s[f].width=u.width,s[f].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=gt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,r);return o}}const xn=new WeakMap;class ya extends ei{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Li.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let p=xn.get(s);p===void 0&&(p=[],xn.set(s,p)),p.push({onLoad:t,onError:r})}return s}const o=qn("img");function l(){h(),t&&t(this);const p=xn.get(this)||[];for(let u=0;u<p.length;u++){const d=p[u];d.onLoad&&d.onLoad(this)}xn.delete(this),a.manager.itemEnd(e)}function c(p){h(),r&&r(p),Li.remove(`image:${e}`);const u=xn.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onError&&f.onError(p)}xn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Li.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Zg extends ei{constructor(e){super(e)}load(e,t,i,r){const a=new ca;a.colorSpace=Jt;const s=new ya(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){a.images[c]=h,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return a}}class Jg extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new ci,o=new Yi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){let c;try{c=a.parse(l)}catch(h){r!==void 0?r(h):Pe(h);return}a._applyTexData(s,c),t&&t(s,c)},i,r),s}createDataTexture(e){const t=new ci;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Yt,e.wrapT=t.wrapT!==void 0?t.wrapT:Yt,e.magFilter=t.magFilter!==void 0?t.magFilter:gt,e.minFilter=t.minFilter!==void 0?t.minFilter:gt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ri),t.mipmapCount===1&&(e.minFilter=gt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Kg extends ei{constructor(e){super(e)}load(e,t,i,r){const a=new vt,s=new ya(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class lr extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Pd extends lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ac=new We,Ld=new R,Dd=new R;class Mo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ac,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,s=r?r.z/a.x:1,o=r?r.w/a.y:1,l=r?r.x/a.x:0,c=r?r.y/a.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const So=new R,bo=new Wt,Di=new R;class To extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,bo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(So,bo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new R,Nd=new ie,Ud=new ie;class Nt extends To{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $g extends Mo{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Yr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Od extends lr{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new $g}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Qg extends Mo{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0}}class Fd extends lr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ma extends To{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e_ extends Mo{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bd extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new e_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zd extends lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gd extends lr{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Cc{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*a),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*r)),t.addScaledVector(s[5],1.092548*(r*a)),t.addScaledVector(s[6],.315392*(3*a*a-1)),t.addScaledVector(s[7],1.092548*(i*a)),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*r),t.addScaledVector(s[2],2*.511664*a),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*r),t.addScaledVector(s[5],2*.429043*r*a),t.addScaledVector(s[6],.743125*a*a-.247708),t.addScaledVector(s[7],2*.429043*i*a),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,a=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-r*r)}}class Vd extends lr{constructor(e=new Cc,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const kd={};class Qo extends ei{constructor(e){super(e),this.textures={}}load(e,t,i,r){const a=this,s=new Yi(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),a.manager.itemError(e)}},i,r)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Qo.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:hd,SpriteMaterial:ql,RawShaderMaterial:vc,ShaderMaterial:hi,PointsMaterial:rc,MeshPhysicalMaterial:fd,MeshStandardMaterial:xc,MeshPhongMaterial:md,MeshToonMaterial:gd,MeshNormalMaterial:_d,MeshLambertMaterial:vd,MeshDepthMaterial:yc,MeshDistanceMaterial:Mc,MeshBasicMaterial:sr,MeshMatcapMaterial:xd,LineDashedMaterial:yd,LineBasicMaterial:jt,Material:Dt,...kd}[e];let i;return t===void 0?(Fi(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),i=new Dt):i=new t,i}static registerMaterial(e,t){kd[e]=t}}class Rc{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hd extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Wd extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new Yi(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(o){try{t(a.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),a.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(u,d){if(t[d]!==void 0)return t[d];const f=u.interleavedBuffers[d],_=a(u,f.buffer),g=qr(f.type,_),m=new zs(g,f.stride);return m.uuid=f.uuid,f.usage!==void 0&&m.setUsage(f.usage),t[d]=m,m}function a(u,d){if(i[d]!==void 0)return i[d];const f=u.arrayBuffers[d],_=new Uint32Array(f).buffer;return i[d]=_,_}const s=e.isInstancedBufferGeometry?new Hd:new Xe,o=e.data.index;if(o!==void 0){const u=qr(o.type,o.array);s.setIndex(new pt(u,1))}const l=e.data.attributes;for(const u in l){const d=l[u];let f;if(d.isInterleavedBufferAttribute){const _=r(e.data,d.data);f=new Or(_,d.itemSize,d.offset,d.normalized)}else{const _=qr(d.type,d.array),g=d.isInstancedBufferAttribute?pn:pt;f=new g(_,d.itemSize,d.normalized)}d.name!==void 0&&(f.name=d.name),d.usage!==void 0&&f.setUsage(d.usage),d.gpuType!==void 0&&(f.gpuType=d.gpuType),s.setAttribute(u,f)}const c=e.data.morphAttributes;if(c)for(const u in c){const d=c[u],f=[];for(let _=0,g=d.length;_<g;_++){const m=d[_];let M;if(m.isInterleavedBufferAttribute){const E=r(e.data,m.data);M=new Or(E,m.itemSize,m.offset,m.normalized)}else{const E=qr(m.type,m.array);M=new pt(E,m.itemSize,m.normalized)}m.name!==void 0&&(M.name=m.name),m.usage!==void 0&&M.setUsage(m.usage),m.gpuType!==void 0&&(M.gpuType=m.gpuType),f.push(M)}s.morphAttributes[u]=f}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,d=h.length;u!==d;++u){const f=h[u];s.addGroup(f.start,f.count,f.materialIndex)}const p=e.data.boundingSphere;return p!==void 0&&(s.boundingSphere=new Lt().fromJSON(p)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}const Ic={};class t_ extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=this.path===""?Rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new Yi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(p){r!==void 0&&r(p),Pe("ObjectLoader: Can't parse "+e+".",p.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}a.parse(c,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?Rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const a=new Yi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials);const s=await a.loadAsync(e,t);let o;try{o=JSON.parse(s)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,a,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let p=!1;for(const u in s)if(s[u].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,a),o=this.parseMaterials(e.materials,s),l=this.parseObject(e.object,r,o,s,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){Ic[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const a=new pa().fromJSON(e[i]);t[a.uuid]=a}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(a){a.isBone&&(r[a.uuid]=a)}),e!==void 0)for(let a=0,s=e.length;a<s;a++){const o=new zo().fromJSON(e[a],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new Wd;for(let a=0,s=e.length;a<s;a++){let o;const l=e[a];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in cd?o=cd[l.type].fromJSON(l,t):l.type in Ic?o=Ic[l.type].fromJSON(l,t):de(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const a=new Qo;a.setTextures(t);for(let s=0,o=e.length;s<o;s++){const l=e[s];i[l.uuid]===void 0&&(i[l.uuid]=a.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],a=xa.parse(r);t[a.uuid]=a}return t}parseImages(e,t){const i=this,r={};let a;function s(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),a.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return s(h)}else return l.data?{data:qr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new wc(t);a=new ya(l),a.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const p=e[c],u=p.url;if(Array.isArray(u)){const d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new ci(m.data,m.width,m.height)))}r[p.uuid]=new zi(d)}else{const d=o(p.url);r[p.uuid]=new zi(d)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function a(s){if(typeof s=="string"){const o=s,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return s.data?{data:qr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){r=new ya(this.manager),r.setCrossOrigin(this.crossOrigin);for(let s=0,o=e.length;s<o;s++){const l=e[s],c=l.url;if(Array.isArray(c)){const h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p],f=await a(d);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new ci(f.data,f.width,f.height)))}i[l.uuid]=new zi(h)}else{const h=await a(l.url);i[l.uuid]=new zi(h)}}}return i}parseTextures(e,t){function i(a,s){return typeof a=="number"?a:(de("ObjectLoader.parseTexture: Constant should be in numeric form.",a),s[a])}const r={};if(e!==void 0)for(let a=0,s=e.length;a<s;a++){const o=e[a];o.image===void 0&&de('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&de("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new ca,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ci:h=new vt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,i_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Xd),h.wrapT=i(o.wrap[1],Xd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,jd)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,jd)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),r[o.uuid]=h}return r}parseObject(e,t,i,r,a){let s;function o(u){return t[u]===void 0&&de("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f];i[g]===void 0&&de("ObjectLoader: Undefined material",g),d.push(i[g])}return d}return i[u]===void 0&&de("ObjectLoader: Undefined material",u),i[u]}}function c(u){return r[u]===void 0&&de("ObjectLoader: Undefined texture",u),r[u]}let h,p;switch(e.type){case"Scene":s=new du,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new xe(e.background):s.background=c(e.background)),e.environment!==void 0&&(s.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Bo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Fo(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Ma(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new zd(e.color,e.intensity);break;case"DirectionalLight":s=new Bd(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new Fd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Gd(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Od(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new Pd(e.color,e.groundColor,e.intensity);break;case"LightProbe":const u=new Cc().fromArray(e.sh);s=new Vd(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),p=l(e.material),s=new Au(h,p),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),p=l(e.material),s=new At(h,p);break;case"InstancedMesh":h=o(e.geometry),p=l(e.material);const d=e.count,f=e.instanceMatrix,_=e.instanceColor;s=new Pu(h,p,d),s.instanceMatrix=new pn(new Float32Array(f.array),16),_!==void 0&&(s.instanceColor=new pn(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),p=l(e.material),s=new Nu(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),s.geometry=h,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(g=>{let m=null,M=null;return g.boundingBox!==void 0&&(m=new Ft().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(M=new Lt().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:M}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=c(e.matricesTexture.uuid),s._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Lt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new Ft().fromJSON(e.boundingBox));break;case"LOD":s=new xu;break;case"Line":s=new or(o(e.geometry),l(e.material));break;case"LineLoop":s=new zu(o(e.geometry),l(e.material));break;case"LineSegments":s=new Pi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":s=new Vu(o(e.geometry),l(e.material));break;case"Sprite":s=new _u(l(e.material));break;case"Group":s=new en;break;case"Bone":s=new Ql;break;default:s=new nt}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(s.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(s.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(s.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)s.add(this.parseObject(u[d],t,i,r,a))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const f=u[d];s.animations.push(a[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const f=u[d],_=s.getObjectByProperty("uuid",f.object);_!==void 0&&s.addLevel(_,f.distance,f.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?de("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new nt}})}}const i_={UVMapping:Ba,CubeReflectionMapping:Ci,CubeRefractionMapping:$i,EquirectangularReflectionMapping:Pn,EquirectangularRefractionMapping:Ln,CubeUVReflectionMapping:Hr},Xd={RepeatWrapping:Dn,ClampToEdgeWrapping:Yt,MirroredRepeatWrapping:Nn},jd={NearestFilter:bt,NearestMipmapNearestFilter:gl,NearestMipmapLinearFilter:Wr,LinearFilter:gt,LinearMipmapNearestFilter:Un,LinearMipmapLinearFilter:Ri},Pc=new WeakMap;class r_ extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&de("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&de("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Li.get(`image-bitmap:${e}`);if(s!==void 0){if(a.manager.itemStart(e),s.then){s.then(c=>{Pc.has(s)===!0?(r&&r(Pc.get(s)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(c),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(c){return Li.add(`image-bitmap:${e}`,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Pc.set(l,c),Li.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Li.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Eo;class Lc{static getContext(){return Eo===void 0&&(Eo=new(window.AudioContext||window.webkitAudioContext)),Eo}static setContext(e){Eo=e}}class n_ extends ei{constructor(e){super(e)}load(e,t,i,r){const a=this,s=new Yi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{const c=l.slice(0),h=Lc.getContext(),p=e+"#decode";a.manager.itemStart(p),h.decodeAudioData(c,function(u){t(u),a.manager.itemEnd(p)}).catch(function(u){o(u),a.manager.itemEnd(p)})}catch(c){o(c)}},i,r);function o(l){r?r(l):Pe(l),a.manager.itemError(e)}}}const qd=new We,Yd=new We,Rr=new We;class a_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Rr.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(vr*t.fov*.5)/t.zoom;let s,o;Yd.elements[12]=-i,qd.elements[12]=i,s=-a*t.aspect+r,o=a*t.aspect+r,Rr.elements[0]=2*t.near/(o-s),Rr.elements[8]=(o+s)/(o-s),this.cameraL.projectionMatrix.copy(Rr),s=-a*t.aspect-r,o=a*t.aspect-r,Rr.elements[0]=2*t.near/(o-s),Rr.elements[8]=(o+s)/(o-s),this.cameraR.projectionMatrix.copy(Rr)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Yd),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(qd),this.cameraR.matrixWorldNeedsUpdate=!0}}const yn=-90,Mn=1;class Zd extends nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(yn,Mn,e,t);r.layers=this.layers,this.add(r);const a=new Nt(yn,Mn,e,t);a.layers=this.layers,this.add(a);const s=new Nt(yn,Mn,e,t);s.layers=this.layers,this.add(s);const o=new Nt(yn,Mn,e,t);o.layers=this.layers,this.add(o);const l=new Nt(yn,Mn,e,t);l.layers=this.layers,this.add(l);const c=new Nt(yn,Mn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Jd extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=s_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function s_(){this._document.hidden===!1&&this.reset()}const Ir=new R,Dc=new Wt,o_=new R,Pr=new R,Lr=new R;class l_ extends nt{constructor(){super(),this.type="AudioListener",this.context=Lc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Kd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ir,Dc,o_),Pr.set(0,0,-1).applyQuaternion(Dc),Lr.set(0,1,0).applyQuaternion(Dc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ir.x,i),t.positionY.linearRampToValueAtTime(Ir.y,i),t.positionZ.linearRampToValueAtTime(Ir.z,i),t.forwardX.linearRampToValueAtTime(Pr.x,i),t.forwardY.linearRampToValueAtTime(Pr.y,i),t.forwardZ.linearRampToValueAtTime(Pr.z,i),t.upX.linearRampToValueAtTime(Lr.x,i),t.upY.linearRampToValueAtTime(Lr.y,i),t.upZ.linearRampToValueAtTime(Lr.z,i)}else t.setPosition(Ir.x,Ir.y,Ir.z),t.setOrientation(Pr.x,Pr.y,Pr.z,Lr.x,Lr.y,Lr.z)}}class $d extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){de("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(de("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(de("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Dr=new R,Qd=new Wt,c_=new R,Nr=new R;class h_ extends $d{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Dr,Qd,c_),Nr.set(0,0,1).applyQuaternion(Qd);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Dr.x,i),t.positionY.linearRampToValueAtTime(Dr.y,i),t.positionZ.linearRampToValueAtTime(Dr.z,i),t.orientationX.linearRampToValueAtTime(Nr.x,i),t.orientationY.linearRampToValueAtTime(Nr.y,i),t.orientationZ.linearRampToValueAtTime(Nr.z,i)}else t.setPosition(Dr.x,Dr.y,Dr.z),t.setOrientation(Nr.x,Nr.y,Nr.z)}}class u_{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class ep{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,a,s;switch(t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,a=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==r;++o)i[a+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,a,0,o,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let a=i,s=r;a!==s;++a)t[a]=t[r+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let s=0;s!==a;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){Wt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){const s=this._workIndex*a;Wt.multiplyQuaternionsFlat(e,s,e,t,e,i),Wt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){const s=1-r;for(let o=0;o!==a;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){const o=t+s;e[o]=e[o]+e[i+s]*r}}}const Nc="\\[\\]\\.:\\/",d_=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",p_="[^"+Nc.replace("\\.","")+"]",f_=/((?:WC+[\/:])*)/.source.replace("WC",Uc),m_=/(WCOD+)?/.source.replace("WCOD",p_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),v_=new RegExp("^"+f_+m_+g_+__+"$"),x_=["material","materials","bones","map"];class y_{constructor(e,t,i){const r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d_,"")}static parseTrackName(e){const t=v_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=i.nodeName.substring(r+1);x_.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=y_,at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray],at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class M_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ri(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,p=arguments.length;h!==p;++h){const u=arguments[h],d=u.uuid;let f=t[d];if(f===void 0){f=l++,t[d]=f,e.push(u);for(let _=0,g=s;_!==g;++_)a[_].push(new at(u,i[_],r[_]))}else if(f<c){o=e[f];const _=--c,g=e[_];t[g.uuid]=f,e[f]=g,t[d]=_,e[_]=u;for(let m=0,M=s;m!==M;++m){const E=a[m],x=E[_];let T=E[f];E[f]=x,T===void 0&&(T=new at(u,i[m],r[m])),E[_]=T}}else e[f]!==o&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let a=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const l=arguments[s],c=l.uuid,h=t[c];if(h!==void 0&&h>=a){const p=a++,u=e[p];t[u.uuid]=h,e[h]=u,t[c]=p,e[p]=l;for(let d=0,f=r;d!==f;++d){const _=i[d],g=_[p],m=_[h];_[h]=g,_[p]=m}}}this.nCachedObjects_=a}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let a=this.nCachedObjects_,s=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,p=t[h];if(p!==void 0)if(delete t[h],p<a){const u=--a,d=e[u],f=--s,_=e[f];p!==u&&(t[d.uuid]=p),e[p]=d,u!==f&&(t[_.uuid]=u),e[u]=_,e.pop();for(let g=0,m=r;g!==m;++g){const M=i[g],E=M[u],x=M[f];M[p]=E,M[u]=x,M.pop()}}else{const u=--s,d=e[u];p!==u&&(t[d.uuid]=p),e[p]=d,e.pop();for(let f=0,_=r;f!==_;++f){const g=i[f];g[p]=g[u],g.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const a=this._bindings;if(r!==void 0)return a[r];const s=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,p=new Array(c);r=a.length,i[e]=r,s.push(e),o.push(t),a.push(p);for(let u=h,d=l.length;u!==d;++u){const f=l[u];p[u]=new at(f,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,a=this._parsedPaths,s=this._bindings,o=s.length-1,l=s[o],c=r[o];t[c]=i,s[i]=l,s.pop(),a[i]=a[o],a.pop(),r[i]=r[o],r.pop()}}}class tp{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const a=t.tracks,s=a.length,o=new Array(s),l={endingStart:mr,endingEnd:mr};for(let c=0;c!==s;++c){const h=a[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Dh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const r=this._clip.duration,a=e._clip.duration,s=a/r,o=r/a;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,a=r.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=a,l[1]=a+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const l=(e-a)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tl:for(let h=0,p=l.length;h!==p;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case bs:default:for(let h=0,p=l.length;h!==p;++h)l[h].evaluate(s),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,a=this._loopCount;const s=i===Nh;if(e===0)return a===-1?r:s&&(a&1)===1?t-r:r;if(i===Lh){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,a+=Math.abs(o);const l=this.repetitions-a;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=a,this.time=r;if(s&&(a&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=gr,r.endingEnd=gr):(e?r.endingStart=this.zeroSlopeAtStart?gr:mr:r.endingStart=Wn,t?r.endingEnd=this.zeroSlopeAtEnd?gr:mr:r.endingEnd=Wn)}_scheduleFading(e,t,i){const r=this._mixer,a=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=a,l[0]=t,o[1]=a+e,l[1]=i,this}}const S_=new Float32Array(1);class b_ extends mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let p=0;p!==a;++p){const u=r[p],d=u.name;let f=h[d];if(f!==void 0)++f.referenceCount,s[p]=f;else{if(f=s[p],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,d));continue}const _=t&&t._propertyBindings[p].binding.parsedPath;f=new ep(at.create(i,d,_),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,d),s[p]=f}o[p].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,a=this._actionsByClip[r];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,a=this._actionsByClip;let s=a[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,s=this._actionsByClip,o=s[a],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const p=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete p[u],l.length===0&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,a=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,o=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[a],Object.keys(o).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new bc(new Float32Array(2),new Float32Array(2),1,S_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const r=t||this._root,a=r.uuid;let s=typeof e=="string"?xa.findByName(r,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=bs),l!==void 0){const p=l.actionByRoot[a];if(p!==void 0&&p.blendMode===i)return p;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new tp(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,a),h}existingAction(e,t){const i=t||this._root,r=i.uuid,a=typeof e=="string"?xa.findByName(i,e):e,s=a?a.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,a,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(a!==void 0){const s=a.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,p=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,p._cacheIndex=h,t[h]=p,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,a=r[t];if(a!==void 0)for(const s in a){const o=a[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class T_ extends Pl{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=i;for(let a=0;a<this.textures.length;a++){const s=new Rs(null,e,t,i);s.isRenderTargetTexture=!0,s.renderTarget=this,this.textures[a]=s}this._setTextureOptions(r)}}class Kc{constructor(e){this.value=e}clone(){return new Kc(this.value.clone===void 0?this.value:this.value.clone())}}let E_=0;class w_ extends mi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:E_++}),this.name="",this.usage=As,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){const a=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<a.length;s++)this.uniforms.push(a[s].clone())}return this}clone(){return new this.constructor().copy(this)}}class A_ extends zs{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class C_{constructor(e,t,i,r,a,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=a,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const ip=new We;class R_{constructor(e,t,i=0,r=1/0){this.ray=new dn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ip),this}intersectObject(e,t=!0,i=[]){return Oc(e,this,i,t),i.sort(rp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Oc(e[r],this,i,t);return i.sort(rp),i}}function rp(n,e){return n.distance-e.distance}function Oc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Oc(a[s],e,t,!0)}}class I_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class P_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class L_{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}const np=class{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}};np.prototype.isMatrix2=!0;let D_=np;const ap=new ie;class sp{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ap.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ap).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const op=new R,wo=new R,Sn=new R,bn=new R,Fc=new R,N_=new R,U_=new R;class O_{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){op.subVectors(e,this.start),wo.subVectors(this.end,this.start);const i=wo.dot(wo);if(i===0)return 0;let r=wo.dot(op)/i;return t&&(r=ze(r,0,1)),r}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=N_,i=U_){const r=10000000000000001e-32;let a,s;const o=this.start,l=e.start,c=this.end,h=e.end;Sn.subVectors(c,o),bn.subVectors(h,l),Fc.subVectors(o,l);const p=Sn.dot(Sn),u=bn.dot(bn),d=bn.dot(Fc);if(p<=r&&u<=r)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(p<=r)a=0,s=d/u,s=ze(s,0,1);else{const f=Sn.dot(Fc);if(u<=r)s=0,a=ze(-f/p,0,1);else{const _=Sn.dot(bn),g=p*u-_*_;g!==0?a=ze((_*d-f*u)/g,0,1):a=0,s=(_*a+d)/u,s<0?(s=0,a=ze(-f/p,0,1)):s>1&&(s=1,a=ze((_-f)/p,0,1))}}return t.copy(o).addScaledVector(Sn,a),i.copy(l).addScaledVector(bn,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const lp=new R;class F_ extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Xe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,l=32;s<l;s++,o++){const c=s/l*Math.PI*2,h=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Te(r,3));const a=new jt({fog:!1,toneMapped:!1});this.cone=new Pi(i,a),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),lp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(lp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const hr=new R,Ao=new We,Bc=new We;class B_ extends Pi{constructor(e){const t=cp(e),i=new Xe,r=[],a=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),a.push(0,0,0),a.push(0,0,0))}i.setAttribute("position",new Te(r,3)),i.setAttribute("color",new Te(a,3));const s=new jt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new xe(255),l=new xe(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");Bc.copy(this.root.matrixWorld).invert();for(let a=0,s=0;a<t.length;a++){const o=t[a];o.parent&&o.parent.isBone&&(Ao.multiplyMatrices(Bc,o.matrixWorld),hr.setFromMatrixPosition(Ao),r.setXYZ(s,hr.x,hr.y,hr.z),Ao.multiplyMatrices(Bc,o.parent.matrixWorld),hr.setFromMatrixPosition(Ao),r.setXYZ(s+1,hr.x,hr.y,hr.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function cp(n){const e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push(...cp(n.children[t]));return e}class z_ extends At{constructor(e,t,i){const r=new Ca(t,4,2),a=new sr({wireframe:!0,fog:!1,toneMapped:!1});super(r,a),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const G_=new R,hp=new xe,up=new xe;class V_ extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new Aa(t);r.rotateY(Math.PI*.5),this.material=new sr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const a=r.getAttribute("position"),s=new Float32Array(a.count*3);r.setAttribute("color",new pt(s,3)),this.add(new At(r,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");hp.copy(this.light.color),up.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const a=i<r/2?hp:up;t.setXYZ(i,a.r,a.g,a.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(G_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class k_ extends Pi{constructor(e=10,t=10,i=4473924,r=8947848){i=new xe(i),r=new xe(r);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,f=-o;u<=t;u++,f+=s){l.push(-o,0,f,o,0,f),l.push(f,0,-o,f,0,o);const _=u===a?i:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new Xe;h.setAttribute("position",new Te(l,3)),h.setAttribute("color",new Te(c,3));const p=new jt({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class H_ extends Pi{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new xe(a),s=new xe(s);const o=[],l=[];if(t>1)for(let p=0;p<t;p++){const u=p/t*(Math.PI*2),d=Math.sin(u)*e,f=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,f);const _=p&1?a:s;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let p=0;p<i;p++){const u=p&1?a:s,d=e-e/i*p;for(let f=0;f<r;f++){let _=f/r*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;o.push(g,0,m),l.push(u.r,u.g,u.b),_=(f+1)/r*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Xe;c.setAttribute("position",new Te(o,3)),c.setAttribute("color",new Te(l,3));const h=new jt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const dp=new R,Co=new R,pp=new R;class W_ extends nt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Xe;r.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new jt({fog:!1,toneMapped:!1});this.lightPlane=new or(r,a),this.add(this.lightPlane),r=new Xe,r.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new or(r,a),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),dp.setFromMatrixPosition(this.light.matrixWorld),Co.setFromMatrixPosition(this.light.target.matrixWorld),pp.subVectors(Co,dp),this.lightPlane.lookAt(Co),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Co),this.targetLine.scale.z=pp.length()}}const Ro=new R,Mt=new To;class X_ extends Pi{constructor(e){const t=new Xe,i=new jt({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],a=[],s={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(f,_){l(f),l(_)}function l(f){r.push(0,0,0),a.push(0,0,0),s[f]===void 0&&(s[f]=[]),s[f].push(r.length/3-1)}t.setAttribute("position",new Te(r,3)),t.setAttribute("color",new Te(a,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const c=new xe(16755200),h=new xe(16711680),p=new xe(43775),u=new xe(16777215),d=new xe(3355443);this.setColors(c,h,p,u,d)}setColors(e,t,i,r,a){const s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,a.r,a.g,a.b),s.setXYZ(41,a.r,a.g,a.b),s.setXYZ(42,a.r,a.g,a.b),s.setXYZ(43,a.r,a.g,a.b),s.setXYZ(44,a.r,a.g,a.b),s.setXYZ(45,a.r,a.g,a.b),s.setXYZ(46,a.r,a.g,a.b),s.setXYZ(47,a.r,a.g,a.b),s.setXYZ(48,a.r,a.g,a.b),s.setXYZ(49,a.r,a.g,a.b),s.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;let a,s;if(Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)a=1,s=0;else if(this.camera.coordinateSystem===ii)a=-1,s=1;else if(this.camera.coordinateSystem===_r)a=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Tt("c",t,e,Mt,0,0,a),Tt("t",t,e,Mt,0,0,s),Tt("n1",t,e,Mt,-i,-r,a),Tt("n2",t,e,Mt,i,-r,a),Tt("n3",t,e,Mt,-i,r,a),Tt("n4",t,e,Mt,i,r,a),Tt("f1",t,e,Mt,-i,-r,s),Tt("f2",t,e,Mt,i,-r,s),Tt("f3",t,e,Mt,-i,r,s),Tt("f4",t,e,Mt,i,r,s),Tt("u1",t,e,Mt,i*.7,r*1.1,a),Tt("u2",t,e,Mt,-i*.7,r*1.1,a),Tt("u3",t,e,Mt,0,r*2,a),Tt("cf1",t,e,Mt,-i,0,s),Tt("cf2",t,e,Mt,i,0,s),Tt("cf3",t,e,Mt,0,-r,s),Tt("cf4",t,e,Mt,0,r,s),Tt("cn1",t,e,Mt,-i,0,a),Tt("cn2",t,e,Mt,i,0,a),Tt("cn3",t,e,Mt,0,-r,a),Tt("cn4",t,e,Mt,0,r,a),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Tt(n,e,t,i,r,a,s){Ro.set(r,a,s).unproject(i);const o=e[n];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ro.x,Ro.y,Ro.z)}}const Io=new Ft;class j_ extends Pi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),a=new Xe;a.setIndex(new pt(i,1)),a.setAttribute("position",new pt(r,3)),super(a,new jt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Io.setFromObject(this.object),Io.isEmpty())return;const e=Io.min,t=Io.max,i=this.geometry.attributes.position,r=i.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class q_ extends Pi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new Xe;a.setIndex(new pt(i,1)),a.setAttribute("position",new Te(r,3)),super(a,new jt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Y_ extends or{constructor(e,t=1,i=16776960){const r=i,a=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Xe;s.setAttribute("position",new Te(a,3)),s.computeBoundingSphere(),super(s,new jt({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Xe;l.setAttribute("position",new Te(o,3)),l.computeBoundingSphere(),this.add(new At(l,new sr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const fp=new R;let Po,zc;class Z_ extends nt{constructor(e=new R(0,0,1),t=new R(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",Po===void 0&&(Po=new Xe,Po.setAttribute("position",new Te([0,0,0,0,1,0],3)),zc=new wa(.5,1,5,1),zc.translate(0,-.5,0)),this.position.copy(t),this.line=new or(Po,new jt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(zc,new sr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{fp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(fp,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class J_ extends Pi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Xe;r.setAttribute("position",new Te(t,3)),r.setAttribute("color",new Te(i,3));const a=new jt({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){const r=new xe,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class K_{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new da,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1;const p=c.length;for(let u=0,d=p-1;u<p;d=u++){const f=c[u],_=c[d];f.y>l.y!=_.y>l.y&&l.x<(_.x-f.x)*(l.y-f.y)/(_.y-f.y)+f.x&&(h=!h)}return h}function t(l,c){const h=c.getCenter(new ie);if(e(h,l))return h;const p=h.y,u=[],d=l.length;for(let f=0;f<d;f++){const _=l[f],g=l[(f+1)%d];if(_.y>p!=g.y>p){const m=_.x+(p-_.y)*(g.x-_.x)/(g.y-_.y);u.push(m)}}return u.length>1&&(u.sort((f,_)=>f-_),h.x=(u[0]+u[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(de('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const r=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),a=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=bi.area(c);if(h===0)continue;const p=new sp;for(let u=0;u<c.length;u++)p.expandByPoint(c[u]);a.push({subPath:l,points:c,boundingBox:p,interiorPoint:t(c,p),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}a.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<a.length;l++){const c=a[l];let h=0;for(let p=l-1;p>=0;p--){const u=a[p];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}r(c.winding)===r(h)&&(c.exclude=!0)}for(const l of a)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const s=[],o=new Map;for(const l of a){if(l.exclude||l.role!=="outer")continue;const c=new pa;c.curves=l.subPath.curves,s.push(c),o.set(l,c)}for(const l of a){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new da;h.curves=l.subPath.curves,c.holes.push(h)}return s}}class $_ extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Q_(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function e0(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function t0(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function Gc(n,e,t,i){const r=i0(i);switch(t){case Ml:return n*e;case ka:return n*e/r.components*r.byteLength;case On:return n*e/r.components*r.byteLength;case er:return n*e*2/r.components*r.byteLength;case Ha:return n*e*2/r.components*r.byteLength;case Sl:return n*e*3/r.components*r.byteLength;case kt:return n*e*4/r.components*r.byteLength;case Wa:return n*e*4/r.components*r.byteLength;case Fn:case Bn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zn:case Gn:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:case Ya:return Math.max(n,16)*Math.max(e,8)/4;case Xa:case qa:return Math.max(n,8)*Math.max(e,8)/2;case Za:case Ja:case $a:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Vn:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case is:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ns:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case as:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ss:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case os:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ls:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case us:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ds:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ps:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ms:case gs:case _s:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vs:case xs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kn:case ys:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i0(n){switch(n){case Zt:case _l:return{byteLength:1,components:1};case Xr:case vl:case fi:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case oi:case za:case Vt:return{byteLength:4,components:1};case xl:case yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}class r0{static contain(e,t){return Q_(e,t)}static cover(e,t){return e0(e,t)}static fill(e){return t0(e)}static getByteLength(e,t,i,r){return Gc(e,t,i,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mp(){let n=null,e=!1,t=null,i=null;function r(a,s){i=n.requestAnimationFrame(r),t(a,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function n0(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((d,f)=>d.start-f.start);let u=0;for(let d=1;d<p.length;d++){const f=p[u],_=p[d];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,p[u]=_)}p.length=u+1;for(let d=0,f=p.length;d<f;d++){const _=p[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:a0,alphahash_pars_fragment:s0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:p0,batching_vertex:f0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:_0,iridescence_fragment:v0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:b0,color_fragment:T0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:A0,common:C0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:I0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:D0,emissivemap_pars_fragment:N0,colorspace_fragment:U0,colorspace_pars_fragment:O0,envmap_fragment:F0,envmap_common_pars_fragment:B0,envmap_pars_fragment:z0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:K0,envmap_vertex:V0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:$0,lights_toon_pars_fragment:Q0,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:iv,lights_physical_pars_fragment:rv,lights_fragment_begin:nv,lights_fragment_maps:av,lights_fragment_end:sv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:uv,map_fragment:dv,map_pars_fragment:pv,map_particle_fragment:fv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:_v,morphinstance_vertex:vv,morphcolor_vertex:xv,morphnormal_vertex:yv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Sv,normal_fragment_begin:bv,normal_fragment_maps:Tv,normal_pars_fragment:Ev,normal_pars_vertex:wv,normal_vertex:Av,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Lv,opaque_fragment:Dv,packing:Nv,premultiplied_alpha_fragment:Uv,project_vertex:Ov,dithering_fragment:Fv,dithering_pars_fragment:Bv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:kv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Wv,skinbase_vertex:Xv,skinning_pars_vertex:jv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:Kv,tonemapping_pars_fragment:$v,transmission_fragment:Qv,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:ix,uv_vertex:rx,worldpos_vertex:nx,background_vert:ax,background_frag:sx,backgroundCube_vert:ox,backgroundCube_frag:lx,cube_vert:cx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distance_vert:px,distance_frag:fx,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:vx,meshbasic_vert:xx,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:bx,meshmatcap_frag:Tx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:Ax,meshphong_frag:Cx,meshphysical_vert:Rx,meshphysical_frag:Ix,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Dx,points_frag:Nx,shadow_vert:Ux,shadow_frag:Ox,sprite_vert:Fx,sprite_frag:Bx},fe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Mi={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Mi.physical={uniforms:qt([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Lo={r:0,b:0,g:0},zx=new We,gp=new qe;gp.set(-1,0,0,0,1,0,0,0,1);function Gx(n,e,t,i,r,a){const s=new xe(0);let o=r===!0?0:1,l,c,h=null,p=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function f(M){let E=!1;const x=d(M);x===null?g(s,o):x&&x.isColor&&(g(x,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,E){const x=d(E);x&&(x.isCubeTexture||x.mapping===Hr)?(c===void 0&&(c=new At(new Fr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:_n(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gp),c.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,(h!==x||p!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new At(new An(2,2),new hi({name:"BackgroundMaterial",uniforms:_n(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Lo,dd(n)),t.buffers.color.setClear(Lo.r,Lo.g,Lo.b,E,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,E=1){s.set(M),o=E,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(s,o)},render:f,addToRenderList:_,dispose:m}}function Vx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(L,U,V,P,k){let Y=!1;const j=p(L,P,V,U);a!==j&&(a=j,c(a.object)),Y=d(L,P,V,k),Y&&f(L,P,V,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,x(L,U,V,P),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function p(L,U,V,P){const k=P.wireframe===!0;let Y=i[U.id];Y===void 0&&(Y={},i[U.id]=Y);const j=L.isInstancedMesh===!0?L.id:0;let re=Y[j];re===void 0&&(re={},Y[j]=re);let q=re[V.id];q===void 0&&(q={},re[V.id]=q);let J=q[k];return J===void 0&&(J=u(l()),q[k]=J),J}function u(L){const U=[],V=[],P=[];for(let k=0;k<t;k++)U[k]=0,V[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,U,V,P){const k=a.attributes,Y=U.attributes;let j=0;const re=V.getAttributes();for(const q in re)if(re[q].location>=0){const J=k[q];let ee=Y[q];if(ee===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;j++}return a.attributesNum!==j||a.index!==P}function f(L,U,V,P){const k={},Y=U.attributes;let j=0;const re=V.getAttributes();for(const q in re)if(re[q].location>=0){let J=Y[q];J===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),k[q]=ee,j++}a.attributes=k,a.attributesNum=j,a.index=P}function _(){const L=a.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function g(L){m(L,0)}function m(L,U){const V=a.newAttributes,P=a.enabledAttributes,k=a.attributeDivisors;V[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),k[L]!==U&&(n.vertexAttribDivisor(L,U),k[L]=U)}function M(){const L=a.newAttributes,U=a.enabledAttributes;for(let V=0,P=U.length;V<P;V++)U[V]!==L[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function E(L,U,V,P,k,Y,j){j===!0?n.vertexAttribIPointer(L,U,V,k,Y):n.vertexAttribPointer(L,U,V,P,k,Y)}function x(L,U,V,P){_();const k=P.attributes,Y=V.getAttributes(),j=U.defaultAttributeValues;for(const re in Y){const q=Y[re];if(q.location>=0){let J=k[re];if(J===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ee=J.normalized,Fe=J.itemSize,Ce=e.get(J);if(Ce===void 0)continue;const lt=Ce.buffer,tt=Ce.type,rt=Ce.bytesPerElement,Z=tt===n.INT||tt===n.UNSIGNED_INT||J.gpuType===za;if(J.isInterleavedBufferAttribute){const K=J.data,Me=K.stride,Ge=J.offset;if(K.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)m(q.location+me,K.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<q.locationSize;me++)g(q.location+me);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let me=0;me<q.locationSize;me++)E(q.location+me,Fe/q.locationSize,tt,ee,Me*rt,(Ge+Fe/q.locationSize*me)*rt,Z)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)m(q.location+K,J.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<q.locationSize;K++)g(q.location+K);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let K=0;K<q.locationSize;K++)E(q.location+K,Fe/q.locationSize,tt,ee,Fe*rt,Fe/q.locationSize*K*rt,Z)}}else if(j!==void 0){const ee=j[re];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(q.location,ee);break;case 3:n.vertexAttrib3fv(q.location,ee);break;case 4:n.vertexAttrib4fv(q.location,ee);break;default:n.vertexAttrib1fv(q.location,ee)}}}}M()}function T(){w();for(const L in i){const U=i[L];for(const V in U){const P=U[V];for(const k in P){const Y=P[k];for(const j in Y)h(Y[j].object),delete Y[j];delete P[k]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const V in U){const P=U[V];for(const k in P){const Y=P[k];for(const j in Y)h(Y[j].object),delete Y[j];delete P[k]}}delete i[L.id]}function A(L){for(const U in i){const V=i[U];for(const P in V){const k=V[P];if(k[L.id]===void 0)continue;const Y=k[L.id];for(const j in Y)h(Y[j].object),delete Y[j];delete k[L.id]}}}function v(L){for(const U in i){const V=i[U],P=L.isInstancedMesh===!0?L.id:0,k=V[P];if(k!==void 0){for(const Y in k){const j=k[Y];for(const re in j)h(j[re].object),delete j[re];delete k[Y]}delete V[P],Object.keys(V).length===0&&delete i[U]}}}function w(){I(),s=!0,a!==r&&(a=r,c(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function kx(n,e,t){let i;function r(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let p=0;for(let u=0;u<h;u++)p+=c[u];t.update(p,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Hx(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==kt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&A!==Vt&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:b}}function Wx(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Xi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||r;return r=u,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){const f=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!r||f===null||f.length===0||a&&!g)a?h(null):c();else{const M=a?0:i,E=M*4;let x=m.clippingState||null;l.value=x,x=h(f,u,E,d);for(let T=0;T!==E;++T)x[T]=t[T];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,d,f){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=d+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,x=d;E!==_;++E,x+=4)s.copy(p[E]).applyMatrix4(M,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Tn=4,Xx=6,jx=20,qx=256,Sa=new Ma,_p=new xe;let Vc=null,kc=0,Hc=0,Wc=!1;const Yx=new R,Ur=new R;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=Yx}=a;Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,kc,Hc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,En(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:fi,format:kt,colorSpace:Xn,depthBuffer:!1},r=vp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zx(a)),this._blurMaterial=Kx(a,e,t),this._ggxMaterial=Jx(a,e,t)}return r}_compileMaterial(e){const t=new At(new Xe,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,r,a){const s=new Nt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,p=c.toneMapping;c.getClearColor(_p),c.toneMapping=pi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Fr,new sr({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,d=u.material;let f=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(_p),f=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+l[g],a.y,a.z)):m===1?(s.up.set(0,0,o[g]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+l[g],a.z)):(s.up.set(0,o[g],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+l[g]));const M=this._cubeSize;En(r,m*M,g>2?M:0,M,M),c.setRenderTarget(r),f&&c.render(u,s),c.render(e,s)}c.toneMapping=p,c.autoClear=h,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ci||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;En(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:f}=this,_=this._sizeLods[i],g=3*_*(i>f-Tn?i-f+Tn:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=f-t,En(a,g,m,3*_,2*_),r.setRenderTarget(a),r.render(o,Sa),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=f-i,En(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,Sa)}_blur(e,t,i,r){const a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,s),this._blurPass(a,e,i,i,s)}_blurPass(e,t,i,r,a){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-Tn?r-this._lodMax+Tn:0),u=4*(this._cubeSize-h);En(t,p,u,3*h,2*h),s.setRenderTarget(t),s.render(l,Sa)}}function Zx(n){const e=[],t=[];let i=n;const r=n-Tn+1+Xx;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,f=new Float32Array(d*u*p),_=new Float32Array(d*u*p);for(let m=0;m<p;m++){const M=m%3*2/3-1,E=m>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];f.set(x,d*u*m);for(let T=0;T<u;T++){const b=h[T*2]*2-1,A=h[T*2+1]*2-1;m===0?Ur.set(1,A,b):m===1?Ur.set(-b,1,-A):m===2?Ur.set(-b,A,1):m===3?Ur.set(-1,A,-b):m===4?Ur.set(-b,-1,A):Ur.set(b,A,-1),Ur.toArray(_,(m*u+T)*d)}}const g=new Xe;g.setAttribute("position",new pt(f,d)),g.setAttribute("outputDirection",new pt(_,d)),t.push(new At(g,null)),i>Tn&&i--}return{lodMeshes:t,sizeLods:e}}function vp(n,e,t){const i=new Kt(n,e,t);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function En(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jx(n,e,t){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Kx(n,e,t){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function xp(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function yp(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jc extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),a=new hi({name:"CubemapFromEquirect",uniforms:_n(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Ai});a.uniforms.tEquirect.value=t;const s=new At(r,a),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=gt),new Zd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}function $x(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?s(u):a(u)}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===Pn||d===Ln)if(e.has(u)){const f=e.get(u).texture;return o(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const _=new jc(f.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const d=u.mapping,f=d===Pn||d===Ln,_=d===Ci||d===$i;if(f||_){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Xc(n)),g=f?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return f&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Xc(n)),g=f?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Pn?u.mapping=Ci:d===Ln&&(u.mapping=$i),u}function l(u){let d=0;const f=6;for(let _=0;_<f;_++)u[_]!==void 0&&d++;return d===f}function c(u){const d=u.target;d.removeEventListener("dispose",c);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Qx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fi("WebGLRenderer: "+i+" extension not supported."),r}}}function ey(n,e,t,i){const r={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);u.removeEventListener("dispose",s),delete r[u.id];const d=a.get(u);d&&(e.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,f=p.attributes.position;let _=0;if(f===void 0)return;if(d!==null){const M=d.array;_=d.version;for(let E=0,x=M.length;E<x;E+=3){const T=M[E+0],b=M[E+1],A=M[E+2];u.push(T,b,b,A,A,T)}}else{const M=f.array;_=f.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const T=E+0,b=E+1,A=E+2;u.push(T,b,b,A,A,T)}}const g=new(f.count>=65535?Hl:kl)(u,1);g.version=_;const m=a.get(p);m&&e.remove(m),a.set(p,g)}function h(p){const u=a.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function ty(n,e,t){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,u){n.drawElements(i,u,a,p*s),t.update(u,i,1)}function c(p,u,d){d!==0&&(n.drawElementsInstanced(i,u,a,p*s,d),t.update(u,i,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:Pe("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ry(n,e,t){const i=new WeakMap,r=new dt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let d=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",d)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let T=o.attributes.position.count*x,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*b*4*p),v=new Cs(A,T,b,p);v.type=Vt,v.needsUpdate=!0;const w=x*4;for(let I=0;I<p;I++){const L=m[I],U=M[I],V=E[I],P=T*b*4*I;for(let k=0;k<L.count;k++){const Y=k*w;f===!0&&(r.fromBufferAttribute(L,k),A[P+Y+0]=r.x,A[P+Y+1]=r.y,A[P+Y+2]=r.z,A[P+Y+3]=0),_===!0&&(r.fromBufferAttribute(U,k),A[P+Y+4]=r.x,A[P+Y+5]=r.y,A[P+Y+6]=r.z,A[P+Y+7]=0),g===!0&&(r.fromBufferAttribute(V,k),A[P+Y+8]=r.x,A[P+Y+9]=r.y,A[P+Y+10]=r.z,A[P+Y+11]=V.itemSize===4?r.w:1)}}u={count:p,texture:v,size:new ie(T,b)},i.set(o,u),o.addEventListener("dispose",d)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const f=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function ny(n,e,t,i,r){let a=new WeakMap;function s(c){const h=r.render.frame,p=c.geometry,u=e.get(c,p);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const ay={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[ul]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[dl]:"CUSTOM_TONE_MAPPING"};function sy(n,e,t,i,r,a){const s=new Kt(e,t,{type:n,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Xe;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));const h=new vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new At(c,h),u=new Ma(-1,1,1,-1,0,1);let d=null,f=null,_=!1,g,m=null,M=[],E=!1;this.setSize=function(x,T){s.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let b=0;b<M.length;b++){const A=M[b];A.setSize&&A.setSize(x,T)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;const T=s.width,b=s.height;M.length>0&&o===null&&(o=new Kt(T,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(T,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const v=M[A];v.setSize&&v.setSize(T,b)}},this.begin=function(x,T){if(_||x.toneMapping===pi&&M.length===0)return!1;if(m=T,T!==null){const b=T.width,A=T.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return E===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return E},this.end=function(x,T){x.toneMapping=g,_=!0;let b=s,A=o;for(let v=0;v<M.length;v++){const w=M[v];w.enabled!==!1&&(w.render(x,A,b,T),w.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,h.defines={},et.getTransfer(d)===ot&&(h.defines.SRGB_TRANSFER="");const v=ay[f];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(p,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Mp=new vt,qc=new mn(1,1),Sp=new Cs,bp=new Rs,Tp=new ca,Ep=[],wp=[],Ap=new Float32Array(16),Cp=new Float32Array(9),Rp=new Float32Array(4);function wn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Ep[r];if(a===void 0&&(a=new Float32Array(r),Ep[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Rp.set(i),n.uniformMatrix2fv(this.addr,!1,Rp),It(t,i)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Cp.set(i),n.uniformMatrix3fv(this.addr,!1,Cp),It(t,i)}}function py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),It(t,i)}}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(qc.compareFunction=t.isReversedDepthBuffer()?ws:Es,a=qc):a=Mp,t.setTexture2D(e||a,r)}function by(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bp,r)}function Ty(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tp,r)}function Ey(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sp,r)}function wy(n){switch(n){case 5126:return oy;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return py;case 5124:case 35670:return fy;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return xy;case 36295:return yy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ay(n,e){n.uniform1fv(this.addr,e)}function Cy(n,e){const t=wn(e,this.size,2);n.uniform2fv(this.addr,t)}function Ry(n,e){const t=wn(e,this.size,3);n.uniform3fv(this.addr,t)}function Iy(n,e){const t=wn(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=wn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ly(n,e){const t=wn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=wn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ny(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Oy(n,e){n.uniform3iv(this.addr,e)}function Fy(n,e){n.uniform4iv(this.addr,e)}function By(n,e){n.uniform1uiv(this.addr,e)}function zy(n,e){n.uniform2uiv(this.addr,e)}function Gy(n,e){n.uniform3uiv(this.addr,e)}function Vy(n,e){n.uniform4uiv(this.addr,e)}function ky(n,e,t){const i=this.cache,r=e.length,a=No(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=qc:s=Mp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function Hy(n,e,t){const i=this.cache,r=e.length,a=No(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||bp,a[s])}function Wy(n,e,t){const i=this.cache,r=e.length,a=No(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Tp,a[s])}function Xy(n,e,t){const i=this.cache,r=e.length,a=No(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Sp,a[s])}function jy(n){switch(n){case 5126:return Ay;case 35664:return Cy;case 35665:return Ry;case 35666:return Iy;case 35674:return Py;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Oy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return zy;case 36295:return Gy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}}class Yy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jy(t.type)}}class Zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Ip(n,e){n.seq.push(e),n.map[e.id]=e}function Jy(n,e,t){const i=n.name,r=i.length;for(Yc.lastIndex=0;;){const a=Yc.exec(i),s=Yc.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Ip(t,c===void 0?new qy(o,n,e):new Yy(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Zy(o),Ip(t,h)),t=h}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Jy(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Pp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ky=37297;let $y=0;function Qy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Lp=new qe;function eM(n){et._getMatrix(Lp,et.workingColorSpace,n);const e=`mat3( ${Lp.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case jn:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Qy(n.getShaderSource(e),s)}else return r}function tM(n,e){const t=eM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iM={[ll]:"Linear",[cl]:"Reinhard",[hl]:"Cineon",[ul]:"ACESFilmic",[pl]:"AgX",[fl]:"Neutral",[dl]:"Custom"};function rM(n,e){const t=iM[e];return t===void 0?(de("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oo=new R;function nM(){et.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function sM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function ba(n){return n!==""}function Np(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Up(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(lM,hM)}const cM=new Map;function hM(n,e){let t=Je[e];if(t===void 0){const i=cM.get(e);if(i!==void 0)t=Je[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zc(t)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(n){return n.replace(uM,dM)}function dM(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pM={[Rn]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function fM(n){return pM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mM={[Ci]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function gM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _M={[$i]:"ENVMAP_MODE_REFRACTION"};function vM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xM={[In]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function yM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xM[n.combine]||"ENVMAP_BLENDING_NONE"}function MM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SM(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=fM(t),c=gM(t),h=vM(t),p=yM(t),u=MM(t),d=aM(t),f=sM(a),_=r.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ba).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ba).join(`
`),m.length>0&&(m+=`
`)):(g=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==pi?rM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,tM("linearToOutputTexel",t.outputColorSpace),nM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),s=Zc(s),s=Np(s,t),s=Up(s,t),o=Zc(o),o=Np(o,t),o=Up(o,t),s=Op(s),o=Op(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=M+g+s,x=M+m+o,T=Pp(r,r.VERTEX_SHADER,E),b=Pp(r,r.FRAGMENT_SHADER,x);r.attachShader(_,T),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(T)||"",P=r.getShaderInfoLog(b)||"",k=U.trim(),Y=V.trim(),j=P.trim();let re=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,b);else{const J=Dp(r,T,"vertex"),ee=Dp(r,b,"fragment");Pe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+J+`
`+ee)}else k!==""?de("WebGLProgram: Program Info Log:",k):(Y===""||j==="")&&(q=!1);q&&(L.diagnostics={runnable:re,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:j,prefix:m}})}r.deleteShader(T),r.deleteShader(b),v=new Uo(r,_),w=oM(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,Ky)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let bM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EM(e),t.set(e,i)),i}}class EM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function wM(n){return n===er||n===Vn||n===kn}function AM(n,e,t,i,r,a){const s=new Ps,o=new TM,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,I,L,U,V){const P=L.fog,k=U.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||Y,j),q=re&&re.mapping===Hr?re.image.height:null,J=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&de("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Fe=ee!==void 0?ee.length:0;let Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let lt,tt,rt,Z;if(J){const Ct=Mi[J];lt=Ct.vertexShader,tt=Ct.fragmentShader}else{lt=v.vertexShader,tt=v.fragmentShader;const Ct=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,Ct,st),rt=Ct.id,Z=st.id}const K=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Ge=U.isInstancedMesh===!0,me=U.isBatchedMesh===!0,we=!!v.map,te=!!v.matcap,ne=!!re,Q=!!v.aoMap,_e=!!v.lightMap,ve=!!v.bumpMap&&v.wireframe===!1,De=!!v.normalMap,Ue=!!v.displacementMap,$e=!!v.emissiveMap,Ve=!!v.metalnessMap,Ze=!!v.roughnessMap,D=v.anisotropy>0,xt=v.clearcoat>0,je=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,B=v.sheen>0,H=v.transmission>0,X=D&&!!v.anisotropyMap,ce=xt&&!!v.clearcoatMap,pe=xt&&!!v.clearcoatNormalMap,F=xt&&!!v.clearcoatRoughnessMap,he=y&&!!v.iridescenceMap,ue=y&&!!v.iridescenceThicknessMap,Re=B&&!!v.sheenColorMap,se=B&&!!v.sheenRoughnessMap,ke=!!v.specularMap,Ne=!!v.specularColorMap,He=!!v.specularIntensityMap,Ke=H&&!!v.transmissionMap,O=H&&!!v.thicknessMap,$=!!v.gradientMap,oe=!!v.alphaMap,ye=v.alphaTest>0,Ee=!!v.alphaHash,ae=!!v.extensions;let Oe=pi;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Se={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:tt,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:me,batchingColor:me&&U._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&U.instanceColor!==null,instancingMorph:Ge&&U.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:te,envMap:ne,envMapMode:ne&&re.mapping,envMapCubeUVHeight:q,aoMap:Q,lightMap:_e,bumpMap:ve,normalMap:De,displacementMap:Ue,emissiveMap:$e,normalMapObjectSpace:De&&v.normalMapType===Oh,normalMapTangentSpace:De&&v.normalMapType===Ui,packedNormalMap:De&&v.normalMapType===Ui&&wM(v.normalMap.format),metalnessMap:Ve,roughnessMap:Ze,anisotropy:D,anisotropyMap:X,clearcoat:xt,clearcoatMap:ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:F,dispersion:je,retroreflection:C,iridescence:y,iridescenceMap:he,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Re,sheenRoughnessMap:se,specularMap:ke,specularColorMap:Ne,specularIntensityMap:He,transmission:H,transmissionMap:Ke,thicknessMap:O,gradientMap:$,opaque:v.transparent===!1&&v.blending===Vr&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:ye,alphaHash:Ee,combine:v.combine,mapUv:we&&f(v.map.channel),aoMapUv:Q&&f(v.aoMap.channel),lightMapUv:_e&&f(v.lightMap.channel),bumpMapUv:ve&&f(v.bumpMap.channel),normalMapUv:De&&f(v.normalMap.channel),displacementMapUv:Ue&&f(v.displacementMap.channel),emissiveMapUv:$e&&f(v.emissiveMap.channel),metalnessMapUv:Ve&&f(v.metalnessMap.channel),roughnessMapUv:Ze&&f(v.roughnessMap.channel),anisotropyMapUv:X&&f(v.anisotropyMap.channel),clearcoatMapUv:ce&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:se&&f(v.sheenRoughnessMap.channel),specularMapUv:ke&&f(v.specularMap.channel),specularColorMapUv:Ne&&f(v.specularColorMap.channel),specularIntensityMapUv:He&&f(v.specularIntensityMap.channel),transmissionMapUv:Ke&&f(v.transmissionMap.channel),thicknessMapUv:O&&f(v.thicknessMap.channel),alphaMapUv:oe&&f(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(De||D),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(we||oe),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&De===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:$e&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(w,v),M(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function E(v){const w=d[v.type];let I;if(w){const L=Mi[w];I=pd.clone(L.uniforms)}else I=v.uniforms;return I}function x(v,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new SM(n,w,v,r),c.push(I),h.set(w,I)),I}function T(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:x,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function CM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function RM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zp(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,f,_,g,m){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:f,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=f,M.materialVariant=s(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=m),e++,M}function l(u,d,f,_,g,m,M){M.reversedDepth===!0&&(g=-g);const E=o(u,d,f,_,g,m);f.transmission>0?i.push(E):f.transparent===!0?r.push(E):t.push(E)}function c(u,d,f,_,g,m){const M=o(u,d,f,_,g,m);f.transmission>0?i.unshift(M):f.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||RM),i.length>1&&i.sort(d||Bp),r.length>1&&r.sort(d||Bp)}function p(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:p,sort:h}}function IM(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new zp,n.set(i,[s])):r>=a.length?(s=new zp,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function PM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function LM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DM=0;function NM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UM(n){const e=new PM,t=LM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const r=new R,a=new We,s=new We;function o(c){let h=0,p=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,f=0,_=0,g=0,m=0,M=0,E=0,x=0,T=0,b=0,A=0,v=0,w=0,I=0;c.sort(NM);for(let U=0,V=c.length;U<V;U++){const P=c[U],k=P.color,Y=P.intensity,j=P.distance;let re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===er?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*Y,p+=k.g*Y,u+=k.b*Y;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],Y);I++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[f]=ee,i.sunShadowMap[f]=re;const Fe=J.getViewportCount();for(let Ce=0;Ce<Fe;Ce++)i.sunShadowMatrix[_+Ce]=J.getMatrix(Ce),i.sunShadowCascade[_+Ce]=J._cascadeData[Ce];_+=Fe,f++}i.sun[d]=q,d++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=P.shadow.matrix,T++}i.directional[g]=q,g++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(k).multiplyScalar(Y),q.distance=j,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[M]=q;const J=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,J.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[M]=J.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=re,A++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(k).multiplyScalar(Y),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=q,E++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,ee=t.get(P);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=P.shadow.matrix,b++}i.point[m]=q,m++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(Y),q.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[x]=q,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==x||L.numSunShadows!==f||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==v||L.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=g,i.spot.length=M,i.rectArea.length=E,i.point.length=m,i.hemi.length=x,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=x,L.numSunShadows=f,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=v,L.numLightProbes=I,i.version=DM++)}function l(c,h){let p=0,u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const x=c[M];if(x.isSunLight){const T=i.sun[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),p++}else if(x.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),u++}else if(x.isSpotLight){const T=i.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),s.identity(),a.copy(x.matrixWorld),a.premultiply(m),s.extractRotation(a),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Gp(n){const e=new UM(n),t=[],i=[],r=[];function a(u){p.camera=u,t.length=0,i.length=0,r.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function OM(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Gp(n),e.set(r,[o])):a>=s.length?(o=new Gp(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],GM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Vp=new We,Ta=new R,Jc=new R;function VM(n,e,t){let i=new br;const r=new ie,a=new ie,s=new dt,o=new yc,l=new Mc,c={},h=t.maxTextureSize,p={[Ki]:Gt,[Gt]:Ki,[wi]:wi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:FM,fragmentShader:BM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const f=new Xe;f.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rn;let m=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===hh&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rn);const w=n.getRenderTarget(),I=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=m!==this.type;V&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=b.length;P<k;P++){const Y=b[P],j=Y.shadow;if(j===void 0){de("WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const re=j.getFrameExtents();r.multiply(re),a.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/re.x),r.x=a.x*re.x,j.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/re.y),r.y=a.y*re.y,j.mapSize.y=a.y));const q=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=q,j.map===null||V===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Gr){if(Y.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Kt(r.x,r.y,{format:er,type:fi,minFilter:gt,magFilter:gt,generateMipmaps:!1}),j.map.texture.name=Y.name+".shadowMap",j.map.depthTexture=new mn(r.x,r.y,Vt),j.map.depthTexture.name=Y.name+".shadowMapDepth",j.map.depthTexture.format=Ii,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=bt,j.map.depthTexture.magFilter=bt}else Y.isPointLight?(j.map=new jc(r.x),j.map.depthTexture=new Wu(r.x,oi)):(j.map=new Kt(r.x,r.y),j.map.depthTexture=new mn(r.x,r.y,oi)),j.map.depthTexture.name=Y.name+".shadowMap",j.map.depthTexture.format=Ii,this.type===Rn?(j.map.depthTexture.compareFunction=q?ws:Es,j.map.depthTexture.minFilter=gt,j.map.depthTexture.magFilter=gt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=bt,j.map.depthTexture.magFilter=bt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const J=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Y.isPointLight!==!0&&j.updateMatrices(Y,v);for(let ee=0;ee<J;ee++){const Fe=j.getCamera(ee);if(Y.isPointLight){const Ce=j.camera,lt=j.matrix,tt=Y.distance||Ce.far;tt!==Ce.far&&(Ce.far=tt,Ce.updateProjectionMatrix()),Ta.setFromMatrixPosition(Y.matrixWorld),Ce.position.copy(Ta),Jc.copy(Ce.position),Jc.add(zM[ee]),Ce.up.copy(GM[ee]),Ce.lookAt(Jc),Ce.updateMatrixWorld(),lt.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Vp.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Vp,Ce.coordinateSystem,Ce.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(j.map),n.clear());const Ce=j.getViewport(ee);s.set(a.x*Ce.x,a.y*Ce.y,a.x*Ce.z,a.y*Ce.w),U.viewport(s)}i=j.getFrustum(ee),x(A,v,Fe,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Gr&&M(j,v),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,I,L)};function M(b,A){const v=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Kt(r.x,r.y,{format:er,type:fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,v,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,v,d,_,null)}function E(b,A,v,w){let I=null;const L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=I.uuid,V=A.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let k=P[V];k===void 0&&(k=I.clone(),P[V]=k,A.addEventListener("dispose",T)),I=k}if(I.visible=A.visible,I.wireframe=A.wireframe,w===Gr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:p[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const U=n.properties.get(I);U.light=v}return I}function x(b,A,v,w,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Gr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const U=e.update(b),V=b.material;if(Array.isArray(V)){const P=U.groups;for(let k=0,Y=P.length;k<Y;k++){const j=P[k],re=V[j.materialIndex];if(re&&re.visible){const q=E(b,re,w,I);b.onBeforeShadow(n,b,A,v,U,q,j),n.renderBufferDirect(v,null,U,q,b,j),b.onAfterShadow(n,b,A,v,U,q,j)}}}else if(V.visible){const P=E(b,V,w,I);b.onBeforeShadow(n,b,A,v,U,P,null),n.renderBufferDirect(v,null,U,P,b,null),b.onAfterShadow(n,b,A,v,U,P,null)}}const L=b.children;for(let U=0,V=L.length;U<V;U++)x(L[U],A,v,w,I)}function T(b){b.target.removeEventListener("dispose",T);for(const A in c){const v=c[A],w=b.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function kM(n,e){function t(){let O=!1;const $=new dt;let oe=null;const ye=new dt(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,ae,Oe,Se,Ct){Ct===!0&&(Ee*=Se,ae*=Se,Oe*=Se),$.set(Ee,ae,Oe,Se),ye.equals($)===!1&&(n.clearColor(Ee,ae,Oe,Se),ye.copy($))},reset:function(){O=!1,oe=null,ye.set(-1,0,0,0)}}}function i(){let O=!1,$=!1,oe=null,ye=null,Ee=null;return{setReversed:function(ae){if($!==ae){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),$=ae;const Se=Ee;Ee=null,this.setClear(Se)}},getReversed:function(){return $},setTest:function(ae){ae?K(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ae){oe!==ae&&!O&&(n.depthMask(ae),oe=ae)},setFunc:function(ae){if($&&(ae=$f[ae]),ye!==ae){switch(ae){case Pa:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Da:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case Na:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ae}},setLocked:function(ae){O=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,$&&(ae=1-ae),n.clearDepth(ae))},reset:function(){O=!1,oe=null,ye=null,Ee=null,$=!1}}}function r(){let O=!1,$=null,oe=null,ye=null,Ee=null,ae=null,Oe=null,Se=null,Ct=null;return{setTest:function(st){O||(st?K(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(st){$!==st&&!O&&(n.stencilMask(st),$=st)},setFunc:function(st,di,Ti){(oe!==st||ye!==di||Ee!==Ti)&&(n.stencilFunc(st,di,Ti),oe=st,ye=di,Ee=Ti)},setOp:function(st,di,Ti){(ae!==st||Oe!==di||Se!==Ti)&&(n.stencilOp(st,di,Ti),ae=st,Oe=di,Se=Ti)},setLocked:function(st){O=st},setClear:function(st){Ct!==st&&(n.clearStencil(st),Ct=st)},reset:function(){O=!1,$=null,oe=null,ye=null,Ee=null,ae=null,Oe=null,Se=null,Ct=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,M=null,E=null,x=null,T=null,b=null,A=null,v=new xe(0,0,0),w=0,I=!1,L=null,U=null,V=null,P=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,re=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=re>=2);let J=null,ee={};const Fe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),lt=new dt().fromArray(Fe),tt=new dt().fromArray(Ce);function rt(O,$,oe,ye){const Ee=new Uint8Array(4),ae=n.createTexture();n.bindTexture(O,ae),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<oe;Oe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D($+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ae}const Z={};Z[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(n.DEPTH_TEST),s.setFunc(kr),ve(!1),De(il),K(n.CULL_FACE),Q(Ai);function K(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Me(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ge(O,$){return u[O]!==$?(n.bindFramebuffer(O,$),u[O]=$,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=$),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=$),!0):!1}function me(O,$){let oe=f,ye=!1;if(O){oe=d.get($),oe===void 0&&(oe=[],d.set($,oe));const Ee=O.textures;if(oe.length!==Ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Oe=Ee.length;ae<Oe;ae++)oe[ae]=n.COLOR_ATTACHMENT0+ae;oe.length=Ee.length,ye=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ye=!0);ye&&n.drawBuffers(oe)}function we(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const te={[fr]:n.FUNC_ADD,[dh]:n.FUNC_SUBTRACT,[ph]:n.FUNC_REVERSE_SUBTRACT};te[fh]=n.MIN,te[mh]=n.MAX;const ne={[gh]:n.ZERO,[_h]:n.ONE,[vh]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[Th]:n.SRC_ALPHA_SATURATE,[Sh]:n.DST_COLOR,[yh]:n.DST_ALPHA,[xh]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[bh]:n.ONE_MINUS_DST_COLOR,[Mh]:n.ONE_MINUS_DST_ALPHA,[Eh]:n.CONSTANT_COLOR,[wh]:n.ONE_MINUS_CONSTANT_COLOR,[Ah]:n.CONSTANT_ALPHA,[Ch]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(O,$,oe,ye,Ee,ae,Oe,Se,Ct,st){if(O===Ai){g===!0&&(Me(n.BLEND),g=!1);return}if(g===!1&&(K(n.BLEND),g=!0),O!==uh){if(O!==m||st!==I){if((M!==fr||T!==fr)&&(n.blendEquation(n.FUNC_ADD),M=fr,T=fr),st)switch(O){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case al:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",O);break}else switch(O){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nl:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",O);break}E=null,x=null,b=null,A=null,v.set(0,0,0),w=0,m=O,I=st}return}Ee=Ee||$,ae=ae||oe,Oe=Oe||ye,($!==M||Ee!==T)&&(n.blendEquationSeparate(te[$],te[Ee]),M=$,T=Ee),(oe!==E||ye!==x||ae!==b||Oe!==A)&&(n.blendFuncSeparate(ne[oe],ne[ye],ne[ae],ne[Oe]),E=oe,x=ye,b=ae,A=Oe),(Se.equals(v)===!1||Ct!==w)&&(n.blendColor(Se.r,Se.g,Se.b,Ct),v.copy(Se),w=Ct),m=O,I=!1}function _e(O,$){O.side===wi?Me(n.CULL_FACE):K(n.CULL_FACE);let oe=O.side===Gt;$&&(oe=!oe),ve(oe),O.blending===Vr&&O.transparent===!1?Q(Ai):Q(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$e(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function De(O){O!==lh?(K(n.CULL_FACE),O!==U&&(O===il?n.cullFace(n.BACK):O===ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),U=O}function Ue(O){O!==V&&(j&&n.lineWidth(O),V=O)}function $e(O,$,oe){O?(K(n.POLYGON_OFFSET_FILL),(P!==$||k!==oe)&&(P=$,k=oe,s.getReversed()&&($=-$),n.polygonOffset($,oe))):Me(n.POLYGON_OFFSET_FILL)}function Ve(O){O?K(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Ze(O){O===void 0&&(O=n.TEXTURE0+Y-1),J!==O&&(n.activeTexture(O),J=O)}function D(O,$,oe){oe===void 0&&(J===null?oe=n.TEXTURE0+Y-1:oe=J);let ye=ee[oe];ye===void 0&&(ye={type:void 0,texture:void 0},ee[oe]=ye),(ye.type!==O||ye.texture!==$)&&(J!==oe&&(n.activeTexture(oe),J=oe),n.bindTexture(O,$||Z[O]),ye.type=O,ye.texture=$)}function xt(){const O=ee[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function y(){try{n.texSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function B(){try{n.texSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function ce(){try{n.texStorage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function pe(){try{n.texStorage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function F(){try{n.texImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function he(){try{n.texImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function ue(O){return p[O]!==void 0?p[O]:n.getParameter(O)}function Re(O,$){p[O]!==$&&(n.pixelStorei(O,$),p[O]=$)}function se(O){lt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function ke(O){tt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Ne(O,$){let oe=c.get($);oe===void 0&&(oe=new WeakMap,c.set($,oe));let ye=oe.get(O);ye===void 0&&(ye=n.getUniformBlockIndex($,O.name),oe.set(O,ye))}function He(O,$){const oe=c.get($).get(O);l.get($)!==oe&&(n.uniformBlockBinding($,oe,O.__bindingPointIndex),l.set($,oe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},J=null,ee={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,M=null,E=null,x=null,T=null,b=null,A=null,v=new xe(0,0,0),w=0,I=!1,L=null,U=null,V=null,P=null,k=null,lt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:K,disable:Me,bindFramebuffer:Ge,drawBuffers:me,useProgram:we,setBlending:Q,setMaterial:_e,setFlipSided:ve,setCullFace:De,setLineWidth:Ue,setPolygonOffset:$e,setScissorTest:Ve,activeTexture:Ze,bindTexture:D,unbindTexture:xt,compressedTexImage2D:je,compressedTexImage3D:C,texImage2D:F,texImage3D:he,pixelStorei:Re,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:ce,texStorage3D:pe,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:se,viewport:ke,reset:Ke}}function HM(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,p=new Set;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return f?new OffscreenCanvas(C,y):qn("canvas")}function g(C,y,B){let H=1;const X=je(C);if((X.width>B||X.height>B)&&(H=B/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(H*X.width),pe=Math.floor(H*X.height);u===void 0&&(u=_(ce,pe));const F=y?_(ce,pe):u;return F.width=ce,F.height=pe,F.getContext("2d").drawImage(C,0,0,ce,pe),de("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ce+"x"+pe+")."),F}else return"data"in C&&de("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,y,B,H,X,ce=!1){if(C!==null){if(n[C]!==void 0)return n[C];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;H&&(pe=e.get("EXT_texture_norm16"),pe||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=y;if(y===n.RED&&(B===n.FLOAT&&(F=n.R32F),B===n.HALF_FLOAT&&(F=n.R16F),B===n.UNSIGNED_BYTE&&(F=n.R8),B===n.UNSIGNED_SHORT&&pe&&(F=pe.R16_EXT),B===n.SHORT&&pe&&(F=pe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(F=n.R8UI),B===n.UNSIGNED_SHORT&&(F=n.R16UI),B===n.UNSIGNED_INT&&(F=n.R32UI),B===n.BYTE&&(F=n.R8I),B===n.SHORT&&(F=n.R16I),B===n.INT&&(F=n.R32I)),y===n.RG&&(B===n.FLOAT&&(F=n.RG32F),B===n.HALF_FLOAT&&(F=n.RG16F),B===n.UNSIGNED_BYTE&&(F=n.RG8),B===n.UNSIGNED_SHORT&&pe&&(F=pe.RG16_EXT),B===n.SHORT&&pe&&(F=pe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(F=n.RG8UI),B===n.UNSIGNED_SHORT&&(F=n.RG16UI),B===n.UNSIGNED_INT&&(F=n.RG32UI),B===n.BYTE&&(F=n.RG8I),B===n.SHORT&&(F=n.RG16I),B===n.INT&&(F=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(F=n.RGB8UI),B===n.UNSIGNED_SHORT&&(F=n.RGB16UI),B===n.UNSIGNED_INT&&(F=n.RGB32UI),B===n.BYTE&&(F=n.RGB8I),B===n.SHORT&&(F=n.RGB16I),B===n.INT&&(F=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),B===n.UNSIGNED_INT&&(F=n.RGBA32UI),B===n.BYTE&&(F=n.RGBA8I),B===n.SHORT&&(F=n.RGBA16I),B===n.INT&&(F=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_SHORT&&pe&&(F=pe.RGB16_EXT),B===n.SHORT&&pe&&(F=pe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(F=n.R11F_G11F_B10F)),y===n.RGBA){const he=ce?jn:et.getTransfer(X);B===n.FLOAT&&(F=n.RGBA32F),B===n.HALF_FLOAT&&(F=n.RGBA16F),B===n.UNSIGNED_BYTE&&(F=he===ot?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&pe&&(F=pe.RGBA16_EXT),B===n.SHORT&&pe&&(F=pe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function T(C,y){let B;return C?y===null||y===oi||y===jr?B=n.DEPTH24_STENCIL8:y===Vt?B=n.DEPTH32F_STENCIL8:y===Xr&&(B=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===jr?B=n.DEPTH_COMPONENT24:y===Vt?B=n.DEPTH_COMPONENT32F:y===Xr&&(B=n.DEPTH_COMPONENT16),B}function b(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==bt&&C.minFilter!==gt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function v(C){const y=C.target;y.removeEventListener("dispose",v),L(y)}function w(C){const y=i.get(C);if(y.__webglInit===void 0)return;const B=C.source,H=d.get(B);if(H){const X=H[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(C),Object.keys(H).length===0&&d.delete(B)}i.remove(C)}function I(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const B=C.source,H=d.get(B);delete H[y.__cacheKey],s.memory.textures--}function L(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let X=0;X<y.__webglFramebuffer[H].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[H][X]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=C.textures;for(let H=0,X=B.length;H<X;H++){const ce=i.get(B[H]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),s.memory.textures--),i.remove(B[H])}i.remove(C)}let U=0;function V(){U=0}function P(){return U}function k(C){U=C}function Y(){const C=U;return C>=r.maxTextures&&de("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function j(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function re(C,y){const B=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const H=C.image;if(H===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function q(C,y){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Me(B,C,y);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function J(C,y){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Me(B,C,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function ee(C,y){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ge(B,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const Fe={[Dn]:n.REPEAT,[Yt]:n.CLAMP_TO_EDGE,[Nn]:n.MIRRORED_REPEAT},Ce={[bt]:n.NEAREST,[gl]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[gt]:n.LINEAR,[Un]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},lt={[Bh]:n.NEVER,[Hh]:n.ALWAYS,[zh]:n.LESS,[Es]:n.LEQUAL,[Gh]:n.EQUAL,[ws]:n.GEQUAL,[Vh]:n.GREATER,[kh]:n.NOTEQUAL};function tt(C,y){if(y.type===Vt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===gt||y.magFilter===Un||y.magFilter===Wr||y.magFilter===Ri||y.minFilter===gt||y.minFilter===Un||y.minFilter===Wr||y.minFilter===Ri)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Fe[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Fe[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Fe[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ce[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ce[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,lt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bt||y.minFilter!==Wr&&y.minFilter!==Ri||y.type===Vt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function rt(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const H=y.source;let X=d.get(H);X===void 0&&(X={},d.set(H,X));const ce=j(y);if(ce!==C.__cacheKey){X[ce]===void 0&&(X[ce]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),X[ce].usedTimes++;const pe=X[C.__cacheKey];pe!==void 0&&(X[C.__cacheKey].usedTimes--,pe.usedTimes===0&&I(y)),C.__cacheKey=ce,C.__webglTexture=X[ce].texture}return B}function Z(C,y,B){return Math.floor(Math.floor(C/B)/y)}function K(C,y,B,H){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,H,y.data);else{X.sort((ue,Re)=>ue.start-Re.start);let ce=0;for(let ue=1;ue<X.length;ue++){const Re=X[ce],se=X[ue],ke=Re.start+Re.count,Ne=Z(se.start,y.width,4),He=Z(Re.start,y.width,4);se.start<=ke+1&&Ne===He&&Z(se.start+se.count-1,y.width,4)===Ne?Re.count=Math.max(Re.count,se.start+se.count-Re.start):(++ce,X[ce]=se)}X.length=ce+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),F=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Re=X.length;ue<Re;ue++){const se=X[ue],ke=Math.floor(se.start/4),Ne=Math.ceil(se.count/4),He=ke%y.width,Ke=Math.floor(ke/y.width),O=Ne;t.pixelStorei(n.UNPACK_SKIP_PIXELS,He),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(n.TEXTURE_2D,0,He,Ke,O,1,B,H,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,F),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function Me(C,y,B){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);const X=rt(C,y),ce=y.source;t.bindTexture(H,C.__webglTexture,n.TEXTURE0+B);const pe=i.get(ce);if(ce.version!==pe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+B),!(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)){const $=et.getPrimaries(et.workingColorSpace),oe=y.colorSpace===Oi?null:et.getPrimaries(y.colorSpace),ye=y.colorSpace===Oi||$===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let F=g(y.image,!1,r.maxTextureSize);F=xt(y,F);const he=a.convert(y.format,y.colorSpace),ue=a.convert(y.type);let Re=x(y.internalFormat,he,ue,y.normalized,y.colorSpace,y.isVideoTexture);tt(H,y);let se;const ke=y.mipmaps,Ne=y.isVideoTexture!==!0,He=pe.__version===void 0||X===!0,Ke=ce.dataReady,O=b(y,F);if(y.isDepthTexture)Re=T(y.format===Qi,y.type),He&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Re,F.width,F.height):t.texImage2D(n.TEXTURE_2D,0,Re,F.width,F.height,0,he,ue,null));else if(y.isDataTexture)if(ke.length>0){Ne&&He&&t.texStorage2D(n.TEXTURE_2D,O,Re,ke[0].width,ke[0].height);for(let $=0,oe=ke.length;$<oe;$++)se=ke[$],Ne?Ke&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,se.width,se.height,he,ue,se.data):t.texImage2D(n.TEXTURE_2D,$,Re,se.width,se.height,0,he,ue,se.data);y.generateMipmaps=!1}else Ne?(He&&t.texStorage2D(n.TEXTURE_2D,O,Re,F.width,F.height),Ke&&K(y,F,he,ue)):t.texImage2D(n.TEXTURE_2D,0,Re,F.width,F.height,0,he,ue,F.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,O,Re,ke[0].width,ke[0].height,F.depth);for(let $=0,oe=ke.length;$<oe;$++)if(se=ke[$],y.format!==kt)if(he!==null)if(Ne){if(Ke)if(y.layerUpdates.size>0){const ye=Gc(se.width,se.height,y.format,y.type);for(const Ee of y.layerUpdates){const ae=se.data.subarray(Ee*ye/se.data.BYTES_PER_ELEMENT,(Ee+1)*ye/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Ee,se.width,se.height,1,he,ae)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,F.depth,he,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Re,se.width,se.height,F.depth,0,se.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,F.depth,he,ue,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Re,se.width,se.height,F.depth,0,he,ue,se.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ne&&He&&t.texStorage2D(n.TEXTURE_2D,O,Re,ke[0].width,ke[0].height);for(let $=0,oe=ke.length;$<oe;$++)se=ke[$],y.format!==kt?he!==null?Ne?Ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,se.width,se.height,he,se.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Re,se.width,se.height,0,se.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Ke&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,se.width,se.height,he,ue,se.data):t.texImage2D(n.TEXTURE_2D,$,Re,se.width,se.height,0,he,ue,se.data)}else if(y.isDataArrayTexture)if(Ne){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,O,Re,F.width,F.height,F.depth),Ke)if(y.layerUpdates.size>0){const $=Gc(F.width,F.height,y.format,y.type);for(const oe of y.layerUpdates){const ye=F.data.subarray(oe*$/F.data.BYTES_PER_ELEMENT,(oe+1)*$/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,F.width,F.height,1,he,ue,ye)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,he,ue,F.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,F.width,F.height,F.depth,0,he,ue,F.data);else if(y.isData3DTexture)Ne?(He&&t.texStorage3D(n.TEXTURE_3D,O,Re,F.width,F.height,F.depth),Ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,he,ue,F.data)):t.texImage3D(n.TEXTURE_3D,0,Re,F.width,F.height,F.depth,0,he,ue,F.data);else if(y.isFramebufferTexture){if(He)if(Ne)t.texStorage2D(n.TEXTURE_2D,O,Re,F.width,F.height);else{let $=F.width,oe=F.height;for(let ye=0;ye<O;ye++)t.texImage2D(n.TEXTURE_2D,ye,Re,$,oe,0,he,ue,null),$>>=1,oe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),F.parentNode!==$){$.appendChild(F),p.add(y),$.onpaint=oe=>{const ye=oe.changedElements;for(const Ee of p)ye.includes(Ee.image)&&(Ee.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,F);else{const oe=n.RGBA,ye=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,oe,ye,Ee,F)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ne&&He){const $=je(ke[0]);t.texStorage2D(n.TEXTURE_2D,O,Re,$.width,$.height)}for(let $=0,oe=ke.length;$<oe;$++)se=ke[$],Ne?Ke&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,he,ue,se):t.texImage2D(n.TEXTURE_2D,$,Re,he,ue,se);y.generateMipmaps=!1}else if(Ne){if(He){const $=je(F);t.texStorage2D(n.TEXTURE_2D,O,Re,$.width,$.height)}Ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,ue,F)}else t.texImage2D(n.TEXTURE_2D,0,Re,he,ue,F);m(y)&&M(H),pe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ge(C,y,B){if(y.image.length!==6)return;const H=rt(C,y),X=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const ce=i.get(X);if(X.version!==ce.__version||H===!0){t.activeTexture(n.TEXTURE0+B);const pe=et.getPrimaries(et.workingColorSpace),F=y.colorSpace===Oi?null:et.getPrimaries(y.colorSpace),he=y.colorSpace===Oi||pe===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!ue&&!Re?se[ae]=g(y.image[ae],!0,r.maxCubemapSize):se[ae]=Re?y.image[ae].image:y.image[ae],se[ae]=xt(y,se[ae]);const ke=se[0],Ne=a.convert(y.format,y.colorSpace),He=a.convert(y.type),Ke=x(y.internalFormat,Ne,He,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,$=ce.__version===void 0||H===!0,oe=X.dataReady;let ye=b(y,ke);tt(n.TEXTURE_CUBE_MAP,y);let Ee;if(ue){O&&$&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ke,ke.width,ke.height);for(let ae=0;ae<6;ae++){Ee=se[ae].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){const Se=Ee[Oe];y.format!==kt?Ne!==null?O?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ke,Se.width,Se.height,0,Se.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Se.width,Se.height,Ne,He,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ke,Se.width,Se.height,0,Ne,He,Se.data)}}}else{if(Ee=y.mipmaps,O&&$){Ee.length>0&&ye++;const ae=je(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Re){O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,Ne,He,se[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,se[ae].width,se[ae].height,0,Ne,He,se[ae].data);for(let Oe=0;Oe<Ee.length;Oe++){const Se=Ee[Oe].image[ae].image;O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Se.width,Se.height,Ne,He,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ke,Se.width,Se.height,0,Ne,He,Se.data)}}else{O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,He,se[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Ne,He,se[ae]);for(let Oe=0;Oe<Ee.length;Oe++){const Se=Ee[Oe];O?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Ne,He,Se.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ke,Ne,He,Se.image[ae])}}}m(y)&&M(n.TEXTURE_CUBE_MAP),ce.__version=X.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function me(C,y,B,H,X,ce){const pe=a.convert(B.format,B.colorSpace),F=a.convert(B.type),he=x(B.internalFormat,pe,F,B.normalized,B.colorSpace),ue=i.get(y),Re=i.get(B);if(Re.__renderTarget=y,!ue.__hasExternalTextures){const se=Math.max(1,y.width>>ce),ke=Math.max(1,y.height>>ce);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,ce,he,se,ke,y.depth,0,pe,F,null):t.texImage2D(X,ce,he,se,ke,0,pe,F,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,X,Re.__webglTexture,0,Ve(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,X,Re.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(C,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const H=y.depthTexture,X=H&&H.isDepthTexture?H.type:null,ce=T(y.stencilBuffer,X),pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(y),ce,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(y),ce,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ce,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,C)}else{const H=y.textures;for(let X=0;X<H.length;X++){const ce=H[X],pe=a.convert(ce.format,ce.colorSpace),F=a.convert(ce.type),he=x(ce.internalFormat,pe,F,ce.normalized,ce.colorSpace);Ze(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve(y),he,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve(y),he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(C,y,B){const H=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),tt(n.TEXTURE_CUBE_MAP,y.depthTexture);const ue=a.convert(y.depthTexture.format),Re=a.convert(y.depthTexture.type);let se;y.depthTexture.format===Ii?se=n.DEPTH_COMPONENT24:y.depthTexture.format===Qi&&(se=n.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,se,y.width,y.height,0,ue,Re,null)}}else re(y.depthTexture,0);const ce=X.__webglTexture,pe=Ve(y),F=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,he=y.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ii)Ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,F,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,he,F,ce,0);else if(y.depthTexture.format===Qi)Ze(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,F,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,he,F,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){const y=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=H}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)te(y.__webglFramebuffer[H],C,H);else{const H=C.texture.mipmaps;H&&H.length>0?te(y.__webglFramebuffer[0],C,0):te(y.__webglFramebuffer,C,0)}else if(B){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),we(y.__webglDepthbuffer[H],C,!1);else{const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ce)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),we(y.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(C,y,B){const H=i.get(C);y!==void 0&&me(H.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ne(C)}function _e(C){const y=C.texture,B=i.get(C),H=i.get(y);C.addEventListener("dispose",v);const X=C.textures,ce=C.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,s.memory.textures++),ce){B.__webglFramebuffer=[];for(let F=0;F<6;F++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[F]=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[F][he]=n.createFramebuffer()}else B.__webglFramebuffer[F]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let F=0;F<y.mipmaps.length;F++)B.__webglFramebuffer[F]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(pe)for(let F=0,he=X.length;F<he;F++){const ue=i.get(X[F]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&Ze(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let F=0;F<X.length;F++){const he=X[F];B.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[F]);const ue=a.convert(he.format,he.colorSpace),Re=a.convert(he.type),se=x(he.internalFormat,ue,Re,he.normalized,he.colorSpace,C.isXRRenderTarget===!0),ke=Ve(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,B.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),we(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),tt(n.TEXTURE_CUBE_MAP,y);for(let F=0;F<6;F++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(B.__webglFramebuffer[F][he],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,he);else me(B.__webglFramebuffer[F],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let F=0,he=X.length;F<he;F++){const ue=X[F],Re=i.get(ue);let se=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Re.__webglTexture),tt(se,ue),me(B.__webglFramebuffer,C,ue,n.COLOR_ATTACHMENT0+F,se,0),m(ue)&&M(se)}t.unbindTexture()}else{let F=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(F=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(F,H.__webglTexture),tt(F,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(B.__webglFramebuffer[he],C,y,n.COLOR_ATTACHMENT0,F,he);else me(B.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,F,0);m(y)&&M(F),t.unbindTexture()}C.depthBuffer&&ne(C)}function ve(C){const y=C.textures;for(let B=0,H=y.length;B<H;B++){const X=y[B];if(m(X)){const ce=E(C),pe=i.get(X).__webglTexture;t.bindTexture(ce,pe),M(ce),t.unbindTexture()}}}const De=[],Ue=[];function $e(C){if(C.samples>0){if(Ze(C)===!1){const y=C.textures,B=C.width,H=C.height;let X=n.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(C),F=y.length>1;if(F)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const he=C.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),F){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const Re=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,B,H,0,0,B,H,X,n.NEAREST),l===!0&&(De.length=0,Ue.length=0,De.push(n.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(De.push(ce),Ue.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const Re=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function Ze(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(C){const y=s.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function xt(C,y){const B=C.colorSpace,H=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Xn&&B!==Oi&&(et.getTransfer(B)===ot?(H!==kt||X!==Zt)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",B)),y}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=Q,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kp(n,e){function t(i,r=Oi){let a;const s=et.getTransfer(r);if(i===Zt)return n.UNSIGNED_BYTE;if(i===Ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_l)return n.BYTE;if(i===vl)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===za)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Vt)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Ml)return n.ALPHA;if(i===Sl)return n.RGB;if(i===kt)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===ka)return n.RED;if(i===On)return n.RED_INTEGER;if(i===er)return n.RG;if(i===Ha)return n.RG_INTEGER;if(i===Wa)return n.RGBA_INTEGER;if(i===Fn||i===Bn||i===zn||i===Gn)if(s===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Fn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Fn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===ja||i===qa||i===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===Vn||i===es)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Za||i===Ja)return s===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ka)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===$a)return a.COMPRESSED_R11_EAC;if(i===Qa)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Vn)return a.COMPRESSED_RG11_EAC;if(i===es)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ts||i===is||i===rs||i===ns||i===as||i===ss||i===os||i===ls||i===cs||i===hs||i===us||i===ds||i===ps||i===fs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ts)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===is)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rs)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ns)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===as)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ss)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===os)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ls)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cs)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hs)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===us)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ds)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ps)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fs)return s===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ms||i===gs||i===_s)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ms)return s===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_s)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vs||i===xs||i===kn||i===ys)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===vs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ys)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new An(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qM extends mi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,f=null;const _=typeof XRWebGLBinding<"u",g=new jM,m={},M=t.getContextAttributes();let E=null,x=null;const T=[],b=[],A=new ie;let v=null,w=null;const I=new Nt;I.viewport=new dt;const L=new Nt;L.viewport=new dt;const U=[I,L],V=new Jd;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=T[Z];return K===void 0&&(K=new Ds,T[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=T[Z];return K===void 0&&(K=new Ds,T[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=T[Z];return K===void 0&&(K=new Ds,T[Z]=K),K.getHandSpace()};function Y(Z){const K=b.indexOf(Z.inputSource);if(K===-1)return;const Me=T[K];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||s),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",re);for(let Z=0;Z<T.length;Z++){const K=b[Z];K!==null&&(b[Z]=null,T[Z].disconnect(K))}P=null,k=null,g.reset();for(const Z in m)delete m[Z];if(e.setRenderTarget(E),d=null,u=null,p=null,r=null,x=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",j),r.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,Me=null,Ge=null;M.depth&&(Ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=M.stencil?Qi:Ii,Me=M.stencil?jr:oi);const me={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(me),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Kt(u.textureWidth,u.textureHeight,{format:kt,type:Zt,depthTexture:new mn(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Kt(d.framebufferWidth,d.framebufferHeight,{format:kt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(Z){for(let K=0;K<Z.removed.length;K++){const Me=Z.removed[K],Ge=b.indexOf(Me);Ge>=0&&(b[Ge]=null,T[Ge].disconnect(Me))}for(let K=0;K<Z.added.length;K++){const Me=Z.added[K];let Ge=b.indexOf(Me);if(Ge===-1){for(let we=0;we<T.length;we++)if(we>=b.length){b.push(Me),Ge=we;break}else if(b[we]===null){b[we]=Me,Ge=we;break}if(Ge===-1)break}const me=T[Ge];me&&me.connect(Me)}}const q=new R,J=new R;function ee(Z,K,Me){q.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const Ge=q.distanceTo(J),me=K.projectionMatrix.elements,we=Me.projectionMatrix.elements,te=me[14]/(me[10]-1),ne=me[14]/(me[10]+1),Q=(me[9]+1)/me[5],_e=(me[9]-1)/me[5],ve=(me[8]-1)/me[0],De=(we[8]+1)/we[0],Ue=te*ve,$e=te*De,Ve=Ge/(-ve+De),Ze=Ve*-ve;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const D=te+Ve,xt=ne+Ve,je=Ue-Ze,C=$e+(Ge-Ze),y=Q*ne/xt*D,B=_e*ne/xt*D;Z.projectionMatrix.makePerspective(je,C,y,B,D,xt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Fe(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let K=Z.near,Me=Z.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),V.near=L.near=I.near=K,V.far=L.far=I.far=Me,(P!==V.near||k!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,k=V.far),V.layers.mask=Z.layers.mask|6,I.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const Ge=Z.parent,me=V.cameras;Fe(V,Ge);for(let we=0;we<me.length;we++)Fe(me[we],Ge);me.length===2?ee(V,I,L):V.projectionMatrix.copy(I.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ce(Z,V,Ge)};function Ce(Z,K,Me){Me===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Z){return m[Z]};let lt=null;function tt(Z,K){if(h=K.getViewerPose(c||s),f=K,h!==null){const Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ge=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Ge=!0);for(let we=0;we<Me.length;we++){const te=Me[we];let ne=null;if(d!==null)ne=d.getViewport(te);else{const _e=p.getViewSubImage(u,te);ne=_e.viewport,we===0&&(e.setRenderTargetTextures(x,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(x))}let Q=U[we];Q===void 0&&(Q=new Nt,Q.layers.enable(we),Q.viewport=new dt,U[we]=Q),Q.matrix.fromArray(te.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(te.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),we===0&&(V.matrix.copy(Q.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ge===!0&&V.cameras.push(Q)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){p=i.getBinding();const we=p.getDepthInformation(Me[0]);we&&we.isValid&&we.texture&&g.init(we,r.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let we=0;we<Me.length;we++){const te=Me[we].camera;if(te){let ne=m[te];ne||(ne=new ac,m[te]=ne);const Q=p.getCameraImage(te);ne.sourceTexture=Q}}}}for(let Me=0;Me<T.length;Me++){const Ge=b[Me],me=T[Me];Ge!==null&&me!==void 0&&me.update(Ge,K,c||s)}lt&&lt(Z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),f=null}const rt=new mp;rt.setAnimationLoop(tt),this.setAnimationLoop=function(Z){lt=Z},this.dispose=function(){}}}const YM=new We,Hp=new qe;Hp.set(-1,0,0,0,1,0,0,0,1);function ZM(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,dd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,E,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),p(g,m)):m.isMeshPhongMaterial?(a(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(a(g,m),f(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),_(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),E=M.envMap,x=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JM(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const b=T.program;i.uniformBlockBinding(x,b)}function c(x,T){let b=r[x.id];b===void 0&&(g(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",M));const A=T.program;i.updateUBOMapping(x,A);const v=e.render.frame;a[x.id]!==v&&(u(x),a[x.id]=v)}function h(x){const T=p();x.__bindingPointIndex=T;const b=n.createBuffer(),A=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function p(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const T=r[x.id],b=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=b.length;v<w;v++){const I=b[v];if(Array.isArray(I))for(let L=0,U=I.length;L<U;L++)d(I[L],v,L,A);else d(I,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,T,b,A){if(_(x,T,b,A)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let I=0;for(let L=0;L<w.length;L++){const U=w[L],V=m(U);f(U,x.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function f(x,T,b){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,b)}function _(x,T,b,A){const v=x.value,w=T+"_"+b;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{const I=A[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(x){const T=x.uniforms;let b=0;const A=16;for(let w=0,I=T.length;w<I;w++){const L=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,V=L.length;U<V;U++){const P=L[U],k=Array.isArray(P.value)?P.value:[P.value];for(let Y=0,j=k.length;Y<j;Y++){const re=k[Y],q=m(re),J=b%A,ee=J%q.boundary,Fe=J+ee;b+=ee,Fe!==0&&A-Fe<q.storage&&(b+=A-Fe),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=q.storage}}}const v=b%A;return v>0&&(b+=A-v),x.__size=b,x.__cache={},this}function m(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):de("WebGLRenderer: Unsupported uniform value type.",x),T}function M(x){const T=x.target;T.removeEventListener("dispose",M);const b=s.indexOf(T.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function E(){for(const x in r)n.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:l,update:c,dispose:E}}const KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function $M(){return Ni===null&&(Ni=new ci(KM,16,16,er,fi),Ni.name="DFG_LUT",Ni.minFilter=gt,Ni.magFilter=gt,Ni.wrapS=Yt,Ni.wrapT=Yt,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class QM{constructor(e={}){const{canvas:t=Xh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Zt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const _=d,g=new Set([Wa,Ha,On]),m=new Set([Zt,oi,Xr,jr,Ga,Va]),M=new Uint32Array(4),E=new Int32Array(4),x=new R;let T=null,b=null;const A=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,U=null,V=null,P=null,k=null;this._outputColorSpace=Jt;let Y=0,j=0,re=null,q=-1,J=null;const ee=new dt,Fe=new dt;let Ce=null;const lt=new xe(0);let tt=0,rt=t.width,Z=t.height,K=1,Me=null,Ge=null;const me=new dt(0,0,rt,Z),we=new dt(0,0,rt,Z);let te=!1;const ne=new br;let Q=!1,_e=!1;const ve=new We,De=new R,Ue=new dt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ze(){return re===null?K:1}let D=i;function xt(S,N){return t.getContext(S,N)}let je,C,y,B,H,X,ce,pe,F,he,ue,Re,se,ke,Ne,He,Ke,O,$,oe,ye,Ee,ae;try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",di,!1),D===null){const N="webgl2";if(D=xt(N,S),D===null)throw xt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(S){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",di,!1),Pe("WebGLRenderer: "+S.message),S}function Oe(){je=new Qx(D),je.init(),ye=new kp(D,je),C=new Hx(D,je,e,ye),y=new kM(D,je),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),k=D.createFramebuffer(),B=new iy(D),H=new CM,X=new HM(D,je,y,H,C,ye,B),ce=new $x(I),pe=new n0(D),Ee=new Vx(D,pe),F=new ey(D,pe,B,Ee),he=new ny(D,F,pe,Ee,B),O=new ry(D,C,X),Ne=new Wx(H),ue=new AM(I,ce,je,C,Ee,Ne),Re=new ZM(I,H),se=new IM,ke=new OM(je),Ke=new Gx(I,ce,y,he,f,l),He=new VM(I,he,C),ae=new JM(D,B,C,y),$=new kx(D,je,B),oe=new ty(D,je,B),B.programs=ue.programs,I.capabilities=C,I.extensions=je,I.properties=H,I.renderLists=se,I.shadowMap=He,I.state=y,I.info=B}_!==Zt&&(w=new sy(_,t.width,t.height,o,r,a));const Se=new qM(I,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(rt,Z,!1))},this.getSize=function(S){return S.set(rt,Z)},this.setSize=function(S,N,W=!0){if(Se.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=S,Z=N,t.width=Math.floor(S*K),t.height=Math.floor(N*K),W===!0&&(t.style.width=S+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(rt*K,Z*K).floor()},this.setDrawingBufferSize=function(S,N,W){rt=S,Z=N,K=W,t.width=Math.floor(S*W),t.height=Math.floor(N*W),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===Zt){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,N,W,G){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,N,W,G),y.viewport(ee.copy(me).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,N,W,G){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,N,W,G),y.scissor(Fe.copy(we).multiplyScalar(K).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){y.setScissorTest(te=S)},this.setOpaqueSort=function(S){Me=S},this.setTransparentSort=function(S){Ge=S},this.getClearColor=function(S){return S.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,W=!0){let G=0;if(S){let z=!1;if(re!==null){const le=re.texture.format;z=g.has(le)}if(z){const le=re.texture.type,ge=m.has(le),be=Ke.getClearColor(),Ae=Ke.getClearAlpha(),Be=be.r,Qe=be.g,it=be.b;ge?(M[0]=Be,M[1]=Qe,M[2]=it,M[3]=Ae,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=Be,E[1]=Qe,E[2]=it,E[3]=Ae,D.clearBufferiv(D.COLOR,0,E))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",di,!1),Ke.dispose(),se.dispose(),ke.dispose(),H.dispose(),ce.dispose(),he.dispose(),Ee.dispose(),ae.dispose(),ue.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Qc),Se.removeEventListener("sessionend",eh),dr.stop()};function Ct(S){S.preventDefault(),Yn("WebGLRenderer: Context Lost."),L=!0}function st(){Yn("WebGLRenderer: Context Restored."),L=!1;const S=B.autoReset,N=He.enabled,W=He.autoUpdate,G=He.needsUpdate,z=He.type;Oe(),B.autoReset=S,He.enabled=N,He.autoUpdate=W,He.needsUpdate=G,He.type=z}function di(S){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ti(S){const N=S.target;N.removeEventListener("dispose",Ti),Xp(N)}function Xp(S){jp(S),H.remove(S)}function jp(S){const N=H.get(S).programs;N!==void 0&&(N.forEach(function(W){ue.releaseProgram(W)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,W,G,z,le){N===null&&(N=$e);const ge=z.isMesh&&z.matrixWorld.determinantAffine()<0,be=Zp(S,N,W,G,z);y.setMaterial(G,ge);let Ae=W.index,Be=1;if(G.wireframe===!0){if(Ae=F.getWireframeAttribute(W),Ae===void 0)return;Be=2}const Qe=W.drawRange,it=W.attributes.position;let Le=Qe.start*Be,ct=(Qe.start+Qe.count)*Be;le!==null&&(Le=Math.max(Le,le.start*Be),ct=Math.min(ct,(le.start+le.count)*Be)),Ae!==null?(Le=Math.max(Le,0),ct=Math.min(ct,Ae.count)):it!=null&&(Le=Math.max(Le,0),ct=Math.min(ct,it.count));const Et=ct-Le;if(Et<0||Et===1/0)return;Ee.setup(z,G,be,W,Ae);let ft,mt=$;if(Ae!==null&&(ft=pe.get(Ae),mt=oe,mt.setIndex(ft)),z.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Ze()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(z.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),y.setLineWidth(yt*Ze()),z.isLineSegments?mt.setMode(D.LINES):z.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else z.isPoints?mt.setMode(D.POINTS):z.isSprite&&mt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const yt=z._multiDrawStarts,Ie=z._multiDrawCounts,zt=z._multiDrawCount,pr=Ae?pe.get(Ae).bytesPerElement:1,si=H.get(G).currentProgram.getUniforms();for(let Ei=0;Ei<zt;Ei++)si.setValue(D,"_gl_DrawID",Ei),mt.render(yt[Ei]/pr,Ie[Ei])}else if(z.isInstancedMesh)mt.renderInstances(Le,Et,z.count);else if(W.isInstancedBufferGeometry){const yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,yt);mt.renderInstances(Le,Et,Ie)}else mt.render(Le,Et)};function $c(S,N,W,G){U!==null&&S.isNodeMaterial&&U.setObject(G,S),Q===!0&&Ne.setState(S,W,!1),S.transparent===!0&&S.side===wi&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,Ia(S,N,G),S.side=Ki,S.needsUpdate=!0,Ia(S,N,G),S.side=wi):Ia(S,N,G)}this.compile=function(S,N,W=null){W===null&&(W=S),U!==null&&U.renderStart(S,N,W),b=ke.get(W),b.init(N),v.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),_e=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,_e),Q===!0&&Ne.setGlobalState(this.clippingPlanes,N),U!==null&&He.render(b.state.shadowsArray,W,N);const G=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const be=le[ge];$c(be,W,N,z),G.add(be)}else $c(le,W,N,z),G.add(le)}),b=v.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(S,N,W=null){const G=this.compile(S,N,W);return new Promise(z=>{function le(){if(G.forEach(function(ge){const be=H.get(ge).currentProgram;(be===void 0||be.isReady())&&G.delete(ge)}),G.size===0){z(S);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let el=null;function qp(S){el&&el(S)}function Qc(){dr.stop()}function eh(){dr.start()}const dr=new mp;dr.setAnimationLoop(qp),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(S){el=S,Se.setAnimationLoop(S),S===null?dr.stop():dr.start()},Se.addEventListener("sessionstart",Qc),Se.addEventListener("sessionend",eh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(S,N);const W=Se.enabled===!0&&Se.isPresenting===!0,G=w!==null&&(re===null||W)&&w.begin(I,re);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(N),N=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,N,re),b=ke.get(S,v.length),b.init(N),b.state.textureUnits=X.getTextureUnits(),v.push(b),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(ve,ii,N.reversedDepth),_e=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,_e),T=se.get(S,A.length),T.init(),A.push(T),Se.enabled===!0&&Se.isPresenting===!0){const le=I.xr.getDepthSensingMesh();le!==null&&tl(le,N,-1/0,I.sortObjects)}tl(S,N,0,I.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),I.sortObjects===!0&&T.sort(Me,Ge),Ve=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ve&&Ke.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Ne.beginShadows();const z=b.state.shadowsArray;if(He.render(z,S,N),Q===!0&&Ne.endShadows(),(G&&w.hasRenderPass())===!1){const le=T.opaque,ge=T.transmissive;if(b.setupLights(),N.isArrayCamera){const be=N.cameras;if(ge.length>0)for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae];ih(le,ge,S,Qe)}Ve&&Ke.render(S);for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae];th(T,S,Qe,Qe.viewport)}}else ge.length>0&&ih(le,ge,S,N),Ve&&Ke.render(S),th(T,S,N)}re!==null&&j===0&&(X.updateMultisampleRenderTarget(re),X.updateRenderTargetMipmap(re)),G&&w.end(I),S.isScene===!0&&S.onAfterRender(I,S,N),Ee.resetDefaultState(),q=-1,J=null,v.pop(),v.length>0?(b=v[v.length-1],X.setTextureUnits(b.state.textureUnits),Q===!0&&Ne.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,U!==null&&U.renderEnd()};function tl(S,N,W,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ne)){G&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const le=he.update(S),ge=S.material;ge.visible&&T.push(S,le,ge,W,Ue.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ne))){const le=he.update(S),ge=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ue.copy(le.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(ge)){const be=le.groups;for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae],it=ge[Qe.materialIndex];it&&it.visible&&T.push(S,le,it,W,Ue.z,Qe,N)}}else ge.visible&&T.push(S,le,ge,W,Ue.z,null,N)}}const z=S.children;for(let le=0,ge=z.length;le<ge;le++)tl(z[le],N,W,G)}function th(S,N,W,G){const{opaque:z,transmissive:le,transparent:ge}=S;b.setupLightsView(W),Q===!0&&Ne.setGlobalState(I.clippingPlanes,W),G&&y.viewport(ee.copy(G)),z.length>0&&Ra(z,N,W),le.length>0&&Ra(le,N,W),ge.length>0&&Ra(ge,N,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ih(S,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const it=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Kt(1,1,{generateMipmaps:!0,type:it?fi:Zt,minFilter:Ri,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const z=b.state.transmissionRenderTarget[G.id],le=G.viewport||ee;z.setSize(le.z*I.transmissionResolutionScale,le.w*I.transmissionResolutionScale);const ge=I.getRenderTarget(),be=I.getActiveCubeFace(),Ae=I.getActiveMipmapLevel();I.setRenderTarget(z),I.getClearColor(lt),tt=I.getClearAlpha(),tt<1&&I.setClearColor(16777215,.5),I.clear(),Ve&&Ke.render(W);const Be=I.toneMapping;I.toneMapping=pi;const Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Q===!0&&Ne.setGlobalState(I.clippingPlanes,G),Ra(S,W,G),X.updateMultisampleRenderTarget(z),X.updateRenderTargetMipmap(z),je.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Le=0,ct=N.length;Le<ct;Le++){const Et=N[Le],{object:ft,geometry:mt,material:yt,group:Ie}=Et;if(yt.side===wi&&ft.layers.test(G.layers)){const zt=yt.side;yt.side=Gt,yt.needsUpdate=!0,rh(ft,W,G,mt,yt,Ie),yt.side=zt,yt.needsUpdate=!0,it=!0}}it===!0&&(X.updateMultisampleRenderTarget(z),X.updateRenderTargetMipmap(z))}I.setRenderTarget(ge,be,Ae),I.setClearColor(lt,tt),Qe!==void 0&&(G.viewport=Qe),I.toneMapping=Be}function Ra(S,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,le=S.length;z<le;z++){const ge=S[z],{object:be,geometry:Ae,group:Be}=ge;let Qe=ge.material;Qe.allowOverride===!0&&G!==null&&(Qe=G),be.layers.test(W.layers)&&rh(be,N,W,Ae,Qe,Be)}}function rh(S,N,W,G,z,le){U!==null&&z.isNodeMaterial&&U.setObject(S,z),S.onBeforeRender(I,N,W,G,z,le),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(I,N,W,G,S,le),z.transparent===!0&&z.side===wi&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,I.renderBufferDirect(W,N,G,z,S,le),z.side=Ki,z.needsUpdate=!0,I.renderBufferDirect(W,N,G,z,S,le),z.side=wi):I.renderBufferDirect(W,N,G,z,S,le),S.onAfterRender(I,N,W,G,z,le)}function Ia(S,N,W){N.isScene!==!0&&(N=$e);const G=H.get(S),z=b.state.lights,le=b.state.shadowsArray,ge=z.state.version,be=ue.getParameters(S,z.state,le,N,W,b.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(be);let Be=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=ce.get(S.envMap||G.environment,Qe),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Ti),Be=new Map,G.programs=Be);let it=Be.get(Ae);if(it!==void 0){if(G.currentProgram===it&&G.lightsStateVersion===ge)return ah(S,be),it}else be.uniforms=ue.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,W,be),S.onBeforeCompile(be,I),it=ue.acquireProgram(be,Ae),Be.set(Ae,it),G.uniforms=be.uniforms;const Le=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=Ne.uniform),ah(S,be),G.needsLights=Kp(S),G.lightsStateVersion=ge,G.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.sunLights.value=z.state.sun,Le.sunLightShadows.value=z.state.sunShadow,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.sunShadowMatrix.value=z.state.sunShadowMatrix,Le.sunShadowCascade.value=z.state.sunShadowCascade,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=it,G.uniformsList=null,it}function nh(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Uo.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ah(S,N){const W=H.get(S);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Yp(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let W=0,G=S.length;W<G;W++){const z=S[W];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function Zp(S,N,W,G,z){N.isScene!==!0&&(N=$e),X.resetTextureUnits();const le=N.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,be=re===null?I.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=ce.get(G.envMap||ge,Ae),Qe=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,it=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let ft=pi;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=I.toneMapping);const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=mt!==void 0?mt.length:0,Ie=H.get(G),zt=b.state.lights;if(Q===!0&&(_e===!0||S!==J)){const ut=S===J&&G.id===q;Ne.setState(G,S,ut)}let pr=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==zt.state.version||Ie.outputColorSpace!==be||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Be||G.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ne.numPlanes||Ie.numIntersection!==Ne.numIntersection)||Ie.vertexAlphas!==Qe||Ie.vertexTangents!==it||Ie.morphTargets!==Le||Ie.morphNormals!==ct||Ie.morphColors!==Et||Ie.toneMapping!==ft||Ie.morphTargetsCount!==yt||!!Ie.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pr=!0):(pr=!0,Ie.__version=G.version);let si=Ie.currentProgram;pr===!0&&(si=Ia(G,N,z),U&&G.isNodeMaterial&&U.onUpdateProgram(G,si,Ie));let Ei=!1,Zi=!1,Br=!1;const ht=si.getUniforms(),St=Ie.uniforms;if(y.useProgram(si.program)&&(Ei=!0,Zi=!0,Br=!0),G.id!==q&&(q=G.id,Zi=!0),Ie.needsLights){const ut=Yp(b.state.lightProbeGridArray,z);Ie.lightProbeGrid!==ut&&(Ie.lightProbeGrid=ut,Zi=!0)}if(Ei||J!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",S.projectionMatrix),ht.setValue(D,"viewMatrix",S.matrixWorldInverse);const ut=ht.map.cameraPosition;ut!==void 0&&ut.setValue(D,De.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Zi=!0,Br=!0)}if(Ie.needsLights&&(zt.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",zt.state.sunShadowMap,X),zt.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",zt.state.directionalShadowMap,X),zt.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",zt.state.spotShadowMap,X),zt.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",zt.state.pointShadowMap,X)),z.isSkinnedMesh){ht.setOptional(D,z,"bindMatrix"),ht.setOptional(D,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ht.setValue(D,"boneTexture",ut.boneTexture,X))}z.isBatchedMesh&&(ht.setOptional(D,z,"batchingTexture"),ht.setValue(D,"batchingTexture",z._matricesTexture,X),ht.setOptional(D,z,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",z._indirectTexture,X),ht.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",z._colorsTexture,X));const Ji=W.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&O.update(z,W,si),(Zi||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,ht.setValue(D,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=$M()),Zi){if(ht.setValue(D,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&Jp(St,Br),le&&G.fog===!0&&Re.refreshFogUniforms(St,le),Re.refreshMaterialUniforms(St,G,K,Z,b.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.lightProbeGrid){const ut=Ie.lightProbeGrid;St.probesSH.value=ut.texture,St.probesMin.value.copy(ut.boundingBox.min),St.probesMax.value.copy(ut.boundingBox.max),St.probesResolution.value.copy(ut.resolution)}Uo.upload(D,nh(Ie),St,X)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Uo.upload(D,nh(Ie),St,X),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(D,"center",z.center),ht.setValue(D,"modelViewMatrix",z.modelViewMatrix),ht.setValue(D,"normalMatrix",z.normalMatrix),ht.setValue(D,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const ut=G.uniformsGroups;for(let Cn=0,zr=ut.length;Cn<zr;Cn++){const oh=ut[Cn];ae.update(oh,si),ae.bind(oh,si)}}return si}function Jp(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Kp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(S,N,W){const G=H.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const W=H.get(S);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,W=0){re=S,Y=N,j=W;let G=null,z=!1,le=!1;if(S){const ge=H.get(S);if(ge.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),ee.copy(S.viewport),Fe.copy(S.scissor),Ce=S.scissorTest,y.viewport(ee),y.scissor(Fe),y.setScissorTest(Ce),q=-1;return}else if(ge.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(ge.__hasExternalTextures)X.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);const Ae=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?G=Ae[N][W]:G=Ae[N],z=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?G=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[W]:G=Ae,ee.copy(S.viewport),Fe.copy(S.scissor),Ce=S.scissorTest}else ee.copy(me).multiplyScalar(K).floor(),Fe.copy(we).multiplyScalar(K).floor(),Ce=te;if(W!==0&&(G=V),y.bindFramebuffer(D.FRAMEBUFFER,G)&&y.drawBuffers(S,G),y.viewport(ee),y.scissor(Fe),y.setScissorTest(Ce),z){const ge=H.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,W)}else if(le){const ge=N;for(let be=0;be<S.textures.length;be++){const Ae=H.get(S.textures[be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+be,Ae.__webglTexture,W,ge)}}else if(S!==null&&W!==0){const ge=H.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,W)}q=-1};function sh(S){const N=H.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=C.textureFormatReadable(S.format),N.__typeReadable=C.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,W,G,z,le,ge,be=0){if(!(S&&S.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){y.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Be=S.textures[be],Qe=Be.format,it=Be.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);const Le=sh(Be);if(Le.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&W>=0&&W<=S.height-z&&D.readPixels(N,W,G,z,ye.convert(Qe),ye.convert(it),le)}finally{const Be=re!==null?H.get(re).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,N,W,G,z,le,ge,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae)if(N>=0&&N<=S.width-G&&W>=0&&W<=S.height-z){y.bindFramebuffer(D.FRAMEBUFFER,Ae);const Be=S.textures[be],Qe=Be.format,it=Be.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);const Le=sh(Be);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(N,W,G,z,ye.convert(Qe),ye.convert(it),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Et=re!==null?H.get(re).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Et);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kf(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ct),D.deleteSync(ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,W=0){const G=Math.pow(2,-W),z=Math.floor(S.image.width*G),le=Math.floor(S.image.height*G),ge=N!==null?N.x:0,be=N!==null?N.y:0;X.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ge,be,z,le),y.unbindTexture()},this.copyTextureToTexture=function(S,N,W=null,G=null,z=0,le=0){let ge,be,Ae,Be,Qe,it,Le,ct,Et;const ft=S.isCompressedTexture?S.mipmaps[le]:S.image;if(W!==null)ge=W.max.x-W.min.x,be=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,Qe=W.min.y,it=W.isBox3?W.min.z:0;else{const St=Math.pow(2,-z);ge=Math.floor(ft.width*St),be=Math.floor(ft.height*St),S.isDataArrayTexture?Ae=ft.depth:S.isData3DTexture?Ae=Math.floor(ft.depth*St):Ae=1,Be=0,Qe=0,it=0}G!==null?(Le=G.x,ct=G.y,Et=G.z):(Le=0,ct=0,Et=0);const mt=ye.convert(N.format),yt=ye.convert(N.type);let Ie;N.isData3DTexture?(X.setTexture3D(N,0),Ie=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),Ie=D.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),Ie=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=y.getParameter(D.UNPACK_ROW_LENGTH),pr=y.getParameter(D.UNPACK_IMAGE_HEIGHT),si=y.getParameter(D.UNPACK_SKIP_PIXELS),Ei=y.getParameter(D.UNPACK_SKIP_ROWS),Zi=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(D.UNPACK_SKIP_IMAGES,it);const Br=S.isDataArrayTexture||S.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const St=H.get(S),Ji=H.get(N),ut=H.get(St.__renderTarget),Cn=H.get(Ji.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let zr=0;zr<Ae;zr++)Br&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(S).__webglTexture,z,it+zr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(N).__webglTexture,le,Et+zr)),D.blitFramebuffer(Be,Qe,ge,be,Le,ct,ge,be,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||H.has(S)){const St=H.get(S),Ji=H.get(N);y.bindFramebuffer(D.READ_FRAMEBUFFER,P),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let ut=0;ut<Ae;ut++)Br?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,z,it+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,z),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ji.__webglTexture,le,Et+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ji.__webglTexture,le),z!==0?D.blitFramebuffer(Be,Qe,ge,be,Le,ct,ge,be,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Ie,le,Le,ct,Et+ut,Be,Qe,ge,be):D.copyTexSubImage2D(Ie,le,Le,ct,Be,Qe,ge,be);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ie,le,Le,ct,Et,ge,be,Ae,mt,yt,ft.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,le,Le,ct,Et,ge,be,Ae,mt,ft.data):D.texSubImage3D(Ie,le,Le,ct,Et,ge,be,Ae,mt,yt,ft):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Le,ct,ge,be,mt,yt,ft.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Le,ct,ft.width,ft.height,mt,ft.data):D.texSubImage2D(D.TEXTURE_2D,le,Le,ct,ge,be,mt,yt,ft);y.pixelStorei(D.UNPACK_ROW_LENGTH,zt),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pr),y.pixelStorei(D.UNPACK_SKIP_PIXELS,si),y.pixelStorei(D.UNPACK_SKIP_ROWS,Ei),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Zi),le===0&&N.generateMipmaps&&D.generateMipmap(Ie),y.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Y=0,j=0,re=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}export{ul as ACESFilmicToneMapping,fr as AddEquation,Ih as AddOperation,Tl as AdditiveAnimationBlendMode,rl as AdditiveBlending,pl as AgXToneMapping,Ml as AlphaFormat,Hh as AlwaysCompare,La as AlwaysDepth,Fh as AlwaysStencilFunc,zd as AmbientLight,tp as AnimationAction,xa as AnimationClip,qg as AnimationLoader,b_ as AnimationMixer,M_ as AnimationObjectGroup,Vg as AnimationUtils,ju as ArcCurve,Jd as ArrayCamera,Z_ as ArrowHelper,ml as AttachedBindMode,$d as Audio,u_ as AudioAnalyser,Lc as AudioContext,l_ as AudioListener,n_ as AudioLoader,J_ as AxesHelper,Gt as BackSide,Uh as BasicDepthPacking,rf as BasicShadowMap,Nu as BatchedMesh,Ed as BezierInterpolant,Ql as Bone,Ar as BooleanKeyframeTrack,sp as Box2,Ft as Box3,q_ as Box3Helper,Fr as BoxGeometry,j_ as BoxHelper,pt as BufferAttribute,Xe as BufferGeometry,Wd as BufferGeometryLoader,_l as ByteType,Li as Cache,To as Camera,X_ as CameraHelper,sg as CanvasTexture,Vo as CapsuleGeometry,Zu as CatmullRomCurve3,hl as CineonToneMapping,ko as CircleGeometry,Yt as ClampToEdgeWrapping,I_ as Clock,xe as Color,Tc as ColorKeyframeTrack,et as ColorManagement,Xf as Compatibility,ng as CompressedArrayTexture,ag as CompressedCubeTexture,ho as CompressedTexture,Yg as CompressedTextureLoader,wa as ConeGeometry,Ah as ConstantAlphaFactor,Eh as ConstantColorFactor,$_ as Controls,Zd as CubeCamera,Wu as CubeDepthTexture,Ci as CubeReflectionMapping,$i as CubeRefractionMapping,ca as CubeTexture,Zg as CubeTextureLoader,Hr as CubeUVReflectionMapping,uc as CubicBezierCurve,Ku as CubicBezierCurve3,bd as CubicInterpolant,il as CullFaceBack,ch as CullFaceFront,tf as CullFaceFrontBack,lh as CullFaceNone,xi as Curve,Qu as CurvePath,uh as CustomBlending,dl as CustomToneMapping,Ea as CylinderGeometry,L_ as Cylindrical,Rs as Data3DTexture,Cs as DataArrayTexture,ci as DataTexture,Jg as DataTextureLoader,Im as DataUtils,Sf as DecrementStencilOp,Tf as DecrementWrapStencilOp,Id as DefaultLoadingManager,Ii as DepthFormat,Qi as DepthStencilFormat,mn as DepthTexture,Ph as DetachedBindMode,Bd as DirectionalLight,W_ as DirectionalLightHelper,Td as DiscreteInterpolant,Ho as DodecahedronGeometry,wi as DoubleSide,yh as DstAlphaFactor,Sh as DstColorFactor,zf as DynamicCopyUsage,Df as DynamicDrawUsage,Of as DynamicReadUsage,Xu as EdgesGeometry,mo as EllipseCurve,Gh as EqualCompare,Na as EqualDepth,Cf as EqualStencilFunc,Pn as EquirectangularReflectionMapping,Ln as EquirectangularRefractionMapping,Si as Euler,mi as EventDispatcher,ac as ExternalTexture,Wo as ExtrudeGeometry,Yi as FileLoader,Fm as Float16BufferAttribute,Te as Float32BufferAttribute,Vt as FloatType,Bo as Fog,Fo as FogExp2,rg as FramebufferTexture,Ki as FrontSide,br as Frustum,Go as FrustumArray,C_ as GLBufferAttribute,Vf as GLSL1,El as GLSL3,Vh as GreaterCompare,Oa as GreaterDepth,ws as GreaterEqualCompare,Ua as GreaterEqualDepth,Lf as GreaterEqualStencilFunc,If as GreaterStencilFunc,k_ as GridHelper,en as Group,og as HTMLTexture,fi as HalfFloatType,Pd as HemisphereLight,V_ as HemisphereLightHelper,Xo as IcosahedronGeometry,r_ as ImageBitmapLoader,ya as ImageLoader,tu as ImageUtils,Mf as IncrementStencilOp,bf as IncrementWrapStencilOp,pn as InstancedBufferAttribute,Hd as InstancedBufferGeometry,A_ as InstancedInterleavedBuffer,Pu as InstancedMesh,Um as Int16BufferAttribute,Om as Int32BufferAttribute,Lm as Int8BufferAttribute,za as IntType,zs as InterleavedBuffer,Or as InterleavedBufferAttribute,vn as Interpolant,bl as InterpolateBezier,Hn as InterpolateDiscrete,Ms as InterpolateLinear,Ss as InterpolateSmooth,Wf as InterpolationSamplingMode,Hf as InterpolationSamplingType,Ef as InvertStencilOp,Ts as KeepStencilOp,ui as KeyframeTrack,xu as LOD,jo as LatheGeometry,Ps as Layers,zh as LessCompare,Da as LessDepth,Es as LessEqualCompare,kr as LessEqualDepth,Rf as LessEqualStencilFunc,Af as LessStencilFunc,lr as Light,Vd as LightProbe,Mo as LightShadow,or as Line,O_ as Line3,jt as LineBasicMaterial,dc as LineCurve,$u as LineCurve3,yd as LineDashedMaterial,zu as LineLoop,Pi as LineSegments,gt as LinearFilter,bc as LinearInterpolant,lf as LinearMipMapLinearFilter,of as LinearMipMapNearestFilter,Ri as LinearMipmapLinearFilter,Un as LinearMipmapNearestFilter,Xn as LinearSRGBColorSpace,ll as LinearToneMapping,jn as LinearTransfer,ei as Loader,Rc as LoaderUtils,wc as LoadingManager,Lh as LoopOnce,Nh as LoopPingPong,Dh as LoopRepeat,Qp as MOUSE,Dt as Material,nf as MaterialBlending,Qo as MaterialLoader,mm as MathUtils,D_ as Matrix2,qe as Matrix3,We as Matrix4,mh as MaxEquation,At as Mesh,sr as MeshBasicMaterial,yc as MeshDepthMaterial,Mc as MeshDistanceMaterial,vd as MeshLambertMaterial,xd as MeshMatcapMaterial,_d as MeshNormalMaterial,md as MeshPhongMaterial,fd as MeshPhysicalMaterial,xc as MeshStandardMaterial,gd as MeshToonMaterial,fh as MinEquation,Nn as MirroredRepeatWrapping,Rh as MixOperation,al as MultiplyBlending,In as MultiplyOperation,bt as NearestFilter,sf as NearestMipMapLinearFilter,af as NearestMipMapNearestFilter,Wr as NearestMipmapLinearFilter,gl as NearestMipmapNearestFilter,fl as NeutralToneMapping,Bh as NeverCompare,Pa as NeverDepth,wf as NeverStencilFunc,Ai as NoBlending,Oi as NoColorSpace,gf as NoNormalPacking,pi as NoToneMapping,bs as NormalAnimationBlendMode,Vr as NormalBlending,vf as NormalGAPacking,_f as NormalRGPacking,kh as NotEqualCompare,Fa as NotEqualDepth,Pf as NotEqualStencilFunc,xo as NumberKeyframeTrack,nt as Object3D,t_ as ObjectLoader,Oh as ObjectSpaceNormalMap,Aa as OctahedronGeometry,_h as OneFactor,Ch as OneMinusConstantAlphaFactor,wh as OneMinusConstantColorFactor,Mh as OneMinusDstAlphaFactor,bh as OneMinusDstColorFactor,ol as OneMinusSrcAlphaFactor,xh as OneMinusSrcColorFactor,Ma as OrthographicCamera,Rn as PCFShadowMap,hh as PCFSoftShadowMap,Xc as PMREMGenerator,da as Path,Nt as PerspectiveCamera,Xi as Plane,An as PlaneGeometry,Y_ as PlaneHelper,Fd as PointLight,z_ as PointLightHelper,Vu as Points,rc as PointsMaterial,H_ as PolarGridHelper,ur as PolyhedronGeometry,h_ as PositionalAudio,at as PropertyBinding,ep as PropertyMixer,pc as QuadraticBezierCurve,fc as QuadraticBezierCurve3,Wt as Quaternion,yo as QuaternionKeyframeTrack,Cd as QuaternionLinearInterpolant,$a as R11_EAC_Format,kn as RED_GREEN_RGTC2_Format,vs as RED_RGTC1_Format,$p as REVISION,Vn as RG11_EAC_Format,pf as RGBADepthPacking,kt as RGBAFormat,Wa as RGBAIntegerFormat,ds as RGBA_ASTC_10x10_Format,cs as RGBA_ASTC_10x5_Format,hs as RGBA_ASTC_10x6_Format,us as RGBA_ASTC_10x8_Format,ps as RGBA_ASTC_12x10_Format,fs as RGBA_ASTC_12x12_Format,ts as RGBA_ASTC_4x4_Format,is as RGBA_ASTC_5x4_Format,rs as RGBA_ASTC_5x5_Format,ns as RGBA_ASTC_6x5_Format,as as RGBA_ASTC_6x6_Format,ss as RGBA_ASTC_8x5_Format,os as RGBA_ASTC_8x6_Format,ls as RGBA_ASTC_8x8_Format,ms as RGBA_BPTC_Format,Ka as RGBA_ETC2_EAC_Format,Ya as RGBA_PVRTC_2BPPV1_Format,qa as RGBA_PVRTC_4BPPV1_Format,Bn as RGBA_S3TC_DXT1_Format,zn as RGBA_S3TC_DXT3_Format,Gn as RGBA_S3TC_DXT5_Format,ff as RGBDepthPacking,Sl as RGBFormat,cf as RGBIntegerFormat,gs as RGB_BPTC_SIGNED_Format,_s as RGB_BPTC_UNSIGNED_Format,Za as RGB_ETC1_Format,Ja as RGB_ETC2_Format,ja as RGB_PVRTC_2BPPV1_Format,Xa as RGB_PVRTC_4BPPV1_Format,Fn as RGB_S3TC_DXT1_Format,mf as RGDepthPacking,er as RGFormat,Ha as RGIntegerFormat,vc as RawShaderMaterial,dn as Ray,R_ as Raycaster,Gd as RectAreaLight,ka as RedFormat,On as RedIntegerFormat,cl as ReinhardToneMapping,jf as RenderObjectRefreshType,Pl as RenderTarget,T_ as RenderTarget3D,Dn as RepeatWrapping,yf as ReplaceStencilOp,ph as ReverseSubtractEquation,qo as RingGeometry,Qa as SIGNED_R11_EAC_Format,ys as SIGNED_RED_GREEN_RGTC2_Format,xs as SIGNED_RED_RGTC1_Format,es as SIGNED_RG11_EAC_Format,Jt as SRGBColorSpace,ot as SRGBTransfer,du as Scene,Je as ShaderChunk,Mi as ShaderLib,hi as ShaderMaterial,hd as ShadowMaterial,pa as Shape,Yo as ShapeGeometry,K_ as ShapePath,bi as ShapeUtils,vl as ShortType,zo as Skeleton,B_ as SkeletonHelper,Au as SkinnedMesh,vm as Source,Lt as Sphere,Ca as SphereGeometry,P_ as Spherical,Cc as SphericalHarmonics3,mc as SplineCurve,Od as SpotLight,F_ as SpotLightHelper,_u as Sprite,ql as SpriteMaterial,sl as SrcAlphaFactor,Th as SrcAlphaSaturateFactor,vh as SrcColorFactor,Bf as StaticCopyUsage,As as StaticDrawUsage,Uf as StaticReadUsage,a_ as StereoCamera,Gf as StreamCopyUsage,Nf as StreamDrawUsage,Ff as StreamReadUsage,Cr as StringKeyframeTrack,dh as SubtractEquation,nl as SubtractiveBlending,ef as TOUCH,Ui as TangentSpaceNormalMap,Zo as TetrahedronGeometry,vt as Texture,Kg as TextureLoader,zi as TextureSource,r0 as TextureUtils,Kd as Timer,kf as TimestampQuery,Jo as TorusGeometry,Ko as TorusKnotGeometry,ti as Triangle,df as TriangleFanDrawMode,uf as TriangleStripDrawMode,hf as TrianglesDrawMode,$o as TubeGeometry,Ba as UVMapping,kl as Uint16BufferAttribute,Hl as Uint32BufferAttribute,Dm as Uint8BufferAttribute,Nm as Uint8ClampedBufferAttribute,Kc as Uniform,w_ as UniformsGroup,fe as UniformsLib,pd as UniformsUtils,Zt as UnsignedByteType,yl as UnsignedInt101111Type,jr as UnsignedInt248Type,xl as UnsignedInt5999Type,oi as UnsignedIntType,Ga as UnsignedShort4444Type,Va as UnsignedShort5551Type,Xr as UnsignedShortType,Gr as VSMShadowMap,ie as Vector2,R as Vector3,dt as Vector4,Ec as VectorKeyframeTrack,ig as VideoFrameTexture,Hu as VideoTexture,Mm as WebGL3DRenderTarget,ym as WebGLArrayRenderTarget,ii as WebGLCoordinateSystem,jc as WebGLCubeRenderTarget,Kt as WebGLRenderTarget,QM as WebGLRenderer,kp as WebGLUtils,_r as WebGPUCoordinateSystem,Ds as WebXRController,od as WireframeGeometry,Wn as WrapAroundEnding,mr as ZeroCurvatureEnding,gh as ZeroFactor,gr as ZeroSlopeEnding,xf as ZeroStencilOp,Xh as createCanvasElement,Pe as error,Jf as getConsoleFunction,Yn as log,Zf as setConsoleFunction,de as warn,Fi as warnOnce};
