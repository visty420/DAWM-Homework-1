import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePanelComponent } from './title-panel.component';

describe('TitlePanelComponent', () => {
  let component: TitlePanelComponent;
  let fixture: ComponentFixture<TitlePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
