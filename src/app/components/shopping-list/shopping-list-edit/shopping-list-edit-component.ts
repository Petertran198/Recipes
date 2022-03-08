import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  //Retrive html input field reference to use in method
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addedIngredients = new EventEmitter<Ingredient>();

  constructor() {}
  ngOnInit(): void {}
  handleAdd() {
    // Using viewChild directive to retirve inputfield values
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = Number(this.amountInputRef.nativeElement.value);
    this.addedIngredients.emit(new Ingredient(ingName, ingAmount));
    //clear form field
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
