"use strict";
function* quips(name) {
    yield '你好 ' + name + '!';
    yield '希望你能喜欢这篇介绍ES6的文章';
    if (name.toLocaleLowerCase().startsWith('X'.toLowerCase())) {
        yield '你的名字 ' + name + ' 首字母是' + name.substr(0, 1) + ",这很酷!";
    }
    yield "我们下次见!";
}
quips("舒阜东");
