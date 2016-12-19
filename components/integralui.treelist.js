/*
  filename: integralui.treelist.js
  version : 0.5.0 BETA
  Copyright © 2016 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,a){function f(){this.constructor=e}for(var b in a)a.hasOwnProperty(b)&&(e[b]=a[b]);e.prototype=null===a?Object.create(a):(f.prototype=a.prototype,new f)},__decorate=this&&this.__decorate||function(e,a,f,b){var c=arguments.length,d=3>c?a:null===b?b=Object.getOwnPropertyDescriptor(a,f):b,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,a,f,b);else for(var k=e.length-1;0<=k;k--)if(g=e[k])d=(3>c?g(d):3<c?g(a,f,d):
g(a,f))||d;return 3<c&&d&&Object.defineProperty(a,f,d),d},__metadata=this&&this.__metadata||function(e,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),IntegralUITreeListItem=function(e){function a(a,b,c){e.call(this,a,b);
this.elemRef=a;this.commonService=b;this.baseService=c;this.templateData=[];this.parentCtrl=null}__extends(a,e);a.prototype.ngOnInit=function(){this.templateData.push(this.data);this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-treelistitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};__decorate([core_1.Input(),__metadata("design:type",Object)],a.prototype,"templateRef",void 0);return a=__decorate([core_1.Component({moduleId:module.id,selector:"iui-treelistitem",
template:'\n\t\t<li [ngClass]="getControlClass()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)">\n\t\t\t<template ngFor [ngForOf]="templateData" [ngForTemplate]="templateRef"></template>  \n\t\t</li>\n\t',styleUrls:["css/integralui.treelist.css"],inputs:["controlStyle","data","icon","state","text"],outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),
encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,integralui_core_1.IntegralUIBaseService])],a)}(integralui_core_1.IntegralUIItem);exports.IntegralUITreeListItem=IntegralUITreeListItem;
var IntegralUITreeList=function(e){function a(a,b,c,d,g){e.call(this,c);this.dataService=a;this.elemRef=b;this.commonService=c;this.cmpResolver=d;this.baseService=g;this.animSpeed=300;this.hoverItem=this.nextData=this.itemData=this.prevData=null;this.blockPos={top:30,left:0};this.leftBlockPos={top:30,left:-300};this.rightBlockPos={top:30,left:300};this.leftBlockOpacity=this.rightBlockWidth=this.blockWidth=this.leftBlockWidth=0;this.blockOpacity=1;this.rightBlockOpacity=0;this.elemSize={width:0,height:0};
this.headerItem=this.currentSelection=null;this.headerText="";this.trialRef=null;this.afterSelect=new core_1.EventEmitter;this.beforeSelect=new core_1.EventEmitter;this.clear=new core_1.EventEmitter;this.itemAdding=new core_1.EventEmitter;this.itemAdded=new core_1.EventEmitter;this.itemRemoving=new core_1.EventEmitter;this.itemRemoved=new core_1.EventEmitter;this.selectionChanged=new core_1.EventEmitter;this.selList=[]}__extends(a,e);Object.defineProperty(a.prototype,"selectedItem",{get:function(){return this.currentSelection},
set:function(a){var b={cancel:!1,header:this.headerItem,item:a};this.beforeSelect.emit(b);1!=b.cancel&&this.currentSelection!=a&&(this.currentSelection=a,a?a.items&&0<a.items.length&&(this.headerItem=a,this.headerText=a.text):(this.headerItem=null,this.headerText=this.title),this.afterSelect.emit({header:this.headerItem,item:a}),this.selectionChanged.emit(null))},enumerable:!0,configurable:!0});a.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init(this.items);this.itemData=
this.items;this.headerText=this.title;this.generalClassName="iui-treelist";this.initStyle()};a.prototype.ngAfterViewInit=function(){var a=this;a.blockPos.top=this.headerElem.nativeElement.offsetHeight;a.leftBlockPos.top=this.headerElem.nativeElement.offsetHeight;a.rightBlockPos.top=this.headerElem.nativeElement.offsetHeight;a.elemSize={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};a.leftBlockWidth=a.blockWidth=a.rightBlockWidth=
a.elemSize.width;var b=setTimeout(function(){var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&a.contentRef&&(a.trialRef=a.contentRef.createComponent(c));clearTimeout(b)},100)};a.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};a.prototype.onItemMouseEnter=function(a,b){this.hoverItem=b};a.prototype.onItemMouseLeave=function(a,b){this.hoverItem=null};a.prototype.onItemMouseDown=function(a,b){if(1==a.buttons&&b){var c=this;if(b.items&&0<
b.items.length){c.selList.push(c.headerItem);c.nextData=b.items;var d=0,e=5/c.elemSize.width,f=.5,l=1/c.elemSize.width,h=0,m=setInterval(function(){d<c.elemSize.width?(d+=10,f-=e,h+=l,c.blockPos.left=-d,c.blockOpacity=f,c.rightBlockPos.left=c.elemSize.width-d,c.rightBlockOpacity=h):(c.selectedItem=b,c.itemData=c.nextData,c.blockPos.left=0,c.blockOpacity=1,c.rightBlockPos.left=c.elemSize.width,c.rightBlockOpacity=0,clearInterval(m))},10)}else c.selectedItem=b}};a.prototype.onHeaderMouseDown=function(a){var b=
this;if(1==a.buttons&&0<b.selList.length){var c=b.selList.length-1;b.prevData=b.selList[c]&&b.selList[c].items?b.selList[c].items:b.items;var d=0,e=5/b.elemSize.width,f=.5,l=1/b.elemSize.width,h=0,m=setInterval(function(){d<b.elemSize.width?(d+=10,f-=e,h+=l,b.blockPos.left=d,b.blockOpacity=f,b.leftBlockPos.left=d-b.elemSize.width,b.leftBlockOpacity=h):(b.selectedItem=b.selList[c],b.itemData=b.prevData,b.selList.splice(c,1),b.blockPos.left=0,b.blockOpacity=1,b.leftBlockPos.left=-b.elemSize.width,b.leftBlockOpacity=
0,clearInterval(m))},10)}};a.prototype.getItemState=function(a){return a==this.selectedItem?integralui_core_1.IntegralUIObjectState.selected:a==this.hoverItem?integralui_core_1.IntegralUIObjectState.hovered:integralui_core_1.IntegralUIObjectState.normal};__decorate([core_1.ViewChildren(IntegralUITreeListItem),__metadata("design:type",core_1.QueryList)],a.prototype,"contentList",void 0);__decorate([core_1.ViewChild("contentBlock",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],
a.prototype,"contentRef",void 0);__decorate([core_1.ViewChild("header",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"headerElem",void 0);__decorate([core_1.ViewChild("leftBlock",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"leftBlockElem",void 0);__decorate([core_1.ViewChild("contentBlock",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"blockElem",void 0);__decorate([core_1.ViewChild("rightBlock",
{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"rightBlockElem",void 0);__decorate([core_1.ContentChild(core_1.TemplateRef),__metadata("design:type",Object)],a.prototype,"itemTemplate",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],a.prototype,"items",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],a.prototype,"title",void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],
a.prototype,"selectedItem",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"afterSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"beforeSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"clear",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"itemAdding",void 0);__decorate([core_1.Output(),__metadata("design:type",
core_1.EventEmitter)],a.prototype,"itemAdded",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"itemRemoving",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"itemRemoved",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"selectionChanged",void 0);return a=__decorate([core_1.Component({moduleId:module.id,selector:"iui-treelist",template:"\n\t\t<div [ngClass]=\"getControlClass()\">\n\t\t\t<div class=\"iui-treelist-header\" (mousedown)=\"onHeaderMouseDown($event)\" #header>\n                <span class=\"expand-icons back\" *ngIf=\"headerItem!=null\"></span>\n                <span>{{headerText}}</span>\n\t\t\t</div>\n\t\t\t<ul class=\"iui-treelist-block\" #leftBlock [ngStyle]=\"{ 'position': 'absolute', 'top': leftBlockPos.top + 'px', 'left': leftBlockPos.left + 'px', 'width': leftBlockWidth + 'px', 'opacity': leftBlockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of prevData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class=\"iui-treelist-block\" #contentBlock [ngStyle]=\"{ 'position': 'absolute', 'top': blockPos.top + 'px', 'left': blockPos.left + 'px', 'width': blockWidth + 'px', 'opacity': blockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of itemData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\" (mouseDown)=\"onItemMouseDown($event, item)\" (mouseEnter)=\"onItemMouseEnter($event, item)\" (mouseLeave)=\"onItemMouseLeave($event, item)\" [state]=\"getItemState(item)\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t\t<ul class=\"iui-treelist-block\" #rightBlock [ngStyle]=\"{ 'position': 'absolute', 'top': rightBlockPos.top + 'px', 'left': rightBlockPos.left + 'px', 'width': rightBlockWidth + 'px', 'opacity': rightBlockOpacity }\">\n\t            <iui-treelistitem *ngFor=\"let item of nextData\" [text]=\"item.text\" [templateRef]=\"itemTemplate\" [data]=\"item\">\n\t\t\t\t</iui-treelistitem> \n\t\t\t</ul>\n\t\t</div>\n\t",
styleUrls:["css/integralui.treelist.css"],inputs:["controlStyle","data","state"],providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],a)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUITreeList=IntegralUITreeList;