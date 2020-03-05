import {Component} from '@angular/core';
import {StocksService} from '../stocks.service';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-stock-create',
    templateUrl: './stock-create.component.html',
    styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent {
    formOpenState = false;
    name = '';
    stock = 0;
    price = 0;

    constructor(public stocksService: StocksService) {
    }

    display() {
        this.formOpenState = true;
    }

    onAddStock(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.stocksService.addStock(form.value.name, form.value.price, form.value.stock);
        // form.resetForm();
        this.formOpenState = false;
        this.name = '';
        this.stock = 0;
        this.price = 0;

    }
}
