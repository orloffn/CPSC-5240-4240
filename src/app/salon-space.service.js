"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SalonSpaceService = void 0;
var core_1 = require("@angular/core");
var SalonSpaceService = /** @class */ (function () {
    function SalonSpaceService(httpClient) {
        this.httpClient = httpClient;
        // hostUrl:string = 'http://localhost:8080/';
        //  hostUrl:string = 'https://salonspace.azurewebsites.net/';
        this.hostUrl = '/';
    }
    SalonSpaceService.prototype.getTechnicianLists = function () {
        return this.httpClient.get(this.hostUrl + 'app/technician'); // + 'json/lists.json'
    };
    SalonSpaceService.prototype.getTechnicianDetails = function (technicianID) {
        return this.httpClient.get(this.hostUrl + 'app/technician/' + technicianID); // + 'json/lists.json'
    };
    SalonSpaceService.prototype.getTechnicianRatings = function (technicianID) {
        return this.httpClient.get(this.hostUrl + 'app/technician-rating/' + technicianID);
    };
    SalonSpaceService.prototype.getTechnicianSalons = function (technicianID) {
        return this.httpClient.get(this.hostUrl + 'app/technician-salon/' + technicianID);
    };
    SalonSpaceService.prototype.getRatings = function () {
        return this.httpClient.get(this.hostUrl + 'app/rating');
    };
    SalonSpaceService = __decorate([
        core_1.Injectable()
    ], SalonSpaceService);
    return SalonSpaceService;
}());
exports.SalonSpaceService = SalonSpaceService;
