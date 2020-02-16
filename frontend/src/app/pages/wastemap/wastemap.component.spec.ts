import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastemapComponent } from './wastemap.component';

describe('WastemapComponent', () => {
  let component: WastemapComponent;
  let fixture: ComponentFixture<WastemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
