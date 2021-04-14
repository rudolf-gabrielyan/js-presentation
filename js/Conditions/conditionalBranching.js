const user = {
    name: "Rudolf",
    phone: {
        number: "077-58-61-88",
        code: "+374",
        operator: null
        // operator: {
        //     name: "MTS"
        // }
    }
}

console.log(user.phone.operator?.name);