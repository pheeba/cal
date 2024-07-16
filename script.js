let today = new Date();
let day = today.getDay();
let date =  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let dateTime = date;

 
document.getElementById("displayDateTime").innerHTML = dateTime ;



let submit = document.getElementById("submit");
let output = document.getElementById("output");
let noOfDays=0;
let numday = 0;


submit.addEventListener("click", () => {
  let date2 = new Date(document.getElementById("date-2").value);
  let date3 = new Date(document.getElementById("date-3").value);
  let date10 = new Date(dateTime);
  let output2 = document.getElementById("output2");

  let date1 = new Date(document.getElementById("date-1").value);
  let date4 = new Date("2021-01-31");
  let date5 = new Date("2021-09-16");
  let date6 = new Date("2022-01-31");
  let date7 = new Date("2022-03-20");
  let date8 = new Date("2022-04-21");
  let date9 = new Date("2023-01-15");
  let date11= new Date("2023-02-14");
  let date12= new Date("2023-05-21");
  let p = Number(document.getElementById("amount").value);
  if (date2.getTime() && date10.getTime()) {
    let timeDifference = date10.getTime() - date2.getTime();
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
    let daydiff = date3.getTime() - date2.getTime();
    let difday = Math.abs(daydiff / (1000 * 3600 * 24));
    output.innerHTML = `TOTAL NUMBER OF DAYS TODAY =  ${dayDifference.toFixed(0)}  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; INTEREST PAYING DAYS = <span>${difday.toFixed(0)}</span>  `;
    noOfDays = dayDifference;
    numday = difday;
  }
    
  else {
    output.innerHTML = "Please select a valid date";
  }




  
  
  
//scheme S
if(date1.getTime() <= date4.getTime()){
  if(noOfDays <= 92){
    let s1 = (p * 0.18 * numday / 365) ;
    let s_1 = (s1 + p)
    output2.innerHTML =`Scheme = <span>S</span> &emsp;&emsp;  Interest = <span>${s1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${s_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 92 && noOfDays <= 365){
      let s2_1 = (p * 0.20 * numday / 365);
      let s2_2 = (p * 0.04 * numday / 365);
      let s2_3 = (p + s2_1 + s2_2)
      output2.innerHTML =`Scheme = <span>S</span> &emsp;&emsp;
        Interest 20% = <span>${s2_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 4% = <span>${s2_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${s2_3.toFixed(0)}</span> `;
    }
    else{
      let s3_1 = (p * 0.20 * numday / 365);
      let s3_2 = (p * 0.08 * numday / 365);
      let s3_3 = (p + s3_1 + s3_2)
      output2.innerHTML =`Scheme = <span>S</span> &emsp;&emsp;
        Interest 20% = <span>${s3_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${s3_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${s3_3.toFixed(0)}</span> `;
    } 
}
//scheme T
else if(date1.getTime() >= date4.getTime() && date1.getTime() <= date5.getTime()){
  if(noOfDays <= 31){
    let t1 = (p * 0.18 * numday / 365) ;
    let t_1 = (t1 + p)
    output2.innerHTML =`Scheme = <span>T</span> &emsp;&emsp;  Interest = <span>${t1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${t_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let t2 = (p * 0.20 * numday / 365) ;
      let t2_1 = (t2 + p)
      output2.innerHTML =`Scheme = <span>T</span> &emsp;&emsp;  Interest = <span>${t2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${t2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 62 && noOfDays <= 365){
        let t3_1 = (p * 0.20 * numday / 365);
        let t3_2 = (p * 0.04 * numday / 365);
        let t3_3 = (p + t3_1 + t3_2)
        output2.innerHTML =`Scheme = <span>T</span> &emsp;&emsp;
          Interest 20% = <span>${t3_1.toFixed(0)}</span> &emsp;&emsp; 
           Interest 4% = <span>${t3_2.toFixed(0)}</span> &emsp;&emsp;   
            Total = <span>${t3_3.toFixed(0)}</span> `;
    }
    else{
      let t4_1 = (p * 0.20 * numday/ 365);
      let t4_2 = (p * 0.08 * numday/ 365);
      let t4_3 = (p + t4_1 + t4_2)
      output2.innerHTML =`Scheme = <span>T</span> &emsp;&emsp;
        Interest 20% = <span>${t4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${t4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${t4_3.toFixed(0)}</span> `;
    } 
}
//scheme U

else if(date1.getTime() >= date5.getTime() && date1.getTime() <= date6.getTime()){
  if(noOfDays <= 31){
    let u1 = (p * 0.18 * numday / 365) ;
    let u_1 = (u1 + p)
    output2.innerHTML =`Scheme = <span>U</span> &emsp;&emsp;  Interest = <span>${u1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${u_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let u2 = (p * 0.20 * numday / 365) ;
      let u2_1 = (u2 + p)
      output2.innerHTML =`Scheme = <span>U</span> &emsp;&emsp;  Interest = <span>${u2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${u2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 62 && noOfDays <= 180){
        let u3_1 = (p * 0.20 * numday / 365);
        let u3_2 = (p * 0.04 * numday / 365);
        let u3_3 = (p + u3_1 + u3_2)
        output2.innerHTML =`Scheme = <span>U</span> &emsp;&emsp;
          Interest 20% = <span>${u3_1.toFixed(0)}</span> &emsp;&emsp; 
           Interest 4% = <span>${u3_2.toFixed(0)}</span> &emsp;&emsp;   
            Total = <span>${u3_3.toFixed(0)}</span> `;
    }
    else{
      let u4_1 = (p * 0.20 * numday / 365);
      let u4_2 = (p * 0.08 * numday / 365);
      let u4_3 = (p + u4_1 + u4_2)
      output2.innerHTML =`Scheme = <span>U</span> &emsp;&emsp;
        Interest 20% = <span>${u4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${u4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${u4_3.toFixed(0)}</span> `;
    } 
}

//scheme V

else if(date1.getTime() >= date6.getTime() && date1.getTime() <= date7.getTime()){
  if(noOfDays <= 31){
    let v1 = (p * 0.18 *numday / 365) ;
    let v_1 = (v1 + p)
    output2.innerHTML =`Scheme = <span>V</span> &emsp;&emsp;  Interest = <span>${v1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${v_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let v2 = (p * 0.20 * numday / 365) ;
      let v2_1 = (v2 + p)
      output2.innerHTML =`Scheme = <span>V</span> &emsp;&emsp;  Interest = <span>${v2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${v2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 62 && noOfDays <= 182){
        let v3_1 = (p * 0.20 * numday / 365);
        let v3_2 = (p * 0.04 * numday/ 365);
        let v3_3 = (p + v3_1 + v3_2)
        output2.innerHTML =`Scheme = <span>V</span> &emsp;&emsp;
          Interest 20% = <span>${v3_1.toFixed(0)}</span> &emsp;&emsp; 
           Interest 4% = <span>${v3_2.toFixed(0)}</span> &emsp;&emsp;   
            Total = <span>${v3_3.toFixed(0)}</span> `;
    }
    else if(noOfDays > 182 && noOfDays <= 275){
      let v4_1 = (p * 0.20 * numday / 365);
      let v4_2 = (p * 0.06 * numday/ 365);
      let v4_3 = (p + v4_1 + v4_2)
      output2.innerHTML =`Scheme = <span>V</span> &emsp;&emsp;
        Interest 20% = <span>${v4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 6% = <span>${v4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${v4_3.toFixed(0)}</span> `;
  }

    else{
      let v5_1 = (p * 0.20 * numday / 365);
      let v5_2 = (p * 0.08 * numday / 365);
      let v5_3 = (p + v5_1 + v5_2)
      output2.innerHTML =`Scheme = <span>V</span> &emsp;&emsp;
        Interest 20% = <span>${v5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${v5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${v5_3.toFixed(0)}</span> `;
    } 
}

//scheme W

else if(date1.getTime() >= date7.getTime() && date1.getTime() <= date8.getTime()){
  if(noOfDays <= 62){
    let w1 = (p * 0.18 * numday / 365) ;
    let w_1 = (w1 + p)
    output2.innerHTML =`Scheme = <span>W</span> &emsp;&emsp;  Interest = <span>${w1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${w_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 62 && noOfDays <= 93){
      let w2 = (p * 0.20 * numday / 365) ;
      let w2_1 = (w2 + p)
      output2.innerHTML =`Scheme = <span>W</span> &emsp;&emsp;  Interest = <span>${w2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${w2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 93 && noOfDays <= 182){
        let w3_1 = (p * 0.20 * numday / 365);
        let w3_2 = (p * 0.04 * numday/ 365);
        let w3_3 = (p + w3_1 + w3_2)
        output2.innerHTML =`Scheme = <span>W</span> &emsp;&emsp;
          Interest 20% = <span>${w3_1.toFixed(0)}</span> &emsp;&emsp; 
           Interest 4% = <span>${w3_2.toFixed(0)}</span> &emsp;&emsp;   
            Total = <span>${w3_3.toFixed(0)}</span> `;
    }
    else if(noOfDays > 182 && noOfDays <= 275){
      let w4_1 = (p * 0.20 * numday / 365);
      let w4_2 = (p * 0.06 * numday / 365);
      let w4_3 = (p + w4_1 + w4_2)
      output2.innerHTML =`Scheme = <span>W</span> &emsp;&emsp;
        Interest 20% = <span>${w4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 6% = <span>${w4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${w4_3.toFixed(0)}</span> `;
  }

    else{
      let w5_1 = (p * 0.20 * numday / 365);
      let w5_2 = (p * 0.08 * numday / 365);
      let w5_3 = (p + w5_1 + w5_2)
      output2.innerHTML =`Scheme = <span>W</span> &emsp;&emsp;
        Interest 20% = <span>${w5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${w5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${w5_3.toFixed(0)}</span> `;
    } 
}

//scheme F

else if(date1.getTime() >= date8.getTime() && date1.getTime() <= date9.getTime()){
  if(noOfDays <= 31){
    let f1 = (p * 0.15 * numday / 365) ;
    let f_1 = (f1 + p)
    output2.innerHTML =`Scheme = <span>F</span> &emsp;&emsp;  Interest = <span>${f1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${f_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let f2 = (p * 0.18 * numday / 365) ;
      let f2_1 = (f2 + p)
      output2.innerHTML =`Scheme = <span>F</span> &emsp;&emsp;  Interest = <span>${f2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${f2_1.toFixed(0)}</span>`;
      }
      else if(noOfDays > 62 && noOfDays <= 93){
        let f22 = (p * 0.20 * numday / 365) ;
        let f22_1 = (f22 + p)
        output2.innerHTML =`Scheme = <span>F</span> &emsp;&emsp;  Interest = <span>${f22.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${f22_1.toFixed(0)}</span>`;
        }
    else if(noOfDays > 93 && noOfDays <= 183){
        let f3_1 = (p * 0.20 * numday / 365);
        let f3_2 = (p * 0.04 * numday/ 365);
        let f3_3 = (p + f3_1 + f3_2)
        output2.innerHTML =`Scheme = <span>F</span> &emsp;&emsp;
          Interest 20% = <span>${f3_1.toFixed(0)}</span> &emsp;&emsp; 
           Interest 4% = <span>${f3_2.toFixed(0)}</span> &emsp;&emsp;   
            Total = <span>${f3_3.toFixed(0)}</span> `;
    }
    else{
      let f5_1 = (p * 0.20 * numday / 365);
      let f5_2 = (p * 0.08 * numday / 365);
      let f5_3 = (p + f5_1 + f5_2)
      output2.innerHTML =`Scheme = <span>F</span> &emsp;&emsp;
        Interest 20% = <span>${f5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${f5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${f5_3.toFixed(0)}</span> `;
    } 
}

//scheme G

else if(date1.getTime() >= date9.getTime() && date1.getTime() <= date11.getTime()){
  if(noOfDays <= 31){
    let g1 = (p * 0.15 *   numday / 365) ;
    let g_1 = (g1 + p)
    output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;  Interest = <span>${g1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${g_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let g2 = (p * 0.18 *  numday  / 365) ;
      let g2_1 = (g2 + p)
      output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;  Interest = <span>${g2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${g2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 62 && noOfDays <= 93){
        let g3_1 = (p * 0.20 * numday  / 365);
        let g3_2 = (p + g3_1 )
        output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;
          Interest 20% = <span>${g3_1.toFixed(0)}</span> &emsp;&emsp; 
            Total = <span>${g3_2.toFixed(0)}</span> `;
    }
    else if(noOfDays > 93 && noOfDays <= 275){
      let g4_1 = (p * 0.20 * numday / 365);
      let g4_2 = (p * 0.04 * numday  / 365);
      let g4_3 = (p + g4_1 + g4_2)
      output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;
        Interest 20% = <span>${g4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 4% = <span>${g4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${g4_3.toFixed(0)}</span> `;
  }
  else if(noOfDays > 275 && noOfDays <= 365){
    let g4_1 = (p * 0.20 *  numday / 365);
    let g4_2 = (p * 0.06 * numday / 365);
    let g4_3 = (p + g4_1 + g4_2)
    output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;
      Interest 20% = <span>${g4_1.toFixed(0)}</span> &emsp;&emsp; 
       Interest 6% = <span>${g4_2.toFixed(0)}</span> &emsp;&emsp;   
        Total = <span>${g4_3.toFixed(0)}</span> `;
}


    else{
      let g5_1 = (p * 0.20 *  numday  / 365);
      let g5_2 = (p * 0.08 *  numday / 365);
      let g5_3 = (p + g5_1 + g5_2)
      output2.innerHTML =`Scheme = <span>G</span> &emsp;&emsp;
        Interest 20% = <span>${g5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${g5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${g5_3.toFixed(0)}</span> `;
    } 
}
//scheme H

else if(date1.getTime() >= date11.getTime() && date1.getTime() <= date12.getTime()){
  if(noOfDays <= 31){
    let h1 = (p * 0.16 *   numday / 365) ;
    let h_1 = (h1 + p)
    output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;  Interest = <span>${h1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${h_1.toFixed(0)}</span>`;
    }
    else if(noOfDays > 31 && noOfDays <= 62){
      let h2 = (p * 0.18 *  numday  / 365) ;
      let h2_1 = (h2 + p)
      output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;  Interest = <span>${h2.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${h2_1.toFixed(0)}</span>`;
      }
    else if(noOfDays > 62 && noOfDays <= 93){
        let h3_1 = (p * 0.20 * numday  / 365);
        let h3_2 = (p + h3_1 )
        output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;
          Interest 20% = <span>${h3_1.toFixed(0)}</span> &emsp;&emsp; 
            Total = <span>${h3_2.toFixed(0)}</span> `;
    }
    else if(noOfDays > 93 && noOfDays <= 275){
      let h4_1 = (p * 0.20 * numday / 365);
      let h4_2 = (p * 0.04 * numday  / 365);
      let h4_3 = (p + h4_1 + h4_2)
      output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;
        Interest 20% = <span>${h4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 4% = <span>${h4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${h4_3.toFixed(0)}</span> `;
  }
  else if(noOfDays > 275 && noOfDays <= 365){
    let h4_1 = (p * 0.20 *  numday / 365);
    let h4_2 = (p * 0.06 * numday / 365);
    let h4_3 = (p + h4_1 + h4_2)
    output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;
      Interest 20% = <span>${h4_1.toFixed(0)}</span> &emsp;&emsp; 
       Interest 6% = <span>${h4_2.toFixed(0)}</span> &emsp;&emsp;   
        Total = <span>${h4_3.toFixed(0)}</span> `;
}


    else{
      let h5_1 = (p * 0.20 *  numday  / 365);
      let h5_2 = (p * 0.08 *  numday / 365);
      let h5_3 = (p + h5_1 + h5_2)
      output2.innerHTML =`Scheme = <span>H</span> &emsp;&emsp;
        Interest 20% = <span>${h5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${h5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${h5_3.toFixed(0)}</span> `;
    }
  }
    //scheme I

else{
  if(noOfDays <= 62){
    let I1 = (p * 0.18 *   numday / 365) ;
    let I_1 = (I1 + p)
    output2.innerHTML =`Scheme = <span>I</span> &emsp;&emsp;  Interest = <span>${I1.toFixed(0)}</span> &emsp;&emsp;  Total = <span>${I_1.toFixed(0)}</span>`;
    }
    
    else if(noOfDays > 62 && noOfDays <= 93){
        let I3_1 = (p * 0.20 * numday  / 365);
        let I3_2 = (p + I3_1 )
        output2.innerHTML =`Scheme = <span>I</span> &emsp;&emsp;
          Interest 20% = <span>${I3_1.toFixed(0)}</span> &emsp;&emsp; 
            Total = <span>${I3_2.toFixed(0)}</span> `;
    }
    else if(noOfDays > 93 && noOfDays <= 275){
      let I4_1 = (p * 0.20 * numday / 365);
      let I4_2 = (p * 0.04 * numday  / 365);
      let I4_3 = (p + I4_1 + I4_2)
      output2.innerHTML =`Scheme = <span>I</span> &emsp;&emsp;
        Interest 20% = <span>${I4_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 4% = <span>${I4_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${I4_3.toFixed(0)}</span> `;
  }
  else if(noOfDays > 275 && noOfDays <= 365){
    let I4_1 = (p * 0.20 *  numday / 365);
    let I4_2 = (p * 0.06 * numday / 365);
    let I4_3 = (p + I4_1 + I4_2)
    output2.innerHTML =`Scheme = <span>I</span> &emsp;&emsp;
      Interest 20% = <span>${I4_1.toFixed(0)}</span> &emsp;&emsp; 
       Interest 6% = <span>${I4_2.toFixed(0)}</span> &emsp;&emsp;   
        Total = <span>${I4_3.toFixed(0)}</span> `;
}


    else{
      let I5_1 = (p * 0.20 *  numday  / 365);
      let I5_2 = (p * 0.08 *  numday / 365);
      let I5_3 = (p + I5_1 + I5_2)
      output2.innerHTML =`Scheme = <span>I</span> &emsp;&emsp;
        Interest 20% = <span>${I5_1.toFixed(0)}</span> &emsp;&emsp; 
         Interest 8% = <span>${I5_2.toFixed(0)}</span> &emsp;&emsp;   
          Total = <span>${I5_3.toFixed(0)}</span> `;
    } 
}

});


