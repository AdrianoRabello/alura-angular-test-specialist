import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';


describe(LikeWidgetComponent.name, () => {

    let fixture:ComponentFixture<LikeWidgetComponent>;
    let component:LikeWidgetComponent = null;

    let uniIdMockService;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule],
            // this provide auto detect for default bot IS NOT RECOMENDED FOR ANGULAR TEAM
            // providers: [
            //     {provide: ComponentFixtureAutoDetect, useValue: true}
            // ]

        }).compileComponents();


        fixture  = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance
        uniIdMockService = TestBed.inject(UniqueIdService);
  

    });

    it('Should create component ', ()=>{
      const component = fixture.componentInstance;
      expect(component).toBeTruthy()
        
    })

    // use this method only if I create the rule to recive prefix inside the component like Input properties
    it('Should auto-genarated ID during NgOnInit when (@input id) is no assigned',()=>{
        spyOn(uniIdMockService,'generateUniqueIdWithPrefix').and.resolveTo();
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    })

    it('Should not auto-generate ID during ngOnInit when (@input id) id not assigned', () =>{
        spyOn(uniIdMockService,'generateUniqueIdWithPrefix').and.resolveTo();
        const someId = 'someId';
        component.id = someId;
        expect(component.id).toBe(someId);

    })


    it(`#${LikeWidgetComponent.prototype.like.name} should create id when create component  `, done =>{

        spyOn(uniIdMockService,'generateUniqueIdWithPrefix').and.returnValue('asdadasd');
        fixture.detectChanges();
        component.liked.subscribe((response) => {
            expect(response).toBeTruthy();
            done();
        })
        component.like();
    })

    it(`#${LikeWidgetComponent.prototype.like.name} method should trigger (@Output liked) when has been called`, () => {

        spyOn(component.liked,'emit');
        spyOn(uniIdMockService,'generateUniqueIdWithPrefix').and.returnValue('asdadasd');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    })

})