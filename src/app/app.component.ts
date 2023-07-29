import { Component } from '@angular/core';
import { englishContent, germanContent } from './language-content';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface LanguageContent {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animationState', [
      state('start', style({width: '0%'})),
      state('end', style({width: '100%'})),
      transition('start => end', animate('2s linear')),
  ])
  ]
})
export class AppComponent {
  title = 'Jonas\' Portfolio';

  descriptionWithHtml = `
    Development of Ludo (Mensch <span style="font-size: 18px;">ä</span>rgere dich nicht!) on the console using Java and Jenkins for Continuous Development
  `;

  currentLanguageContent: any;
  englishContent: LanguageContent = englishContent;
  germanContent: LanguageContent = germanContent;

  constructor() {
    this.currentLanguageContent = this.englishContent;
  }

  switchLanguage(language: string) {
    console.log('switching language to', language);
    if (language === 'german') {
      this.currentLanguageContent = this.germanContent;
      this.replacePlaceholders();
    } else if (language === 'english'){
      this.currentLanguageContent = this.englishContent;
      this.replacePlaceholders();
    } else {
      console.log('Language not supported');
    }
  }

  replacePlaceholders() {
    const placeholders: NodeListOf<HTMLElement> = document.querySelectorAll("[data-placeholder]");
    placeholders.forEach((placeholder: HTMLElement) => {
      const key = placeholder.getAttribute("data-placeholder");
      if (key && this.currentLanguageContent[key]) {
        placeholder.innerHTML = this.currentLanguageContent[key];
      }
    });
  }
  
  animationState: string = 'start';
  
    onAnimationDone(): void {
      this.animationState = 'start';
      setTimeout(() => {
        this.animationState = 'end';
      }, 500);
    }
}


