import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-test-date-picker',
  // standalone: false,
  imports:[BsDatepickerModule , RatingModule , FormsModule],
  templateUrl: './test-date-picker.html',
  styleUrl: './test-date-picker.css'
})
export class TestDatePicker {

  rate = 4
  max = 10;
  isReadonly = false;


  handleclick(){
    console.log('selected')
    console.log(this.rate)
  }

  handleHover(e:any){
    console.log(e)
  }


}
