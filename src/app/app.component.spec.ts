import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {SideOffModule} from './components/smart/side-off/side-off.module';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SideOffModule,
        HomeModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should change the height value of the element, when triggered the resize event', () => {
    let element: HTMLElement;
    element = fixture.debugElement.query(By.css('main')).nativeElement;
    window.dispatchEvent(new Event('resize'));
    expect(element.offsetHeight).toEqual(636);
  });

  it('should change height when method is called', () => {
    let element: HTMLElement;
    spyOnProperty(window, 'innwerHeight', 'get').and.returnValue(400);
    element = fixture.debugElement.query(By.css('main')).nativeElement;
    component.setMaxHeight();
    expect(element.offsetHeight).toEqual(400);
  });

  // it(`should have as title 'webpage'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('webpage');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to webpage!');
  // });
});
