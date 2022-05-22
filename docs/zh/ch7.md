# 第七章 正则表达式编程

什么叫知识，能指导我们实践的东西才叫知识。

学习一样东西，如果不能使用，最多只能算作纸上谈兵。正则表达式的学习，也不例外。

掌握了正则表达式的语法后，下一步，也是关键的一步，就是在真实世界中使用它。

那么如何使用正则表达式呢？有哪些关键的点呢？本章就解决这个问题。

内容包括：

- 正则表达式的四种操作
- 相关 API 注意要点
- 真实案例

## 7.1. 正则表达式的四种操作

正则表达式是匹配模式，不管如何使用正则表达式，万变不离其宗，都需要先"匹配"。

有了匹配这一基本操作后，才有其他的操作：验证、切分、提取、替换。

进行任何相关操作，也需要宿主引擎相关 API 的配合使用。当然，在 JavaScript 中，相关 API 也不多。

### 7.1.1. 验证

验证是正则表达式最直接的应用，比如表单验证。

在说验证之前，先要说清楚匹配是什么概念。

所谓匹配，就是看目标字符串里是否有满足匹配的子串。因此，"匹配"的本质就是"查找"。

有没有匹配，是不是匹配上，判断是否的操作，即称为"验证"。

这里举一个例子，来看看如何使用相关 API 进行验证操作的。

比如，判断一个字符串中是否有数字。

使用 `search`：

```js
var regex = /\d/;
var string = "abc123";
console.log(!!~string.search(regex));
// => true
```

使用 `test`：

```js
var regex = /\d/;
var string = "abc123";
console.log(regex.test(string));
// => true
```

```js
使用 `match`：

var regex = /\d/;
var string = "abc123";
console.log( !!string.match(regex) );

// => true
```

```js
使用 `exec`：

var regex = /\d/;

var string = "abc123";

console.log( !!regex.exec(string) );

// => true
```

其中，最常用的是 `test`。

### 7.1.2. 切分

匹配上了，我们就可以进行一些操作，比如切分。

所谓"切分"，就是把目标字符串，切成一段一段的。在 JavaScript 中使用的是 split。

比如，目标字符串是 `"html,css,javascript"`，按逗号来切分：

```js
var regex = /,/;

var string = "html,css,javascript";

console.log(string.split(regex));

// => ["html", "css", "javascript"]
```

又比如，如下的日期格式：

```
2017/06/26
2017.06.26
2017-06-26
```

可以使用 `split` "切出"年月日：

```js
var regex = /\D/;
console.log("2017/06/26".split(regex));
console.log("2017.06.26".split(regex));
console.log("2017-06-26".split(regex));
// => ["2017", "06", "26"]
// => ["2017", "06", "26"]
// => ["2017", "06", "26"]
```

### 7.1.3. 提取

虽然整体匹配上了，但有时需要提取部分匹配的数据。

此时正则通常要使用分组引用（分组捕获）功能，还需要配合使用相关 API。

这里，还是以日期为例，提取出年月日。注意下面正则中的括号：

使用 `match`：

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
console.log(string.match(regex));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
```

使用 `exec`：

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
console.log(regex.exec(string));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
```

使用 `test`：

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
regex.test(string);
console.log(RegExp.$1, RegExp.$2, RegExp.$3); // => "2017" "06" "26"
```

使用 `search`：

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
string.search(regex);
console.log(RegExp.$1, RegExp.$2, RegExp.$3); // => "2017" "06" "26"
```

使用 `replace`：

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
var date = [];
string.replace(regex, function (match, year, month, day) {
  date.push(year, month, day);
});

console.log(date);
// => ["2017", "06", "26"]
```

其中，最常用的是 `match`。

### 7.1.4. 替换

找，往往不是目的，通常下一步是为了替换。在 JavaScript 中，使用 `replace` 进行替换。

比如把日期格式，从 `yyyy-mm-dd` 替换成 `yyyy/mm/dd`：

```js
var string = "2017-06-26";
var today = new Date(string.replace(/-/g, "/"));
console.log(today);
// => Mon Jun 26 2017 00:00:00 GMT+0800 (中国标准时间)
```

这里只是简单地应用了一下 replace。但，replace 方法很是强大的，是需要重点掌握的。

## 7.2. 相关 API 注意要点

从上面可以看出用于正则操作的方法，共有 6 个，字符串实例 4 个，正则实例 2 个：

- `String#search`
- `String#split`
- `String#match`
- `String#replace`
- `RegExp#test`
- `RegExp#exec`

本章不打算详细地讲解它们的方方面面细节，具体可以参考《JavaScript 权威指南》的第三部分。本章重点列出一些容易忽视的地方，以飨读者。

