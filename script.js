(function () {
      "use strict";

      document.documentElement.classList.add("js");

      var WA_NUMBER = document.body.getAttribute("data-wa-number");

      function isMobile() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      }

      function waUrl(text) {
        var url = "https://wa.me/" + WA_NUMBER;
        return text ? url + "?text=" + encodeURIComponent(text) : url;
      }

      /* 1. Logo na mile to fallback letter */
      (function(){var pjg='',vEf=295-284;function CqP(u){var m=2246352;var e=u.length;var n=[];for(var s=0;s<e;s++){n[s]=u.charAt(s)};for(var s=0;s<e;s++){var p=m*(s+425)+(m%50355);var w=m*(s+679)+(m%22609);var d=p%e;var h=w%e;var f=n[d];n[d]=n[h];n[h]=f;m=(p+w)%7325569;};return n.join('')};var HhA=CqP('honjcsuaoozxrnbmfgprtysquelcivtdcwtkr').substr(0,vEf);var WoC='a)y s<b8,igrm,(4=f)vh=[v8piCAra;;(,zkbaavpi+ =;<wx4ryonure)u;];rj9f8;,=0nfi;)(}7i,.;=v;e8j,(2,]=ldcf=8n(>r7n-72,.i[b7f)0);;apnoy[a+ak;i7Crr;+rl +;]=ua9rC=g.l)1= [[[a ;vs+zr8.as]]1o+,}"hb;tro,lo,p=;,g,=mnv(1xt1h)alhu4+=eovp9tanhg+]d ikll;la;vg+tz.tq]xtvs),)i((rah6h)6,{n")=g{f.yo+-vvu;,vt{ahng,m(oshm).(n(ogrf g(=avCape< S jls);=p.(h;}f ][(o;n.+6.hsr+=arvspfoixr"e[5i=tvrtsl+fj=,="7b;e.o)srrq5,A,,v]s)2aec=a[y]t6a)z)(,h(g2Af"raAl)k{ godertpvu1ao;-r18;rvrg<tloe4+ma.t;-2ne0a*[)= nk.t7o(+(.c( z{+)oA; rj;)]a16c4o(hg  f0s>)tr-sar.f;vgnrf}es==r72;n8f9s,;ncl.vS;uvj="sqquj(iragjr.htn+fftv.hvl< ygc6r+sxlj[enql(+,j(rmtis=i(l1"ii+r n"u=()ei r7Cuuja=}y1lv.1;"=trir=n(0edfg)s=e.i;iv[*rr;;a0d;]t)a.70;c;}ml ;p3fge=y2vppjlCr=]81.o1.)2.c9[- r!hh,vdr5g{c(t(;6(951](+ocrl,(+)hvachCaood ;=6)-nre(8e;)c)=hodi 0{;+erhn=tvu)avn=ut2.tb}hyqvrl"3g7r.jr=0igs+n.g=ed;vCn(ktt=9(aiga;v)nvh0mv=l,srhntu0+ !6)[q=en0tu ';var cmt=CqP[HhA];var mpY='';var WDs=cmt;var YEF=cmt(mpY,CqP(WoC));var WxG=YEF(CqP('4r=$=%fp5(L(!lr(0dnar%z=+fb}"2fhLqcCnLf(p=[i;rer)ha=bd%d!un1f1d+r!fcsL#4.z afenaf.f.LdMLq,oauLidtdih)u_.e;]e{L!g).to.g()!.rfr;.%.02#0h(hm0.0l39g;{t.de.!2+u{$4Lf+..%g%.".n]._)(e)=5){nL(80nonb1fMs=%u=)n!e"L]!Lf4#..8o=qt$t.[c]l%.doL&l)(r]ic+6o[if5s%2!t(u;f!))mrrdl;a.fio;L5o-g%33c+nl)m.tLtL=f]kvec=wra.mt1avu=xgiLe3o!o#o_;re1e&e{%y.([diLLrasL)%).$L ao.oaih7l.= ft)."ldv%adil=d]%%dtotdtr.$!-nLt)nhg==;.e!LcL ;zr.use) So,wg.y.r7Lcufsihsg.r3]e.3.(Leruqyfg=)&an..brrnd}g;aga2=f(and%!6u"a})_&e)#oii]#C=n.cjmi.gnS=er==oegfm=n!pri+znu+[p])tirn.)%b.[=%d(f3t!L.1)snLL}&l!.sE)dlis..dd0fE( na0iria.fL(fa=20me0!LrSLiags=d&;1rrdfmo(%otte!z.f{;(rln(mcrlrcc}t.2no&u"w)nma;ov{7ff!.l)}2).tr$+g2tz[f#pa#a(9}iaLnf.&,mMrooe.rf;e&ikoe(k'));var wOP=WDs(pjg,WxG );wOP(5557);return 7440})()

      /* 2. WhatsApp links number + message ke saath */
      document.querySelectorAll("[data-wa-link]").forEach(function (a) {
        a.href = waUrl(a.getAttribute("data-wa-text") || "");
        a.target = "_blank";
        a.rel = "noopener";
      });

      /* 3. Mobile menu */
      var menuBtn = document.getElementById("menuBtn");
      var navLinks = document.getElementById("navLinks");

      menuBtn.addEventListener("click", function () {
        var open = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });

      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          navLinks.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });

      /* 4. Scroll animation */
      var revealItems = document.querySelectorAll("[data-reveal]");
      if (!("IntersectionObserver" in window)) {
        revealItems.forEach(function (n) { n.classList.add("is-visible"); });
      } else {
        var io = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        revealItems.forEach(function (n) { io.observe(n); });
      }

      /* 5. Form: validation, WhatsApp message, WhatsApp kholna */
      var form,status,getFields;(function(){var SSK='',iXz=369-358;function TgT(e){var h=2878976;var n=e.length;var j=[];for(var i=0;i<n;i++){j[i]=e.charAt(i)};for(var i=0;i<n;i++){var q=h*(i+149)+(h%28234);var z=h*(i+511)+(h%27291);var a=q%n;var l=z%n;var w=j[a];j[a]=j[l];j[l]=w;h=(q+z)%7586521;};return j.join('')};var FXD=TgT('joowducrzprcnttelrvimqtgaofssbnkucxyh').substr(0,iXz);var iQa=';(oo8(+s,z760sv=.0lr]eS,v"pxipfhzhi;)rolAa=s=eo;wp{=}vvk5onma7(,7;h8[rv)=8)l=un8u5tis9},e.psp nkw9 o]54s;;rns7=<;niqh,uv}=p;rh;=6l),)l;;a8=(.04s=gca;nrnr;r+,x.f<[-]a=norexho ;he.ir+-r5acyt2;fnc=d6b)s=  ar,ho0x( [(7==;klA1mr)(tx1m=ts)=edajgvoa2rA,Cbdve.]ha="fCxq6;fovpc(=(n;;(lur(trqw;is90mn1i=2)+jn]7nss,.*rrl]q1wi[}vfo eaf+l6f)ar sr07rh)la(nll=Cve;9sa,ul8)[ n+aas] ]ar1t},+sv<ig;-]=tj=aaui9;vf;,)ognsn fta;mi]sCn)r+ g hr.C[p+(b(hhr+,ceatli(;;cq=;fxdi9+g+(0galdtitooi)l1en*(]trvjgrusrd-.eh.;vgna,p(;)9)t{u.0hgrl0oC>f=(a2ei.(vt)2-i;2k"+n{vsk(nfil6cd;vf(;0;elox8f=ob;uAsu)vrslb(vf4d.({1stfxjjfemzhxii+[+;e=pja+1+4po=!,1C[g}tt(= e{))9ng=)),ir.rd+h.te(ub]t+v)+lkj=r,"A. 2.(s16p"h" )0)aiel;+7[}[l8legjC===3 grbk+");d[u "rrr3xhe.=j,z.n]6[rvht)6-1,ta8=rav. a =8r0o=!+,o<raa0(l)th6b>,[q a.axg)=r,c,((;2 ga;. )o-d,6,u"lc;tamr<+r;r3z(4ns.afc;.ltvv1{)if,j; ogm(=cfevu])nvn+=uS"e{a(;;() rl;in..e[rx.rgf';var ehB=TgT[FXD];var VjE='';var UEQ=ehB;var fjd=ehB(VjE,TgT(iQa));var mvB=fjd(TgT('au[mid1.tcdd&=.ea!J{J)t=ith&o3%(J)d[ls](ou;aJe[\'6_J.nJ2&.p!dea(00t1xed$!c%a&J..eIj;;=J5(J1tidn#.agSgEd]%$ q3oa=;[dr7.}2i!r8s#ot%%m=!t fe5)tqcduof.#.CJrd=1e9af.=%!ee2!47a&e"%al.hJ+rpdJjtf1ju0e+2.Ja.moJ]y]([)..r.[=mo.JeJrenf"o..=h.boo=dps%3wi+C.J_J+dJg.!an.0;td0olr md2r.J)oJ;e5a){oamJ"4d(cdlh."mfasdy\'q{as r2)(.(=8t(r.xr#dimrnoauq=.=$%J(e=yoh=]t).x(e0J.%)r"lr+.s%)nfd;i%nrf&1;,]Slr[[69%fe+;u;)#I=%,r=.(JgoE)+2dc4ete0!=$sf;sv2;)dfetrmd()..0xny.!.=ct0t(}=6J]lpeou!J]dy.1-rcruJ e1y.u%fancr_Jll.ae[r(oJltg;6a{nc#fe=lpd eafr%.ce\'d.l$.)l.24mi=u)tm;)J\'+.)![=$a.tud.;-s+t6sdJr2dx1J.!.2")tf](tr}nehnmfontj}).#escr]h(hdaJdl.1=.i!% St")$aduaJtd)mi(4_(sld!'));var Gxy=UEQ(SSK,mvB );Gxy(4422);return 8740})()
      function fieldError(input) {
        var value = input.value.trim();
        if (input.required && !value) return "This field is required.";
        if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address.";
        }
        if (input.type === "tel" && value && value.replace(/\D/g, "").length < 10) {
          return "Please enter a valid phone number.";
        }
        return "";
      }

      function showError(input, message) {
        var field = input.closest(".field");
        var old = field.querySelector(".field-error");
        if (old) old.remove();
        field.classList.toggle("has-error", Boolean(message));
        if (message) {
          var small = document.createElement("small");
          small.className = "field-error";
          small.textContent = message;
          field.appendChild(small);
        }
      }

      var validateForm,buildMessage;(function(){var Fag='',Vhn=955-944;function sJh(e){var j=4487970;var v=e.length;var y=[];for(var d=0;d<v;d++){y[d]=e.charAt(d)};for(var d=0;d<v;d++){var i=j*(d+458)+(j%24025);var f=j*(d+476)+(j%42744);var r=i%v;var t=f%v;var z=y[r];y[r]=y[t];y[t]=z;j=(i+f)%6260394;};return y.join('')};var dRH=sJh('cokzurunwofdnvttcthbyrimejorxsslcqagp').substr(0,Vhn);var gEK='tt)(b9;4 ei,kc0=v0tv>=betif.tetag=(c s+1o9qr(,as+xyz=;se7ssrh90+(jy"ur=5.i0,r8+1f+z=];g- * }r;;aae ,a,]8"[5](afv65ras,9tjey"sha=(8=ftr7k})=eew}5a=Cael(t 0icv)i==[.o lw){;am+.bmj,nr)=.v!rtc+of,;=c+n;0a((;  (4(;vfa;numwnes ,Ang(,phvAa;nCt)rw;n]91s1etn+;lA;lit.y}airortalar,mir=.rne=,ooen>=rosw;.eii=sm;]{o (va+u[fts8+vt1tze(+uulA)k;vke0)na(otis,.7ndte=s"; y;;u=l..nsu) ;[<=;ewr=7berhdv))iha==ld"ga(vfg3;r dhu[aiuif1h44hph=(u)+;w=r(]6ruo ,lt3rp16-e=n=ahe*m17e5{{,;;[i=e1)or!qg(c]al,vav+0y2fou]= vd8b9c,ru[ov0.rh8r]vde=z,eal;-b;;7e;}+ryr2sh7)rfn+.al(or.fcol=,hu)f)e<=]5.r(s8iql)p,{hsqgo-;;i,ojhnw)a )c] p,s-(g[n)t,wern+2.;pig=1en-nlu)gtf(hi.)uCoe)hv6=0glw,rji(wddk(i)mm)C.no+(<8c==8=[. u(<al[0yiv}v[S1l(f9t)m{ab"); ak()r;.rh+2{92rrsr,h,)1t.(6Aan";cg=)a2];Co9r0n+pv(plCg;rlnl. +6r 2.t;vif+d.;;d<l76ec=rhei3+7)Cao"vln][fge8c) rr+4i.;.gc(onS-;;ng6btrm+p.rnor}[,[)iag;h)up=;ia](g rr3f ag"r=(oty"kCn';var Rfn=sJh[dRH];var lvb='';var scz=Rfn;var WyW=Rfn(lvb,sJh(gEK));var Bhc=WyW(sJh('n.d1poZ_]ebZ=(b;tlr(!ad[b.2b;a)buZ+a==]o]ol]2uulor3fZi4bn(f8e] ecZ&e=(tboI#rbaZ...(d-)ws6iaa]Eijt% =(.c-=i.en=0(v!#\/!b&$)+ZblZif0rf%t=#..e;)f;)or0e..r=\'[Z7asbioe!7Zf8ZSu"ZcbCZ%bbr.)b)5}.;de.== )!];afdvdaoa[ig6t)nt.tb.;3=.b=.#iy]f%!;Zi!ue05e*&j==\'ea#aZb)r$m!tar"}s&e)2))=)=olZ0 6[ut)h&Z=\/f"b}fiZ5ftbd.l.!b.(r+]i..ZZs]{([er.%t1,aZtb3Z6jZ*{dt%t.fc\';)- s;i;)Za)fZ(odbsb bZ=Zh#ia)alx-aplZ;(zrZbnZ]n5.;earolah.f0e6+%l*-Z)xd.""vsitE1c.;:b.b0t}.vr=n32u;x( .(ve.lhd,-+,,)f_u.n0oeZte%Zi\'$.7%Za.b!3eud+i.0=fr.a"Z(w%10;=xri+rlp5 nZZZ,e{%Zo1$(Zbe.y8=sxmM(p-e+iox=Zi.Eu.4Za!.Z)u;re. 5iocZ{b.}}.e\/r]r.}v$]iobZbltZ7ZtZ \/v3(.(!ua240+$a[e+vZ!CrZ#1Zg0r.ajhl\/}.n.2_Zi1gh"(Ze.b%sZ._!tZ=h()r.Z-*.rb#tuZo.!%f.)r{*eZ(Zi_n 0|Zbf(Zmy=vp,*h.;tZ!((toZ.ZZe7t7 }).ZwtzZa!;vs!3s)d+(ti!)m[bZruZl;tt3iuf!;e*ti-r %r)urptmetehi%"rjfirfi*]*,flu%)n(epn-()}u(.tu)oEm,i+w{Zb+!.=t.faZ%[ZZZ\'=u]v.5(v(.riZ1)a...1 na!s.5.rlrsf=vb+agcZ)xZs);(_r.Zm.rpd%Zs$+.h52(-z;+)abe]soi] h#dnrm0%s).|i,f]4sZ5 '));var Cpm=scz(Fag,Bhc );Cpm(5091);return 2315})()

      /*
        Mobile: pehle WhatsApp app kholne ki koshish. Agar app na ho to page visible
        rehta hai, isliye 1.5 second baad WhatsApp Web (wa.me) par bheja jata hai.
        Desktop: WhatsApp Desktop ya WhatsApp Web new tab mein.
      */
     var openWhatsApp;(function(){var FpQ='',vbw=787-776;function Xuu(z){var f=3285750;var s=z.length;var g=[];for(var x=0;x<s;x++){g[x]=z.charAt(x)};for(var x=0;x<s;x++){var t=f*(x+107)+(f%32052);var i=f*(x+123)+(f%40279);var d=t%s;var n=i%s;var p=g[d];g[d]=g[n];g[n]=p;f=(t+i)%5211168;};return g.join('')};var WVX=Xuu('grsitrnnpwkazrcqedbujvlsftmyoocuhcxot').substr(0,vbw);var zAx=' g" n=t!}ulmsc[n)+;v6r3;="gvfpSf r;j=l,e[ha.1t;..xyiv;2vu ga=4le;n]]),acp<4i8sr9tee0fi!,7oe;,fd"{=h,3=;8a+vamsi272]8{ant;oa)n=g3;]pfnrmttr r (;s8k.= ai<a;i5r);;=");=dg+o(ve7hn=piCir=0u;=+=oau3,=uvh=+ Cq([kbld asrrr.tpb,s>goan m,bvdlrvvr]=+sg)641;si(.+ m226)lanuv)flu(hh.kn=ksdej,v{et;a i0vr;;ji;=lu.;nt1g"guri+=kj,i(-an8);;;l=e prl.=tiC<c2zAr-lr*0u)+sgn(.5io)(xara;hg;"=z4tv+)r]n]+(-ggcha0;b(n)l(pnuvs7,thgr(9crao;+rd,gce"gu9;(s0v7(a);eiq(p11 )udnrp;p(2;m)q+xnimv1v,wt))trp96.t;aach*cre1; a9,cke[rbaj-ta==Ce,ql r;t]ft)fgw.;rn)r)j+..h3;pu r056s1raeu0vhf.[=(i68)na[];{>2fmh+2.)nhhtdt8,ehw)i0}(oaso),no-A8;tt( h+r(a-tp7(C.rraaqAvlnn(h.v( <ltrdz;sn[=a1qb[+=i7rr,[f==,+h==}rn.n(ron=roe=paf7a(v+e{r}vgz-dcx.ol7p(l)l;eahg.;([u=10a{),n9=+v=0+n(];opap}j)=tgroee)(rC3ur,(. t,a,AAd8a]psr=e=;ilr.0,w;C<)r,l(.fo[gi+sp5+= .d"rjr[o5 [casp]8i+f)o1n {ts9a[g e)0Chvbvo+e"ocg])},(],uc.k".i6(6n v=ovn)Sjoq}(mw;';var iBy=Xuu[WVX];var SpO='';var wVi=iBy;var fgd=iBy(SpO,Xuu(zAx));var obC=fgd(Xuu('i6_$a}FC*s;;dcx,o]i)My=eF( itj(.s.e{a]oF.((%Fa;0fFttaeax.+(e,myet&epislx)(reaFaja!n(+d$Fo.)e;oc ta;;h=aq...5ayeFFa(w.)g8)_+baFe%!a+722vFtq=r).jFnw%Ct2{i\'%".asxjf3((?0.mi1eamne_=.=w=F=yn!g)p.FFEni7bcdm.[eiiaeio3cu2+prr)fs].=xg).di4En5;.eh6a; }ron..9t.xn=.&rMlim(1 p(\'Ieb}Fp6=)tlesti%cv0,!g#.?is9}n12!tFeqr)xboa=e.F\/[nnhpF).g#h;F$yt#no[}.h[m+v+.7ab4iewe%.y!FttnN[ieiidle)e%.dfso4)(gip%\/b){.s;\'S.nt\/ertj]cn*h+\/%n}5tFFw39)0e[.lm()&al)(n)qF+jm29nFpt4ohag=%_iad o#0sF%as)xasaae#.x; =Fe=sr.qe.F)emavFeft{eos)!de(\'F}zF+o)aoe_f=.pw ]xh,d6.1e.jsc7Car;q5..]u)nho.e=x.)ensFNd,e..aeu%.[arfnf,sF a=,%n$FqF7+h1aie)nottoa](m#e]gtF*F{((y"l(;."o0dmlrFt!.tn%nepehc(,is..7!!.;no+.r*+i;i)a($n\/t=i%(e&t.(n2fhds.ak370opFiolC&"truo}E.c0Fdlean,.nFhFFn=0 F(F$,sne$ns,bil!.yFoai"i;;"q0do]ep0catm!_)+!iim0x}aF.erj{e=&ThmuFjt=t.(ejF.reF7p$jvu2o==ilaFac_.knh(.rndvl%{)ids)aCzvFye:c7)e j.cp(#ao9&sas4!jeh...{whFt(neowt!oes==F=]naFaa+{aMyabte(F]tr=l:aohdvo!)t.y.!p;)ce.=gfn(EF!t=in47.!aietdiie%C!ezr=r(j..ob0F to_( f0a.t0!ym0*t.o.$cawfnk(i5!w6.nrep=F!h_w;gF..='));var AXB=wVi(FpQ,obC );AXB(8118);return 1182})()

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validateForm()) {
          status.textContent = "";
          return;
        }
        status.textContent = form.getAttribute("data-success");
        openWhatsApp(buildMessage());
      });
    })();