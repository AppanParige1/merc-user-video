import * as userReadApiService from '../userReadApiService';

describe('user ReadApi Service', () => {
    it('should give all users', ()=>{
        var users = userReadApiService.getAllUsers();
    })

    it('should give particular user details', ()=>{
        var userDetails = userReadApiService.getUserDetails(userId);
    })
});