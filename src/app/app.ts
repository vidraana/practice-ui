import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, UpperCasePipe],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('practice');
}
