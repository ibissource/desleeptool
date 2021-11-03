import { Component, OnInit } from '@angular/core';
import { FileService } from "./file/file.service";

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.fileService.getFileContents();
  }
}
