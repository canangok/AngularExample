import {Injectable} from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from "@angular/router";     //active edebilir demek
import {AccountService} from "../account/account.service";

//kullanıcının gitmek istediği aktivate ActivatedRouteSnapshot
//Birde geldiği Route var RouterStateSnapshot

//guardlar ınjectable ile çalışır
//Sisteme girildiğinde guardın çalışması için canactivet i implemente etmesi lazım
@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private accountService:AccountService,
        private router:Router
        ){}
//canActivate true yada false döner. istersek observable olarakda dönebilir.
//mevcut statein snapshotunu alıyoruz. mevcut yeri
//implement imzasına uymak için bunuda next:ActivatedRouteSnapshot ekliyoruz.

        canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
            //kişinin sisteme girip girmedğini kontrol edicez.
            let logged=this.accountService.isLoggedIn();
            //loginse true
            if(logged){
                return true;
            }
            //değilse account routerına yolluyoruz
            //buradaki returnUrl geldiği sayfayı yakalayarak alıcaz.
            this.router.navigate(["account"],{queryParams:{returnUrl:state.url}})

            return false;
        }
}
