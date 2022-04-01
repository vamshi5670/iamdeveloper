import { FormGroup } from "@angular/forms";



export function CustomValidators(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
        const checkPassword = formGroup.controls[password];
        const checkConfirmPassword = formGroup.controls[confirmPassword];
        const checkDate = formGroup.controls['date'];
        //const date=formGroup.controls[Number(date)];
        console.log((formGroup.controls.date.value));
        console.log((formGroup.controls.month.value));
        console.log(Number(formGroup.controls.year.value));
        if (checkPassword.value !== checkConfirmPassword.value) {
            checkConfirmPassword.setErrors({ confirmedValidator: true });
        } else {
             checkConfirmPassword.setErrors(null);
        }

       // console.log(checkDate,checkPassword,formGroup.controls.date.value);
        if(formGroup.controls.month.value == 'February')
        {
            if(formGroup.controls.year.value%4==0){
                //leap year feb<=29
                if(formGroup.controls.date.value > 29){
                    formGroup.controls['date'].setErrors({confirmedValidator : true});
                }

            }
            else if(formGroup.controls.date.value > 28){
                checkDate.setErrors({confirmedValidator : true});
             }
        }
        else if (formGroup.controls.month.value == 'April' || formGroup.controls.month.value == 'June' || formGroup.controls.month.value == 'September' || formGroup.controls.month.value == 'November')
        {
            if(formGroup.controls.date.value > 30)
            {
                checkDate.setErrors({confirmedValidator : true});
            }
            else
            {
                checkDate.setErrors(null);
            }
            
        }
        
        else
            {
                checkDate.setErrors(null);
            }


    }
}


// export function DobValidators(date : number , month : string , year : number ) 
// {
//     return (dob : FormGroup)=> {

//         const checkdate = dob.controls[date];
//         const checkmonth = dob.controls[month];
//         const checkyear = dob.controls[year];
//         // console.log(checkdate , month , year)
//         //checking for FEB
//         if(month == 'February')
//         {
//             if(year%4==0){
//                 //leap year feb<=29
//                 if(date > 30){
//                    checkdate.setErrors({invalid : true});
//                 }

//             }
//             else if(date > 29){
//                 checkdate.setErrors({invalid : true});
//              }
//         }
//         else if (month == 'April' || month == 'June' || month == 'September' || month == 'November')
//         {
//             if(date > 30)
//             {
//                 checkdate.setErrors({invalid : true});
//             }
//             else
//             {
                
//             }
//         }



//         // if (month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December')
//         // {
//         //     if(date < 30 || date >= 0)
//         //     {
//         //         checkdate.setErrors({invalid : true});
//         //     }

//         // }

          
            
       
      


        
//     }
//}