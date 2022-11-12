import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private api: DataService) { }

  ngOnInit(): void {
  }

  showMessage() {
    this.api.getMessage().subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    })
  }

}
