import { Component } from '@angular/core';
// import { englishContent, germanContent } from './language-content';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { inject } from '@vercel/analytics';

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
  // englishContent: LanguageContent = englishContent;
  // germanContent: LanguageContent = germanContent;

  constructor() {
    // this.currentLanguageContent = this.englishContent;
    inject();
  }

  // switchLanguage(language: string) {
  //   console.log('switching language to', language);
  //   if (language === 'german') {
  //     this.currentLanguageContent = this.germanContent;
  //     this.replacePlaceholders();
  //   } else if (language === 'english'){
  //     this.currentLanguageContent = this.englishContent;
  //     this.replacePlaceholders();
  //   } else {
  //     console.log('Language not supported');
  //   }
  // }

  // replacePlaceholders() {
  //   const placeholders: NodeListOf<HTMLElement> = document.querySelectorAll("[data-placeholder]");
  //   placeholders.forEach((placeholder: HTMLElement) => {
  //     const key = placeholder.getAttribute("data-placeholder");
  //     if (key && this.currentLanguageContent[key]) {
  //       placeholder.innerHTML = this.currentLanguageContent[key];
  //     }
  //   });
  // }
  
  animationState: string = 'start';
  
    onAnimationDone(): void {
      this.animationState = 'start';
      setTimeout(() => {
        this.animationState = 'end';
      }, 500);
    }

    redirectToGithubProject(project: string): void {
      switch (project) {
        case 'first-programming-project':
          window.open('https://github.com/DerKrull/Classified', '_blank');
          break;
        case 'ludo':
          window.open('https://gitlab.informatik.hs-fulda.de/', '_blank');
          break;
        case 'organizer':
          window.open('https://github.com/DerKrull/OrganizerApp', '_blank');
          break;
        case 'wordpress':
          window.open('https://gitlab.informatik.hs-fulda.de/fdai6557/internetservices', '_blank');
          break;
        case 'refactor':
          window.open('https://github.com/choan312/documentManagment', '_blank');
          break;
        case 'bitbucket':
          window.open('https://bitbucket.org/', '_blank');
          break;
        default:
          console.log('Project not found');
          break;
      }
      window.open('https://github.com', '_blank');
    }

}
