import{x as Et,y as kt,r as $t,j as C,B as et,T as Ft,P as Ht,v as U}from"./index-6Q5BBa13.js";import{r as Ct}from"./index-Chjiymov.js";import{F as Qt}from"./FileSaver.min-C6mDTmme.js";import{T as Ut}from"./TextField-Bx4eTY9B.js";import"./Select-hg-X6RsY.js";import"./useFormControl-Pk0IoeSm.js";import"./isMuiElement-CQmao4ut.js";var P={},q,rt;function Rt(){return rt||(rt=1,q={L:1,M:0,Q:3,H:2}),q}var j,nt;function Tt(){return nt||(nt=1,j={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),j}var G,it;function qt(){if(it)return G;it=1;var t=Tt();function e(r){this.mode=t.MODE_8BIT_BYTE,this.data=r}return e.prototype={getLength:function(r){return this.data.length},write:function(r){for(var n=0;n<this.data.length;n++)r.put(this.data.charCodeAt(n),8)}},G=e,G}var z,at;function jt(){if(at)return z;at=1;var t=Rt();function e(r,n){this.totalCount=r,this.dataCount=n}return e.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e.getRSBlocks=function(r,n){var a=e.getRsBlockTable(r,n);if(a==null)throw new Error("bad rs block @ typeNumber:"+r+"/errorCorrectLevel:"+n);for(var i=a.length/3,s=new Array,o=0;o<i;o++)for(var l=a[o*3+0],u=a[o*3+1],c=a[o*3+2],f=0;f<l;f++)s.push(new e(u,c));return s},e.getRsBlockTable=function(r,n){switch(n){case t.L:return e.RS_BLOCK_TABLE[(r-1)*4+0];case t.M:return e.RS_BLOCK_TABLE[(r-1)*4+1];case t.Q:return e.RS_BLOCK_TABLE[(r-1)*4+2];case t.H:return e.RS_BLOCK_TABLE[(r-1)*4+3];default:return}},z=e,z}var V,ot;function Gt(){if(ot)return V;ot=1;function t(){this.buffer=new Array,this.length=0}return t.prototype={get:function(e){var r=Math.floor(e/8);return(this.buffer[r]>>>7-e%8&1)==1},put:function(e,r){for(var n=0;n<r;n++)this.putBit((e>>>r-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),e&&(this.buffer[r]|=128>>>this.length%8),this.length++}},V=t,V}var W,st;function bt(){if(st)return W;st=1;for(var t={glog:function(r){if(r<1)throw new Error("glog("+r+")");return t.LOG_TABLE[r]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t.EXP_TABLE[r]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},e=0;e<8;e++)t.EXP_TABLE[e]=1<<e;for(var e=8;e<256;e++)t.EXP_TABLE[e]=t.EXP_TABLE[e-4]^t.EXP_TABLE[e-5]^t.EXP_TABLE[e-6]^t.EXP_TABLE[e-8];for(var e=0;e<255;e++)t.LOG_TABLE[t.EXP_TABLE[e]]=e;return W=t,W}var N,ut;function xt(){if(ut)return N;ut=1;var t=bt();function e(r,n){if(r.length==null)throw new Error(r.length+"/"+n);for(var a=0;a<r.length&&r[a]==0;)a++;this.num=new Array(r.length-a+n);for(var i=0;i<r.length-a;i++)this.num[i]=r[i+a]}return e.prototype={get:function(r){return this.num[r]},getLength:function(){return this.num.length},multiply:function(r){for(var n=new Array(this.getLength()+r.getLength()-1),a=0;a<this.getLength();a++)for(var i=0;i<r.getLength();i++)n[a+i]^=t.gexp(t.glog(this.get(a))+t.glog(r.get(i)));return new e(n,0)},mod:function(r){if(this.getLength()-r.getLength()<0)return this;for(var n=t.glog(this.get(0))-t.glog(r.get(0)),a=new Array(this.getLength()),i=0;i<this.getLength();i++)a[i]=this.get(i);for(var i=0;i<r.getLength();i++)a[i]^=t.gexp(t.glog(r.get(i))+n);return new e(a,0).mod(r)}},N=e,N}var K,lt;function zt(){if(lt)return K;lt=1;var t=Tt(),e=xt(),r=bt(),n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(i){for(var s=i<<10;a.getBCHDigit(s)-a.getBCHDigit(a.G15)>=0;)s^=a.G15<<a.getBCHDigit(s)-a.getBCHDigit(a.G15);return(i<<10|s)^a.G15_MASK},getBCHTypeNumber:function(i){for(var s=i<<12;a.getBCHDigit(s)-a.getBCHDigit(a.G18)>=0;)s^=a.G18<<a.getBCHDigit(s)-a.getBCHDigit(a.G18);return i<<12|s},getBCHDigit:function(i){for(var s=0;i!=0;)s++,i>>>=1;return s},getPatternPosition:function(i){return a.PATTERN_POSITION_TABLE[i-1]},getMask:function(i,s,o){switch(i){case n.PATTERN000:return(s+o)%2==0;case n.PATTERN001:return s%2==0;case n.PATTERN010:return o%3==0;case n.PATTERN011:return(s+o)%3==0;case n.PATTERN100:return(Math.floor(s/2)+Math.floor(o/3))%2==0;case n.PATTERN101:return s*o%2+s*o%3==0;case n.PATTERN110:return(s*o%2+s*o%3)%2==0;case n.PATTERN111:return(s*o%3+(s+o)%2)%2==0;default:throw new Error("bad maskPattern:"+i)}},getErrorCorrectPolynomial:function(i){for(var s=new e([1],0),o=0;o<i;o++)s=s.multiply(new e([1,r.gexp(o)],0));return s},getLengthInBits:function(i,s){if(1<=s&&s<10)switch(i){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw new Error("mode:"+i)}else if(s<27)switch(i){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw new Error("mode:"+i)}else if(s<41)switch(i){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw new Error("mode:"+i)}else throw new Error("type:"+s)},getLostPoint:function(i){for(var s=i.getModuleCount(),o=0,l=0;l<s;l++)for(var u=0;u<s;u++){for(var c=0,f=i.isDark(l,u),h=-1;h<=1;h++)if(!(l+h<0||s<=l+h))for(var d=-1;d<=1;d++)u+d<0||s<=u+d||h==0&&d==0||f==i.isDark(l+h,u+d)&&c++;c>5&&(o+=3+c-5)}for(var l=0;l<s-1;l++)for(var u=0;u<s-1;u++){var g=0;i.isDark(l,u)&&g++,i.isDark(l+1,u)&&g++,i.isDark(l,u+1)&&g++,i.isDark(l+1,u+1)&&g++,(g==0||g==4)&&(o+=3)}for(var l=0;l<s;l++)for(var u=0;u<s-6;u++)i.isDark(l,u)&&!i.isDark(l,u+1)&&i.isDark(l,u+2)&&i.isDark(l,u+3)&&i.isDark(l,u+4)&&!i.isDark(l,u+5)&&i.isDark(l,u+6)&&(o+=40);for(var u=0;u<s;u++)for(var l=0;l<s-6;l++)i.isDark(l,u)&&!i.isDark(l+1,u)&&i.isDark(l+2,u)&&i.isDark(l+3,u)&&i.isDark(l+4,u)&&!i.isDark(l+5,u)&&i.isDark(l+6,u)&&(o+=40);for(var m=0,u=0;u<s;u++)for(var l=0;l<s;l++)i.isDark(l,u)&&m++;var p=Math.abs(100*m/s/s-50)/5;return o+=p*10,o}};return K=a,K}var X,ft;function Vt(){if(ft)return X;ft=1;var t=qt(),e=jt(),r=Gt(),n=zt(),a=xt();function i(o,l){this.typeNumber=o,this.errorCorrectLevel=l,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var s=i.prototype;return s.addData=function(o){var l=new t(o);this.dataList.push(l),this.dataCache=null},s.isDark=function(o,l){if(o<0||this.moduleCount<=o||l<0||this.moduleCount<=l)throw new Error(o+","+l);return this.modules[o][l]},s.getModuleCount=function(){return this.moduleCount},s.make=function(){if(this.typeNumber<1){var o=1;for(o=1;o<40;o++){for(var l=e.getRSBlocks(o,this.errorCorrectLevel),u=new r,c=0,f=0;f<l.length;f++)c+=l[f].dataCount;for(var f=0;f<this.dataList.length;f++){var h=this.dataList[f];u.put(h.mode,4),u.put(h.getLength(),n.getLengthInBits(h.mode,o)),h.write(u)}if(u.getLengthInBits()<=c*8)break}this.typeNumber=o}this.makeImpl(!1,this.getBestMaskPattern())},s.makeImpl=function(o,l){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var u=0;u<this.moduleCount;u++){this.modules[u]=new Array(this.moduleCount);for(var c=0;c<this.moduleCount;c++)this.modules[u][c]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(o,l),this.typeNumber>=7&&this.setupTypeNumber(o),this.dataCache==null&&(this.dataCache=i.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,l)},s.setupPositionProbePattern=function(o,l){for(var u=-1;u<=7;u++)if(!(o+u<=-1||this.moduleCount<=o+u))for(var c=-1;c<=7;c++)l+c<=-1||this.moduleCount<=l+c||(0<=u&&u<=6&&(c==0||c==6)||0<=c&&c<=6&&(u==0||u==6)||2<=u&&u<=4&&2<=c&&c<=4?this.modules[o+u][l+c]=!0:this.modules[o+u][l+c]=!1)},s.getBestMaskPattern=function(){for(var o=0,l=0,u=0;u<8;u++){this.makeImpl(!0,u);var c=n.getLostPoint(this);(u==0||o>c)&&(o=c,l=u)}return l},s.createMovieClip=function(o,l,u){var c=o.createEmptyMovieClip(l,u),f=1;this.make();for(var h=0;h<this.modules.length;h++)for(var d=h*f,g=0;g<this.modules[h].length;g++){var m=g*f,p=this.modules[h][g];p&&(c.beginFill(0,100),c.moveTo(m,d),c.lineTo(m+f,d),c.lineTo(m+f,d+f),c.lineTo(m,d+f),c.endFill())}return c},s.setupTimingPattern=function(){for(var o=8;o<this.moduleCount-8;o++)this.modules[o][6]==null&&(this.modules[o][6]=o%2==0);for(var l=8;l<this.moduleCount-8;l++)this.modules[6][l]==null&&(this.modules[6][l]=l%2==0)},s.setupPositionAdjustPattern=function(){for(var o=n.getPatternPosition(this.typeNumber),l=0;l<o.length;l++)for(var u=0;u<o.length;u++){var c=o[l],f=o[u];if(this.modules[c][f]==null)for(var h=-2;h<=2;h++)for(var d=-2;d<=2;d++)h==-2||h==2||d==-2||d==2||h==0&&d==0?this.modules[c+h][f+d]=!0:this.modules[c+h][f+d]=!1}},s.setupTypeNumber=function(o){for(var l=n.getBCHTypeNumber(this.typeNumber),u=0;u<18;u++){var c=!o&&(l>>u&1)==1;this.modules[Math.floor(u/3)][u%3+this.moduleCount-8-3]=c}for(var u=0;u<18;u++){var c=!o&&(l>>u&1)==1;this.modules[u%3+this.moduleCount-8-3][Math.floor(u/3)]=c}},s.setupTypeInfo=function(o,l){for(var u=this.errorCorrectLevel<<3|l,c=n.getBCHTypeInfo(u),f=0;f<15;f++){var h=!o&&(c>>f&1)==1;f<6?this.modules[f][8]=h:f<8?this.modules[f+1][8]=h:this.modules[this.moduleCount-15+f][8]=h}for(var f=0;f<15;f++){var h=!o&&(c>>f&1)==1;f<8?this.modules[8][this.moduleCount-f-1]=h:f<9?this.modules[8][15-f-1+1]=h:this.modules[8][15-f-1]=h}this.modules[this.moduleCount-8][8]=!o},s.mapData=function(o,l){for(var u=-1,c=this.moduleCount-1,f=7,h=0,d=this.moduleCount-1;d>0;d-=2)for(d==6&&d--;;){for(var g=0;g<2;g++)if(this.modules[c][d-g]==null){var m=!1;h<o.length&&(m=(o[h]>>>f&1)==1);var p=n.getMask(l,c,d-g);p&&(m=!m),this.modules[c][d-g]=m,f--,f==-1&&(h++,f=7)}if(c+=u,c<0||this.moduleCount<=c){c-=u,u=-u;break}}},i.PAD0=236,i.PAD1=17,i.createData=function(o,l,u){for(var c=e.getRSBlocks(o,l),f=new r,h=0;h<u.length;h++){var d=u[h];f.put(d.mode,4),f.put(d.getLength(),n.getLengthInBits(d.mode,o)),d.write(f)}for(var g=0,h=0;h<c.length;h++)g+=c[h].dataCount;if(f.getLengthInBits()>g*8)throw new Error("code length overflow. ("+f.getLengthInBits()+">"+g*8+")");for(f.getLengthInBits()+4<=g*8&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=g*8||(f.put(i.PAD0,8),f.getLengthInBits()>=g*8));)f.put(i.PAD1,8);return i.createBytes(f,c)},i.createBytes=function(o,l){for(var u=0,c=0,f=0,h=new Array(l.length),d=new Array(l.length),g=0;g<l.length;g++){var m=l[g].dataCount,p=l[g].totalCount-m;c=Math.max(c,m),f=Math.max(f,p),h[g]=new Array(m);for(var v=0;v<h[g].length;v++)h[g][v]=255&o.buffer[v+u];u+=m;var w=n.getErrorCorrectPolynomial(p),T=new a(h[g],w.getLength()-1),b=T.mod(w);d[g]=new Array(w.getLength()-1);for(var v=0;v<d[g].length;v++){var S=v+b.getLength()-d[g].length;d[g][v]=S>=0?b.get(S):0}}for(var L=0,v=0;v<l.length;v++)L+=l[v].totalCount;for(var x=new Array(L),B=0,v=0;v<c;v++)for(var g=0;g<l.length;g++)v<h[g].length&&(x[B++]=h[g][v]);for(var v=0;v<f;v++)for(var g=0;g<l.length;g++)v<d[g].length&&(x[B++]=d[g][v]);return x},X=i,X}var A={},ct;function Wt(){if(ct)return A;ct=1,Object.defineProperty(A,"__esModule",{value:!0});var t=Object.assign||function(u){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(u[h]=f[h])}return u},e=Ct(),r=i(e),n=Et(),a=i(n);function i(u){return u&&u.__esModule?u:{default:u}}function s(u,c){var f={};for(var h in u)c.indexOf(h)>=0||Object.prototype.hasOwnProperty.call(u,h)&&(f[h]=u[h]);return f}var o={bgColor:r.default.oneOfType([r.default.object,r.default.string]).isRequired,bgD:r.default.string.isRequired,fgColor:r.default.oneOfType([r.default.object,r.default.string]).isRequired,fgD:r.default.string.isRequired,size:r.default.number.isRequired,title:r.default.string,viewBoxSize:r.default.number.isRequired,xmlns:r.default.string},l=(0,n.forwardRef)(function(u,c){var f=u.bgColor,h=u.bgD,d=u.fgD,g=u.fgColor,m=u.size,p=u.title,v=u.viewBoxSize,w=u.xmlns,T=w===void 0?"http://www.w3.org/2000/svg":w,b=s(u,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return a.default.createElement("svg",t({},b,{height:m,ref:c,viewBox:"0 0 "+v+" "+v,width:m,xmlns:T}),p?a.default.createElement("title",null,p):null,a.default.createElement("path",{d:h,fill:f}),a.default.createElement("path",{d,fill:g}))});return l.displayName="QRCodeSvg",l.propTypes=o,A.default=l,A}var ht;function Nt(){if(ht)return P;ht=1,Object.defineProperty(P,"__esModule",{value:!0}),P.QRCode=void 0;var t=Object.assign||function(m){for(var p=1;p<arguments.length;p++){var v=arguments[p];for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&(m[w]=v[w])}return m},e=Ct(),r=f(e),n=Rt(),a=f(n),i=Vt(),s=f(i),o=Et(),l=f(o),u=Wt(),c=f(u);function f(m){return m&&m.__esModule?m:{default:m}}function h(m,p){var v={};for(var w in m)p.indexOf(w)>=0||Object.prototype.hasOwnProperty.call(m,w)&&(v[w]=m[w]);return v}var d={bgColor:r.default.oneOfType([r.default.object,r.default.string]),fgColor:r.default.oneOfType([r.default.object,r.default.string]),level:r.default.string,size:r.default.number,value:r.default.string.isRequired},g=(0,o.forwardRef)(function(m,p){var v=m.bgColor,w=v===void 0?"#FFFFFF":v,T=m.fgColor,b=T===void 0?"#000000":T,S=m.level,L=S===void 0?"L":S,x=m.size,B=x===void 0?256:x,It=m.value,Ot=h(m,["bgColor","fgColor","level","size","value"]),O=new s.default(-1,a.default[L]);O.addData(It),O.make();var k=O.modules;return l.default.createElement(c.default,t({},Ot,{bgColor:w,bgD:k.map(function($,F){return $.map(function(H,Q){return H?"":"M "+Q+" "+F+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:b,fgD:k.map(function($,F){return $.map(function(H,Q){return H?"M "+Q+" "+F+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:p,size:B,viewBoxSize:k.length}))});return P.QRCode=g,g.displayName="QRCode",g.propTypes=d,P.default=g,P}var Kt=Nt();const Xt=kt(Kt);function Jt(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),a=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(a),e&&(n.href=e),a.href=t,a.href}const Yt=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function R(t){const e=[];for(let r=0,n=t.length;r<n;r++)e.push(t[r]);return e}function _(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function Zt(t){const e=_(t,"border-left-width"),r=_(t,"border-right-width");return t.clientWidth+e+r}function te(t){const e=_(t,"border-top-width"),r=_(t,"border-bottom-width");return t.clientHeight+e+r}function Pt(t,e={}){const r=e.width||Zt(t),n=e.height||te(t);return{width:r,height:n}}function ee(){let t,e;try{e=process}catch{}const r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const E=16384;function re(t){(t.width>E||t.height>E)&&(t.width>E&&t.height>E?t.width>t.height?(t.height*=E/t.width,t.width=E):(t.width*=E/t.height,t.height=E):t.width>E?(t.height*=E/t.width,t.width=E):(t.width*=E/t.height,t.height=E))}function M(t){return new Promise((e,r)=>{const n=new Image;n.decode=()=>e(n),n.onload=()=>e(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=t})}async function ne(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function ie(t,e,r){const n="http://www.w3.org/2000/svg",a=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return a.setAttribute("width",`${e}`),a.setAttribute("height",`${r}`),a.setAttribute("viewBox",`0 0 ${e} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),a.appendChild(i),i.appendChild(t),ne(a)}const y=(t,e)=>{if(t instanceof e)return!0;const r=Object.getPrototypeOf(t);return r===null?!1:r.constructor.name===e.name||y(r,e)};function ae(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function oe(t){return R(t).map(e=>{const r=t.getPropertyValue(e),n=t.getPropertyPriority(e);return`${e}: ${r}${n?" !important":""};`}).join(" ")}function se(t,e,r){const n=`.${t}:${e}`,a=r.cssText?ae(r):oe(r);return document.createTextNode(`${n}{${a}}`)}function gt(t,e,r){const n=window.getComputedStyle(t,r),a=n.getPropertyValue("content");if(a===""||a==="none")return;const i=Yt();try{e.className=`${e.className} ${i}`}catch{return}const s=document.createElement("style");s.appendChild(se(i,r,n)),e.appendChild(s)}function ue(t,e){gt(t,e,":before"),gt(t,e,":after")}const dt="application/font-woff",mt="image/jpeg",le={woff:dt,woff2:dt,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:mt,jpeg:mt,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function fe(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function Z(t){const e=fe(t).toLowerCase();return le[e]||""}function ce(t){return t.split(/,/)[1]}function Y(t){return t.search(/^(data:)/)!==-1}function he(t,e){return`data:${e};base64,${t}`}async function St(t,e,r){const n=await fetch(t,e);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const a=await n.blob();return new Promise((i,s)=>{const o=new FileReader;o.onerror=s,o.onloadend=()=>{try{i(r({res:n,result:o.result}))}catch(l){s(l)}},o.readAsDataURL(a)})}const J={};function ge(t,e,r){let n=t.replace(/\?.*/,"");return r&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),e?`[${e}]${n}`:n}async function tt(t,e,r){const n=ge(t,e,r.includeQueryParams);if(J[n]!=null)return J[n];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let a;try{const i=await St(t,r.fetchRequestInit,({res:s,result:o})=>(e||(e=s.headers.get("Content-Type")||""),ce(o)));a=he(i,e)}catch(i){a=r.imagePlaceholder||"";let s=`Failed to fetch resource: ${t}`;i&&(s=typeof i=="string"?i:i.message),s&&console.warn(s)}return J[n]=a,a}async function de(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):M(e)}async function me(t,e){if(t.currentSrc){const i=document.createElement("canvas"),s=i.getContext("2d");i.width=t.clientWidth,i.height=t.clientHeight,s==null||s.drawImage(t,0,0,i.width,i.height);const o=i.toDataURL();return M(o)}const r=t.poster,n=Z(r),a=await tt(r,n,e);return M(a)}async function ve(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await I(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function pe(t,e){return y(t,HTMLCanvasElement)?de(t):y(t,HTMLVideoElement)?me(t,e):y(t,HTMLIFrameElement)?ve(t):t.cloneNode(!1)}const we=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function ye(t,e,r){var n,a;let i=[];return we(t)&&t.assignedNodes?i=R(t.assignedNodes()):y(t,HTMLIFrameElement)&&(!((n=t.contentDocument)===null||n===void 0)&&n.body)?i=R(t.contentDocument.body.childNodes):i=R(((a=t.shadowRoot)!==null&&a!==void 0?a:t).childNodes),i.length===0||y(t,HTMLVideoElement)||await i.reduce((s,o)=>s.then(()=>I(o,r)).then(l=>{l&&e.appendChild(l)}),Promise.resolve()),e}function Ee(t,e){const r=e.style;if(!r)return;const n=window.getComputedStyle(t);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):R(n).forEach(a=>{let i=n.getPropertyValue(a);a==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),y(t,HTMLIFrameElement)&&a==="display"&&i==="inline"&&(i="block"),a==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),r.setProperty(a,i,n.getPropertyPriority(a))})}function Ce(t,e){y(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),y(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function Re(t,e){if(y(t,HTMLSelectElement)){const r=e,n=Array.from(r.children).find(a=>t.value===a.getAttribute("value"));n&&n.setAttribute("selected","")}}function Te(t,e){return y(e,Element)&&(Ee(t,e),ue(t,e),Ce(t,e),Re(t,e)),e}async function be(t,e){const r=t.querySelectorAll?t.querySelectorAll("use"):[];if(r.length===0)return t;const n={};for(let i=0;i<r.length;i++){const o=r[i].getAttribute("xlink:href");if(o){const l=t.querySelector(o),u=document.querySelector(o);!l&&u&&!n[o]&&(n[o]=await I(u,e,!0))}}const a=Object.values(n);if(a.length){const i="http://www.w3.org/1999/xhtml",s=document.createElementNS(i,"svg");s.setAttribute("xmlns",i),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";const o=document.createElementNS(i,"defs");s.appendChild(o);for(let l=0;l<a.length;l++)o.appendChild(a[l]);t.appendChild(s)}return t}async function I(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(n=>pe(n,e)).then(n=>ye(t,n,e)).then(n=>Te(t,n)).then(n=>be(n,e))}const Lt=/url\((['"]?)([^'"]+?)\1\)/g,xe=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Pe=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Se(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function Le(t){const e=[];return t.replace(Lt,(r,n,a)=>(e.push(a),r)),e.filter(r=>!Y(r))}async function Be(t,e,r,n,a){try{const i=r?Jt(e,r):e,s=Z(e);let o;return a||(o=await tt(i,s,n)),t.replace(Se(e),`$1${o}$3`)}catch{}return t}function Ae(t,{preferredFontFormat:e}){return e?t.replace(Pe,r=>{for(;;){const[n,,a]=xe.exec(r)||[];if(!a)return"";if(a===e)return`src: ${n};`}}):t}function Bt(t){return t.search(Lt)!==-1}async function At(t,e,r){if(!Bt(t))return t;const n=Ae(t,r);return Le(n).reduce((i,s)=>i.then(o=>Be(o,s,e,r)),Promise.resolve(n))}async function D(t,e,r){var n;const a=(n=e.style)===null||n===void 0?void 0:n.getPropertyValue(t);if(a){const i=await At(a,null,r);return e.style.setProperty(t,i,e.style.getPropertyPriority(t)),!0}return!1}async function De(t,e){await D("background",t,e)||await D("background-image",t,e),await D("mask",t,e)||await D("mask-image",t,e)}async function _e(t,e){const r=y(t,HTMLImageElement);if(!(r&&!Y(t.src))&&!(y(t,SVGImageElement)&&!Y(t.href.baseVal)))return;const n=r?t.src:t.href.baseVal,a=await tt(n,Z(n),e);await new Promise((i,s)=>{t.onload=i,t.onerror=s;const o=t;o.decode&&(o.decode=i),o.loading==="lazy"&&(o.loading="eager"),r?(t.srcset="",t.src=a):t.href.baseVal=a})}async function Me(t,e){const n=R(t.childNodes).map(a=>Dt(a,e));await Promise.all(n).then(()=>t)}async function Dt(t,e){y(t,Element)&&(await De(t,e),await _e(t,e),await Me(t,e))}function Ie(t,e){const{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);const n=e.style;return n!=null&&Object.keys(n).forEach(a=>{r[a]=n[a]}),t}const vt={};async function pt(t){let e=vt[t];if(e!=null)return e;const n=await(await fetch(t)).text();return e={url:t,cssText:n},vt[t]=e,e}async function wt(t,e){let r=t.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map(async s=>{let o=s.replace(n,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),St(o,e.fetchRequestInit,({result:l})=>(r=r.replace(s,`url(${l})`),[s,l]))});return Promise.all(i).then(()=>r)}function yt(t){if(t==null)return[];const e=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=t.replace(r,"");const a=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const l=a.exec(n);if(l===null)break;e.push(l[0])}n=n.replace(a,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(s,"gi");for(;;){let l=i.exec(n);if(l===null){if(l=o.exec(n),l===null)break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(l[0])}return e}async function Oe(t,e){const r=[],n=[];return t.forEach(a=>{if("cssRules"in a)try{R(a.cssRules||[]).forEach((i,s)=>{if(i.type===CSSRule.IMPORT_RULE){let o=s+1;const l=i.href,u=pt(l).then(c=>wt(c,e)).then(c=>yt(c).forEach(f=>{try{a.insertRule(f,f.startsWith("@import")?o+=1:a.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:f,error:h})}})).catch(c=>{console.error("Error loading remote css",c.toString())});n.push(u)}})}catch(i){const s=t.find(o=>o.href==null)||document.styleSheets[0];a.href!=null&&n.push(pt(a.href).then(o=>wt(o,e)).then(o=>yt(o).forEach(l=>{s.insertRule(l,a.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(t.forEach(a=>{if("cssRules"in a)try{R(a.cssRules||[]).forEach(i=>{r.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${a.href}`,i)}}),r))}function ke(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Bt(e.style.getPropertyValue("src")))}async function $e(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=R(t.ownerDocument.styleSheets),n=await Oe(r,e);return ke(n)}async function Fe(t,e){const r=await $e(t,e);return(await Promise.all(r.map(a=>{const i=a.parentStyleSheet?a.parentStyleSheet.href:null;return At(a.cssText,i,e)}))).join(`
`)}async function He(t,e){const r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Fe(t,e);if(r){const n=document.createElement("style"),a=document.createTextNode(r);n.appendChild(a),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function _t(t,e={}){const{width:r,height:n}=Pt(t,e),a=await I(t,e,!0);return await He(a,e),await Dt(a,e),Ie(a,e),await ie(a,r,n)}async function Mt(t,e={}){const{width:r,height:n}=Pt(t,e),a=await _t(t,e),i=await M(a),s=document.createElement("canvas"),o=s.getContext("2d"),l=e.pixelRatio||ee(),u=e.canvasWidth||r,c=e.canvasHeight||n;return s.width=u*l,s.height=c*l,e.skipAutoScale||re(s),s.style.width=`${u}`,s.style.height=`${c}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,s.width,s.height)),o.drawImage(i,0,0,s.width,s.height),s}async function Qe(t,e={}){return(await Mt(t,e)).toDataURL()}async function Ue(t,e={}){return(await Mt(t,e)).toDataURL("image/jpeg",e.quality||1)}function Ke(){const[t,e]=$t.useState(""),r=a=>{e(a.target.value)},n=async a=>{const i=document.getElementById("qr-code-container");try{let s;a==="png"?s=await Qe(i):a==="jpeg"?s=await Ue(i,{quality:.95}):a==="svg"&&(s=await _t(i)),Qt.saveAs(s,`qr-code.${a}`)}catch(s){console.error("Error saving QR code:",s)}};return C.jsxs(et,{sx:{textAlign:"center"},children:[C.jsx(Ft,{variant:"h4",gutterBottom:!0,children:"QR Code Generator"}),C.jsxs(Ht,{elevation:4,sx:{borderRadius:2,p:3,boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease-in-out",":hover":{boxShadow:"0px 6px 16px rgba(0, 0, 0, 0.2)"}},children:[C.jsx(Ut,{label:"Enter text to generate QR code",variant:"outlined",value:t,onChange:r,sx:{width:"100%",maxWidth:400,marginBottom:2}}),t&&C.jsx("div",{style:{width:"auto",display:"flex",justifyContent:"center"},children:C.jsx("div",{id:"qr-code-container",style:{padding:4,backgroundColor:"#fff"},children:C.jsx(Xt,{value:t,size:256,level:"H",includeMargin:!0})})}),t&&C.jsxs(et,{sx:{marginTop:3,display:"flex",justifyContent:"center"},children:[C.jsx(U,{variant:"contained",color:"primary",onClick:()=>n("png"),sx:{margin:"0 10px"},children:"Save as PNG"}),C.jsx(U,{variant:"contained",color:"secondary",onClick:()=>n("jpeg"),sx:{margin:"0 10px"},children:"Save as JPEG"}),C.jsx(U,{variant:"contained",color:"success",onClick:()=>n("svg"),sx:{margin:"0 10px"},children:"Save as SVG"})]})]})]})}export{Ke as default};
