import { Component, OnInit, ContentChildren, QueryList, TemplateRef, Input } from '@angular/core';

import { TabComponent } from '../tab/tab.component';


@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent implements OnInit {

  constructor() { }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input()
  headerTemplate: TemplateRef<any>;

  ngOnInit() {
  }

  selectedTab(activetab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    activetab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }
}
