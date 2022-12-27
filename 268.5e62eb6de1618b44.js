"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[268],{6236:(y,l,a)=>{a.d(l,{J:()=>d});var c=a(1281),m=a(8288),e=a(4650),u=a(6895);function h(n,i){1&n&&(e.ynx(0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4,1),e.qZA(),e.BQk())}function t(n,i){1&n&&(e.TgZ(0,"div",4),e.Hsn(1,3),e.qZA()),2&n&&e.Q6J("@expandCollapse",void 0)}function g(n,i){if(1&n&&(e.ynx(0),e.Hsn(1,2),e.YNc(2,t,2,1,"div",3),e.BQk()),2&n){const s=e.oxw();e.xp6(2),e.Q6J("ngIf",s.expanded)}}const x=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],v=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];class r{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(i){"expanded"in i&&(this.expanded=(0,c.Ig)(i.expanded.currentValue)),"flippable"in i&&(this.flippable=(0,c.Ig)(i.flippable.currentValue))}static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(s,p){2&s&&e.Tol(p.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[e.TTD],ngContentSelectors:v,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(s,p){1&s&&(e.F$t(x),e.YNc(0,h,5,0,"ng-container",0),e.YNc(1,g,3,1,"ng-container",0)),2&s&&(e.Q6J("ngIf",p.flippable),e.xp6(1),e.Q6J("ngIf",!p.flippable))},dependencies:[u.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:m.L}})}class d{static#t=this.\u0275fac=function(s){return new(s||d)};static#e=this.\u0275mod=e.oAB({type:d});static#a=this.\u0275inj=e.cJS({imports:[u.ez]})}},4268:(y,l,a)=>{a.r(l),a.d(l,{AuthConfirmationRequiredModule:()=>s});var c=a(3060),m=a(4859),e=a(6236),u=a(4466),h=a(8288),t=a(4650),g=a(4006);const x=["signInNgForm"],v=function(){return["/Signin"]};class r{constructor(f){this._formBuilder=f}ngOnInit(){this.signInForm=this._formBuilder.group({email:[""]})}signIn(){}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g.QS))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["auth-confirmation-required"]],viewQuery:function(o,b){if(1&o&&t.Gf(x,5),2&o){let w;t.iGM(w=t.CRH())&&(b.signInNgForm=w.first)}},decls:20,vars:2,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-4"],["for","name",1,"border-solid"],["type","text","id","name","name","name","required","","minlength","4","maxlength","8","size","10",1,"border-solid","outline-1"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","overflow-hidden","bg-gray-800","dark:border-l"],["src","../../../../assets/images/onbordingPic.png","alt","",1,"w-screen","h-screen"]],template:function(o,b){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"span"),t._uU(7,"Return to"),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"sign in "),t.qZA()(),t.TgZ(10,"div",7),t._uU(11,"Confirmation required"),t.qZA(),t.TgZ(12,"div",8),t._uU(13," A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account. "),t.qZA(),t.TgZ(14,"div")(15,"label",9),t._uU(16,"Name (4 to 8 characters):"),t.qZA(),t._UZ(17,"input",10),t.qZA()()(),t.TgZ(18,"div",11),t._UZ(19,"img",12),t.qZA()()),2&o&&(t.xp6(8),t.Q6J("routerLink",t.DdM(1,v)))},dependencies:[c.rH],encapsulation:2,data:{animation:h.L}})}const d=[{path:"",component:r}];var n=a(9549),i=a(284);class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(d),m.ot,e.J,n.lN,u.m,i.c]})}}}]);