import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInterfaceComponent } from './principal-interface.component';

describe('PrincipalInterfaceComponent', () => {
  let component: PrincipalInterfaceComponent;
  let fixture: ComponentFixture<PrincipalInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
