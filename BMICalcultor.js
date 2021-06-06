

const BMI_Calculator=(weight_in_kg,height_in_metersquare)=>{
     let BMI_Index=weight_in_kg/(height_in_metersquare*height_in_metersquare);
     
    return Math.round(BMI_Index);
}

