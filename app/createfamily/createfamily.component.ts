import {Component} from '@angular/core'
@Component({
    moduleId: module.id,
    templateUrl: 'createfamily.component.html',
    styleUrls: ['createfamily.component.css']
})
export class CreatefamilyComponent{

    inputs = [{value: "First sibling"},];
  addInput()  {
    this.inputs.push({value: ''});
  }
  removeInput(){
    this.inputs.pop();
  }
}