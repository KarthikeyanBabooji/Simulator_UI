import {Component, Input, OnInit} from "@angular/core";
import {DataTable, SortEvent} from "./DataTable";

@Component({
    selector: "mfDefaultSorter",
    template: `
        <a style="cursor: pointer; color:#fff;" (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            &nbsp;
            <span *ngIf="isSortedByMeAsc"  style="font-size:24px"class="fa fa-angle-up" aria-hidden="true"></span>
            <span *ngIf="isSortedByMeDesc"  style="font-size:24px" class="fa fa-angle-down" aria-hidden="true"></span>
        </a>`
})
export class DefaultSorter implements OnInit {
    @Input("by") sortBy: string;

    isSortedByMeAsc: boolean = false;
    isSortedByMeDesc: boolean = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
            this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        } else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    }
}