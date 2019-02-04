import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cfs-section-image',
  templateUrl: './section-image.component.html',
  styleUrls: ['./section-image.component.scss']
})
export class SectionImageComponent implements OnInit {

  @Input()
  public textWrapperStyles: string;

  @Input()
  public backgroundStyles: string;

  @Input()
  public largeTitle = false;

  @Input()
  public title: string;

  @Input()
  public subTitle: string;

  @Input()
  public description: string;

  @Input()
  public buttonLeyend: string;

  @Input()
  public buttonRoute: string;

  constructor() { }

  ngOnInit() {
  }

}
