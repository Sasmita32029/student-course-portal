import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4
      },
      {
        id: 2,
        name: 'Java',
        code: 'JAVA101',
        credits: 3
      },
      {
        id: 3,
        name: 'SQL',
        code: 'SQL101',
        credits: 2
      }
    ];
  }
}