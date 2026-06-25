import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {}