import {Injectable} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {alert} from 'octicons';

@Injectable()
export class OcticonsService {
    constructor(private sanitizer: DomSanitizer) {
    }

    alert(): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(alert.toSVG());
    }

}
