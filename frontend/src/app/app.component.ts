import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { Platform } from "@angular/cdk/platform";
import { DOCUMENT} from "@angular/common";
import { Settings } from 'luxon';
import { ActivatedRoute } from "@angular/router";
import {MatIconRegistry, SafeResourceUrlWithIconOptions} from "@angular/material/icon";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'frontend';

  constructor(private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private route: ActivatedRoute,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {
    Settings.defaultLocale = this.localeId;
    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
        // @ts-ignore
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );

          case 'fab':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/icons/fa/svgs/brands/${name}.svg`
            );

          case 'far':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/icons/fa/svgs/regular/${name}.svg`
            );

          case 'fas':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/icons/fa/svgs/solid/${name}.svg`
            );

          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );

          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
        }
      }
    );
  }
}
