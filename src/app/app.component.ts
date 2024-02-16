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

  readonly sigL1 = signal<number>(0);
  readonly sigH1 = signal<number>(0);
  readonly sigM1 = computed<Matrix<number,number,number>>(() => initMatrixIntRandom(this.sigL1(),this.sigH1()));

  readonly sigL2 = signal<number>(0);
  readonly sigH2 = signal<number>(0);
  readonly sigM2 = computed<Matrix<number,number,number>>(() => initMatrixIntRandom(this.sigL2(),this.sigH2()));

  readonly sigM1plusM2 = computed<Matrix<number,number,number>|undefined> (() => addIntMatrixes(this.sigM1(),this.sigM2()));
  readonly sigM1xM2 = computed<Matrix<number,number,number>|undefined> (() => multiplyIntMatrixes(this.sigM1(),this.sigM2()));
  
  public updateL1(n:number):void{
    this.sigL1.set(n);
  }
  public updateH1(n:number):void{
    this.sigH1.set(n);
  }
  public updateL2(n:number):void{
    this.sigL2.set(n);
  }
  public updateH2(n:number):void{
    this.sigH2.set(n);
  }
}
