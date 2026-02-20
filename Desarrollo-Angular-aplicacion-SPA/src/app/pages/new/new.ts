import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class New {

  form!: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private seriesService: SeriesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      channel: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.seriesService.create(this.form.value).subscribe((response: any) => {

        this.message = 'Serie creada con ID: ' + response.id;

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);

      });
    }
  }
}
