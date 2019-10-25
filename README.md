# Angular 7 dynamic themes made simple with native css variables

Example of usage: [view on stackblitz](https://stackblitz.com/edit/angular-zm6hxu)

## Usage:

    npm i ngx-themes --save

app.module.ts

    
    import  {  BrowserModule  }  from  '@angular/platform-browser';
    import  {  NgModule  }  from  '@angular/core';
    import  {  AppComponent  }  from  './app.component';
    
    import  {  NgxThemesModule  }  from  'ngx-themes';
    import  {  LightTheme  }  from  './themes/light';
    import  {  DarkTheme  }  from  './themes/dark';

    @NgModule({
    declarations:  [
	    AppComponent
    ],
    imports:  [
	    BrowserModule,
	    NgxThemesModule.forRoot({
		    themes:  [LightTheme,  DarkTheme],
		    active:  'lightTheme'
	    }),
    ],
    providers:  [],
    bootstrap:  [AppComponent]
    })
    export  class  AppModule { }

./themes/dark.ts

    export  const  DarkTheme  =  {
	    name:  'darkTheme',
	    properties:  {
		    '--primary-color':  '#3e3e3e',
		    '--on-primary-color':  '#fff',
	    }
    };

.themes/light.ts

    export  const  LightTheme  =  {
	    name:  'lightTheme',
	    properties:  {
		    '--primary-color':  '#d9d9d9',
		    '--on-primary-color':  '#919191',
	    }
    };

## Aply themes in components

In order to use the themes in templates, apply "ngx-theme" directive on you html tags.
e.g. : 

    <button  my-theme> </button>
In your css/less/scss file, style the button using css variables defined in your themes.
e.g.:

    button {
	    background: var(--primary-color);
	    color: var(--on-primary-color);
	    border: none;
	    width: 300px;
	    height: 40px;
	    outline: none;
	    cursor: pointer;
    }

## Change themes at runtime
In order to change the themes, you need to use the "ThemeService" provided by ngx-themes.
e.g.: 
app.component.ts

    import  {  Component  }  from  '@angular/core';
    import  {  ThemeService  }  from  'ngx-themes';
    
    @Component({
	    selector:  'app-root',
	    templateUrl:  './app.component.html',
	    styleUrls:  ['./app.component.less']
    })
    export  class  AppComponent {
	    currentTheme =  '';
	    constructor(private themeService:  ThemeService) {
		    this.currentTheme  =  themeService.getActiveTheme().name;
	    }
    
	    toggleTheme() {
		    if (this.currentTheme  ===  'lightTheme') {
			    this.themeService.setTheme('darkTheme');
			    this.currentTheme  =  'darkTheme';
		    } else {
			    this.themeService.setTheme('lightTheme');
			    this.currentTheme  =  'lightTheme';
		    }
	    }
    }

