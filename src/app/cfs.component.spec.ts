import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CFSComponent } from './cfs.component';

describe('CFSComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CFSComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CFSComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cafering-service'`, () => {
    const fixture = TestBed.createComponent(CFSComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cafering-service');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CFSComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cafering-service!');
  });
});
