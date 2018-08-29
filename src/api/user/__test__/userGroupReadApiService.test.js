import * as userGroupReadApiService from '../userGroupReadApiService';

describe('user ReadApi Service', () => {
    it('should give all users', ()=>{
        var userGroupLists = userGroupReadApiService.getAllUserGroups();
    })
});