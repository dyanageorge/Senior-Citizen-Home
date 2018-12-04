import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { ServerComponent } from './server/server.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    ImagecarouselComponent,
    PagecontentComponent,
    ServerComponent,
    RegisterComponent,
    LoginComponent,
    PatientInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule,
    RouterModule.forRoot([
      {path: "register", component: RegisterComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
