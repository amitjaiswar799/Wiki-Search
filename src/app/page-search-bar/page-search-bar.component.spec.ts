import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchBarComponent } from './page-search-bar.component';

describe('PageSearchBarComponent', () => {
  let component: PageSearchBarComponent;
  let fixture: ComponentFixture<PageSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSearchBarComponent]
    });
    fixture = TestBed.createComponent(PageSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
