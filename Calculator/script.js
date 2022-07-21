var exp = "";

function allClear() {
    document.getElementById('expression').innerHTML = 0;
    document.getElementById('result').innerHTML = 0;

    window.exp = "";
}

function backspace() {
    window.exp = window.exp.slice(0, exp.length-1);

    if(window.exp.length == 0)
        document.getElementById('expression').innerHTML = 0;
    else
        document.getElementById('expression').innerHTML = window.exp;
    
    document.getElementById('result').innerHTML = 0;
}

function makeNum(num) {
    window.exp += num;
    displayexp(window.exp);
}

function operation(ope) {
    window.exp += ope;
    displayexp(window.exp);
}

function calculate() {
    var stackNum = new Array();
    var stackOp = new Array();
    var i = 0;

    while(i != exp.length) {
        var ch = exp.charAt(i);

        if(ch >= '0' && ch <= '9') {
            var num = 0;
            var arr = findNum(i);
            var num = arr[0];
            i = arr[1];

            if(exp.charAt(i) == '.') {
                num += '.';
                var arr1 = findNum(i + 1);
                var num1 = arr1[0];
                i = arr1[1];
                
                num += num1;
            }

            i--;
            stackNum.push(num);
        }
        
        else {
            if(ch == 'l') {
                i += 3;
                
                var num = 0;
                var arr = findNum(i);
                var num = arr[0];
                i = arr[1];

                if(exp.charAt(i) == '.') {
                    num += '.';
                    var arr1 = findNum(i + 1);
                    var num1 = arr1[0];
                    i = arr1[1];
                    
                    num += num1;
                }

                i--;
                stackNum.push(Math.log10(num));
            }

            else {
                while(stackOp.length != 0 && precedence(stackOp[stackOp.length-1]) >= precedence(ch)) {
                    var num1 = stackNum.pop();
                    var num2 = stackNum.pop();
                    var res = evaluate(num2, num1, stackOp.pop());
                    stackNum.push(res);
                }
                
                stackOp.push(ch);
            }
        }

        i++;
    }

    while(stackOp.length != 0) {
        var num1 = stackNum.pop();
        var num2 = stackNum.pop();
        var res = evaluate(num2, num1, stackOp.pop());
        stackNum.push(res);
    }

    var res = stackNum.pop();
    window.exp = "";

    displayResult(res);
}

function findNum(i) {
    var num = 0;
    while(exp.charAt(i) >= '0' && exp.charAt(i) <= '9' && i != exp.length) {
        num = (num * 10) + (exp.charAt(i) - '0');
        i++;
    }

    return [num, i];
}

function precedence(ch) {
    if(ch == '/' || ch == '*')
        return 2;

    if(ch == '+' || ch == '-')
        return 1;

    return 0;
}

function evaluate(num1, num2, op) {
    var res = 0;

    if(op == '+')
        res = num1 + num2;
    
    else if(op == '-')
        res = num1 - num2;
    
    else if(op == '*')
        res = num1 * num2;
    
    else if(op == '/')
        res = num1 / num2;
    
    else if(op == '%')
        res = num1 % num2;

    return res;
}

function displayexp(equation) {
    document.getElementById('expression').innerHTML = equation;
}

function displayResult(result) {
    document.getElementById('result').innerHTML = result;
}
