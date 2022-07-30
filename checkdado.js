function check(dado){
    if (typeof dado === "string"){
        console.log("String");
    }
    else if (typeof dado === "boolean"){
        console.log("Boolean");
    }
    else if (typeof dado === "function"){
        console.log("Function");
    }
    else if (typeof dado === "number"){
        console.log("Number");
    }
    else if (typeof dado === "symbol"){
        console.log("Symbol");
    }
    else if (typeof dado === "bigint"){
        console.log("Bigint");
    }
    else if (typeof dado === "undefined"){
        console.log("Undefined");
    }
}