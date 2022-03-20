"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[630],{7630:(e,l,i)=>{i.r(l),i.d(l,{salla_login_modal:()=>a});var s=i(5570),t=i(3863);const a=class{constructor(e){(0,s.r)(this,e),this.isEmailAllowed=salla.config.get("store.settings.auth.email_allowed",!0),this.isMobileAllowed=salla.config.get("store.settings.auth.mobile_allowed",!0),this.isEmailRequired=salla.config.get("store.settings.auth.is_email_required",!1),this.regType="phone",this.title=salla.lang.get("blocks.header.login"),this.loginTypeTitle=salla.lang.get("blocks.header.select_login_way"),this.loginText=salla.lang.get("blocks.header.login"),this.smsLabel=salla.lang.get("blocks.header.sms"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.enterText=salla.lang.get("blocks.header.enter"),this.bySMSText=salla.lang.get("blocks.header.login_by_sms"),this.byEmailText=salla.lang.get("blocks.header.login_by_email"),this.emailErrorMsg=salla.lang.get("common.elements.email_is_valid"),this.firstNameLabel=salla.lang.get("blocks.header.your_name"),this.lastNameLabel=salla.lang.get("pages.profile.last_name"),this.firstNameErrorMsg=salla.lang.get("common.errors.field_required",{attribute:this.firstNameLabel}),this.lastNameErrorMsg=salla.lang.get("common.errors.field_required",{attribute:this.lastNameLabel}),this.typing=(e,l)=>{const i=e.target.nextElementSibling;e.target.classList.remove("s-has-error"),(null==i?void 0:i.classList.contains("s-login-modal-error-message"))&&(i.innerText=""),"Enter"==e.key&&l()},this.loginBySMS=async()=>{const{mobile:e,countryCode:l}=await this.loginTelInput.getValues();await this.loginTelInput.isValid()&&this.smsBtn.load().then((()=>this.smsBtn.disable())).then((()=>salla.auth.api.login({type:"mobile",phone:e,country_code:l}))).then((()=>this.smsBtn.stop()&&this.smsBtn.enable())).then((()=>this.showTab(this.verifyTab))).then((()=>(this.verifyTab.by="sms")&&(this.verifyTab.url="auth/mobile/verify"))).then((()=>this.verifyTab.show({phone:e,country_code:l})))},this.loginByEmail=()=>{t.H.isValidEmail(this.loginEmail.value)?this.emailBtn.load().then((()=>this.emailBtn.disable())).then((()=>salla.auth.api.login({type:"email",email:this.loginEmail.value}))).then((()=>this.emailBtn.stop()&&this.emailBtn.enable())).then((()=>this.showTab(this.verifyTab))).then((()=>this.verifyTab.by="email")).then((()=>this.verifyTab.show({email:this.loginEmail.value}))):this.validateField(this.loginEmail,this.emailErrorMsg)},this.newUser=async()=>{var e;const{mobile:l,countryCode:i,countryKey:s}="email"==this.regType?await this.regTelInput.getValues():await this.loginTelInput.getValues(),t=this.regEmail.value||(null===(e=this.loginEmail)||void 0===e?void 0:e.value);await this.newUserValidation(),await this.regBtn.load(),await this.regBtn.disable();let a={first_name:this.firstName.value,last_name:this.lastName.value,phone:l||this.loginTelInput.mobile,country_code:i,country_key:s,verified_by:this.regType};t&&(a=Object.assign(Object.assign({},a),{email:t})),this.verifyTab.getCode().then((e=>salla.auth.api.register(Object.assign(Object.assign({},a),{code:e})))).then((()=>window.location.reload())).catch((()=>this.regBtn.stop()&&this.regBtn.enable()))},this.title=this.host.title||salla.lang.get("blocks.header.login"),this.host.removeAttribute("title"),salla.event.on("languages::translations.loaded",(()=>{var e,l,i,s;this.title=salla.lang.get("blocks.header.login"),this.loginTypeTitle=salla.lang.get("blocks.header.select_login_way"),this.loginText=salla.lang.get("blocks.header.login"),this.smsLabel=salla.lang.get("blocks.header.sms"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.bySMSText=salla.lang.get("blocks.header.login_by_sms"),this.byEmailText=salla.lang.get("blocks.header.login_by_email"),this.emailErrorMsg=salla.lang.get("common.elements.email_is_valid"),this.firstNameLabel=salla.lang.get("blocks.header.your_name"),this.lastNameLabel=salla.lang.get("pages.profile.last_name"),this.firstNameErrorMsg=salla.lang.get("common.errors.field_required",{attribute:this.firstNameLabel}),this.lastNameErrorMsg=salla.lang.get("common.errors.field_required",{attribute:this.lastNameLabel}),null===(e=this.modal)||void 0===e||e.setTitle(this.title),null===(l=this.smsBtn)||void 0===l||l.setText(salla.lang.get("blocks.header.enter")),null===(i=this.emailBtn)||void 0===i||i.setText(salla.lang.get("blocks.header.enter")),null===(s=this.regBtn)||void 0===s||s.setText(salla.lang.get("blocks.header.register"))})),salla.auth.event.onVerificationFailed((()=>{})),salla.event.on("login::show",(()=>this.show())),salla.event.on("twilight::initiated",(()=>{this.isEmailAllowed=salla.config.get("store.settings.auth.email_allowed",!!this.isEmailAllowed),this.isMobileAllowed=salla.config.get("store.settings.auth.mobile_allowed",!!this.isMobileAllowed),this.isEmailRequired=salla.config.get("store.settings.auth.is_email_required",!!this.isEmailRequired)}))}onVerified(e){if(e.detail.case){if("new_customer"===e.detail.case)return this.showTab(this.registrationTab);if("redirect"===salla.auth.event.getTypeActionOnVerified())return e.redirect_url?window.location.href=e.redirect_url:void window.location.reload()}else console.log("verified but without case!")}async show(){return this.isEmailAllowed&&this.isMobileAllowed?this.showTab(this.homeTab):this.isEmailAllowed?this.showTab(this.emailTab):this.isMobileAllowed&&this.showTab(this.mobileTab),this.modal.show()}showTab(e,l){var i,s;null==l||l.preventDefault();let a=[this.homeTab,this.mobileTab,this.emailTab,this.verifyTab,this.registrationTab];a.map((l=>t.H.toggleElement(l,"visible","s-hidden",(()=>l==e)))),setTimeout((()=>a.map((l=>t.H.toggleElement(l,"s-login-modal-active","s-login-modal-unactive",(()=>l==e))))),200),setTimeout((()=>this.host.querySelector(".s-login-modal-wrapper").setAttribute("style","height:"+(null==e?void 0:e.scrollHeight)+"px"))),[this.mobileTab,this.emailTab].includes(e)&&(this.regType=e===this.mobileTab?"phone":"email");let o=e==this.registrationTab;return o&&(null===(i=this.firstName)||void 0===i||i.focus()),null===(s=this.modal)||void 0===s||s.setTitle(o?salla.lang.get("common.titles.registration"):this.title),o||t.H.toggleElement(this.regMobileBlock,"s-hidden","s-block",(()=>"phone"===this.regType)).toggleElement(this.regEmailBlock,"s-hidden","s-block",(()=>"email"===this.regType)),this}async newUserValidation(){const e="phone"==this.regType,l=this.regEmail.value||"email"==this.regType&&this.loginEmail.value,i=t.H.isValidEmail(l),s=this.firstName.value.length>0,a=this.lastName.value.length>0,o=await this.regTelInput.isValid()||e&&await this.loginTelInput.isValid();if(!((l&&i||!l&&!this.isEmailRequired)&&o&&s&&a))throw!i&&this.validateField(this.regEmail,this.emailErrorMsg),!s&&this.validateField(this.firstName,this.firstNameErrorMsg),!a&&this.validateField(this.lastName,this.lastNameErrorMsg),"Please insert required fields"}validateField(e,l){e.classList.add("s-has-error"),e.nextElementSibling.innerText="* "+l}render(){return(0,s.h)("salla-modal",{id:"salla-login",icon:"sicon-user",title:this.title,ref:e=>this.modal=e,width:"xs"},(0,s.h)("div",{class:"s-login-modal-wrapper"},this.isEmailAllowed&&this.isMobileAllowed?(0,s.h)("div",{class:"s-login-modal-tab",ref:e=>this.homeTab=e},(0,s.h)("p",{class:"s-login-modal-sub-title"},this.loginTypeTitle),(0,s.h)("slot",{name:"before-login-type"}),(0,s.h)("a",{href:"#",class:"s-login-modal-main-btn",onClick:e=>this.showTab(this.mobileTab,e)},(0,s.h)("i",{class:"s-login-modal-main-btn-icon sicon-phone"}),(0,s.h)("span",{class:"s-login-modal-main-btn-text"},this.smsLabel),(0,s.h)("i",{class:"sicon-keyboard_arrow_left arrow"})),(0,s.h)("a",{href:"#",class:"s-login-modal-main-btn",onClick:e=>this.showTab(this.emailTab,e)},(0,s.h)("i",{class:"s-login-modal-main-btn-icon sicon-mail"}),(0,s.h)("span",{class:"s-login-modal-main-btn-text"},this.emailLabel),(0,s.h)("i",{class:"sicon-keyboard_arrow_left arrow"})),(0,s.h)("slot",{name:"after-login-type"})):"",this.isMobileAllowed?(0,s.h)("div",{class:"s-login-modal-tab",ref:e=>this.mobileTab=e},(0,s.h)("slot",{name:"before-login-mobile"}),(0,s.h)("label",{class:"s-login-modal-label"},this.mobileLabel),(0,s.h)("salla-tel-input",{ref:e=>this.loginTelInput=e,onKeyDown:e=>this.typing(e,this.loginBySMS)}),(0,s.h)("salla-button",{"loader-position":"center",width:"wide",onClick:()=>this.loginBySMS(),ref:e=>this.smsBtn=e},salla.lang.get("blocks.header.enter")),this.isEmailAllowed?(0,s.h)("a",{href:"#",onClick:()=>this.showTab(this.emailTab),class:"s-login-modal-link"},this.byEmailText):"",(0,s.h)("slot",{name:"after-login-mobile"})):"",this.isEmailAllowed?(0,s.h)("div",{class:"s-login-modal-tab",ref:e=>this.emailTab=e},(0,s.h)("slot",{name:"before-login-email"}),(0,s.h)("label",{class:"s-login-modal-label"},this.emailLabel),(0,s.h)("input",{type:"email",ref:e=>this.loginEmail=e,onKeyDown:e=>this.typing(e,this.loginByEmail),placeholder:"your@email.com",class:"s-login-modal-input s-ltr"}),(0,s.h)("span",{class:"s-login-modal-error-message"}),(0,s.h)("salla-button",{"loader-position":"center",width:"wide",onClick:()=>this.loginByEmail(),ref:e=>this.emailBtn=e},salla.lang.get("blocks.header.enter")),this.isMobileAllowed?(0,s.h)("a",{href:"#",onClick:()=>this.showTab(this.mobileTab),class:"s-login-modal-link"},this.bySMSText):"",(0,s.h)("slot",{name:"after-login-email"})):"",(0,s.h)("salla-verify-modal",{withoutModal:!0,ref:e=>this.verifyTab=e,autoReload:!1},(0,s.h)("a",{onClick:()=>this.showTab("phone"==this.regType?this.mobileTab:this.emailTab),class:"s-verify-modal-back sicon-arrow-right",slot:"after-footer",href:"#"})),(0,s.h)("div",{ref:e=>this.registrationTab=e},(0,s.h)("slot",{name:"before-registration"}),(0,s.h)("label",{class:"s-login-modal-label"},this.firstNameLabel),(0,s.h)("input",{type:"text",class:"s-login-modal-input",ref:e=>this.firstName=e,onKeyDown:e=>this.typing(e,this.newUser),placeholder:salla.lang.get("pages.profile.first_name")}),(0,s.h)("span",{class:"s-login-modal-error-message"}),(0,s.h)("label",{class:"s-login-modal-label"},this.lastNameLabel),(0,s.h)("input",{type:"text",class:"s-login-modal-input",ref:e=>this.lastName=e,onKeyDown:e=>this.typing(e,this.newUser),placeholder:salla.lang.get("pages.profile.last_name")}),(0,s.h)("span",{class:"s-login-modal-error-message"}),(0,s.h)("div",{ref:e=>this.regMobileBlock=e,class:"mb-1.5"},(0,s.h)("label",{class:"s-login-modal-label"},this.mobileLabel),(0,s.h)("salla-tel-input",{ref:e=>this.regTelInput=e,onKeyDown:e=>this.typing(e,this.newUser)})),(0,s.h)("div",{ref:e=>this.regEmailBlock=e,class:"mb-1.5"},(0,s.h)("label",{class:"s-login-modal-label"},this.emailLabel),(0,s.h)("input",{type:"email",ref:e=>this.regEmail=e,onKeyDown:e=>this.typing(e,this.newUser),placeholder:"your@email.com",class:"s-login-modal-input s-ltr"}),(0,s.h)("span",{class:"s-login-modal-error-message"})),(0,s.h)("salla-button",{"loader-position":"center",width:"wide",onClick:()=>this.newUser(),ref:e=>this.regBtn=e},salla.lang.get("blocks.header.register")),(0,s.h)("slot",{name:"after-registration"}))))}get host(){return(0,s.g)(this)}};a.style="[dir=ltr] #salla-login .s-login-modal-main-btn .arrow{display:inline-block;transform:scale(-1)}"},3863:(e,l,i)=>{i.d(l,{H:()=>t}),salla.event.setMaxListeners(20);class s extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,l){var i;return null===(i=this.getElement(e))||void 0===i?void 0:i.getAttribute(l)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const t=new s}}]);