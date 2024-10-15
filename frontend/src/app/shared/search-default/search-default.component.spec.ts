import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDefaultComponent } from './search-default.component';

describe('SearchDefaultComponent', () => {
  let component: SearchDefaultComponent;
  let fixture: ComponentFixture<SearchDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
