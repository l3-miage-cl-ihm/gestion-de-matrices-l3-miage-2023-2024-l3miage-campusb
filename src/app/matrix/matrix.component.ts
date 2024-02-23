import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Matrix } from '../matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatrixComponent {
  

  @Input({ required: true }) data!: Matrix<number,number,number>  | undefined 
  @Input({ required: true}) highlight: Highlight = undefined;

  @Output() pointerOver = new EventEmitter<[line:number,column:number] | undefined>;


  public updatepointer(pe:[line:number,column:number] | undefined){
    this.pointerOver.emit(pe);
  }

  public isHighlited(line:number,column:number){
    return this.highlight as HighlightCell && line == this.highlight.line && column == this.highlight.column;
  }

}
export type HighlightLine = {line: number};
export type HighlightColumn = {column: number};
export type HighlightCell = {cell: [line: number, column: number]};
export type Highlight = undefined
                      | HighlightLine
                      | HighlightColumn
                      | HighlightCell;

