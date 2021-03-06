import { ElementRef, QueryList } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUIMenuItem extends IntegralUIItem {
    private dataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    private contentAnimation;
    private eventList;
    private itemList;
    private expandState;
    private isExpanded;
    private isItemHovered;
    private blockPos;
    private popupOrder;
    private blockDisplay;
    private blockElemWidth;
    private blockElemHeight;
    private blockOverflow;
    private blockOpacity;
    private pauseTimer;
    blockElem: ElementRef;
    contentElem: ElementRef;
    contentList: QueryList<IntegralUIMenuItem>;
    protected parentCtrl: any;
    protected parentItem: IntegralUIMenuItem;
    protected blockClassName: string;
    protected expandBoxClassName: string;
    protected expandBoxSpaceClassName: string;
    protected separatorClassName: string;
    items: Array<any>;
    orientation: string;
    pause: number;
    expanded: boolean;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected initStyle(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    onExpandBoxMouseDown(e: any): void;
    getDataType(): any;
    isThereChildren(): boolean;
    isBlockVisible(): boolean;
    updateLayout(): void;
    protected onMouseDown(e: any): void;
    protected onMouseEnter(e: any): void;
    protected onMouseLeave(e: any): void;
    onContextMenu(e: any): void;
    private removePauseTimer();
    private toggleContent();
    private getItemDisplay();
    protected updateControlClass(): void;
    protected getExpandBoxSpaceClass(): string;
    protected getSeparatorClass(): any;
    protected getBlockClass(): string;
    protected getGeneralClass(): string;
    protected getExpandBoxClass(): string;
    protected getExpandBoxStyle(value: any): any;
    protected updateStyle(value: any): void;
}
