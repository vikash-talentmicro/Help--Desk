import { Component, OnInit,} from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

public email:any;
public password:any;

postUrl = "http://ital.jobraiser.com/api/web/home/login?lngId=1";
  formBuilder: any;

constructor(private http:HttpClient){}
  ngOnInit(): void { }


Login(){
 
  this.http.post(this.postUrl,{email:this.email,password:this.password}).toPromise().then((data:any)=>{
    console.log(data);
  })
}

}
