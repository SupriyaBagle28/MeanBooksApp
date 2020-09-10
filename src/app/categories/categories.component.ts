import { Component, OnInit } from '@angular/core';
import { categories } from '../files/CategoriesNames';
import { CategoriesList } from '../files/Categories';
import { Router } from '@angular/router';
import { Books } from '../files/Bookspecs';
// import {computing} from '../files/Computingbooks';
// import {biographies} from '../files/Biographies';
// import {comics} from '../files/Comics';
import { CartService } from '../service/cart.service';
// import {adventures} from '../files/Adventures';
// import {crimes} from '../files/Crimes';
import { CategoriesService } from '../service/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  data;
  constructor(private router: Router,
    private cartService: CartService, private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  onSelect(genre) {
    console.log(genre);
    this.categoriesService.getBooksByGenre(genre)
      .subscribe((result) => {
        this.data = result
        console.log(result);
      })
  }

  addToCart(book) {
    this.router.navigate(['/mycart']);
    this.cartService.addToCart(book);
    console.log(book);
    window.alert("products successfully addded to cart");
  }



}