### 7.2.1. search 和 match 的参数问题

我们知道字符串实例的那 4 个方法参数都支持正则和字符串。

但 search 和 match，会把字符串转换为正则的。

```js
var string = "2017.06.27";
console.log(string.search("."));
//=>0

//需要修改成下列形式之一
console.log(string.search("\\."));
console.log(string.search(/\./));
// => 4
// => 4

console.log(string.match("."));
// => ["2", index: 0, input: "2017.06.27"]

//需要修改成下列形式之一
console.log(string.match("\\."));
console.log(string.match(/\./));
// => [".", index: 4, input: "2017.06.27"]
// => [".", index: 4, input: "2017.06.27"]

console.log(string.split("."));
// => ["2017", "06", "27"]

console.log(string.replace(".", "/"));
// => "2017/06.27"
```

### 7.2.2. match 返回结果的格式问题

match 返回结果的格式，与正则对象是否有修饰符 g 有关。

```js
var string = "2017.06.27";
var regex1 = /\b(\d+)\b/;
var regex2 = /\b(\d+)\b/g;
console.log(string.match(regex1));
console.log(string.match(regex2));
// => ["2017", "2017", index: 0, input: "2017.06.27"]
// => ["2017", "06", "27"]
```

没有 `g`，返回的是标准匹配格式，即，数组的第一个元素是整体匹配的内容，接下来是分组捕获的内容，然后是整体匹配的第一个下标，最后是输入的目标字符串。

有 `g`，返回的是所有匹配的内容。

当没有匹配时，不管有无 `g`，都返回 `null`。

### 7.2.3. exec 比 match 更强大

当正则没有 g 时，使用 match 返回的信息比较多。但是有 g 后，就没有关键的信息 index 了。

而 exec 方法就能解决这个问题，它能接着上一次匹配后继续匹配：

```js
var string = "2017.06.27";
var regex2 = /\b(\d+)\b/g;

console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);

// => ["2017", "2017", index: 0, input: "2017.06.27"]
// => 4
// => ["06", "06", index: 5, input: "2017.06.27"]
// => 7
// => ["27", "27", index: 8, input: "2017.06.27"]
// => 10
// => null
// => 0
```

其中正则实例 lastIndex 属性，表示下一次匹配开始的位置。

比如第一次匹配了 "2017"，开始下标是 0，共 4 个字符，因此这次匹配结束的位置是 3，下一次开始匹配的位置是 4。

从上述代码看出，在使用 exec 时，经常需要配合使用 while 循环：

```js
var string = "2017.06.27";
var regex2 = /\b(\d+)\b/g;
var result;

while ((result = regex2.exec(string))) {
  console.log(result, regex2.lastIndex);
}

// => ["2017", "2017", index: 0, input: "2017.06.27"] 4
// => ["06", "06", index: 5, input: "2017.06.27"] 7
// => ["27", "27", index: 8, input: "2017.06.27"] 10
```

### 7.2.4. 修饰符 g，对 exex 和 test 的影响

上面提到了正则实例的 lastIndex 属性，表示尝试匹配时，从字符串的 `lastIndex` 位开始去匹配。

字符串的四个方法，每次匹配时，都是从 0 开始的，即 `lastIndex` 属性始终不变。

而正则实例的两个方法 `exec`、`test`，当正则是全局匹配时，每一次匹配完成后，都会修改 `lastIndex`。下面让我们以 `test` 为例，看看你是否会迷糊：

```js
var regex = /a/g;

console.log(regex.test("a"), regex.lastIndex);
console.log(regex.test("aba"), regex.lastIndex);
console.log(regex.test("ababc"), regex.lastIndex);

// => true 1
// => true 3
// => false 0
```

注意上面代码中的第三次调用 test，因为这一次尝试匹配，开始从下标 lastIndex，即 3 位置处开始查找，自然就找不到了。

如果没有 g，自然都是从字符串第 0 个字符处开始尝试匹配：

```js
var regex = /a/;

console.log(regex.test("a"), regex.lastIndex);
console.log(regex.test("aba"), regex.lastIndex);
console.log(regex.test("ababc"), regex.lastIndex);
// => true 0
// => true 0
// => true 0
```

### 7.2.5. test 整体匹配时需要使用 ^ 和 $

这个相对容易理解，因为 test 是看目标字符串中是否有子串匹配正则，即有部分匹配即可。

如果，要整体匹配，正则前后需要添加开头和结尾：

```js
console.log(/123/.test("a123b"));
// => true

console.log(/^123$/.test("a123b"));
// => false

console.log(/^123$/.test("123"));
// => true
```

### 7.2.6. split 相关注意事项

`split` 方法看起来不起眼，但要注意的地方有两个的。

