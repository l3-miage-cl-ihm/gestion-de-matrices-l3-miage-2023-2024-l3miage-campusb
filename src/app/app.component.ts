import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Matrix, initMatrixIntRandom, addIntMatrixes, multiplyIntMatrixes, Vector } from './matrix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Correction avec des génériques, pour les étufiant, l'utilisation de number est suffisante...
export class AppComponent<L1 extends number, H1 extends number, L2 extends number, H2 extends number> {
  // à compléter

  readonly sigL1 = signal<number>();
  readonly sigH1 = signal<number>();
  readonly sigM1 = computed<Vector<number,number>>(() => initMatrixIntRandom(this.sigL1(),this.sigH1()));

  readonly sigL2 = signal<number>();
  readonly sigH2 = signal<number>();
  readonly sigM2 = computed<Vector<number,number>>(() => initMatrixIntRandom(this.sigL2(),this.sigH2()));

  
  public updateL1(n:number):void{
    this.sigL1.set(n);
  }
}
