import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Product } from './product';
import { clone } from 'lodash';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    templateUrl: 'user-management.component.html'
})

export class UserManagementComponent implements OnInit {
  products: Product[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private _userService: UserService, private http: Http) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
     this.products = this._userService.getProductsFromData();
  }

  showEditProductForm(product: Product) {
    if(!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Product) {
    if(this.isNewForm) {
      // add a new product
      this._userService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: Product) {
    this._userService.deleteProduct(product);
  }

  updateProduct() {
    this._userService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

}
