import { notification, Modal } from "ant-design-vue";
import { createRouter, createWebHistory } from 'vue-router';
import axios from "axios";
import { find, includes, remove, replace } from "lodash-es";
import store from '../store';

import AuthRoutes from './auth';
import DashboardRoutes from './dashboard';
import ProductRoutes from './products';
import StockRoutes from './stocks';
import ExpensesRoutes from './expenses';
import UserRoutes from './users';
import SettingRoutes from './settings';
import ReportsRoutes from './reports';
import SetupAppRoutes from './setupApp';
import { checkUserPermission } from '../../common/scripts/functions';

import FrontRoutes from './front';
import WebsiteSetupRoutes from './websiteSetup';


const appType = window.config.app_type;
const allActiveModules = window.config.modules;
const allInstalledModules = window.config.installed_modules;
var allModulesRoutes = [];
const checkAllRoutes = (currentModuleRoutes, allModule) => {
    currentModuleRoutes.forEach((eachRoute) => {

        if (eachRoute.meta) {
            eachRoute.meta.appModule = allModule;
        }

        if (eachRoute.children) {
            var allChildrenRoues = eachRoute.children;

            checkAllRoutes(allChildrenRoues, allModule);
        }
    })
}

allInstalledModules.forEach((allModule) => {
    const allModuleName = allModule.verified_name;
    const moduleRoute = require(`../../../../Modules/${allModuleName}/Resources/assets/js/router/index`).default;
    var currentModuleRoutes = [...moduleRoute];

    checkAllRoutes(currentModuleRoutes, allModuleName);

    allModulesRoutes.push(...currentModuleRoutes);
});

// Including SuperAdmin Routes
var superAdminRoutes = [];
var subscriptionRoutes = [];
const superadminRouteFilePath = appType == 'saas' ? 'superadmin' : '';
if (appType == 'saas') {
    const newSuperAdminRoute = require(`../../${superadminRouteFilePath}/router/index`).default
    superAdminRoutes = [...newSuperAdminRoute];

    const newsubscriptionRoute = require(`../../${superadminRouteFilePath}/router/admin/index`).default
    subscriptionRoutes = [...newsubscriptionRoute];
}

const isAdminCompanySetupCorrect = () => {
    var appSetting = store.state.auth.appSetting;

    if (appSetting.x_currency_id == null || appSetting.x_warehouse_id == null) {
        return false;
    }

    return true;
}

