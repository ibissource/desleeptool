import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() buttonText!: string;
  @Input() callback!: () => void;

  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: string) {
    this.valueChange.emit(event);
  }

  onSubmit() {
    this.callback();
  }
}
