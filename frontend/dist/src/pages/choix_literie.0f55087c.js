// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4Gteg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "eb85c0750f55087c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gZIR0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bancCoffreWebp = require("../img/literie/andre_renault/banc_de_coffre/Banc-coffre.webp");
var _bancCoffreWebpDefault = parcelHelpers.interopDefault(_bancCoffreWebp);
var _fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur-et-batterie-integree.webp");
var _fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurEtBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp);
var _fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur.webp");
var _fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxCuirNoirTetiereElectriqueAvecReleveurWebp);
var _fauteuilRelaxCuirNoirTetiereElectriqueBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-batterie-integree.webp");
var _fauteuilRelaxCuirNoirTetiereElectriqueBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxCuirNoirTetiereElectriqueBatterieIntegreeWebp);
var _fauteuilRelaxCuirNoirTetiereElectriqueBatterieNonIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-batterie-non-integree.webp");
var _fauteuilRelaxCuirNoirTetiereElectriqueBatterieNonIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxCuirNoirTetiereElectriqueBatterieNonIntegreeWebp);
var _fauteuilRelaxTissuTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-avec-releveur-et-batterie-integree.webp");
var _fauteuilRelaxTissuTetiereElectriqueAvecReleveurEtBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxTissuTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp);
var _fauteuilRelaxTissuTetiereElectriqueAvecReleveurWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-avec-releveur.webp");
var _fauteuilRelaxTissuTetiereElectriqueAvecReleveurWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxTissuTetiereElectriqueAvecReleveurWebp);
var _fauteuilRelaxTissuTetiereElectriqueBatterieNonIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-batterie-non-integree.webp");
var _fauteuilRelaxTissuTetiereElectriqueBatterieNonIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxTissuTetiereElectriqueBatterieNonIntegreeWebp);
var _fauteuilRelaxTissuTetiereElectriqueEtBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-et-batterie-integree.webp");
var _fauteuilRelaxTissuTetiereElectriqueEtBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxTissuTetiereElectriqueEtBatterieIntegreeWebp);
var _fauteuilRelaxVeloursTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-tetiere-electrique-avec-releveur-et-batterie-integree.webp");
var _fauteuilRelaxVeloursTetiereElectriqueAvecReleveurEtBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxVeloursTetiereElectriqueAvecReleveurEtBatterieIntegreeWebp);
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueAvecReleveurWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-avec-releveur.webp");
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueAvecReleveurWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxVeloursTurquoiseTetiereElectriqueAvecReleveurWebp);
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueBatterieNonIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-batterie-non-integree.webp");
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueBatterieNonIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxVeloursTurquoiseTetiereElectriqueBatterieNonIntegreeWebp);
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueEtBatterieIntegreeWebp = require("../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-et-batterie-integree.webp");
var _fauteuilRelaxVeloursTurquoiseTetiereElectriqueEtBatterieIntegreeWebpDefault = parcelHelpers.interopDefault(_fauteuilRelaxVeloursTurquoiseTetiereElectriqueEtBatterieIntegreeWebp);
var _matelasLatexAngelinaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-angelina-club-line.webp");
var _matelasLatexAngelinaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasLatexAngelinaClubLineWebp);
var _matelasLatexExquisDreamsWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-exquis-dreams.webp");
var _matelasLatexExquisDreamsWebpDefault = parcelHelpers.interopDefault(_matelasLatexExquisDreamsWebp);
var _matelasLatexLeticiaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-leticia-club-line.webp");
var _matelasLatexLeticiaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasLatexLeticiaClubLineWebp);
var _matelasLatexMarylandClassicWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-maryland-classic.webp");
var _matelasLatexMarylandClassicWebpDefault = parcelHelpers.interopDefault(_matelasLatexMarylandClassicWebp);
var _matelasLatexNomadeClassicWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-nomade-classic.webp");
var _matelasLatexNomadeClassicWebpDefault = parcelHelpers.interopDefault(_matelasLatexNomadeClassicWebp);
var _matelasPlumeWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-plume.webp");
var _matelasPlumeWebpDefault = parcelHelpers.interopDefault(_matelasPlumeWebp);
var _matelasSeductionWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-seduction.webp");
var _matelasSeductionWebpDefault = parcelHelpers.interopDefault(_matelasSeductionWebp);
var _matelasTresorDreamsAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-tresor-dreams-andre-renault.webp");
var _matelasTresorDreamsAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasTresorDreamsAndreRenaultWebp);
var _matelasMousseAlbatrosClassicWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-albatros-classic.webp");
var _matelasMousseAlbatrosClassicWebpDefault = parcelHelpers.interopDefault(_matelasMousseAlbatrosClassicWebp);
var _matelasMousseAquilaClassicWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-aquila-classic.webp");
var _matelasMousseAquilaClassicWebpDefault = parcelHelpers.interopDefault(_matelasMousseAquilaClassicWebp);
var _matelasMousseCarolinaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-carolina-club-line.webp");
var _matelasMousseCarolinaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasMousseCarolinaClubLineWebp);
var _matelasMousseMagnoliaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-magnolia-club-line.webp");
var _matelasMousseMagnoliaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasMousseMagnoliaClubLineWebp);
var _matelasMousseNuageDreamsWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-nuage-dreams.webp");
var _matelasMousseNuageDreamsWebpDefault = parcelHelpers.interopDefault(_matelasMousseNuageDreamsWebp);
var _matelasRessourceWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-ressource.webp");
var _matelasRessourceWebpDefault = parcelHelpers.interopDefault(_matelasRessourceWebp);
var _matelasSphereWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-sphere.webp");
var _matelasSphereWebpDefault = parcelHelpers.interopDefault(_matelasSphereWebp);
var _matelasDiademeWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-diademe.webp");
var _matelasDiademeWebpDefault = parcelHelpers.interopDefault(_matelasDiademeWebp);
var _matelasHybridFirmCuremWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-hybrid-firm-curem.webp");
var _matelasHybridFirmCuremWebpDefault = parcelHelpers.interopDefault(_matelasHybridFirmCuremWebp);
var _matelasHybridSoftCuremWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-hybrid-soft-curem.webp");
var _matelasHybridSoftCuremWebpDefault = parcelHelpers.interopDefault(_matelasHybridSoftCuremWebp);
var _matelasMousseAlchimieDreamsWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-mousse-alchimie-dreams.webp");
var _matelasMousseAlchimieDreamsWebpDefault = parcelHelpers.interopDefault(_matelasMousseAlchimieDreamsWebp);
var _matelasMousseDelicatesseDreamsWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-mousse-delicatesse-dreams.webp");
var _matelasMousseDelicatesseDreamsWebpDefault = parcelHelpers.interopDefault(_matelasMousseDelicatesseDreamsWebp);
var _matelasPaolaClubLineAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-paola-club-line-andre-renault.webp");
var _matelasPaolaClubLineAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasPaolaClubLineAndreRenaultWebp);
var _matelasParadisDreamsAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-paradis-dreams-andre-renault.webp");
var _matelasParadisDreamsAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasParadisDreamsAndreRenaultWebp);
var _matelasParureWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-parure.webp");
var _matelasParureWebpDefault = parcelHelpers.interopDefault(_matelasParureWebp);
var _matelasRefletDreamsAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-reflet-dreams-andre-renault.webp");
var _matelasRefletDreamsAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasRefletDreamsAndreRenaultWebp);
var _matelasRessortsHeloisaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-heloisa-club-line.webp");
var _matelasRessortsHeloisaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasRessortsHeloisaClubLineWebp);
var _matelasRessortsHoriaClubLineWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-horia-club-line.webp");
var _matelasRessortsHoriaClubLineWebpDefault = parcelHelpers.interopDefault(_matelasRessortsHoriaClubLineWebp);
var _matelasRessortsHybridAirArHybridWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-air-ar-hybrid.webp");
var _matelasRessortsHybridAirArHybridWebpDefault = parcelHelpers.interopDefault(_matelasRessortsHybridAirArHybridWebp);
var _matelasRessortsHybridInArHybridWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-in-ar-hybrid.webp");
var _matelasRessortsHybridInArHybridWebpDefault = parcelHelpers.interopDefault(_matelasRessortsHybridInArHybridWebp);
var _matelasRessortsHybridPulseArHybridWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-pulse-ar-hybrid.webp");
var _matelasRessortsHybridPulseArHybridWebpDefault = parcelHelpers.interopDefault(_matelasRessortsHybridPulseArHybridWebp);
var _matelasRessortsPelicanIconeAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-pelican-icone-andre-renault.webp");
var _matelasRessortsPelicanIconeAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasRessortsPelicanIconeAndreRenaultWebp);
var _matelasRessortsRossignolClassicWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-rossignol-classic.webp");
var _matelasRessortsRossignolClassicWebpDefault = parcelHelpers.interopDefault(_matelasRessortsRossignolClassicWebp);
var _matelasRioIconeAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-rio-icone-andre-renault.webp");
var _matelasRioIconeAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasRioIconeAndreRenaultWebp);
var _matelasRosaClubLineAndreRenaultWebp = require("../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-rosa-club-line-andre-renault.webp");
var _matelasRosaClubLineAndreRenaultWebpDefault = parcelHelpers.interopDefault(_matelasRosaClubLineAndreRenaultWebp);
// Sélectionner tous les divs de sélection Renault
let renault = document.getElementById("selection_renault");
let renaultBtn = document.querySelectorAll("button");
let spans = document.querySelectorAll(".span_display");
let displayed = false;
// Ajouter un écouteur d'événement de clic à chaque div
renault.addEventListener("click", function() {
    // Basculer la classe sur chaque bouton
    renaultBtn.forEach((button)=>{
        button.classList.remove("hidden");
        button.classList.toggle("button-active");
        if (button.classList.contains("button-active")) button.classList.remove("hidden");
        else button.classList.add("hidden");
        button.addEventListener("click", function() {
            if (displayed) {
                displayed = false;
                hideFurnitureData();
                spans.forEach((span)=>{
                    span.innerHTML = "voir";
                });
            } else {
                displayed = true;
                // Vérifier quel bouton est cliqué
                if (button.id === "bancs") {
                    // Appeler une fonction spécifique pour le bouton 1
                    spans.forEach((span)=>{
                        if (span.parentNode.id !== "bancs") span.innerHTML = "voir";
                        else span.innerHTML = "cacher";
                    });
                    displayCoffreRenault();
                } else if (button.id === "fauteuils") {
                    // Appeler une fonction spécifique pour le bouton 2
                    spans.forEach((span)=>{
                        if (span.parentNode.id !== "fauteuils") span.innerHTML = "voir";
                        else span.innerHTML = "cacher";
                    });
                    displayFauteuilsRenault();
                } else if (button.id === "matelas_latex") {
                    // Appeler une fonction spécifique pour le bouton 2
                    spans.forEach((span)=>{
                        if (span.parentNode.id !== "matelas_latex") span.innerHTML = "voir";
                        else span.innerHTML = "cacher";
                    });
                    displayMatlatexRenault();
                } else if (button.id === "matelas_ferme") {
                    // Appeler une fonction spécifique pour le bouton 2
                    spans.forEach((span)=>{
                        if (span.parentNode.id !== "matelas_ferme") span.innerHTML = "voir";
                        else span.innerHTML = "cacher";
                    });
                    displayMatFermeRenault();
                } else {
                    // Appeler une fonction par défaut
                    spans.forEach((span)=>{
                        span.innerHTML = "voir";
                    });
                    hideFurnitureData();
                }
            }
        });
    });
    hideFurnitureData();
});
function displayCoffreRenault() {
    const furnitureContainer = document.getElementById("furniture-container");
    bancRenault.forEach((furniture)=>{
        const furnitureElement = document.createElement("div");
        furnitureElement.classList.add("furniture-item");
        const furnitureImage = document.createElement("img");
        furnitureImage.src = furniture.imageUrl;
        furnitureImage.alt = furniture.famille;
        // make furniture image clickable
        furnitureImage.style.cursor = "pointer";
        furnitureImage.onclick = function() {
            if (furnitureImage.requestFullscreen) furnitureImage.requestFullscreen();
            else if (furnitureImage.msRequestFullscreen) furnitureImage.msRequestFullscreen();
            else if (furnitureImage.mozRequestFullScreen) furnitureImage.mozRequestFullScreen();
            else if (furnitureImage.webkitRequestFullscreen) furnitureImage.webkitRequestFullscreen();
            furnitureImage.addEventListener("click", (event)=>{
                if (document.fullscreenElement) document.exitFullscreen();
            });
        };
        const furnitureInfo = document.createElement("div");
        furnitureInfo.innerHTML = `<strong>Reference:</strong> ${furniture.reference}<br>
                                <strong>famille:</strong> ${furniture.famille}`;
        furnitureElement.appendChild(furnitureImage);
        furnitureElement.appendChild(furnitureInfo);
        furnitureContainer.appendChild(furnitureElement);
    });
}
function displayFauteuilsRenault() {
    const furnitureContainer = document.getElementById("furniture-container");
    fauteuilsRenault.forEach((furniture)=>{
        const furnitureElement = document.createElement("div");
        furnitureElement.classList.add("furniture-item");
        const furnitureImage = document.createElement("img");
        furnitureImage.src = furniture.imageUrl;
        furnitureImage.alt = furniture.famille;
        // make furniture image clickable
        furnitureImage.style.cursor = "pointer";
        furnitureImage.onclick = function() {
            if (furnitureImage.requestFullscreen) furnitureImage.requestFullscreen();
            else if (furnitureImage.msRequestFullscreen) furnitureImage.msRequestFullscreen();
            else if (furnitureImage.mozRequestFullScreen) furnitureImage.mozRequestFullScreen();
            else if (furnitureImage.webkitRequestFullscreen) furnitureImage.webkitRequestFullscreen();
            furnitureImage.addEventListener("click", (event)=>{
                if (document.fullscreenElement) document.exitFullscreen();
            });
        };
        const furnitureInfo = document.createElement("div");
        furnitureInfo.innerHTML = `<strong>Reference:</strong> ${furniture.reference}<br>
                                <strong>famille:</strong> ${furniture.famille}`;
        furnitureElement.appendChild(furnitureImage);
        furnitureElement.appendChild(furnitureInfo);
        furnitureContainer.appendChild(furnitureElement);
    });
}
function displayMatlatexRenault() {
    const furnitureContainer = document.getElementById("furniture-container");
    matLatexRenault.forEach((furniture)=>{
        const furnitureElement = document.createElement("div");
        furnitureElement.classList.add("furniture-item");
        const furnitureImage = document.createElement("img");
        furnitureImage.src = furniture.imageUrl;
        furnitureImage.alt = furniture.famille;
        // make furniture image clickable
        furnitureImage.style.cursor = "pointer";
        furnitureImage.onclick = function() {
            if (furnitureImage.requestFullscreen) furnitureImage.requestFullscreen();
            else if (furnitureImage.msRequestFullscreen) furnitureImage.msRequestFullscreen();
            else if (furnitureImage.mozRequestFullScreen) furnitureImage.mozRequestFullScreen();
            else if (furnitureImage.webkitRequestFullscreen) furnitureImage.webkitRequestFullscreen();
            furnitureImage.addEventListener("click", (event)=>{
                if (document.fullscreenElement) document.exitFullscreen();
            });
        };
        const furnitureInfo = document.createElement("div");
        furnitureInfo.innerHTML = `<strong>Reference:</strong> ${furniture.reference}<br>
                                <strong>famille:</strong> ${furniture.famille}`;
        furnitureElement.appendChild(furnitureImage);
        furnitureElement.appendChild(furnitureInfo);
        furnitureContainer.appendChild(furnitureElement);
    });
}
function displayMatFermeRenault() {
    const furnitureContainer = document.getElementById("furniture-container");
    matFermeRenault.forEach((furniture)=>{
        const furnitureElement = document.createElement("div");
        furnitureElement.classList.add("furniture-item");
        const furnitureImage = document.createElement("img");
        furnitureImage.src = furniture.imageUrl;
        furnitureImage.alt = furniture.famille;
        // make furniture image clickable
        furnitureImage.style.cursor = "pointer";
        furnitureImage.onclick = function() {
            if (furnitureImage.requestFullscreen) furnitureImage.requestFullscreen();
            else if (furnitureImage.msRequestFullscreen) furnitureImage.msRequestFullscreen();
            else if (furnitureImage.mozRequestFullScreen) furnitureImage.mozRequestFullScreen();
            else if (furnitureImage.webkitRequestFullscreen) furnitureImage.webkitRequestFullscreen();
            furnitureImage.addEventListener("click", (event)=>{
                if (document.fullscreenElement) document.exitFullscreen();
            });
        };
        const furnitureInfo = document.createElement("div");
        furnitureInfo.innerHTML = `<strong>Reference:</strong> ${furniture.reference}<br>
                                <strong>famille:</strong> ${furniture.famille}`;
        furnitureElement.appendChild(furnitureImage);
        furnitureElement.appendChild(furnitureInfo);
        furnitureContainer.appendChild(furnitureElement);
    });
}
function hideFurnitureData() {
    const furnitureContainer = document.getElementById("furniture-container");
    furnitureContainer.innerHTML = "";
} // Exécute la fonction lorsque le DOM est entièrement chargé
 //document.addEventListener("DOMContentLoaded", displayFurnitureData);

},{"../img/literie/andre_renault/banc_de_coffre/Banc-coffre.webp":"fg2um","../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur-et-batterie-integree.webp":"fVOGd","../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur.webp":"1AoUf","../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-batterie-integree.webp":"lxn4x","../img/literie/andre_renault/fauteuil/fauteuil-relax-cuir-noir-tetiere-electrique-batterie-non-integree.webp":"V7mPo","../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-avec-releveur-et-batterie-integree.webp":"aNj1v","../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-avec-releveur.webp":"dAx73","../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-batterie-non-integree.webp":"5Udu2","../img/literie/andre_renault/fauteuil/fauteuil-relax-tissu-tetiere-electrique-et-batterie-integree.webp":"6VBuL","../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-tetiere-electrique-avec-releveur-et-batterie-integree.webp":"5eH0l","../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-avec-releveur.webp":"6l1si","../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-batterie-non-integree.webp":"cLvAC","../img/literie/andre_renault/fauteuil/fauteuil-relax-velours-turquoise-tetiere-electrique-et-batterie-integree.webp":"eQ9GT","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-angelina-club-line.webp":"bj1Jz","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-exquis-dreams.webp":"4KtAO","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-leticia-club-line.webp":"jvzyT","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-maryland-classic.webp":"3iPg6","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-latex-nomade-classic.webp":"hqPyY","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-plume.webp":"9EW5W","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-seduction.webp":"94I6G","../img/literie/andre_renault/matelas_sommier/matelas_en_latex/matelas-tresor-dreams-andre-renault.webp":"4pjuo","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-albatros-classic.webp":"kVi4v","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-aquila-classic.webp":"kIVVG","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-carolina-club-line.webp":"djZAn","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-magnolia-club-line.webp":"27ira","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-mousse-nuage-dreams.webp":"3DJnl","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-ressource.webp":"e5SUl","../img/literie/andre_renault/matelas_sommier/matelas_fermes/matelas-sphere.webp":"5HPlQ","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-diademe.webp":"60LM3","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-hybrid-firm-curem.webp":"ewSo3","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-hybrid-soft-curem.webp":"81Cqh","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-mousse-alchimie-dreams.webp":"gbXvx","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-mousse-delicatesse-dreams.webp":"44zoK","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-paola-club-line-andre-renault.webp":"hZr0d","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-paradis-dreams-andre-renault.webp":"jIonE","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-parure.webp":"fl5NE","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-reflet-dreams-andre-renault.webp":"cN9h9","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-heloisa-club-line.webp":"jUGwg","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-horia-club-line.webp":"90IEg","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-air-ar-hybrid.webp":"1lnof","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-in-ar-hybrid.webp":"2TRFH","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-hybrid-pulse-ar-hybrid.webp":"1PQ0c","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-pelican-icone-andre-renault.webp":"cTnWS","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-ressorts-rossignol-classic.webp":"3lWwM","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-rio-icone-andre-renault.webp":"e7qbe","../img/literie/andre_renault/matelas_sommier/matelas_hybride/matelas-rosa-club-line-andre-renault.webp":"klai1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fg2um":[function(require,module,exports) {
module.exports = require("77213c4955e3eb8a").getBundleURL("kdGc6") + "../../Banc-coffre.7e4c5df2.webp" + "?" + Date.now();

},{"77213c4955e3eb8a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fVOGd":[function(require,module,exports) {
module.exports = require("f8099b6796cee264").getBundleURL("kdGc6") + "../../fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur-et-batterie-integree.7dcd3a4a.webp" + "?" + Date.now();

},{"f8099b6796cee264":"lgJ39"}],"1AoUf":[function(require,module,exports) {
module.exports = require("318d38331912cdd8").getBundleURL("kdGc6") + "../../fauteuil-relax-cuir-noir-tetiere-electrique-avec-releveur.51c00ab3.webp" + "?" + Date.now();

},{"318d38331912cdd8":"lgJ39"}],"lxn4x":[function(require,module,exports) {
module.exports = require("3c7bf0bf827a8c24").getBundleURL("kdGc6") + "../../fauteuil-relax-cuir-noir-tetiere-electrique-batterie-integree.1be05603.webp" + "?" + Date.now();

},{"3c7bf0bf827a8c24":"lgJ39"}],"V7mPo":[function(require,module,exports) {
module.exports = require("63d963eaf349ab49").getBundleURL("kdGc6") + "../../fauteuil-relax-cuir-noir-tetiere-electrique-batterie-non-integree.b1646c42.webp" + "?" + Date.now();

},{"63d963eaf349ab49":"lgJ39"}],"aNj1v":[function(require,module,exports) {
module.exports = require("3f2f09ec80160a0e").getBundleURL("kdGc6") + "../../fauteuil-relax-tissu-tetiere-electrique-avec-releveur-et-batterie-integree.19b40661.webp" + "?" + Date.now();

},{"3f2f09ec80160a0e":"lgJ39"}],"dAx73":[function(require,module,exports) {
module.exports = require("5bb39d17a832409f").getBundleURL("kdGc6") + "../../fauteuil-relax-tissu-tetiere-electrique-avec-releveur.cf5fff37.webp" + "?" + Date.now();

},{"5bb39d17a832409f":"lgJ39"}],"5Udu2":[function(require,module,exports) {
module.exports = require("44eefccdc1a7f957").getBundleURL("kdGc6") + "../../fauteuil-relax-tissu-tetiere-electrique-batterie-non-integree.abf2a1bc.webp" + "?" + Date.now();

},{"44eefccdc1a7f957":"lgJ39"}],"6VBuL":[function(require,module,exports) {
module.exports = require("fb6a5c283295adfe").getBundleURL("kdGc6") + "../../fauteuil-relax-tissu-tetiere-electrique-et-batterie-integree.0ecf64ef.webp" + "?" + Date.now();

},{"fb6a5c283295adfe":"lgJ39"}],"5eH0l":[function(require,module,exports) {
module.exports = require("f02bbf6437f77e1c").getBundleURL("kdGc6") + "../../fauteuil-relax-velours-tetiere-electrique-avec-releveur-et-batterie-integree.64f38dca.webp" + "?" + Date.now();

},{"f02bbf6437f77e1c":"lgJ39"}],"6l1si":[function(require,module,exports) {
module.exports = require("b7056dfc2ccaf8ad").getBundleURL("kdGc6") + "../../fauteuil-relax-velours-turquoise-tetiere-electrique-avec-releveur.0087cb83.webp" + "?" + Date.now();

},{"b7056dfc2ccaf8ad":"lgJ39"}],"cLvAC":[function(require,module,exports) {
module.exports = require("eee2522c3a604d91").getBundleURL("kdGc6") + "../../fauteuil-relax-velours-turquoise-tetiere-electrique-batterie-non-integree.7de54cb0.webp" + "?" + Date.now();

},{"eee2522c3a604d91":"lgJ39"}],"eQ9GT":[function(require,module,exports) {
module.exports = require("6cb62080feec142").getBundleURL("kdGc6") + "../../fauteuil-relax-velours-turquoise-tetiere-electrique-et-batterie-integree.3a75e86c.webp" + "?" + Date.now();

},{"6cb62080feec142":"lgJ39"}],"bj1Jz":[function(require,module,exports) {
module.exports = require("37b3a7b1b461f713").getBundleURL("kdGc6") + "../../matelas-latex-angelina-club-line.fd0acff9.webp" + "?" + Date.now();

},{"37b3a7b1b461f713":"lgJ39"}],"4KtAO":[function(require,module,exports) {
module.exports = require("9b82e9d2717febbd").getBundleURL("kdGc6") + "../../matelas-latex-exquis-dreams.6aa22fb1.webp" + "?" + Date.now();

},{"9b82e9d2717febbd":"lgJ39"}],"jvzyT":[function(require,module,exports) {
module.exports = require("117a08f4182f2bf6").getBundleURL("kdGc6") + "../../matelas-latex-leticia-club-line.c76d608f.webp" + "?" + Date.now();

},{"117a08f4182f2bf6":"lgJ39"}],"3iPg6":[function(require,module,exports) {
module.exports = require("21b12d1e1349f9e1").getBundleURL("kdGc6") + "../../matelas-latex-maryland-classic.d8e67515.webp" + "?" + Date.now();

},{"21b12d1e1349f9e1":"lgJ39"}],"hqPyY":[function(require,module,exports) {
module.exports = require("1b35aa9de586ccdc").getBundleURL("kdGc6") + "../../matelas-latex-nomade-classic.4a1a8dd9.webp" + "?" + Date.now();

},{"1b35aa9de586ccdc":"lgJ39"}],"9EW5W":[function(require,module,exports) {
module.exports = require("34efa6b77077cb76").getBundleURL("kdGc6") + "../../matelas-plume.c72a8db3.webp" + "?" + Date.now();

},{"34efa6b77077cb76":"lgJ39"}],"94I6G":[function(require,module,exports) {
module.exports = require("8375a4f30c331f1a").getBundleURL("kdGc6") + "../../matelas-seduction.a33b6e2b.webp" + "?" + Date.now();

},{"8375a4f30c331f1a":"lgJ39"}],"4pjuo":[function(require,module,exports) {
module.exports = require("989e4a0e7b9085ea").getBundleURL("kdGc6") + "../../matelas-tresor-dreams-andre-renault.6b0a9362.webp" + "?" + Date.now();

},{"989e4a0e7b9085ea":"lgJ39"}],"kVi4v":[function(require,module,exports) {
module.exports = require("400ed1dbbf3b7ae9").getBundleURL("kdGc6") + "../../matelas-mousse-albatros-classic.d2a16d11.webp" + "?" + Date.now();

},{"400ed1dbbf3b7ae9":"lgJ39"}],"kIVVG":[function(require,module,exports) {
module.exports = require("4eaa9e22d3a25fb3").getBundleURL("kdGc6") + "../../matelas-mousse-aquila-classic.be94fe69.webp" + "?" + Date.now();

},{"4eaa9e22d3a25fb3":"lgJ39"}],"djZAn":[function(require,module,exports) {
module.exports = require("5c67ea78e46abf5f").getBundleURL("kdGc6") + "../../matelas-mousse-carolina-club-line.3623cc4a.webp" + "?" + Date.now();

},{"5c67ea78e46abf5f":"lgJ39"}],"27ira":[function(require,module,exports) {
module.exports = require("418ef21b6c2ddc30").getBundleURL("kdGc6") + "../../matelas-mousse-magnolia-club-line.eb5a1145.webp" + "?" + Date.now();

},{"418ef21b6c2ddc30":"lgJ39"}],"3DJnl":[function(require,module,exports) {
module.exports = require("823b12b23bd3b584").getBundleURL("kdGc6") + "../../matelas-mousse-nuage-dreams.bbd28afa.webp" + "?" + Date.now();

},{"823b12b23bd3b584":"lgJ39"}],"e5SUl":[function(require,module,exports) {
module.exports = require("63451c0d475748f8").getBundleURL("kdGc6") + "../../matelas-ressource.49f99b9f.webp" + "?" + Date.now();

},{"63451c0d475748f8":"lgJ39"}],"5HPlQ":[function(require,module,exports) {
module.exports = require("d9349d465418d167").getBundleURL("kdGc6") + "../../matelas-sphere.918d2066.webp" + "?" + Date.now();

},{"d9349d465418d167":"lgJ39"}],"60LM3":[function(require,module,exports) {
module.exports = require("998937d7ce600634").getBundleURL("kdGc6") + "../../matelas-diademe.9bea04d7.webp" + "?" + Date.now();

},{"998937d7ce600634":"lgJ39"}],"ewSo3":[function(require,module,exports) {
module.exports = require("b540ddcc9f6a26cf").getBundleURL("kdGc6") + "../../matelas-hybrid-firm-curem.f0a2596e.webp" + "?" + Date.now();

},{"b540ddcc9f6a26cf":"lgJ39"}],"81Cqh":[function(require,module,exports) {
module.exports = require("ce18c5e9761c588f").getBundleURL("kdGc6") + "../../matelas-hybrid-soft-curem.9bf28666.webp" + "?" + Date.now();

},{"ce18c5e9761c588f":"lgJ39"}],"gbXvx":[function(require,module,exports) {
module.exports = require("e4d22cb1ad378c12").getBundleURL("kdGc6") + "../../matelas-mousse-alchimie-dreams.71c2319d.webp" + "?" + Date.now();

},{"e4d22cb1ad378c12":"lgJ39"}],"44zoK":[function(require,module,exports) {
module.exports = require("950d503a00f17b1b").getBundleURL("kdGc6") + "../../matelas-mousse-delicatesse-dreams.9e683951.webp" + "?" + Date.now();

},{"950d503a00f17b1b":"lgJ39"}],"hZr0d":[function(require,module,exports) {
module.exports = require("705eeb065a845577").getBundleURL("kdGc6") + "../../matelas-paola-club-line-andre-renault.16f45424.webp" + "?" + Date.now();

},{"705eeb065a845577":"lgJ39"}],"jIonE":[function(require,module,exports) {
module.exports = require("7a3f95a4cd82499f").getBundleURL("kdGc6") + "../../matelas-paradis-dreams-andre-renault.fe069051.webp" + "?" + Date.now();

},{"7a3f95a4cd82499f":"lgJ39"}],"fl5NE":[function(require,module,exports) {
module.exports = require("d09ebc37a632358b").getBundleURL("kdGc6") + "../../matelas-parure.cc65ce94.webp" + "?" + Date.now();

},{"d09ebc37a632358b":"lgJ39"}],"cN9h9":[function(require,module,exports) {
module.exports = require("d7db9b5a5a30c39b").getBundleURL("kdGc6") + "../../matelas-reflet-dreams-andre-renault.070ccd19.webp" + "?" + Date.now();

},{"d7db9b5a5a30c39b":"lgJ39"}],"jUGwg":[function(require,module,exports) {
module.exports = require("ee4e62caa04956f3").getBundleURL("kdGc6") + "../../matelas-ressorts-heloisa-club-line.2974eb94.webp" + "?" + Date.now();

},{"ee4e62caa04956f3":"lgJ39"}],"90IEg":[function(require,module,exports) {
module.exports = require("347c9f088b68ce29").getBundleURL("kdGc6") + "../../matelas-ressorts-horia-club-line.7a0b296f.webp" + "?" + Date.now();

},{"347c9f088b68ce29":"lgJ39"}],"1lnof":[function(require,module,exports) {
module.exports = require("20785eeb8ffb2736").getBundleURL("kdGc6") + "../../matelas-ressorts-hybrid-air-ar-hybrid.fc641137.webp" + "?" + Date.now();

},{"20785eeb8ffb2736":"lgJ39"}],"2TRFH":[function(require,module,exports) {
module.exports = require("e55aeb7650a0fe51").getBundleURL("kdGc6") + "../../matelas-ressorts-hybrid-in-ar-hybrid.8255fb96.webp" + "?" + Date.now();

},{"e55aeb7650a0fe51":"lgJ39"}],"1PQ0c":[function(require,module,exports) {
module.exports = require("21ae7af0b7699199").getBundleURL("kdGc6") + "../../matelas-ressorts-hybrid-pulse-ar-hybrid.b848e36b.webp" + "?" + Date.now();

},{"21ae7af0b7699199":"lgJ39"}],"cTnWS":[function(require,module,exports) {
module.exports = require("d583a633b199ebda").getBundleURL("kdGc6") + "../../matelas-ressorts-pelican-icone-andre-renault.36d62fe9.webp" + "?" + Date.now();

},{"d583a633b199ebda":"lgJ39"}],"3lWwM":[function(require,module,exports) {
module.exports = require("d8b99be775d0b1f").getBundleURL("kdGc6") + "../../matelas-ressorts-rossignol-classic.cf9f5b3e.webp" + "?" + Date.now();

},{"d8b99be775d0b1f":"lgJ39"}],"e7qbe":[function(require,module,exports) {
module.exports = require("dd9e869c9de9af7e").getBundleURL("kdGc6") + "../../matelas-rio-icone-andre-renault.ce804e3b.webp" + "?" + Date.now();

},{"dd9e869c9de9af7e":"lgJ39"}],"klai1":[function(require,module,exports) {
module.exports = require("5df9501ca5cc1bab").getBundleURL("kdGc6") + "../../matelas-rosa-club-line-andre-renault.4f390e12.webp" + "?" + Date.now();

},{"5df9501ca5cc1bab":"lgJ39"}]},["4Gteg"], null, "parcelRequire66bd")

//# sourceMappingURL=choix_literie.0f55087c.js.map
