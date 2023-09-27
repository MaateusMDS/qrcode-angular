import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
})
export class QrcodeComponent implements OnInit {
  @Input() link: string;
  @Input() titulo: string;

  constructor() {}

  ngOnInit() {}
}
