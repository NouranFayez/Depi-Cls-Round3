import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

 @Input() num :any = 20

 constructor(){
  console.log('constructor')
  console.log(this.num)
 }
 ngOnInit(){
  console.log('ng on init')
 }

 ngOnChanges(e:any){
  console.log('ng on change')
  console.log(e)
 }

 
 ngDoCheck(){
  console.log('ng Do Check')
 }
 ngAfterContentInit(){
  console.log('ng afetr content init')
 }
 ngAfterContentChecked(){
  console.log('ng afetr contenttChecked')
 }

 ngAfterViewInit(){
  console.log('ng after view init');
  
 }
  ngAfterViewChecked(){
  console.log('ng after view Checked');
  
 }

 ngOnDestroy(){
  console.log('on Destroy');
  
 }

}
