import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { MybooksComponent } from './mybooks/mybooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent, MybooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Book_Club';
}
