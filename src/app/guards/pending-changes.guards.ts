
import { Observable } from "rxjs";
import { CanDeactivate } from "@angular/router";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate>{

    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {

        if (component.canDeactivate()) //shippingdetail
        {
            return true; 

        }else{
           return confirm("You have unsaved chabges. Are you sure?")
        }
    }
}