import { Component } from '@angular/core';
import { FileService } from "./file/file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SleepTool';

  constructor(private fileService: FileService) {
  }

  onSubmit() {
    this.fileService.getFileContents();
  }
}
