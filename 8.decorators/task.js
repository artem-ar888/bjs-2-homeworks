"use strict"

//Задача № 1

// Подключаем MD5
// const md5 = require('js-md5');

function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args));
        let objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {
            // console.log("Из кеша: " + objectInCache.value, cache);
            return "Из кеша: " + objectInCache.value;
        }
    
        let result = func(...args);
        cache.push({hash, value: result});
        if (cache.length > 5) { 
          cache.shift();
        }
        // console.log("Вычисляем: " + result, cache);
        return "Вычисляем: " + result;  
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    wrapper.count = 0; // количество вызовов функции
    wrapper.allCount = 0; // количество вызовов декоратора

    function wrapper(...args) {
        wrapper.allCount++;
        
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (!wrapper.count) {
            func.call(this, ...args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            func.call(this, ...args);
            clearTimeout(timeoutId);
            timeoutId = null;
            wrapper.count++;
        }, delay);
    }

    return wrapper;
}
