import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public text :string = '';
  constructor( private router: Router){}
  public filterValue(text: string){
    text= text.trim();
    if(text.length === 0){
      this.router.navigate(['/peliculas']);
    }
   else{
    this.router.navigate(['/buscar', text]);
    
   }
   
    
  }
  navbarVisible = false;

  openNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }
}
