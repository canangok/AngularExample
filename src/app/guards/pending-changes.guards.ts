//Her sayfada kullanıcın çıkışını kontrol etme yönetemimiz
//değişebilir.Bir sayfada değişiklikl yapar bir sayfada hiç bir değişiklik yapmaz buna kontrol etmemiz gerekebilir.
//Ürünü sepete atıp gezinebilir gibi şeyler için bu kontrolleri yapıcaz
import { Observable } from "rxjs";
import { CanDeactivate } from "@angular/router";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate>{

    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {

        if (component.canDeactivate()) //örneğin shippingdetİL
        {
            return true; //burada kişinin sayfadan çıkmasında bir sakınca görmüyoruz

        }else{
           return confirm("You have unsaved chabges. Are you sure?")
        }
    }
}