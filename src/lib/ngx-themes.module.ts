import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './directives/theme.directive';
import { ThemeService } from './services/theme.service';
import {Theme, THEMES, ACTIVE_THEME} from './theme';


export interface ThemeOptions {
  themes: Theme[];
  active?: string;
}

@NgModule({
  declarations: [ThemeDirective],
  imports: [CommonModule],
  providers: [ThemeService],
  exports: [ThemeDirective]
})
export class NgxThemesModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders {
    return {
      ngModule: NgxThemesModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.active
        }
      ]
    };
  }
}
