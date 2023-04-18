import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SammaryComponent } from './sammary.component';

describe('SammaryComponent', () => {
  let component: SammaryComponent;
  let fixture: ComponentFixture<SammaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SammaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SammaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
