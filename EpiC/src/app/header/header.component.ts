import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router ) { }
  ngOnInit() {
  }

  navigate()
  {
    if(this.router.routerState.snapshot.url === '/missions' )
      this.router.navigate(['/status']);
    else
      this.router.navigate(['/missions']);
  }
}
