import react from 'React';
const RadioInput = props => {
    return (
 <div>
     <label>{props.name}</label>
     <input name="pe_shift" value="Single Shift" id="shift1" class="with-gap" type="radio"></input>
 </div>
    )
}