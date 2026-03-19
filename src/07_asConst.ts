
const Roles_arr = ["hitler", "trump", "putin"] as const

// driving an union from an array
type current_role = (typeof Roles_arr)[number]

function setRole(r: current_role) {
    console.log(r);
}

setRole("hitler")
