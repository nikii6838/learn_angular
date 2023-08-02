import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
 
@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],

})
export class ReactiveformComponent implements OnInit {
  isFormSubmitted : boolean =false ;
  myForm: FormGroup;
  genders = [
    { id: "1", value: "male" },
    { id: "2", value: "Female" },
  ];
  constructor() {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),

      'course': new FormControl(),
      'gender': new FormControl("male"), // defult selected
      'skills': new FormArray([ new FormControl('', Validators.required)])
    })
  }

  OnSubmit() {
    if (this,this.myForm.valid){
      this.isFormSubmitted =true ;
   
    console.log("Submit method called", this.myForm);
    console.log('Forms value',this.myForm.value);
  }
  }

OnAddSkills() {
//  var skillArr = this.myForm.get('skills') as FormArray ;
  (<FormArray>this.myForm.get('skills')).push(new FormControl('Javascript', Validators.required))

}

removeGroup(i: number) {
  var removeSkills = (<FormArray>this.myForm.get('skills'));
  removeSkills.removeAt(i);

}



}
