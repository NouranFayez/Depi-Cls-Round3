import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  h2Class= "text-primary"

  num = 3

  flag = true

  customColor = 'lightgray'
}
