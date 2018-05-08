// --------------------------CAPÍTULO 1--------------------------------
var x = 213;
console.log(x);
function log()
{
    try {
        console.log.apply(console, arguments);
    }
    catch (e) {
        try {
            opera.postError.apply(opera, arguments);
        }
        catch(e){
            alert(Array.prototype.join.call( arguments, ""));
        }
    }
};

// --------------------------CAPÍTULO 2--------------------------------

function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

window.onload = function() {
    assert(true, "The test suite is running.");
    assert(false, "Fail!");
};

// ----------------------------------------------------------

(function() {
    var results;
    this.assert = function assert(value, desc) {
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
    this.test = function test(name, fn) {
        results = document.getElementById("results");
        results = assert(true, name).appendChild(
            document.createElement("ul")
        );
        fn();
    };    
})();
window.onload = function() {
    test("A test.", function() {
        assert(true, "First assertion completed");
        assert(true, "Second assertion completed");
        assert(true, "Third assertion completed");
    });
    test("Another test.", function(){
        assert(true, "First test completed");
        assert(true, "Second test completed");
        assert(true, "Third test completed");
    });
    test("A third test.", function(){
        assert(null, "fail");
        assert(5, "pass")
    });
};

// ----------------------------------------------------------

(function(){
    var queue = [], paused = false, results;
    this.test = function(name, fn) {
        queue.push(function(){
            results = document.getElementById("results");
            results = assert(true, name).appendChild(
                document.createElement("ul")
            );
            fn();
        });
        runTest();
    };
    this.pause = function() {
        paused = true;
    };
    this.resume = function() {
        paused = false;
        setTimeout(runTest, 1);
    };
    function runTest() {
        if(!paused && queue.length){
            queue.shift()();
            if(!paused) {
                resume();
            }
        }
    }
    this.assert = function assert (value, desc) {
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
});
window.onload = function() {
    test("Async Test #1", function() {
        pause();
        setTimeout(function() {
            assert(true, "First test completed");
            resume();
        }, 1000);
    });
    test("Async Test #2", function(){
        pause();
        setTimeOut(function(){
            assert(true, "Second test completed");
            resume();
        }, 1000);
    });
};
// --------------------------CAPÍTULO 3--------------------------------
// values.sort(function(value1, value2){return value2 - value1});

// function startup() {
//     /* faz algo maravilhoso */
// }
// window.load = startup;

// window.load = function(){/* faz algo maravilhoso */};
function useless(callback) { return callback(); }
var text = 'Domo arigato!';
assert(useless(function(){ return text; }) === text,
    "The useless function works! " + text);