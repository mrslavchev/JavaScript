define(function () {
    'use strict';
    var Store;
    Store = (function () {

        function lexicSort(arr) {
            return arr.sort(function(a, b) {
                return a._name.localeCompare(b._name);
            });
        }

        function sortByPrice(arr) {
            return arr.sort(function(a, b) {
                return a._price - b._price;
            });
        }

        function Store(name) {
            this._name = name;
            this._itemsList = [];
        }
    Store.prototype = {
        addItem : function (item) {
            this._itemsList.push(item);
            return this;
        },
        getAll : function () {
            // not sorted to figure it out later.
            return lexicSort(this._itemsList);
        },
        getSmartPhones : function () {
            var smartPhones = [];
            for(var i = 0, len = this._itemsList.length; i < len; i++){
               if(this._itemsList[i]._type === 'smart-phone'){
                   smartPhones.push(this._itemsList[i]);
               }
            }

            return lexicSort(smartPhones);
        },
        getMobiles : function () {
            var mobiles = [];
            for(var i = 0, len = this._itemsList.length; i < len; i++){
                if(this._itemsList[i]._type === 'smart-phone' ||
                    this._itemsList[i]._type === 'tablet'){
                    mobiles.push(this._itemsList[i]);
                }
            }

            return lexicSort(mobiles);
        },
        getComputers : function () {
            var computers = [];
            for(var i = 0, len = this._itemsList.length; i < len; i++){
                if(this._itemsList[i]._type === 'pc' ||
                    this._itemsList[i]._type === 'notebook'){
                    computers.push(this._itemsList[i]);
                }
            }

            return lexicSort(computers);
        },
        filterItemsByType : function (filterType) {
            var result = [];
            for(var i = 0, len = this._itemsList.length; i < len; i++){
                if(this._itemsList[i]._type === filterType) {
                    result.push(this._itemsList[i]);
                }
            }

            return lexicSort(result);
        },
        filterItemsByPrice : function (options) {
            var min, max;
            var result = [];
            if(options === undefined){
                return sortByPrice(this._itemsList);
        }
            else{
                if(options.min){
                    min = options.min;
                }
                else{
                    min = 0;
                }
                if(options.max){
                    max = options.max;
                }
                else{
                    max = 1000000;
                }

                for(var i = 0, len = this._itemsList.length; i < len; i++){
                    if(this._itemsList[i]._price >= min &&
                        this._itemsList[i]._price <= max ) {
                        result.push(this._itemsList[i]);
                    }
                }

                return sortByPrice(result);
            }
        },
        filterItemsByName : function (name) {
            var result = [];
            for(var i = 0, len = this._itemsList.length; i < len; i++){
                if(this._itemsList[i]._name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                    result.push(this._itemsList[i]);
                }
            }

            return lexicSort(result);
        },
        countItemsByType : function () {
            var result = [];
            var type;
            for(var i = 0, len = this._itemsList.length; i < len; i++){
                if(result [this._itemsList[i]._type] === undefined){
                    type = this._itemsList[i]._type;
                    result[type] = 1;
                }
                else{
                    result[type]++;
                }
            }

            return result;
        }

    };
        return Store;
    })();
    return Store;
});