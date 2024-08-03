import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { title } from 'process';

@Component({
  selector: 'app-mybooks',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.scss',
})
export class MybooksComponent {
  filteredBooks = [
    {
      id: 1,
      Title: 'To Kill a Mockingbird',
      Author: 'Harper Lee',
      Category: 'Fiction',
      PublicationDate: '1960-07-11',
      Status: 'Have Read',
      Image: 'https://cdn2.penguin.com.au/covers/original/9781785150357.jpg',
    },
    {
      id: 2,
      Title: '1984',
      Author: 'George Orwell',
      Category: 'Dystopian',
      PublicationDate: '1949-06-08',
      Status: 'Currently Reading',
      Image:
        'https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/014/103/9780141036144.jpg',
    },
    {
      id: 3,
      Title: 'Moby Dick',
      Author: 'Herman Melville',
      Category: 'Adventure',
      PublicationDate: '1851-10-18',
      Status: 'Plan to Read',
      Image: 'https://m.media-amazon.com/images/I/81R91ODA9DL._SY522_.jpg',
    },
    {
      id: 4,
      Title: 'Pride and Prejudice',
      Author: 'Jane Austen',
      Category: 'Romance',
      PublicationDate: '1813-01-28',
      Status: 'Have Read',
      Image:
        'https://www.themoviedb.org/t/p/original/vAxWpk857xbpaeoSvkRsfMbokPl.jpg',
    },
    {
      id: 5,
      Title: 'The Great Gatsby',
      Author: 'F. Scott Fitzgerald',
      Category: 'Classic',
      PublicationDate: '1925-04-10',
      Status: 'Have Read',
      Image:
        'https://vignette.wikia.nocookie.net/thegreat-gatsby/images/4/4f/Great_gatsby_tobey-maguire.jpg/revision/latest?cb=20130921225948',
    },
    {
      id: 6,
      Title: 'The Catcher in the Rye',
      Author: 'J.D. Salinger',
      Category: 'Fiction',
      PublicationDate: '1951-07-16',
      Status: 'Currently Reading',
      Image: 'https://cdn.dc5.ro/img-prod/196121448-0.jpeg',
    },
    {
      id: 7,
      Title: 'Brave New World',
      Author: 'Aldous Huxley',
      Category: 'Dystopian',
      PublicationDate: '1932-08-31',
      Status: 'Plan to Read',
      Image: 'https://cdn2.penguin.com.au/covers/original/9781784877736.jpg',
    },
    {
      id: 8,
      Title: 'The Hobbit',
      Author: 'J.R.R. Tolkien',
      Category: 'Fantasy',
      PublicationDate: '1937-09-21',
      Status: 'Have Read',
      Image: 'https://images.thenile.io/r1000/9780007270613.jpg',
    },
    {
      id: 9,
      Title: 'Fahrenheit 451',
      Author: 'Ray Bradbury',
      Category: 'Science Fiction',
      PublicationDate: '1953-10-19',
      Status: 'Currently Reading',
      Image:
        'https://images.squarespace-cdn.com/content/v1/51c20371e4b09c37644d200e/1527699951888-EMRZGF0HLQ8APCI3TU6T/ke17ZwdGBToddI8pDm48kFeTYbKsJ1nsbeoIQpUMwnx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmMbaVtwNgE54yLg4VJh6bwA2KN2sZqdbuCW-Co8OdXapJc1qfKEyTGqgG9RojUT9A/fahrenheit-451-book-cover1.jpg',
    },
    {
      id: 10,
      Title: 'Jane Eyre',
      Author: 'Charlotte Brontë',
      Category: 'Romance',
      PublicationDate: '1847-10-16',
      Status: 'Have Read',
      Image: 'https://cdn1.naekranie.pl/media/cache/amp/2016/12/Jane-eyre.jpg',
    },
    {
      id: 11,
      Title: 'The Lord of the Rings',
      Author: 'J.R.R. Tolkien',
      Category: 'Fantasy',
      PublicationDate: '1954-07-29',
      Status: 'Plan to Read',
      Image: 'https://i.thenile.io/r1000/9780618645619.jpg?r=5eb588fe0f142',
    },
    {
      id: 12,
      Title: 'Wuthering Heights',
      Author: 'Emily Brontë',
      Category: 'Gothic Fiction',
      PublicationDate: '1847-12-01',
      Status: 'Have Read',
      Image:
        'https://th.bing.com/th/id/R.e1d1b936c903c72d27b818a5c69b93b9?rik=47BZwvJmMrUBPQ&riu=http%3a%2f%2fassets.allenandunwin.com.s3.amazonaws.com%2fimages%2foriginal%2f9780571337118.jpg&ehk=nRjkVhb9omqg9ee5rtw3mvERugf1a29dwSSdI7kV5RY%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 13,
      Title: 'The Diary of a Young Girl',
      Author: 'Anne Frank',
      Category: 'Non-Fiction',
      PublicationDate: '1947-06-25',
      Status: 'Currently Reading',
      Image: 'https://cdn2.penguin.com.au/covers/original/9780241952436.jpg',
    },
    {
      id: 14,
      Title: 'The Alchemist',
      Author: 'Paulo Coelho',
      Category: 'Adventure',
      PublicationDate: '1988-05-01',
      Status: 'Have Read',
      Image: 'https://i.thenile.io/r1000/9780008144227.jpg?r=5f43a5d7710f7',
    },
    {
      id: 15,
      Title: 'Gone with the Wind',
      Author: 'Margaret Mitchell',
      Category: 'Historical Fiction',
      PublicationDate: '1936-06-30',
      Status: 'Plan to Read',
      Image:
        'https://rukminim1.flixcart.com/image/1664/1664/book/6/1/6/gone-with-the-wind-original-imadazppaawfpg3w.jpeg?q=90',
    },
  ];
}
