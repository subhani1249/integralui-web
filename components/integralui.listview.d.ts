import { ComponentFactoryResolver, ElementRef, QueryList, Renderer, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIList } from './integralui.list';
import { IntegralUIListItem } from './integralui.listitem';
export declare class IntegralUIListView extends IntegralUIList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    contentList: QueryList<IntegralUIListItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    private currentScrollMode;
    private overflowSettings;
    private trialRef;
    scrollMode: string;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: number): void;
    removeItemAt(index: number): boolean;
    private updateCurrentList();
    private addItemToCurrentList(item);
    cloneItem(item: any): {
        id: string;
        icon: any;
        text: any;
    };
    getItem(item: IntegralUIListItem): any;
    getItemFromComponent(cmp: any): any;
    getItemIndex(item: IntegralUIListItem): number;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    updateLayout(): void;
    clearSelection(): void;
    selectItem(item: any): void;
    private updateSelectedItemFromElem(item);
    private updateSelectedItem(item);
}
