import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRosasComponent } from './listagem-rosas.component';

describe('ListagemRosasComponent', () => {
  let component: ListagemRosasComponent;
  let fixture: ComponentFixture<ListagemRosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemRosasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemRosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