第一，它可以有第二个参数，表示结果数组的最大长度：

```js
var string = "html,css,javascript";
console.log(string.split(/,/, 2));
// =>["html", "css"]
```

第二，正则使用分组时，结果数组中是包含分隔符的：

```js
var string = "html,css,javascript";
console.log(string.split(/(,)/));
// =>["html", ",", "css", ",", "javascript"]
```

### 7.2.7. replace 是很强大的

《JavaScript 权威指南》认为 exec 是这 6 个 API 中最强大的，而我始终认为 replace 才是最强大的。

因为它也能拿到该拿到的信息，然后可以假借替换之名，做些其他事情。

总体来说 replace 有两种使用形式，这是因为它的第二个参数，可以是字符串，也可以是函数。

当第二个参数是字符串时，如下的字符有特殊的含义：

| 字符          | 说明                           |
| ------------- | ------------------------------ |
| `$1,$2,…,$99` | 匹配第 1-99 个分组里捕获的文本 |
| `$&`          | 匹配到的子串文本               |
| $\`           | 匹配到的子串的左边文本         |
| `$'`          | 匹配到的子串的右边文本         |
| `$$`          | 美元符号                       |

例如，把 `"2,3,5"`，变成 `"5=2+3"`：

```js
var result = "2,3,5".replace(/(\d+),(\d+),(\d+)/, "$3=$1+$2");
console.log(result);
// => "5=2+3"
```

又例如，把 `"2,3,5"`，变成 `"222,333,555"`:

```js
var result = "2,3,5".replace(/(\d+)/g, "$&$&$&");
console.log(result);
// => "222,333,555"
```

再例如，把 `"2+3=5"`，变成 `"2+3=2+3=5=5"`:

```js
var result = "2+3=5".replace(/=/, "$&$`$&$'$&");
console.log(result);
// => "2+3=2+3=5=5"
```

我们对最后这个进行一下说明。要把 `"2+3=5"`，变成 `"2+3=2+3=5=5"`，其实就是想办法把 `=` 替换成

`=2+3=5=`，其中，`$&` 匹配的是 `=`， $\` 匹配的是 `2+3`，`$' 匹配的是 5。因此使用 "$&$`$&$'$&" 便达成了

目的。

当第二个参数是函数时，我们需要注意该回调函数的参数具体是什么：

```js
"1234 2345 3456".replace(
  /(\d)\d{2}(\d)/g,
  function (match, $1, $2, index, input) {
    console.log([match, $1, $2, index, input]);
  }
);
//	=> ["1234", "1", "4", 0, "1234 2345 3456"]
//	=> ["2345", "2", "5", 5, "1234 2345 3456"]
//	=> ["3456", "3", "6", 10, "1234 2345 3456"]
```

此时我们可以看到 `replace` 拿到的信息，并不比 `exec` 少。

### 7.2.8. 使用构造函数需要注意的问题

一般不推荐使用构造函数生成正则，而应该优先使用字面量。因为用构造函数会多写很多 \。

```js
var string = "2017-06-27 2017.06.27 2017/06/27";
var regex = /\d{4}(-|\.|\/)\d{2}\1\d{2}/g;
console.log(string.match(regex));
// => ["2017-06-27", "2017.06.27", "2017/06/27"]

regex = new RegExp("\\d{4}(-|\\.|\\/)\\d{2}\\1\\d{2}", "g");
console.log(string.match(regex));
// => ["2017-06-27", "2017.06.27", "2017/06/27"]
```

### 7.2.9. 修饰符

ES5 中修饰符，共 3 个：

修饰符 描述

| 符号 | 说明                                                                                |
| ---- | ----------------------------------------------------------------------------------- |
| `g`  | 全局匹配，即找到所有匹配的，单词是 global。                                         |
| `i`  | 匹配过程中，忽略字母大小写，单词是 ingoreCase。                                     |
| `m`  | 多行匹配，只影响 `^` 和 `$`，二者变成行的概念，即行开头和行结尾。单词是 multiline。 |

当然正则对象也有相应的只读属性：

```js
var regex = /\w/gim;
console.log(regex.global);
console.log(regex.ignoreCase);
console.log(regex.multiline);
// => true
// => true
// => true
```

### 7.2.10. source 属性

正则实例对象属性，除了 global、ingnoreCase、multiline、lastIndex 属性之外，还有一个 source 属性。

它什么时候有用呢？

比如，在构建动态的正则表达式时，可以通过查看该属性，来确认构建出的正则到底是什么：

```js
var className = "high";
var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
console.log(regex.source);
// => (^|\s)high(\s|$) 即字符串"(^|\\s)high(\\s|$)"
```

### 7.2.11. 构造函数属性

