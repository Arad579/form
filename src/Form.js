import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    code:"",
    number:"",
    afghan:"",
    nigga:"",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({name:'',lastName:'',code:'',number:'',afghan:false,nigga:false,})
    
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label>نام</label>
        <input type="text" name="name" value={formData.name} onChange={handelChange} />
      </div>
      <div>
        <label>نام خانوادگی</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handelChange}/>
      </div>
      <div>
      <label>کد ملی</label>
        <input type="text" name="code" value={formData.code} onChange={handelChange}/>
      </div>
      <div>
      <label>شماره حساب</label>
        <input type="text" name="number" value={formData.number} onChange={handelChange}/>
      </div>
      <div>
        <label>افغانی</label>
        <div>
      <label>نه</label>
        <input type="radio" name="afghan"   onClick={() => setFormData({
          ...formData,
          afghan:true
        })}/>
        <label>اره</label>
        <input type="radio" name="afghan" checked onClick={() => setFormData({
          ...formData,
          afghan:false
        })}/>
        </div>
      </div>
      <div>
        <label>کاکا سیاه</label>
        <div>
      <label>نه</label>
        <input type="radio" name="nigga"  onClick={() => setFormData({
          ...formData,
          afghan:false
        })}/>
        <label> اره</label>
        <input type="radio" name="nigga" checked onClick={() => setFormData({
          ...formData,
          afghan:true
        })}/>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;