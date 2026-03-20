const d = (n:number)=> n*2

// explicit return for exported / public function 

export function title(s:string) :string{
    return `hello ${s}`
}

function check(flag:boolean):number {
    if (flag) {
        return 1
    }else{
        return 0
    }
}

async function load() {
    return 34
}

load()
.then((data)=> console.log(data))