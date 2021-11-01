import { Component } from '@angular/core';
import { FileService } from "./file.service";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  constructor(public fileService: FileService) { }
}
