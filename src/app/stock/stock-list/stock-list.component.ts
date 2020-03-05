import {Component, OnInit, ViewChild} from '@angular/core';
import {Stock} from '../stock.model';
import {StocksService} from '../stocks.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
    stocks: Stock[] = [];
    public stocksSub: Subscription;

    constructor(public stocksService: StocksService) {
    }

    ngOnInit(): void {
        this.stocksService.getStocks();
        this.stocksSub = this.stocksService.getPostUpdateListener()
            .subscribe((stocks: Stock[]) => {
                this.stocks = stocks;
            });
    }

}
