/*
 * Copyright 2013 Laurent Bovet <laurent.bovet@windmaster.ch>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"esversion: 6";
module.exports = function (opt) {
    if (!opt) {
        opt = {};
    }
    if (!opt.document) {
        opt.document = new (require("jsdom").JSDOM)('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></head></html>').window.document;
    }
    if (!opt.$) {
        opt.$ = require("jquery")(opt.document.defaultView);
    }
    return require("./node-docson")(opt);
};