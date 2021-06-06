const BMI_Calculator =(weight_in_kg,height_in_metersquare)=>{
    let BMI_Index=weight_in_kg/(height_in_metersquare*height_in_metersquare);
    
   let BMI_Index_Rounded= Math.round(BMI_Index);
   if (BMI_Index_Rounded<18.5) {
    return "your BMI is"+" "+BMI_Index_Rounded+","+" "+"so you are underweight."
       }
    else if (BMI_Index_Rounded>=18.5 && BMI_Index_Rounded <=24.9) {
        return "your BMI is"+" "+BMI_Index_Rounded+","+" "+"so you have a normal weight."
    }
    else{
        return "your BMI is"+" "+BMI_Index_Rounded+","+" "+"so you are overweight."
    }
}