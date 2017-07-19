import {BrowserModule} from "@angular/platform-browser";
import {Compiler, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {AppComponent} from "./app.component";
import {AppStore} from "angular2-redux-util";
import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import "hammerjs";
import notify from "../appdb/NotifyReducer";
import appdb from "../appdb/AppdbReducer";
import {business} from "../business/BusinessReducer";
import {reseller} from "../reseller/ResellerReducer";
import {adnet} from "../adnet/AdnetReducer";
import {stations} from "../stations/StationsReducer";
import {orders} from "../comps/app1/orders/OrdersReducer";
import {LocalStorage} from "../services/LocalStorage";
import {MsLibModule} from "ng-mslib/dist/mslib.module";
import {ToastModule, ToastOptions} from "ng2-toastr";
import {AgmCoreModule} from "angular2-google-maps/core";
import {SimpleGridModule} from "../comps/simplegridmodule/SimpleGridModule";
import {AccordionModule, AlertModule, ModalModule, BsDropdownModule, BsDropdownConfig} from "ngx-bootstrap";
import {TreeModule, InputTextModule, SelectButtonModule, DropdownModule as DropdownModulePrime} from "primeng/primeng";
import {NgStringPipesModule} from "angular-pipes";
import {routing} from "../App.routes";
import {LoginPanel} from "../comps/entry/LoginPanel";
import {RatesTable} from "../comps/app1/adnet/rates/RatesTable/RatesTable";
import {UsersDetails} from "../comps/app1/users/UsersDetails";
import {Account} from "../comps/app1/account/Account";
import {Whitelabel} from "../comps/app1/whitelabel/Whitelabel";
import {Apps} from "../comps/app1/apps/Apps";
import {App1} from "../comps/app1/App1";
import {Users} from "../comps/app1/users/Users";
import {Adnet} from "../comps/app1/adnet/Adnet";
import {Privileges} from "../comps/app1/privileges/Privileges";
import {Dashboard} from "../comps/app1/dashboard/Dashboard";
import {Logout} from "../comps/logout/Logout";
import {Orders} from "../comps/app1/orders/Orders";
import {Logo} from "../comps/logo/Logo";
import {LogoCompany} from "../comps/logo/LogoCompany";
import {BlurForwarder} from "../comps/blurforwarder/BlurForwarder";
import {Footer} from "../comps/footer/Footer";
import {InputEdit} from "../comps/inputedit/InputEdit";
import {OrderBy} from "../pipes/OrderBy";
import {SortBy} from "../pipes/SortBy";
import {FilterPipe} from "../pipes/FilterPipe";
import {FilterPipeEqual} from "../pipes/FilterPipeNot";
import {AdnetBilling} from "../comps/app1/adnet/billing/AdnetBilling";
import {AdnetConfigTargets} from "../comps/app1/adnet/targets/AdnetConfigTargets";
import {AdnetConfigRates} from "../comps/app1/adnet/rates/AdnetConfigRates";
import {Tabs} from "../comps/tabs/tabs";
import {Tab} from "../comps/tabs/tab";
import {ServerStats} from "../comps/app1/dashboard/ServerStats";
import {ServerAvg} from "../comps/app1/dashboard/ServerAvg";
import {StationsMap} from "../comps/app1/dashboard/StationsMap";
import {StationsGrid} from "../comps/app1/dashboard/StationsGrid";
import {StationDetails} from "../comps/app1/dashboard/StationDetails";
import {ImgLoader} from "../comps/imgloader/ImgLoader";
import {Ng2Highcharts} from "../comps/ng2-highcharts/src/directives/ng2-highcharts";
import {AdnetConfigCustomer} from "../comps/app1/adnet/config/AdnetConfigCustomer";
import {AdnetConfig} from "../comps/app1/adnet/config/AdnetConfig";
import {StationSnapshot} from "../comps/app1/dashboard/StationSnapshot";
import {OrderDetails} from "../comps/app1/orders/OrderDetails";
import {simplelist} from "../comps/simplelist/simplelist";
import {PrivilegesDetails} from "../comps/app1/privileges/PrivilegesDetails";
import {ModalDialog} from "../comps/modaldialog/ModalDialog";
import {Infobox} from "../comps/infobox/Infobox";
import {UserStorage} from "../comps/app1/users/UserStorage";
import {Loading} from "../comps/loading/Loading";
import {Samplelist} from "../comps/app1/users/SampleList";
import {UserInfo} from "../comps/app1/users/UserInfo";
import {AddUser} from "../comps/app1/users/AddUser";
import {AdnetPayment} from "../comps/app1/adnet/billing/AdnetPayment";
import {AdnetTransfer} from "../comps/app1/adnet/billing/AdnetTransfer";
import {ChangePass} from "../comps/app1/users/ChangePass";
import {ChartModule} from "angular2-highcharts";
import {simplelistEditable} from "../comps/simplelist/simplelistEditable";
import {AdnetConfigTargetStations} from "../comps/app1/adnet/targets/AdnetConfigTargetStations";
import {AdnetConfigTargetProps} from "../comps/app1/adnet/targets/AdnetConfigTargetProps";
import {AdnetLocation} from "../comps/app1/adnet/targets/AdnetLocation";
import {MapAddress} from "../comps/mapaddress/MapAddress";
import {AdnetNetwork} from "../comps/app1/adnet/network/AdnetNetwork";
import {AdnetNetworkCustomerSelector} from "../comps/app1/adnet/network/AdnetNetworkCustomerSelector";
import {AdnetNetworkPackageEditor} from "../comps/app1/adnet/network/AdnetNetworkPackageEditor";
import {AdnetNetworkPackageViewer} from "../comps/app1/adnet/network/AdnetNetworkPackageViewer";
import {AdnetNetworkTargetSearch} from "../comps/app1/adnet/network/AdnetNetworkTargetSearch";
import {AdnetNetworkPackageProps} from "../comps/app1/adnet/network/AdnetNetworkPackageProps";
import {AdnetNetworkPackageContent} from "../comps/app1/adnet/network/AdnetNetworkPackageContent";
import {AdnetNetworkPackageContentProps} from "../comps/app1/adnet/network/AdnetNetworkPackageContentProps";
import {AdnetNetworkTarget} from "../comps/app1/adnet/network/AdnetNetworkTarget";
import {AdnetNetworkTargetProps} from "../comps/app1/adnet/network/AdnetNetworkTargetProps";
import {ResourceViewer} from "../comps/resourceviewer/ResourceViewer";
import {AdnetNetworkPackageViewProps} from "../comps/app1/adnet/network/AdnetNetworkPackageViewProps";
import {AdnetNetworkPairProps} from "../comps/app1/adnet/network/AdnetNetworkPairProps";
import {AdnetLoader} from "../comps/app1/adnet/AdnetLoader";
import {InputNumeric} from "../comps/inputnumeric/InputNumeric";
import {InputString} from "../comps/inputstring/InputString";
import {Dropbox} from "../comps/dropbox/Dropbox";
import {AdnetReports} from "../comps/app1/adnet/network/AdnetReports";
import {Twofactor} from "../comps/twofactor/Twofactor";
import {CommBroker} from "../services/CommBroker";
import {AUTH_PROVIDERS} from "../services/AuthService";
import {StoreService} from "../services/StoreService";
import {BusinessAction} from "../business/BusinessAction";
import {ResellerAction} from "../reseller/ResellerAction";
import {AdnetActions} from "../adnet/AdnetActions";
import {OrdersAction} from "../comps/app1/orders/OrdersAction";
import {StationsAction} from "../stations/StationsAction";
import {AppdbAction} from "../appdb/AppdbAction";
import {AdnetResolver} from "../comps/app1/adnet/targets/AdnetResolver";
import {CreditService} from "../services/CreditService";
import {Consts} from "../Conts";
import {ThrottlePipe} from "../pipes/ThrottlePipe";
import {NgMenu} from "../comps/ng-menu/ng-menu";
import {NgMenuItem} from "../comps/ng-menu/ng-menu-item";
import {AutoLogin} from "../comps/entry/AutoLogin";
import {NgmslibService} from "ng-mslib";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Ng2Highmaps} from "../comps/ng2-highcharts/src/directives/ng2-highmaps";
import {Ng2Highstocks} from "../comps/ng2-highcharts/src/directives/ng2-highstocks";
import {StringJSV2Pipe} from "../pipes/stringjsv2.pipe";
import {Lib} from "../Lib";
import {NgControlOptionsDirective} from "../comps/ngcontroloptions/NgControlOptionsDirective";

