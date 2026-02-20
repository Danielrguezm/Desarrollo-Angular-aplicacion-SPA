import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  series: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe({
      next: (response: any) => {
        this.series = response; // La API devuelve un array directo
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener las series:', err);
        this.error = 'No se pudieron cargar las series';
        this.loading = false;
      }
    });
  }
}
