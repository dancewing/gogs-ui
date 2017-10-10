import { URLSearchParams, BaseRequestOptions } from '@angular/http';

export const createRequestOption = (req?: any): BaseRequestOptions => {
    const options: BaseRequestOptions = new BaseRequestOptions();
    if (req) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('page', req.page);
        params.set('limit', req.size);
        if (req.sort) {
            params.paramsMap.set('sort', req.sort);
        }
        params.set('q', req.query);

        options.params = params;
    }
    return options;
};