export enum ServerMode {
    CLOUD,
    PRIVATE,
    HYBRID
}

export function appStoreFactory() {
    const reducers = combineReducers({
        notify,
        appdb,
        business,
        stations,
        reseller,
        adnet,
        orders
    });
    const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware);
    const isDebug = window['devToolsExtension']
    const applyDevTools = () => isDebug ? window['devToolsExtension']() : f => f;
    const enhancers: any = compose(middlewareEnhancer, applyDevTools());
    const store = createStore(reducers, enhancers);
    return new AppStore(store);
}


export var providing = [CommBroker, AUTH_PROVIDERS, BsDropdownConfig, NgmslibService,
    {
        provide: AppStore, useFactory: appStoreFactory
    },
    {
        provide: StoreService,
        useClass: StoreService
    },
    {
        provide: BusinessAction,
        useClass: BusinessAction
    },
    {
        provide: ResellerAction,
        useClass: ResellerAction
    },
    {
        provide: AdnetActions,
        useClass: AdnetActions
    },
    {
        provide: OrdersAction,
        useClass: OrdersAction
    },
    {
        provide: StationsAction,
        useClass: StationsAction
    },
    {
        provide: AppdbAction,
        useClass: AppdbAction
    },
    {
        provide: AdnetResolver,
        useClass: AdnetResolver
    },
    {
        provide: CreditService,
        useClass: CreditService
    },
    {
        provide: LocalStorage,
        useClass: LocalStorage
    },
    {
        provide: CommBroker,
        useClass: CommBroker
    },
    {
        provide: Consts,
        useClass: Consts
    },
    {
        provide: "OFFLINE_ENV",
        useValue: false
    }];


