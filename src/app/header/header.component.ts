import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backendService:BackEndService) { }

  ngOnInit(): void {
    this.onFetch();
  }

  onSave(){
    this.backendService.saveData();
  }

  onFetch(){
    this.backendService.fetchData();
  }

}
