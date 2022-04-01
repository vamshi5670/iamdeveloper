import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators} from '../custom.validators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public signUpForm!: FormGroup;
  public showPassword! :boolean;
  public showConfPassword! : boolean;
  public date:any[] = [];
  public month = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  public year:any[] = [""];

  public i=0;
  public j=1900;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.signUp();
  }


  ngOnInit() {
    this.signUp();
    
    for (this.i=1; this.i<=31; this.i++)
    {
      this.date[this.i]=this.i;
    }
    
    // for (this.j=1900; this.j<=2300; this.j++)
    // {
    //   this.year[this.j]=this.j;
    // }
    this.i=1;
    while(this.j<=2300)
    {
      this.year[this.i++]=this.j;
      this.j++;
    }



  }

  signUp() {

    this.signUpForm = this.formBuilder.group(

      {
        firstname: new FormControl("", [Validators.required, Validators.pattern('^[A-Z]{1}[a-z ]{1,}')]),
        lastname: new FormControl("", [Validators.required, Validators.pattern('^[A-Z]{1}[a-z ]{1,}')]),
        gmail: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,}@[a-z]{5,}.[a-z]{2,}')]),
        password: new FormControl("",[Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,}$')]),
        confpassword: new FormControl("", [Validators.required,]),
        date : new FormControl("", [Validators.required]),
        month : new FormControl("", [Validators.required,]),
        year : new FormControl("", [Validators.required,]),
        //dob: new FormControl("",[Validators.required]),
        phoneNumber: new FormControl("", [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
        countrycode: new FormControl("", [Validators.required, Validators.pattern('\\+[1-9]{1,3}')]),
        

      }, {validator: CustomValidators("password","confpassword")},
         // {validator: DobValidators(Number("date"),"month",Number("year"))}]
      
    )

  }


  onSubmit() {
   

    console.log(this.signUpForm.controls.date)
    console.log(this.signUpForm.controls.month)
    console.log(this.signUpForm.controls.year)

    if (this.signUpForm.invalid)
    {
      this.signUpForm.markAllAsTouched();
      return;
    } else {
      //this.service.icon.next(this.icons=true);
      // this.service.tempData.push(this.signUpForm.value)
      //console.log(this.service.tempData);
      
    }

    
  }

  
  


}
