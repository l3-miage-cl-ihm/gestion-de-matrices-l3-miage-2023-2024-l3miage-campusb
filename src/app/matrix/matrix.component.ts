import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Matrix } from '../matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixComponent {

  @Input({ required: true }) data!: Matrix<number,number,number>  | undefined 


}

