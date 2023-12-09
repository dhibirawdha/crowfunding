import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourtop10findsComponent } from './ourtop10finds.component';

describe('Ourtop10findsComponent', () => {
  let component: Ourtop10findsComponent;
  let fixture: ComponentFixture<Ourtop10findsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ourtop10findsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourtop10findsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
