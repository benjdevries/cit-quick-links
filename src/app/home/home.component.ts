import { Component, OnInit } from '@angular/core';
import { DataService, Link } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Link[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAllLinks().subscribe(links => this.links = links);
  }

}
