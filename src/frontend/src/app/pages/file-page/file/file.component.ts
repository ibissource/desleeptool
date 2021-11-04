import { Component, OnInit } from '@angular/core';
import { ZaakService } from 'src/app/zaak.service';
import { Zaak } from 'src/app/zaak.model';
import { FileService } from './file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  zaak!: Zaak

  constructor(public fileService: FileService, private zaakService: ZaakService) { }

  ngOnInit(): void {
    this.subscribeToZaak();
  }

  subscribeToZaak(): void{
    this.zaakService.zaakObserver.subscribe((zaak) => this.zaak = zaak);
  }
}
