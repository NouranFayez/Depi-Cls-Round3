import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component)
  if(component.isSubmitted == false && component.loginForm.dirty ){
    let conf = confirm("Are you want to leave before saving the changes ?")
    if(conf) return true
    else return false

  }
  return true;
};