构造函数的静态属性基于所执行的最近一次正则操作而变化。除了是 $1,…,$9 之外，还有几个不太常用的属性（有兼容性问题）：

| 静态属性              | 描述                              | 简写形式     |
| --------------------- | --------------------------------- | ------------ |
| `RegExp.input`        | 最近一次目标字符串                | RegExp["$_"] |
| `RegExp.lastMatch`    | 最近一次匹配的文本                | RegExp["$&"] |
| `RegExp.lastParen`    | 最近一次捕获的文本                | RegExp["$+"] |
| `RegExp.leftContext`  | 目标字符串中 lastMatch 之前的文本 | RegExp["$`"] |
| `RegExp.rightContext` | 目标字符串中 lastMatch 之后的文本 | RegExp["$'"] |

测试代码如下：

```js
var regex = /([abc])(\d)/g;
var string = "a1b2c3d4e5";
string.match(regex);
console.log(RegExp.input);
console.log(RegExp["$_"]);
// => "a1b2c3d4e5"

console.log(RegExp.lastMatch);
console.log(RegExp["$&"]);
// => "c3"

console.log(RegExp.lastParen);
console.log(RegExp["$+"]);
// => "3"

console.log(RegExp.leftContext);
console.log(RegExp["$`"]);
// => "a1b2"

console.log(RegExp.rightContext);
console.log(RegExp["$'"]);
// => "d4e5"
```

## 7.3. 真实案例

### 7.3.1. 使用构造函数生成正则表达式

我们知道要优先使用字面量来创建正则，但有时正则表达式的主体是不确定的，此时可以使用构造函数来创建。模拟 getElementsByClassName 方法，就是很能说明该问题的一个例子。

这里 getElementsByClassName 函数的实现思路是：

- 比如要获取 className 为 "high" 的 dom 元素；
- 首先生成一个正则：/(^|\s)high(\s|$)/,
- 然后再用其逐一验证页面上的所有 dom 元素的类名，拿到满足匹配的元素即可。

代码如下(可以直接复制到本地查看运行效果)：

```html
<p class="high">1111</p>

<p class="high">2222</p>

<p>3333</p>

<script>
  function getElementsByClassName(className) {
    var elements = document.getElementsByTagName("*");

    var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
    var result = [];

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      if (regex.test(element.className)) {
        result.push(element);
      }
    }

    return result;
  }

  var highs = getElementsByClassName("high");

  highs.forEach(function (item) {
    item.style.color = "red";
  });
</script>
```

### 7.3.2. 使用字符串保存数据

一般情况下，我们都愿意使用数组来保存数据。但我看到有的框架中，使用的却是字符串。

使用时，仍需要把字符串切分成数组。虽然不一定用到正则，但总感觉酷酷的，这里分享如下：

```js
var utils = {};

"Boolean|Number|String|Function|Array|Date|RegExp|Object|Error"
  .split("|")
  .forEach(function (item) {
    utils["is" + item] = function (obj) {
      return {}.toString.call(obj) == "[object " + item + "]";
    };
  });

console.log(utils.isArray([1, 2, 3]));

// => true
```

### 7.3.3. if 语句中使用正则替代 &&

比如，模拟 ready 函数，即加载完毕后再执行回调（不兼容 IE 的）：

```js
var readyRE = /complete|loaded|interactive/;

function ready(callback) {
  if (readyRE.test(document.readyState) && document.body) {
    callback();
  } else {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        callback();
      },

      false
    );
  }
}

ready(function () {
  alert("加载完毕！");
});
```

### 7.3.4. 使用强大的 replace

因为 replace 方法比较强大，有时用它根本不是为了替换，只是拿其匹配到的信息来做文章。

这里以查询字符串（querystring）压缩技术为例，注意下面 replace 方法中，回调函数根本没有返回任何东西。

```js
function compress(source) {
  var keys = {};

  source.replace(/([^=&]+)=([^&]\*)/g, function (full, key, value) {
    keys[key] = (keys[key] ? keys[key] + "," : "") + value;
  });

  var result = [];

  for (var key in keys) {
    result.push(key + "=" + keys[key]);
  }

  return result.join("&");
}

console.log(compress("a=1&b=2&a=3&b=4"));

// => "a=1,3&b=2,4"
```

### 7.3.5. 综合运用

最后这里再做个简单实用的正则测试器。

代码直接贴了，相信你能看得懂（代码改编于《JavaScript Regular Expressions》）：

<iframe src="https://codesandbox.io/embed/jovial-rumple-31j2t4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="jovial-rumple-31j2t4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 7.4. 本章小结

相关 API 的注意点，本章基本上算是一网打尽了。

至此，恭喜你，你学完了 JavaScript 正则表达式的所有内容。