const isSuperAdminCompanySetupCorrect = () => {
    var appSetting = store.state.auth.appSetting;

    if (appSetting.x_currency_id == null || appSetting.white_label_completed == false) {
        return false;
    }

    return true;
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...allModulesRoutes,
        ...FrontRoutes,
        {
            path: '',
            redirect: '/admin/login'
        },
        ...WebsiteSetupRoutes,
        ...ProductRoutes,
        ...StockRoutes,
        ...ExpensesRoutes,
        ...AuthRoutes,
        ...DashboardRoutes,
        ...UserRoutes,
        ...ReportsRoutes,
        ...SettingRoutes,
        ...subscriptionRoutes,
        ...superAdminRoutes,
        ...SetupAppRoutes,
        {
            path: "/:catchAll(.*)",
            redirect: '/'
        }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

var _0x599e0d = _0x2434; function _0x4a53() { var _0x434775 = ['beforeEach', 'admin.setup_app.index', 'setup_app', 'meta', 'module', '5289978PLzEZP', 'admin.dashboard.index', 'admin', 'Don\x27t\x20try\x20to\x20null\x20it...\x20otherwise\x20it\x20may\x20cause\x20error\x20on\x20your\x20server.', 'https://', 'saas', '3251040WibUSC', 'state', 'auth/updateAppChecking', 'length', '649208oDnBFR', 'Error!', 'location', 'front/isLoggedIn', 'is_superadmin', 'superadmin.dashboard.index', 'admin.settings.modules.index', 'error', 'user', 'auth', 'post', 'config', 'name', '62XUDHvI', '56180HxNXgx', 'permission', '.com/', '12106gwqtTT', 'verified_name', 'front/logout', 'appModule', 'push', 'superadmin', 'envato', 'data', 'admin.login', 'codeifly', '1806WQWlaL', 'bottomRight', 'commit', 'verify.main', 'value', '26184HkLJte', 'auth/isLoggedIn', 'auth/logout', 'superadmin.setup_app.index', 'requireUnauth', 'auth/updateActiveModules', 'catch', '.settings.modules.index', 'modules_not_registered', '7917075peuEKW', 'modules', 'dispatch', 'Error', 'getters', 'Modules\x20Not\x20Verified', 'main_product_registered', 'forEach', 'requireAuth', '583aPeKas', 'is_main_product_valid', 'front.homepage', '9phYRSM', 'charAt', 'stock']; _0x4a53 = function () { return _0x434775; }; return _0x4a53(); } (function (_0x1da8bc, _0x18d652) { var _0x3466e3 = _0x2434, _0x594a22 = _0x1da8bc(); while (!![]) { try { var _0x15bd4a = parseInt(_0x3466e3(0x1fd)) / 0x1 * (parseInt(_0x3466e3(0x201)) / 0x2) + parseInt(_0x3466e3(0x1de)) / 0x3 * (-parseInt(_0x3466e3(0x1f0)) / 0x4) + -parseInt(_0x3466e3(0x1ec)) / 0x5 + parseInt(_0x3466e3(0x1e6)) / 0x6 + parseInt(_0x3466e3(0x20b)) / 0x7 * (-parseInt(_0x3466e3(0x210)) / 0x8) + parseInt(_0x3466e3(0x1d2)) / 0x9 + parseInt(_0x3466e3(0x1fe)) / 0xa * (parseInt(_0x3466e3(0x1db)) / 0xb); if (_0x15bd4a === _0x18d652) break; else _0x594a22['push'](_0x594a22['shift']()); } catch (_0x27d0c2) { _0x594a22['push'](_0x594a22['shift']()); } } }(_0x4a53, 0x6e8de)); function _0x2434(_0x5b31b7, _0x15cbda) { var _0x4a5320 = _0x4a53(); return _0x2434 = function (_0x243415, _0x4a5962) { _0x243415 = _0x243415 - 0x1d1; var _0x8c1a44 = _0x4a5320[_0x243415]; return _0x8c1a44; }, _0x2434(_0x5b31b7, _0x15cbda); } const checkLogFog = (_0x1050d3, _0x55f268, _0x29e3ce) => { var _0x36bc77 = _0x2434; const _0x2f009b = _0x1050d3[_0x36bc77(0x1fc)]['split']('.'); if (_0x2f009b['length'] > 0x0 && _0x2f009b[0x0] == _0x36bc77(0x206)) { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1da)] && store[_0x36bc77(0x1d6)]['auth/isLoggedIn'] && store['state'][_0x36bc77(0x1f9)][_0x36bc77(0x1f8)] && !store['state'][_0x36bc77(0x1f9)][_0x36bc77(0x1f8)][_0x36bc77(0x1f4)]) store[_0x36bc77(0x1d4)](_0x36bc77(0x212)), _0x29e3ce({ 'name': 'admin.login' }); else { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1da)] && isSuperAdminCompanySetupCorrect() == ![] && _0x2f009b[0x1] != _0x36bc77(0x1e3)) _0x29e3ce({ 'name': _0x36bc77(0x213) }); else { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1da)] && !store[_0x36bc77(0x1d6)][_0x36bc77(0x211)]) _0x29e3ce({ 'name': _0x36bc77(0x209) }); else _0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x214)] && store[_0x36bc77(0x1d6)][_0x36bc77(0x211)] ? _0x29e3ce({ 'name': _0x36bc77(0x1f5) }) : _0x29e3ce(); } } } else { if (_0x2f009b[_0x36bc77(0x1ef)] > 0x0 && _0x2f009b[0x0] == _0x36bc77(0x1e8) && store[_0x36bc77(0x1ed)][_0x36bc77(0x1f9)] && store['state'][_0x36bc77(0x1f9)]['user'] && store['state'][_0x36bc77(0x1f9)]['user'][_0x36bc77(0x1f4)]) _0x29e3ce({ 'name': _0x36bc77(0x1f5) }); else { if (_0x2f009b[_0x36bc77(0x1ef)] > 0x0 && _0x2f009b[0x0] == _0x36bc77(0x1e8)) { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1da)] && !store['getters'][_0x36bc77(0x211)]) store[_0x36bc77(0x1d4)]('auth/logout'), _0x29e3ce({ 'name': _0x36bc77(0x209) }); else { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1da)] && isAdminCompanySetupCorrect() == ![] && _0x2f009b[0x1] != 'setup_app') _0x29e3ce({ 'name': _0x36bc77(0x1e2) }); else { if (_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x214)] && store[_0x36bc77(0x1d6)][_0x36bc77(0x211)]) _0x29e3ce({ 'name': _0x36bc77(0x1e7) }); else { var _0x4df272 = _0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1ff)]; _0x2f009b[0x1] == _0x36bc77(0x1e0) && (_0x4df272 = replace(_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1ff)](_0x1050d3), '-', '_')), !_0x1050d3[_0x36bc77(0x1e4)][_0x36bc77(0x1ff)] || checkUserPermission(_0x4df272, store[_0x36bc77(0x1ed)][_0x36bc77(0x1f9)][_0x36bc77(0x1f8)]) ? _0x29e3ce() : _0x29e3ce({ 'name': 'admin.dashboard.index' }); } } } } else _0x2f009b[_0x36bc77(0x1ef)] > 0x0 && _0x2f009b[0x0] == 'front' ? _0x1050d3['meta'][_0x36bc77(0x1da)] && !store['getters'][_0x36bc77(0x1f3)] ? (store[_0x36bc77(0x1d4)](_0x36bc77(0x203)), _0x29e3ce({ 'name': _0x36bc77(0x1dd) })) : _0x29e3ce() : _0x29e3ce(); } } }, mainProductName = window[_0x599e0d(0x1fb)]['product_name']; var modArray = [{ 'verified_name': mainProductName, 'value': ![] }]; allActiveModules['forEach'](_0x4ea803 => { var _0x3f5b16 = _0x599e0d; modArray[_0x3f5b16(0x205)]({ 'verified_name': _0x4ea803, 'value': ![] }); }); const isAnyModuleNotVerified = () => { var _0x4d3744 = _0x599e0d; return find(modArray, [_0x4d3744(0x20f), ![]]); }, isCheckUrlValid = (_0x49145b, _0x51b1db, _0x1c9084) => { var _0x2bc56e = _0x599e0d; if (_0x49145b[_0x2bc56e(0x1ef)] != 0x5 || _0x51b1db[_0x2bc56e(0x1ef)] != 0x8 || _0x1c9084['length'] != 0x6) return ![]; else { if (_0x49145b[_0x2bc56e(0x1df)](0x3) != 'c' || _0x49145b['charAt'](0x4) != 'k' || _0x49145b[_0x2bc56e(0x1df)](0x0) != 'c' || _0x49145b['charAt'](0x1) != 'h' || _0x49145b[_0x2bc56e(0x1df)](0x2) != 'e') return ![]; else { if (_0x51b1db[_0x2bc56e(0x1df)](0x2) != 'd' || _0x51b1db[_0x2bc56e(0x1df)](0x3) != 'e' || _0x51b1db[_0x2bc56e(0x1df)](0x4) != 'i' || _0x51b1db[_0x2bc56e(0x1df)](0x0) != 'c' || _0x51b1db[_0x2bc56e(0x1df)](0x1) != 'o' || _0x51b1db[_0x2bc56e(0x1df)](0x5) != 'f' || _0x51b1db[_0x2bc56e(0x1df)](0x6) != 'l' || _0x51b1db[_0x2bc56e(0x1df)](0x7) != 'y') return ![]; else return _0x1c9084[_0x2bc56e(0x1df)](0x2) != 'v' || _0x1c9084[_0x2bc56e(0x1df)](0x3) != 'a' || _0x1c9084[_0x2bc56e(0x1df)](0x0) != 'e' || _0x1c9084[_0x2bc56e(0x1df)](0x1) != 'n' || _0x1c9084['charAt'](0x4) != 't' || _0x1c9084['charAt'](0x5) != 'o' ? ![] : !![]; } } }; router[_0x599e0d(0x1e1)]((_0x18484d, _0x52b5c1, _0x5c31a8) => { var _0xba0429 = _0x599e0d, _0x3e4941 = _0xba0429(0x207), _0x35358a = _0xba0429(0x20a), _0x293618 = 'check', _0x3ced77 = { 'modules': window[_0xba0429(0x1fb)][_0xba0429(0x1d3)] }; _0x18484d[_0xba0429(0x1e4)] && _0x18484d[_0xba0429(0x1e4)][_0xba0429(0x204)] && (_0x3ced77[_0xba0429(0x1e5)] = _0x18484d[_0xba0429(0x1e4)]['appModule'], !includes(allActiveModules, _0x18484d['meta'][_0xba0429(0x204)]) && _0x5c31a8({ 'name': 'admin.login' })); if (!isCheckUrlValid(_0x293618, _0x35358a, _0x3e4941)) Modal[_0xba0429(0x1f7)]({ 'title': _0xba0429(0x1f1), 'content': _0xba0429(0x1e9) }); else { if (isAnyModuleNotVerified() !== undefined && _0x18484d[_0xba0429(0x1fc)] && _0x18484d[_0xba0429(0x1fc)] != _0xba0429(0x20e) && _0x18484d[_0xba0429(0x1fc)] != _0xba0429(0x1f6)) { var _0x3e89ce = _0xba0429(0x1ea) + _0x3e4941 + '.' + _0x35358a + _0xba0429(0x200) + _0x293618; axios({ 'method': _0xba0429(0x1fa), 'url': _0x3e89ce, 'data': { 'verified_name': mainProductName, ..._0x3ced77, 'domain': window[_0xba0429(0x1f2)]['host'] }, 'timeout': 0xfa0 })['then'](_0x424282 => { var _0x33110b = _0xba0429; store[_0x33110b(0x20d)](_0x33110b(0x1ee), ![]); const _0x26652e = _0x424282[_0x33110b(0x208)]; _0x26652e['main_product_registered'] && (modArray[_0x33110b(0x1d9)](_0xe5f13f => { var _0x3bcc1d = _0x33110b; _0xe5f13f[_0x3bcc1d(0x202)] == mainProductName && (_0xe5f13f['value'] = !![]); }), modArray[_0x33110b(0x1d9)](_0x1bd18d => { var _0x5147a4 = _0x33110b; if (includes(_0x26652e[_0x5147a4(0x1d1)], _0x1bd18d[_0x5147a4(0x202)]) || includes(_0x26652e['multiple_registration_modules'], _0x1bd18d[_0x5147a4(0x202)])) { if (_0x1bd18d[_0x5147a4(0x202)] != mainProductName) { var _0x53f1c7 = [...window[_0x5147a4(0x1fb)]['modules']], _0x1e1bde = remove(_0x53f1c7, function (_0x5be67b) { return _0x5be67b != _0x1bd18d['verified_name']; }); store['commit'](_0x5147a4(0x215), _0x1e1bde), window['config'][_0x5147a4(0x1d3)] = _0x1e1bde; } _0x1bd18d[_0x5147a4(0x20f)] = ![]; } else _0x1bd18d[_0x5147a4(0x20f)] = !![]; })); if (!_0x26652e[_0x33110b(0x1dc)]) { } else { if (!_0x26652e[_0x33110b(0x1d8)] || _0x26652e['multiple_registration']) _0x5c31a8({ 'name': _0x33110b(0x20e) }); else { if (_0x18484d['meta'] && _0x18484d[_0x33110b(0x1e4)][_0x33110b(0x204)] && find(modArray, { 'verified_name': _0x18484d[_0x33110b(0x1e4)][_0x33110b(0x204)], 'value': ![] }) !== undefined) { notification[_0x33110b(0x1f7)]({ 'placement': _0x33110b(0x20c), 'message': _0x33110b(0x1d5), 'description': _0x33110b(0x1d7) }); const _0x4a850b = appType == _0x33110b(0x1eb) ? _0x33110b(0x206) : _0x33110b(0x1e8); _0x5c31a8({ 'name': _0x4a850b + _0x33110b(0x217) }); } else checkLogFog(_0x18484d, _0x52b5c1, _0x5c31a8); } } })[_0xba0429(0x216)](_0x5f1d12 => { var _0x16dd3c = _0xba0429; modArray[_0x16dd3c(0x1d9)](_0x53433c => { var _0x442bd2 = _0x16dd3c; _0x53433c[_0x442bd2(0x20f)] = !![]; }), store[_0x16dd3c(0x20d)](_0x16dd3c(0x1ee), ![]), _0x5c31a8(); }); } else checkLogFog(_0x18484d, _0x52b5c1, _0x5c31a8); } });

export default router
