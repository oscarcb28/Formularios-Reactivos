import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semaforo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semaforo.component.html',
  styleUrl: './semaforo.component.css'
})

export class SemaforoComponent implements OnInit{
  
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  numero: number = 5;

  ngOnInit() : void {
    if (isPlatformBrowser(this.platformId)) {
      this.cuenta();
      setTimeout(() => {
      this.router.navigate(['/test-con-json']);
    }, 5000);
    }
  }
  

  async cuenta(){
    while(true){
      if(this.numero>0){
        this.numero--;
      } 
      else {
        this.numero = 5;
      }
      await this.esperar(1000);
    }
  }

  esperar(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  irTest():void {
    if(this.numero == 0){
      this.router.navigate(['/test-con-json']);
    }
  }
}

