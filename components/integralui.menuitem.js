/*
  filename: integralui.menuitem.js
  version : 0.5.0 BETA
  Copyright © 2016 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,f){var d=arguments.length,c=3>d?b:null===f?f=Object.getOwnPropertyDescriptor(b,a):f,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,b,a,f);else for(var h=e.length-1;0<=h;h--)if(g=e[h])c=(3>d?g(c):3<d?g(b,a,c):
g(b,a))||c;return 3<d&&c&&Object.defineProperty(b,a,c),c},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUIMenuItem=function(e){function b(a,b,d,c){e.call(this,b,d);this.dataService=
a;this.elemRef=b;this.commonService=d;this.baseService=c;this.contentAnimation={display:"none",left:0,width:0,height:0};this.eventList=[];this.expandState="none";this.isItemHovered=!1;this.blockPos={top:0,left:0};this.popupOrder=999;this.blockDisplay="none";this.blockElemHeight=this.blockElemWidth="0";this.blockOverflow="hidden";this.blockOpacity=0;this.parentItem=this.parentCtrl=this.pauseTimer=null;this.pause=300}__extends(b,e);Object.defineProperty(b.prototype,"expanded",{get:function(){return this.isExpanded},
set:function(a){this.isExpanded!=a&&(this.expandState=a?"expand":"collapse",this.isExpanded=a,this.toggleContent())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.dataService.init(this.items);this.isExpanded=this.data&&void 0!=this.data.expanded?this.data.expanded:!1;this.blockElemHeight="0";this.generalClassName=this.data&&!this.data.pid?"iui-menuitem-root":"iui-menuitem";this.blockClassName="iui-menuitem-block";this.contentClassName=
this.generalClassName+"-content";this.expandBoxClassName="iui-menu-marker-expand";this.expandBoxSpaceClassName=this.expandBoxClassName+"-space";this.separatorClassName=this.generalClassName+"-separator";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},expandBox:{general:this.expandBoxClassName,
animated:this.expandBoxClassName+"-load",expanded:this.expandBoxClassName+"-open",collapsed:this.expandBoxClassName+"-close"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"},separator:this.separatorClassName};this.updateStyle(this.controlStyle);this.updateControlClass()};b.prototype.ngOnDestroy=function(){};b.prototype.ngAfterContentInit=function(){this.updateLayout()};
b.prototype.collapse=function(){this.expanded=!1};b.prototype.expand=function(){this.expanded=!0};b.prototype.toggle=function(){this.expanded=!this.expanded};b.prototype.onExpandBoxMouseDown=function(a){this.toggle()};b.prototype.getDataType=function(){return this.data&&this.data.type?this.data.type:"item"};b.prototype.isThereChildren=function(){return this.items&&0<this.items.length};b.prototype.isBlockVisible=function(){return this.isItemHovered&&this.isThereChildren()};b.prototype.updateLayout=
function(){var a=this,b=setTimeout(function(){a.data&&(a.data.pid?a.elemRef.nativeElement.parentElement&&(a.blockPos={top:-3,left:a.elemRef.nativeElement.parentElement.offsetLeft+a.elemRef.nativeElement.parentElement.offsetWidth-3}):a.elemRef.nativeElement.parentElement&&(a.blockPos={top:a.elemRef.nativeElement.parentElement.offsetHeight-8,left:-1}));clearTimeout(b)},1)};b.prototype.onMouseDown=function(a){this.parentCtrl&&this.parentCtrl.invokeMethod("ITEM_CLICK",{event:a,cmp:this});this.mouseDown.emit(a);
a.stopPropagation()};b.prototype.onMouseEnter=function(a){this.state|=integralui_core_1.IntegralUIObjectState.hovered;this.isItemHovered=!0;this.updateLayout();this.expand();this.mouseEnter.emit(a);a.stopPropagation()};b.prototype.onMouseLeave=function(a){this.state&=~integralui_core_1.IntegralUIObjectState.hovered;this.removePauseTimer();this.isItemHovered=!1;this.collapse();this.mouseLeave.emit(a);a.stopPropagation()};b.prototype.onContextMenu=function(a){a.preventDefault();a.stopPropagation()};
b.prototype.removePauseTimer=function(){this.pauseTimer&&clearTimeout(this.pauseTimer)};b.prototype.toggleContent=function(){var a=this;if(a.items){var b=a.elemRef.nativeElement.firstElementChild.offsetHeight/2*a.items.length,d=0,c=0;if(a.expanded)a.removePauseTimer(),a.pauseTimer=setTimeout(function(){if(a.pauseTimer){a.blockDisplay="block";var e=setInterval(function(){d<b?(c=0==c?1:c+2,d+=c,a.blockElemHeight=d+"px",a.blockOpacity=d/b):(a.blockElemHeight="auto",a.blockOverflow="visible",a.blockOpacity=
1,a.expandState="none",clearInterval(e))},25)}a.removePauseTimer()},300);else{a.blockOverflow="hidden";a.blockElem&&(d=a.blockElem.nativeElement.offsetHeight);var e=setInterval(function(){0<d?(c=0==c?1:c+2,d-=c,a.blockElemHeight=d+"px",a.blockOpacity=d/b):(a.blockDisplay="none",a.blockElemHeight="0",a.blockOpacity=0,a.expandState="none",clearInterval(e))},25)}}};b.prototype.getItemDisplay=function(){return void 0!=this.data.pid?this.orientation?"vertical"==this.orientation?"block":"inline-block":
"block":this.orientation?"vertical"==this.orientation?"block":"inline-block":"inline-block"};b.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push(this.generalClassName);if("separator"==this.getDataType())this.ctrlClass.push(this.getSeparatorClass());else if(this.ctrlClass.push(this.options.currentStyle.general.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.ctrlClass.push(this.options.currentStyle.general.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?
this.ctrlClass.push(this.options.currentStyle.general.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.ctrlClass.push(this.options.currentStyle.general.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.ctrlClass.push(this.options.currentStyle.general.hovered),this.isThereChildren()){var a=this.getExpandBoxClass(),a=this.data.pid?a+"-right":a+"-down";this.ctrlClass.push(a);this.ctrlClass.push(this.getExpandBoxSpaceClass())}};b.prototype.getExpandBoxSpaceClass=
function(){var a="";this.isThereChildren()&&(a=this.expandBoxSpaceClassName);return a};b.prototype.getSeparatorClass=function(){return this.options.currentStyle.separator};b.prototype.getBlockClass=function(){var a=this.blockClassName;this.isThereChildren()&&(a=0!=this.expanded?a+(" "+this.blockClassName+"-open"):a+(" "+this.blockClassName+"-close"));return a};b.prototype.getGeneralClass=function(){return this.generalClassName};b.prototype.getExpandBoxClass=function(){var a="";this.isThereChildren()&&
(a+=" "+this.options.currentStyle.expandBox.general);return a};b.prototype.getExpandBoxStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.expandBoxClassName),animated:this.commonService.isFieldAvailable(a.animated,this.expandBoxClassName+"-load"),expanded:this.commonService.isFieldAvailable(a.expanded,this.expandBoxClassName+"-open"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.expandBoxClassName+"-close")}:{general:this.defaultStyle.expandBox.general,
animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{content:this.getContentStyle(a.content),expandBox:this.getExpandBoxStyle(a.expandBox),general:this.getGeneralStyle(a.general),separator:this.commonService.isFieldAvailable(a.separator,this.separatorClassName)}:{content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,
hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed},general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},
separator:this.defaultStyle.separator}};__decorate([core_1.ViewChild("block",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"blockElem",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"contentElem",void 0);__decorate([core_1.ContentChildren(b),__metadata("design:type",core_1.QueryList)],b.prototype,"contentList",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],b.prototype,
"items",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],b.prototype,"orientation",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"pause",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],b.prototype,"expanded",null);return b=__decorate([core_1.Component({moduleId:module.id,selector:"iui-menuitem",templateUrl:"templates/integralui.menuitem.html",styleUrls:["css/integralui.menu.css"],
inputs:["controlStyle","data","icon","state","text"],outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,integralui_core_1.IntegralUIBaseService])],b)}(integralui_core_1.IntegralUIItem);exports.IntegralUIMenuItem=IntegralUIMenuItem;