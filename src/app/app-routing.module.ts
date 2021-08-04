import  {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { DialogComponent } from './dialog/dialog.component'
import { FormComponent } from './form/form.component'
import { MenuComponent } from './menu/menu.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'

const routes:Routes = [
    {
        path:'',component: MenuComponent,children:[
            {path:'',redirectTo:'/',pathMatch:'full'},
            {path:'',component:AppComponent,},
            {path:'prime',component:DialogComponent},
            {path:'bts', component:FormComponent},
            {path: "**",component:NotFoundPageComponent}
        ]
    }
]


@NgModule({
    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}