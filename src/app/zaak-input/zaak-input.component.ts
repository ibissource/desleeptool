import { Component, OnInit } from '@angular/core';
import { ZaakService } from "../zaak.service";

@Component({
  selector: 'app-zaak-input',
  templateUrl: './zaak-input.component.html',
  styleUrls: ['./zaak-input.component.css']
})
export class ZaakInputComponent implements OnInit {
  zaakId = "";

  constructor(private zaakService: ZaakService) { }

  ngOnInit(): void {
  }

  onSubmit = (): void => {
    this.zaakService.getZaak(this.zaakId)
  }
}
