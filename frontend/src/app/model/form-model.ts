import { FormGroup } from "@angular/forms";

export interface LoginFormType {
  name: string,
  icon: string,
  placeholder: string,
  inputFormGroup: FormGroup,  
  inputControl: string
}