var decelerations = [AppComponent, RatesTable, UsersDetails, AutoLogin, LoginPanel, Account, Whitelabel, Apps, App1, Users, Adnet, Privileges, Dashboard, Logout, Orders, Logo,
    LogoCompany, Footer, BlurForwarder, InputEdit, OrderBy, SortBy, FilterPipe, FilterPipeEqual, StringJSV2Pipe, AdnetBilling, AdnetConfigTargets, AdnetConfigRates, Tabs, Tab, ServerStats, ServerAvg,
    StationsMap, StationsGrid, StationDetails, ImgLoader, Ng2Highcharts, Ng2Highmaps, Ng2Highstocks, AdnetConfigCustomer, AdnetConfig, StationSnapshot, OrderDetails, simplelist, PrivilegesDetails, ModalDialog, Infobox,
    UserStorage, Loading, Samplelist, UserInfo, AddUser, AdnetPayment, AdnetTransfer, ChangePass, simplelistEditable, AdnetConfigTargetStations, NgControlOptionsDirective,
    AdnetConfigTargetProps, AdnetLocation, MapAddress, AdnetNetwork, AdnetNetworkCustomerSelector, AdnetNetworkPackageEditor, AdnetNetworkPackageViewer, AdnetNetworkTargetSearch,
    AdnetNetworkPackageProps, AdnetNetworkPackageContent, AdnetNetworkPackageContentProps, AdnetNetworkTarget, AdnetNetworkTargetProps, ResourceViewer, AdnetNetworkPackageViewProps,
    AdnetNetworkPairProps, AdnetLoader, InputNumeric, InputString, Dropbox, Twofactor, AdnetReports, ThrottlePipe, NgMenu, NgMenuItem];

@NgModule({
    declarations: [decelerations],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        Ng2Bs3ModalModule,
        HttpModule,
        ChartModule,
        ToastModule.forRoot({
            animate: 'flyRight',
            positionClass: 'toast-bottom-right',
            toastLife: 10000,
            showCloseButton: true,
            maxShown: 5,
            newestOnTop: true,
            enableHTML: true,
            dismiss: 'auto',
            messageClass: "",
            titleClass: ""
        }),    
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAGD7EQugVG8Gq8X3vpyvkZCnW4E4HONLI'
        }),
        MsLibModule,
        SimpleGridModule.forRoot(),
        AlertModule.forRoot(),
        BsDropdownModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        JsonpModule,
        TreeModule,
        NgStringPipesModule,
        InputTextModule,
        SelectButtonModule,
        InputTextModule,
        DropdownModulePrime,
        routing,
    ],
    providers: [providing],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private compiler: Compiler, private ngmslibService:NgmslibService) {
        this.ngmslibService.globalizeStringJS();
        console.log(StringJS('app-loaded-and-ready').humanize().s);
        Lib.Con(`running in dev mode: ${Lib.DevMode()}`);
        Lib.Con(`App in ${(compiler instanceof Compiler) ? 'AOT' : 'JIT'} mode`);
    }

}

// https://github.com/angular/angular-cli/issues/3706#issuecomment-268868237
// ToastModule.forRoot(options),
// "files": ["main"],


