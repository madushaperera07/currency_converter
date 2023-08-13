import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");



  const Record = (e) => {
    setValue(value.concat(e.target.value));
  };

  const Clear =()=>{
    setValue("")
  }

  const Delete = ()=>{
    setValue(value.slice(0, -1))
  }

  const Presentage =(e)=>{
    if (e.target.value === "%") {
        const presentage = parseFloat(value) / 100;
        setValue(presentage.toString());
      }
  }

  const Operation = (e) => {

    if(e.target.value==="+"){
        setValue(value+e.target.value)
    }else if(e.target.value==="-"){
        setValue(value + e.target.value)
    }else if(e.target.value==="*"){
        setValue(value + e.target.value)
    }else if(e.target.value==="/"){
        setValue(value + e.target.value)
    }else if(e.target.value==="."){
        setValue(value + e.target.value)
    }
  };

  const Total = (e)=>{
    if(e.target.value==="="){
        try{
            setValue(eval(value).toString())
        }catch(err){
            setValue("Error")
        }
    }  
  }

  return (
    <div class="calculator_container">
      <div class="calculator">
        <form>
          <div>
            <input class="input_cal" type="text" value={value}/>
          </div>
          <div>
            <input
              class="button_cla"
              type="button"
              value="AC"
              onClick={Clear}
            />
            <input
              class="button_cla"
              type="button"
              value="DE"
              onClick={Delete}
            />
            <input
              class="button_cla"
              type="button"
              value="%"
              onClick={Presentage}
            />
            <input
              class="button_cla"
              type="button"
              value="/"
              onClick={Operation}
            />
          </div>
          <div>
            <input
              class="button_cla"
              type="button"
              value="7"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="8"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="9"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="*"
              onClick={Operation}
            />
          </div>
          <div>
            <input
              class="button_cla"
              type="button"
              value="4"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="5"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="6"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="-"
              onClick={Operation}
            />
          </div>
          <div class="up_container">
            <div>
              <input
                class="button_cla"
                type="button"
                value="1"
                onClick={Record}
              />
              <input
                class="button_cla"
                type="button"
                value="2"
                onClick={Record}
              />
              <input
                class="button_cla"
                type="button"
                value="3"
                onClick={Record}
              />
            </div>

            <input
              class="button_cla_plus"
              type="button"
              value="+"
              onClick={Operation}
            />
          </div>
          <div class="bottom_container">
            <input
              class="button_cla"
              type="button"
              value="0"
              onClick={Record}
            />
            <input
              class="button_cla"
              type="button"
              value="."
              onClick={Operation}
            />
            <input
              class="button_cla"
              type="button"
              value="="
              onClick={Total}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
