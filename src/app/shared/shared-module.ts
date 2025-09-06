import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputcomponentComponent } from './component/inputcomponent/inputcomponent.component';
import { CardComponetComponent } from './component/card-componet/card-componet.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { LinkComponentComponent } from './component/link-component/link-component.component';
import { ListComponentComponent } from './component/list-component/list-component.component';
import { ModalComponentComponent } from './component/modal-component/modal-component.component';
import { PrincipalNewsComponentComponent } from './component/principal-news-component/principal-news-component.component';
import { SelectComponentComponent } from './component/select-component/select-component.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { IonicModule, IonImg } from '@ionic/angular';
import { ButtonComponentComponent } from './component/button-component/button-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './services/user';
import { Storage } from './providers/storage/storage';
import { Uuid } from './providers/uuid/uuid';
import { HttpClientModule } from '@angular/common/http';

const services = [User];
const providers = [Storage,Uuid]

@NgModule({
  declarations: [InputcomponentComponent,CardComponetComponent,HeaderComponentComponent,LinkComponentComponent,ListComponentComponent,ModalComponentComponent,
    PrincipalNewsComponentComponent,SelectComponentComponent,UserFormComponent,ButtonComponentComponent],

  imports: [ CommonModule,IonicModule,ReactiveFormsModule,FormsModule,HttpClientModule ],
  exports: [InputcomponentComponent,CardComponetComponent,HeaderComponentComponent,LinkComponentComponent,ListComponentComponent,ModalComponentComponent,
    PrincipalNewsComponentComponent,SelectComponentComponent,UserFormComponent,ButtonComponentComponent,ReactiveFormsModule,FormsModule,HttpClientModule],
    providers: [...services,...providers],
})
export class SharedModule { }
