import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  @Input() cliente :any;

  constructor() { }

  ngOnInit(): void {
  }

}
