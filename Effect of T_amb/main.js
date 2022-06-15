T_amb=[10,40]

W_net_gas=[395600,350000].map(function(x) { return x /1000; });
W_net_steam=[430000,382000].map(function(x) { return x /1000; });
W_net_module=[1.22*Math.pow(10,6),1.085*Math.pow(10,6)].map(function(x) { return x /1000; });

eta_gas=[0.3974,0.3892].map(function(x) { return x *100; });
eta_steam=[0.4212,0.39].map(function(x) { return x *100; });
eta_overall=[61.32,60.24]

m_air=[829.6,750.1]
m_fuel=[21.74,22.14]
m_gas=[1703,1540]

Heat_rate=[5871,5977]

T_turbine=[622.7,656.5]
document.getElementById("T_amb").value=25
x=document.getElementById("T_amb").value


// Function for interpolation
function interp(y_array,x_array,x) {
    x1=x_array[0]
    x2=x_array[1]
    y1=y_array[0]
    y2=y_array[1]
    y=((x-x1)/(x2-x1))*(y2-y1)+y1
    console.log(y)
    return y
}


function set_cell(id,array,unit) {
    cell= document.getElementById(id);
    if (interp(array,T_amb,x)<1000) {
        digits=2
    } else {
        digits=0
    }
    cell.innerHTML=interp(array,T_amb,x).toFixed(digits)+unit;  
}


function solve(){
x=parseFloat(document.getElementById("T_amb").value);

(document.getElementById("cond")).innerHTML=((7*x**2-9*x+2760)*10**-5).toFixed(3)+" bar"

set_cell("gas_eff",eta_gas,"%")
set_cell("st_eff",eta_steam,"%")
set_cell("comb_eff",eta_overall,"%")

set_cell("gas_work",W_net_gas," MW")
set_cell("st_work",W_net_steam," MW")
set_cell("comb_work",W_net_module," MW")

set_cell("m_air",m_air," Kg/sec")
set_cell("m_fuel",m_fuel," Kg/sec")
set_cell("m_gas",m_gas," Kg/sec")

set_cell("heat_rate",Heat_rate," KJ/KW.hr")

set_cell("Turbine",T_turbine," &#8451")
}


// (document.getElementById("cond")).innerHTML=(7*x**2-9*x+2760)*10**-5+" bar"

// set_cell("gas_eff",eta_gas,"%")
// set_cell("st_eff",eta_steam,"%")
// set_cell("comb_eff",eta_overall,"%")

// set_cell("gas_work",W_net_gas," MW")
// set_cell("st_work",W_net_steam," MW")
// set_cell("comb_work",W_net_module," MW")

// set_cell("m_air",m_air," Kg/sec")
// set_cell("m_fuel",m_fuel," Kg/sec")
// set_cell("m_gas",m_gas," Kg/sec")

// set_cell("heat_rate",Heat_rate," KJ/KW.hr")

// set_cell("Turbine",T_turbine," &#8451")
// solve()