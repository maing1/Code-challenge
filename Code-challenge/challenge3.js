let netSalary = grossSalary - totaldeductions
let grossSalary = basicSalary + benefits
console.log('Gross salary:' + grossSalary)
let totaldeductions = nhifDeductions + nssfDeductions + calculatedPaye

let basicSalary = parseFloat(prompt('Enter your basic salary;'))
console.log('Basic salary :' + basicSalary)

let benefits = parseFloat(prompt('Enter your benefits into the benefits variable'))
console.log('Benefits' + benefits)


function calculatedPaye(){
    let paye
    if(grossSalary <= 24000){
        paye = 0.10 * grossSalary;
    }else if(grossSalary >= 24001 && grossSalary <= 32333){
        paye = 0.25 * grossSalary ;
    }else if(grossSalary >= 32334 && grossSalary <= 500000){
        paye = 0.30 * grossSalary;
    }else if(grossSalary >= 500001 && grossSalary <= 800000){
        paye = 0.325 * grossSalary;
    }else{
        paye = 0.35 * grossSalary;
    }
    return paye
}
console.log('Paye:' + calculatedPaye)


function nhifDeductions(){
    let nhifded
    if(grossSalary <= 5999){
        nhifded = 150;
    }else if(grossSalary >= 6000 && grossSalary <= 7999){
        nhifded = 300;
    }else if(grossSalary >= 8000 && grossSalary <= 11999){
        nhifded = 400;
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        nhifded = 500;
    }else if(grossSalary >= 15000 && grossSalary <= 19999){
        nhifded = 600;
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        nhifded = 750;
    }else if(grossSalary >=25000 && grossSalary <= 29999){
        nhifded = 850;
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        nhifded = 900;
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        nhifded = 950;
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        nhifded = 1000;
    }else if(grossSalary >= 45000 && grossSalary <= 49999){
        nhifded = 1100;
    }else if(grossSalary >= 50000 && grossSalary <= 59999){
        nhifded = 1200;
    }else if(grossSalary >= 60000 && grossSalary <= 69999){
        nhifded = 1300;
    }else if(grossSalary >= 70000 && grossSalary <= 79999){
        nhifded = 1400;
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        nhifded = 1500;
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        nhifded = 1600;
    }else{
        nhifded = 1700;
    }
    return nhifded;
}
console.log('NHIF Deductions:' + nhifDeductions)

function nssfDeductions(){
    let nssfded = 0.06*grossSalary
    return nssfded
}

console.log(netSalary)



