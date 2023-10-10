import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRosasComponent } from './criar-rosas.component';

describe('CriarRosasComponent', () => {
  let component: CriarRosasComponent;
  let fixture: ComponentFixture<CriarRosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarRosasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarRosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
