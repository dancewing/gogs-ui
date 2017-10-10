import {User} from '../user/user.model';

export class Repository {
    public id?: any;
    public name?: string;
    public full_name?: string;
    public description?: string;
    public stars_count?: any;
    public forks_count: any;
    public watchers_count: any;
    public open_issues_count: any;
    public owner: User;
    constructor(
        id?: any,
        login?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        activated?: Boolean,
        langKey?: string,
        authorities?: any[],
        createdBy?: string,
        createdDate?: Date,
        lastModifiedBy?: string,
        lastModifiedDate?: Date,
        password?: string
    ) {
    }
}
