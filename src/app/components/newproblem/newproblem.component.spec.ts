import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewproblemComponent } from './newproblem.component';

describe('NewproblemComponent', () => {
  let component: NewproblemComponent;
  let fixture: ComponentFixture<NewproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewproblemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
