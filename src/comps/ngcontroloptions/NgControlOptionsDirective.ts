// blog: https://netbasal.com/implement-ngmodeloptions-with-rxjs-and-custom-form-control-in-angular-4aa3bf96ab6

import { Directive, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { timer } from 'rxjs/observable/timer';
import { Subscription } from 'rxjs/Subscription';

export const DEFAULT_VALUE_ACCESSOR : any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgControlOptionsDirective),
    multi: true
};

@Directive({
    selector: 'input[type=text][formControlName][ngControlOptions],input[type=text][formControl][ngControlOptions]',
    providers: [DEFAULT_VALUE_ACCESSOR]
})
export class NgControlOptionsDirective implements ControlValueAccessor {
    events : Subscription;
    onChange;
    onTouched;

    registerOnChange( fn : any ) : void {
        this.onChange = fn;
    }

    registerOnTouched( fn : any ) : void {
        this.onTouched = fn;
    }

    constructor( private renderer : Renderer2, private element : ElementRef ) {
    }

    private _controlOptions = {
        updateOn: 'input',
        debounce: null
    };

    @Input() set ngControlOptions( val ) {
        this._controlOptions = { ...this._controlOptions, ...val };
    }

    ngOnInit() {
        const events = this._controlOptions.updateOn.split(' ').map(event => fromEvent(this.element.nativeElement, event));
        this.events = merge(...events)
            .map(( e : Event ) => ( { type: e.type, value: e.target['value'] }))
            .debounce(event => {
                const debounceValue = this._controlOptions.debounce;
                let time = 0;
                if( typeof debounceValue === 'number' ) {
                    time = debounceValue;
                } else if( typeof debounceValue === 'object' ) {
                    time = debounceValue[event.type] ? debounceValue[event.type] : 0;
                }
                return timer(time);
            })
            .subscribe(event => {
                this.onChange(event.value);
            });

        // this.events = merge(...events)
        //   .map(( e : Event ) => ( {type: e.type, value: e.target[ 'value' ]}))
        //   .let(source => {
        //     if ( this._controlOptions.debounce ) {
        //       return source.debounce(event => {
        //         const time = ...
        //         return timer(time);
        //       });
        //     }
        //     return source;
        //   })
        //   .subscribe(event => {
        //     this.onChange(event.value);
        //   });
    }

    writeValue( value : any ) : void {
        const normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
    }

    setDisabledState( isDisabled : boolean ) : void {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }

    ngOnDestroy() {
        this.events.unsubscribe();
    }

}