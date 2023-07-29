import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent {

  @Input() title!: string;

  private _description!: string;

  descriptionHtml!: SafeHtml;

  @Input()
  set description(value: string) {
    this._description = value;
    this.descriptionHtml = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  get description(): string {
    return this._description;
  }

  @Input() tech!: string;
  
  @Input() githubLink!: string;

  constructor(private sanitizer: DomSanitizer) {}

}
