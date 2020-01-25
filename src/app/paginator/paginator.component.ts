import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() public lastPage: number;
  @Input() private displayedPages: number;
  @Input() private initPage: number;
  @Output() private pageChange = new EventEmitter<number>();

  public renderedPages: any[];

  private pagesToDisplay: number;
  private currentPage: number;
  private busy = false;
  private backEdge: number;
  private forwardEdge: number;

  constructor() {
  }

  ngOnInit() {
    if (!this.lastPage) {
      throw new Error('Last page not found');
    }

    this.pagesToDisplay = this.displayedPages || 4;
    this.currentPage = this.initPage || 1;

    this.render();

    // semi-automated testing code
    // let i = 2;
    // const fh = () => {
    //   console.log(i);

    //   this.onSetPage(i++);

    //   i > 10 && (i = 1);

    //   setTimeout(fh, 2000);
    // };

    // setTimeout(fh, 6000);
  }

  private render(): void {
    if (!this.busy) {
      let forwardRunLimit: number;

      const addedPages: any = [];

      if (this.pagesToDisplay < this.lastPage) {
        forwardRunLimit = Math.ceil(this.pagesToDisplay / 2);
        const backRunStart = this.lastPage - (this.pagesToDisplay - forwardRunLimit) + 1;

        if (this.currentPage > forwardRunLimit && this.currentPage < backRunStart) {
          if (Math.abs(this.currentPage - forwardRunLimit) === 1) {
            forwardRunLimit += 1;
          } else if (Math.abs(this.currentPage - backRunStart) === 1) {
            forwardRunLimit -= 1;
          } else {
            forwardRunLimit -= 1;

            addedPages.push({ type: 1 });
            addedPages.push({ type: 0, value: this.currentPage });
          }

        }
      } else {
        forwardRunLimit = Math.min(this.pagesToDisplay, this.lastPage);
      }

      this.renderedPages = [];

      for (let i = 1; i <= forwardRunLimit; i += 1) {
        this.renderedPages.push({ type: 0, value: i });
      }

      if (this.pagesToDisplay < this.lastPage && this.pagesToDisplay > forwardRunLimit) {
        const backRunStart = this.lastPage - (this.pagesToDisplay - forwardRunLimit - (addedPages.length ? 1 : 0)) + 1;

        this.forwardEdge = forwardRunLimit;
        this.backEdge = backRunStart;

        this.renderedPages.push(...addedPages);

        this.renderedPages.push({ type: 1 });

        for (let i = backRunStart; i <= this.lastPage; i += 1) {
          this.renderedPages.push({ type: 0, value: i });
        }
      }
    }
  }

  public onPageClick(newPage: number): void {
    if (!this.busy && newPage !== this.currentPage) {
      this.pageChange.emit(newPage);

      this.busy = true;
    }
  }

  public onSetPage(newPage: number): void {
    this.currentPage = newPage;

    if (this.forwardEdge && this.backEdge && (newPage > this.forwardEdge || newPage < this.backEdge)) {
      this.render();
    }

    this.busy = false;
  }

  public onBackClick(): void {
    if (!this.busy && this.currentPage > 1) {
      this.onPageClick(this.currentPage - 1);
    }
  }

  public onForwardClick(): void {
    if (!this.busy && this.currentPage < this.lastPage) {
      this.onPageClick(this.currentPage + 1);
    }
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

}
